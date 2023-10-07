import {
  REST,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  Routes,
} from "discord.js";
import { commands } from "./commands/commands";
import { tokens } from "./config.json";
const json = [] as RESTPostAPIChatInputApplicationCommandsJSONBody[];
for (let command of commands.values()) {
  json.push(command.data.toJSON());
}
const rest = new REST({ version: "10" }).setToken(tokens.token);
(async () => {
  try {
    console.log(`Started deploying ${json.length} commands`);
    const data = await rest.put(Routes.applicationCommands(tokens.clientID), {
      body: json,
    });
    console.log(`Successfully deployed ${json.length} commands`);
  } catch (e) {
    console.error(e);
  }
})();
