import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { enigmaEmbed, checkAnswer } from "../enigmaAnswers";
import { calyptraEnigma } from "../enigmaSources/calyptraEnigma";
export const calyptraCommand = {
  data: new SlashCommandBuilder()
    .setName("calyptra")
    .addStringOption((option) =>
      option
        .setName("answer")
        .setDescription("What you think is the answer.")
        .setRequired(true)
    )
    .setDescription("Check a Calyptra Enigma answer."),
  async execute(interaction: CommandInteraction) {
    let answer = interaction.options
      .get("answer")
      ?.value?.toString()
      .toLocaleLowerCase();
    if (answer == undefined) {
      console.error("no value provided for answer somehow");
      return;
    }

    let response = checkAnswer(calyptraEnigma, answer);
    if (response != undefined)
      interaction.reply({
        embeds: enigmaEmbed(response),
        ephemeral: true,
      });
    else
      interaction.reply({
        content: "That's not an answer. Keep on looking...",
        ephemeral: true,
      });
  },
};
