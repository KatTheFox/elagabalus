import { EmbedBuilder } from "@discordjs/builders";

export function enigmaEmbed(degree: EnigmaDegree): EmbedBuilder[] {
  return [
    new EmbedBuilder().setTitle(degree.title).setDescription(degree.text),
    new EmbedBuilder()
      .setImage(degree.image1)
      .setURL("https://weatherfactory.biz/enigma"),
    new EmbedBuilder().setImage(degree.image2),
  ];
}
export function checkAnswer(enigma: Enigma, answer: string) {
  let match = enigma.filter((val) => {
    return val.answer == answer;
  });
  if (match.length == 0) {
    return undefined;
  } else {
    return match[0];
  }
}
