import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { enigmaEmbed, checkAnswer } from "../enigmaAnswers";
import { classicEnigma } from "../enigmaSources/classicenigma";
import { solveDegree } from "../solveDegree";
import { tokens } from "../config.json";
export const enigmaCommand = {
  data: new SlashCommandBuilder()
    .setName("enigma")
    .addStringOption((option) =>
      option
        .setName("answer")
        .setDescription("What you think is the answer.")
        .setRequired(true)
    )
    .setDescription("Check an Enigma of Secret Histories answer."),
  async execute(interaction: CommandInteraction) {
    let answer = interaction.options
      .get("answer")
      ?.value?.toString()
      .toLocaleLowerCase();
    if (answer == undefined) {
      console.error("no value provided for answer somehow");
      return;
    }

    let response = checkAnswer(classicEnigma, answer);
    if (response != undefined) {
      solveDegree(
        response,
        "Enigma of Secret Histories",
        interaction,
        tokens.channels.classicAnnounce
      );
      interaction.reply({
        embeds: enigmaEmbed(response),
        ephemeral: true,
      });
    } else
      interaction.reply({
        content: "That's not an answer. Keep on looking...",
        ephemeral: true,
      });
  },
};
