import { EmbedBuilder } from "@discordjs/builders";

type EnigmaAnswer = {
  image: { full: string; overlay: string };
  text: string;
  title: string;
};
const EnigmaImages = {
  FE1: {
    full: "https://imgur.com/siXDWFE.jpg",
    overlay: "https://imgur.com/5t22Van.jpg",
  },
  FE2: {
    full: "https://imgur.com/QyqNql2.jpg",
    overlay: "https://imgur.com/GIPOwgz.jpg",
  },
  FE3: {
    full: "https://imgur.com/HCG0GLz.jpg",
    overlay: "https://imgur.com/rx8dg4I.jpg",
  },
  FE4: {
    full: "https://imgur.com/Li1Ho4G.jpg",
    overlay: "https://imgur.com/iGkkADU.jpg",
  },
  FE5: {
    full: "https://imgur.com/xF04tvP.jpg",
    overlay: "https://imgur.com/L98xXGJ.jpg",
  },
  FE6: {
    full: "https://imgur.com/dEA3p6A.jpg",
    overlay: "https://imgur.com/KlCQgCk.jpg",
  },
  FE7: {
    full: "https://imgur.com/5BRwuN6.jpg",
    overlay: "https://imgur.com/fpIe83e.jpg",
  },
  FE8: {
    full: "https://imgur.com/n2wrIJ0.jpg",
    overlay: "https://imgur.com/n7tybaT.jpg",
  },
  FE9: {
    full: "https://imgur.com/EehLPzD.jpg",
    overlay: "https://imgur.com/knJTS6r.jpg",
  },
  SC1: {
    full: "https://imgur.com/cQJAxFE.jpg",
    overlay: "https://imgur.com/e1nk4Kc.jpg",
  },
  SC2: {
    full: "https://imgur.com/WZRIzDj.jpg",
    overlay: "https://imgur.com/QwpDCh3.jpg",
  },
  SC3: {
    full: "https://imgur.com/BhjaCzA.jpg",
    overlay: "https://imgur.com/QqYgmMG.jpg",
  },
  SC4: {
    full: "https://imgur.com/5lh8Rtq.jpg",
    overlay: "https://imgur.com/aiyr0jA.jpg",
  },
  SC5: {
    full: "https://imgur.com/mbwiUNK.jpg",
    overlay: "https://imgur.com/eothffq.jpg",
  },
  SC6: {
    full: "https://imgur.com/fmtV996.jpg",
    overlay: "https://imgur.com/vV0CQeL.jpg",
  },
  SC7: {
    full: "https://imgur.com/0rpA3th.jpg",
    overlay: "https://imgur.com/IeQnymm.jpg",
  },
  SC8: {
    full: "https://imgur.com/R8drZ80.jpg",
    overlay: "https://imgur.com/jJCZdFB.jpg",
  },
  SC9: {
    full: "https://imgur.com/DjuZN63.jpg",
    overlay: "https://imgur.com/Y0ZKVsT.jpg",
  },
  FO1: {
    full: "https://imgur.com/DbXjOEq.jpg",
    overlay: "https://imgur.com/Travzja.jpg",
  },
  FO2: {
    full: "https://imgur.com/rAtu4Ab.jpg",
    overlay: "https://imgur.com/jXHEkqo.jpg",
  },
  FO3: {
    full: "https://imgur.com/7c7TvHd.jpg",
    overlay: "https://imgur.com/CRoHFAe.jpg",
  },
  FO4: {
    full: "https://imgur.com/g5Wan53.jpg",
    overlay: "https://imgur.com/8WA9pIK.jpg",
  },
  FO5: {
    full: "https://imgur.com/wekbgKb.jpg",
    overlay: "https://imgur.com/DJkeja9.jpg",
  },
  FO6: {
    full: "https://imgur.com/d59VKNq.jpg",
    overlay: "https://imgur.com/PuLG6jc.jpg",
  },
  FO7: {
    full: "https://imgur.com/hGUPv2T.jpg",
    overlay: "https://imgur.com/vvNThgz.jpg",
  },
  FO8: {
    full: "https://imgur.com/5bB4RbI.jpg",
    overlay: "https://imgur.com/Ss9jKGL.jpg",
  },
  FO9: {
    full: "https://imgur.com/31QpPVE.jpg",
    overlay: "https://imgur.com/mgJLs2O.jpg",
  },
  SK1: {
    full: "https://imgur.com/m1ELMja.jpg",
    overlay: "https://imgur.com/G012Owh.jpg",
  },
  SK2: {
    full: "https://imgur.com/Ba12kKv.jpg",
    overlay: "https://imgur.com/AatKj7A.jpg",
  },
  SK3: {
    full: "https://imgur.com/D3AoVqb.jpg",
    overlay: "https://imgur.com/oSkWgRi.jpg",
  },
  SK4: {
    full: "https://imgur.com/jnQ4Jzr.jpg",
    overlay: "https://imgur.com/MJzGdok.jpg",
  },
  SK5: {
    full: "https://imgur.com/4eKd6w3.jpg",
    overlay: "https://imgur.com/aKL1rQn.jpg",
  },
  SK6: {
    full: "https://imgur.com/xHkJGIW.jpg",
    overlay: "https://imgur.com/00qA7W7.jpg",
  },
  SK7: {
    full: "https://imgur.com/7FZxR0m.jpg",
    overlay: "https://imgur.com/oAbP4GI.jpg",
  },
  SK8: {
    full: "https://imgur.com/rrlVky8.jpg",
    overlay: "https://imgur.com/IxwJWZb.jpg",
  },
  SK9: {
    full: "https://imgur.com/SgXKZNO.jpg",
    overlay: "https://imgur.com/wSLhU4W.jpg",
  },
  HE1: {
    full: "https://imgur.com/Cn0xgs6.jpg",
    overlay: "https://imgur.com/xYuz9Qe.jpg",
  },
  HE2: {
    full: "https://imgur.com/1qesLat.jpg",
    overlay: "https://imgur.com/0oBnUhS.jpg",
  },
  HE3: {
    full: "https://imgur.com/xMe9RCy.jpg",
    overlay: "https://imgur.com/xQes0dk.jpg",
  },
  HE4: {
    full: "https://imgur.com/9q3T6L9.jpg",
    overlay: "https://imgur.com/jPVbhJe.jpg",
  },
  HE5: {
    full: "https://imgur.com/FZICJaZ.jpg",
    overlay: "https://imgur.com/I5iLfMT.jpg",
  },
  HE6: {
    full: "https://imgur.com/j5qHsii.jpg",
    overlay: "https://imgur.com/8RDh8uy.jpg",
  },
  HE7: {
    full: "https://imgur.com/3YcPV0u.jpg",
    overlay: "https://imgur.com/NytXJ9S.jpg",
  },
  HE8: {
    full: "https://imgur.com/NjgJDs7.jpg",
    overlay: "https://imgur.com/bHeQ3Ho.jpg",
  },
  HE9: {
    full: "https://imgur.com/cJdpVbb.jpg",
    overlay: "https://imgur.com/3rL0PZr.jpg",
  },
  KN1: {
    full: "https://imgur.com/Pqp51Ga.jpg",
    overlay: "https://imgur.com/vjOWlw2.jpg",
  },
  KN2: {
    full: "https://imgur.com/gXUXNG6.jpg",
    overlay: "https://imgur.com/yR59uHT.jpg",
  },
  KN3: {
    full: "https://imgur.com/Kd4MfKg.jpg",
    overlay: "https://imgur.com/Faq9bSz.jpg",
  },
  KN4: {
    full: "https://imgur.com/KOx49si.jpg",
    overlay: "https://imgur.com/SPEPml5.jpg",
  },
  KN5: {
    full: "https://imgur.com/O2vswF7.jpg",
    overlay: "https://imgur.com/jvg3wCI.jpg",
  },
  KN6: {
    full: "https://imgur.com/Aix5M7F.jpg",
    overlay: "https://imgur.com/LI0h0wC.jpg",
  },
  KN7: {
    full: "https://imgur.com/U0hYLws.jpg",
    overlay: "https://imgur.com/zmMomhR.jpg",
  },
  KN8: {
    full: "https://imgur.com/RhZP3QO.jpg",
    overlay: "https://imgur.com/o2RJBTq.jpg",
  },
  KN9: {
    full: "https://imgur.com/DstR9WF.jpg",
    overlay: "https://imgur.com/5vY1rNf.jpg",
  },
  MO1: {
    full: "https://imgur.com/Frmejt4.jpg",
    overlay: "https://imgur.com/6lu1Vjh.jpg",
  },
  MO2: {
    full: "https://imgur.com/XlbvZh4.jpg",
    overlay: "https://imgur.com/pOafjm6.jpg",
  },
  MO3: {
    full: "https://imgur.com/vGWD23I.jpg",
    overlay: "https://imgur.com/yD4Hvm9.jpg",
  },
  MO4: {
    full: "https://imgur.com/AeUBs7w.jpg",
    overlay: "https://imgur.com/oI5Jog3.jpg",
  },
  MO5: {
    full: "https://imgur.com/uAYEbSM.jpg",
    overlay: "https://imgur.com/CPxEvsf.jpg",
  },
  MO6: {
    full: "https://imgur.com/VXJRK5n.jpg",
    overlay: "https://imgur.com/4IoTRSj.jpg",
  },
  MO7: {
    full: "https://imgur.com/RRBjzcH.jpg",
    overlay: "https://imgur.com/UoXRHJs.jpg",
  },
  MO8: {
    full: "https://imgur.com/Qg57fi2.jpg",
    overlay: "https://imgur.com/Sxp5gIn.jpg",
  },
  MO9: {
    full: "https://imgur.com/sTzsdxn.jpg",
    overlay: "https://imgur.com/wQ9m4GI.jpg",
  },
  BL1: {
    full: "https://imgur.com/YogmpWV.jpg",
    overlay: "https://imgur.com/3rWUlet.jpg",
  },
  BL2: {
    full: "https://imgur.com/MPxhlCu.jpg",
    overlay: "https://imgur.com/dvcw83m.jpg",
  },
  BL3: {
    full: "https://imgur.com/MyjqRjq.jpg",
    overlay: "https://imgur.com/M1MucCF.jpg",
  },
  BL4: {
    full: "https://imgur.com/dUzu8w8.jpg",
    overlay: "https://imgur.com/amMwSsi.jpg",
  },
  BL5: {
    full: "https://imgur.com/PqQXJs1.jpg",
    overlay: "https://imgur.com/LsEBrl1.jpg",
  },
  BL6: {
    full: "https://imgur.com/KdseOOc.jpg",
    overlay: "https://imgur.com/OR0CBHU.jpg",
  },
  BL7: {
    full: "https://imgur.com/g7rei5f.jpg",
    overlay: "https://imgur.com/9zBL0vl.jpg",
  },
  BL8: {
    full: "https://imgur.com/WOBJIhW.jpg",
    overlay: "https://imgur.com/Roz1J5i.jpg",
  },
  BL9: {
    full: "https://imgur.com/IIDsEVX.jpg",
    overlay: "https://imgur.com/1AdQ1DL.jpg",
  },
  RO1: {
    full: "https://imgur.com/dOS9adE.jpg",
    overlay: "https://imgur.com/hRLnyFJ.jpg",
  },
  RO2: {
    full: "https://imgur.com/JnEigLL.jpg",
    overlay: "https://imgur.com/qMEkB7R.jpg",
  },
  RO3: {
    full: "https://imgur.com/gOcmhEH.jpg",
    overlay: "https://imgur.com/qvHNW8p.jpg",
  },
  RO4: {
    full: "https://imgur.com/wd5ZNC2.jpg",
    overlay: "https://imgur.com/eYJZuED.jpg",
  },
  RO5: {
    full: "https://imgur.com/pfbAPIs.jpg",
    overlay: "https://imgur.com/V5EdKAi.jpg",
  },
  RO6: {
    full: "https://imgur.com/lo3ciTM.jpg",
    overlay: "https://imgur.com/FNyDAhT.jpg",
  },
  RO7: {
    full: "https://imgur.com/9oIKiEb.jpg",
    overlay: "https://imgur.com/VjFTNwG.jpg",
  },
  RO8: {
    full: "https://imgur.com/gxEptoJ.jpg",
    overlay: "https://imgur.com/JTED51s.jpg",
  },
  RO9: {
    full: "https://imgur.com/hrSo92n.jpg",
    overlay: "https://imgur.com/QOegMaf.jpg",
  },
};
enum EnigmaText {
  FE1 = "Local records suggest that Hush House was a double monastery – a seventh-century foundation of both monks and nuns. There are two major traditions of its origin. This is the first.    \
    “St Columba, with twelve companions, brought Christianity from Ireland to Scotland, and founded a monastery on the blessed isle of Iona, where his bones remained until the Northmen came. But in Brancrug Village they have it that St Columba brought a thirteenth companion, a ‘hybrid beauty’ named Rowena who was perhaps his tutor, perhaps his seducer, or perhaps his daughter. At his death, the monks sought to stone her for her impurities. She bore Columba’s bones away so the monks would not have them (substituting, from tact or mischief, the bones of a horse). She brought them to Brancrug Isle, which even then was a hidden place, to make a double foundation of nuns and monks, and become its first abbess: but she would admit none to the order who was a virgin, nor innocent of any crime. Since then, Brancrug has been a refuge for all the world might consider impure.”\
    \n\
    [After this place, a suitable wisdom.]\n\nYou've achieved the first degree, 'library', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  FE2 = "Aesthetics, necromancy, silence; the techniques used also by Reckoners.\
    \
    [In each of us there's a healing sadness.]\n\nYou've achieved the second degree, 'wisdom', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  FE3 = "The change and the longing.\n\n[A tung of yung phanes.]\n\nYou've achieved the third degree, 'element', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  FE4 = "A language of surpassing beauty and allusiveness, revealed through the ecstatic apprehensions of the Orphics, the Eleusinians, and the Sibyls of the Rhine. Ericapaean, these mystics claimed, allows the elaboration of hues, sensations and states of mind too subtle for grosser tongues.\n\n[A visitor to Hush House who catalogued a collection that in many histories was first-numbered among the lost. Alternatively, his chrismed unson.]\n\nYou've achieved the fourth degree, 'language', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  FE5 = "Out into the night! We escape unseen, but the next day there are reports of a fire at Strathcoyne’s. Did someone knock a live coal on to the hearth-rug? Or did Strathcoyne destroy the place himself, as part of some larger scheme?…\n\n[Crow and mirror, sand-sown, oak-denying]\n\nYou've achieved the fifth degree, 'visitor', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  FE5b = "For four years he served as Strathcoyne’s pupil and protégé, but Illopoly’s relationship with this austere and secretive man was always complicated. He wrote later: ‘I still think his intentions are good. Certainly he agrees. But I never understood the final goal of his investigations. He was never prepared to enlighten me. And good intentions or not, I can no longer bear this dream of eyes. We have agreed to part, almost amicably.”\n\n[Crow and mirror, sand-sown, oak-denying]\n\nYou've achieved the fifth degree, 'visitor', of the FE (b) direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  FE6 = "Along the dunes by the skeleton abbey, blue-silver, black-steel.\n\n[Dr Hengerst Department of English and Philology University College of Swansea Singleton Abbey Mumbles Road Sketty Swansea]\n\nYou've achieved the sixth degree, 'flower', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  FE7 = "ST RHONWEN TRUST: a charitable trust established in 1922 for the advancement of education, chiefly through scholarships for promising young talents…\n\n[Coseley never forgave Husher, but at last he respected him.]\n\nYou've achieved the seventh degree, 'protectress', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  FE8 = "Techniques for perception and analysis which permit invidious and apocalyptic conclusions. Probably the most assiduously suppressed book in history. The entire run was destroyed – even the presses were melted and dispersed – but the manuscript edition has survived.\n\n[[Not until there are enough here. But look around.]]\n\nYou've achieved the eighth degree, 'wise', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  SC1 = "The Labyrinth of Lions teaches horomachistry and Illumination. In the First History, it was established as a labyrinth-fortress in the lands of the Shadowless King-of-Kings. When days were yet undivided, it lay under the hand of the Sun. Now the Lionsmith lends his protection. For twenty-two centuries, mystics, strategists, and sorrowful warriors have all sought to penetrate its coils in an attempt to advance their understanding.\n\n[After this place, a suitable wisdom]\n\n\n\nYou've achieved the first degree, 'library', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
  SC2 = "Mystical exercises to purify and illuminate the self and its surroundings. Relic Rites of the Unconquered Sun, mirrors and light sources, the Glory.\n\n[We have all benifited from the Glory's gifts.]\n\nYou've achieved the second degree, 'wisdom', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like.",
}
export const EnigmaAnswers: Map<string, EnigmaAnswer> = new Map<
  string,
  EnigmaAnswer
>([
  [
    "hush-house",
    { image: EnigmaImages.FE1, text: EnigmaText.FE1, title: "Hush House" },
  ],
  [
    "hush-house-hushery",
    { title: "Hushery", image: EnigmaImages.FE2, text: EnigmaText.FE2 },
  ],
  [
    "hushery-trist",
    { title: "Trist", image: EnigmaImages.FE3, text: EnigmaText.FE3 },
  ],
  [
    "trist-ericapaean",
    { title: "Ericapaean", image: EnigmaImages.FE4, text: EnigmaText.FE4 },
  ],
  [
    "ericapaean-christopher-strathcoyne",
    {
      title: "Christopher Strathcoyne",
      image: EnigmaImages.FE5,
      text: EnigmaText.FE5b,
    },
  ],
  [
    "ericapaean-fraser-strathcoyne",
    {
      title: "Fraser Strathcoyne",
      image: EnigmaImages.FE5,
      text: EnigmaText.FE5,
    },
  ],
  [
    "fraser-strathcoyne-sea-holly",
    { title: "Sea Holly", image: EnigmaImages.FE6, text: EnigmaText.FE6 },
  ],
  [
    "christopher-strathcoyne-sea-holly",
    { title: "Sea Holly", image: EnigmaImages.FE6, text: EnigmaText.FE6 },
  ],
]);
export function enigmaEmbed(answer: EnigmaAnswer): EmbedBuilder[] {
  return [
    new EmbedBuilder().setTitle(answer.title).setDescription(answer.text),
    new EmbedBuilder()
      .setImage(answer.image.full)
      .setURL("https://weatherfactory.biz/enigma"),
    new EmbedBuilder()
      .setImage(answer.image.overlay)
      .setURL("https://weatherfactory.biz/enigma"),
  ];
}
