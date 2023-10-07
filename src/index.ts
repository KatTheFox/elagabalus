import { Client, Events, GatewayIntentBits } from "discord.js";
import { commands } from "./commands/commands";
import { tokens } from "./config.json";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag}`);
});
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = commands.get(interaction.commandName);
  if (command == undefined) {
    console.error(`no such command ${interaction.commandName}`);
    return;
  }
  try {
    await command.execute(interaction);
  } catch (e) {
    console.error(e);
    await interaction.reply({
      content: "There was an error executing this command",
      ephemeral: true,
    });
  }
});
client.login(tokens.token);
