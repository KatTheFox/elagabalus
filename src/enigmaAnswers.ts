import { EmbedBuilder } from "@discordjs/builders";
import { writeJsonSync } from "fs-extra";

export function classicEnigmaEmbed(degree: EnigmaDegree): EmbedBuilder[] {
  return [
    new EmbedBuilder().setTitle(degree.title).setDescription(degree.text),
    new EmbedBuilder()
      .setImage(degree.image1)
      .setURL("https://weatherfactory.biz/enigma"),
    new EmbedBuilder()
      .setImage(degree.image2)
      .setURL("https://weatherfactory.biz/enigma"),
  ];
}
export function checkAnswer(enigma: Enigma, answer: string) {
  let match = enigma.filter((val) => {
    val.answer == answer;
  });
  if (match.length == 0) {
    return undefined;
  } else {
    return match[0];
  }
}
