import {
  BaseGuildTextChannel,
  CommandInteraction,
  GuildChannel,
  TextChannel,
  User,
} from "discord.js";
import { trySolveDegree } from "./sql";
import { tokens } from "./config.json";
export function solveDegree(
  degree: EnigmaDegree,
  title: string,
  interaction: CommandInteraction,
  channelID: string
): void {
  trySolveDegree(degree, interaction).then(
    (execute) => {
      if (!execute) return;
      let announcement = `<@${interaction.user.id}> has just solved the ${degree.id} degree of the ${title}!`;
      interaction.guild?.channels.fetch(channelID).then(
        (channel) => {
          if (channel == null) {
            console.error(`Channel ${channelID} is null`);
            return;
          }
          if (channel.isTextBased()) {
            channel.send(announcement);
          }
        },
        (err) => console.error(err)
      );
    },
    (err) => {
      console.error(err);
    }
  );
}
