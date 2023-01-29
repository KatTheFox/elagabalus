import { EmbedBuilder } from "@discordjs/builders";

enum EnigmaDegrees {
  FE1,
  FE2,
  FE3,
  FE4,
  FE5,
  FE6,
  FE7,
  FE8,
  FE9,
  SC1,
  SC2,
  SC3,
  SC4,
  SC5,
  SC6,
  SC7,
  SC8,
  SC9,
  HE1,
  HE2,
  HE3,
  HE4,
  HE5,
  HE6,
  HE7,
  HE8,
  HE9,
  KN1,
  KN2,
  KN3,
  KN4,
  KN5,
  KN6,
  KN7,
  KN8,
  KN9,
  MO1,
  MO2,
  MO3,
  MO4,
  MO5,
  MO6,
  MO7,
  MO8,
  MO9,
  BL1,
  BL2,
  BL3,
  BL4,
  BL5,
  BL6,
  BL7,
  BL8,
  BL9,
  FO1,
  FO2,
  FO3,
  FO4,
  FO5,
  FO6,
  FO7,
  FO8,
  FO9,
  RO1,
  RO2,
  RO3,
  RO4,
  RO5,
  RO6,
  RO7,
  RO8,
  RO9,
  SK1,
  SK2,
  SK3,
  SK4,
  SK5,
  SK6,
  SK7,
  SK8,
  SK9,
  HE8b,
  FE5b,
  FE6a,
}
export const EnigmaImages = new Map<
  EnigmaDegrees,
  { full: string; overlay: string }
>([
  [
    EnigmaDegrees.FE1,
    {
      full: "https://imgur.com/siXDWFE.jpg",
      overlay: "https://imgur.com/5t22Van.jpg",
    },
  ],
  [
    EnigmaDegrees.FE2,
    {
      full: "https://imgur.com/QyqNql2.jpg",
      overlay: "https://imgur.com/GIPOwgz.jpg",
    },
  ],
  [
    EnigmaDegrees.FE3,
    {
      full: "https://imgur.com/HCG0GLz.jpg",
      overlay: "https://imgur.com/rx8dg4I.jpg",
    },
  ],
  [
    EnigmaDegrees.FE4,
    {
      full: "https://imgur.com/Li1Ho4G.jpg",
      overlay: "https://imgur.com/iGkkADU.jpg",
    },
  ],
  [
    EnigmaDegrees.FE5,
    {
      full: "https://imgur.com/xF04tvP.jpg",
      overlay: "https://imgur.com/L98xXGJ.jpg",
    },
  ],
  [
    EnigmaDegrees.FE5b,
    {
      full: "https://imgur.com/xF04tvP.jpg",
      overlay: "https://imgur.com/L98xXGJ.jpg",
    },
  ],
  [
    EnigmaDegrees.FE6,
    {
      full: "https://imgur.com/dEA3p6A.jpg",
      overlay: "https://imgur.com/KlCQgCk.jpg",
    },
  ],
  [
    EnigmaDegrees.FE6a,
    {
      full: "https://imgur.com/dEA3p6A.jpg",
      overlay: "https://imgur.com/KlCQgCk.jpg",
    },
  ],
  [
    EnigmaDegrees.FE7,
    {
      full: "https://imgur.com/5BRwuN6.jpg",
      overlay: "https://imgur.com/fpIe83e.jpg",
    },
  ],
  [
    EnigmaDegrees.FE8,
    {
      full: "https://imgur.com/n2wrIJ0.jpg",
      overlay: "https://imgur.com/n7tybaT.jpg",
    },
  ],
  [
    EnigmaDegrees.FE9,
    {
      full: "https://imgur.com/EehLPzD.jpg",
      overlay: "https://imgur.com/knJTS6r.jpg",
    },
  ],
  [
    EnigmaDegrees.SC1,
    {
      full: "https://imgur.com/cQJAxFE.jpg",
      overlay: "https://imgur.com/e1nk4Kc.jpg",
    },
  ],
  [
    EnigmaDegrees.SC2,
    {
      full: "https://imgur.com/WZRIzDj.jpg",
      overlay: "https://imgur.com/QwpDCh3.jpg",
    },
  ],
  [
    EnigmaDegrees.SC3,
    {
      full: "https://imgur.com/BhjaCzA.jpg",
      overlay: "https://imgur.com/QqYgmMG.jpg",
    },
  ],
  [
    EnigmaDegrees.SC4,
    {
      full: "https://imgur.com/5lh8Rtq.jpg",
      overlay: "https://imgur.com/aiyr0jA.jpg",
    },
  ],
  [
    EnigmaDegrees.SC5,
    {
      full: "https://imgur.com/mbwiUNK.jpg",
      overlay: "https://imgur.com/eothffq.jpg",
    },
  ],
  [
    EnigmaDegrees.SC6,
    {
      full: "https://imgur.com/fmtV996.jpg",
      overlay: "https://imgur.com/vV0CQeL.jpg",
    },
  ],
  [
    EnigmaDegrees.SC7,
    {
      full: "https://imgur.com/0rpA3th.jpg",
      overlay: "https://imgur.com/IeQnymm.jpg",
    },
  ],
  [
    EnigmaDegrees.SC8,
    {
      full: "https://imgur.com/R8drZ80.jpg",
      overlay: "https://imgur.com/jJCZdFB.jpg",
    },
  ],
  [
    EnigmaDegrees.SC9,
    {
      full: "https://imgur.com/DjuZN63.jpg",
      overlay: "https://imgur.com/Y0ZKVsT.jpg",
    },
  ],
  [
    EnigmaDegrees.FO1,
    {
      full: "https://imgur.com/DbXjOEq.jpg",
      overlay: "https://imgur.com/Travzja.jpg",
    },
  ],
  [
    EnigmaDegrees.FO2,
    {
      full: "https://imgur.com/rAtu4Ab.jpg",
      overlay: "https://imgur.com/jXHEkqo.jpg",
    },
  ],
  [
    EnigmaDegrees.FO3,
    {
      full: "https://imgur.com/7c7TvHd.jpg",
      overlay: "https://imgur.com/CRoHFAe.jpg",
    },
  ],
  [
    EnigmaDegrees.FO4,
    {
      full: "https://imgur.com/g5Wan53.jpg",
      overlay: "https://imgur.com/8WA9pIK.jpg",
    },
  ],
  [
    EnigmaDegrees.FO5,
    {
      full: "https://imgur.com/wekbgKb.jpg",
      overlay: "https://imgur.com/DJkeja9.jpg",
    },
  ],
  [
    EnigmaDegrees.FO6,
    {
      full: "https://imgur.com/d59VKNq.jpg",
      overlay: "https://imgur.com/PuLG6jc.jpg",
    },
  ],
  [
    EnigmaDegrees.FO7,
    {
      full: "https://imgur.com/hGUPv2T.jpg",
      overlay: "https://imgur.com/vvNThgz.jpg",
    },
  ],
  [
    EnigmaDegrees.FO8,
    {
      full: "https://imgur.com/5bB4RbI.jpg",
      overlay: "https://imgur.com/Ss9jKGL.jpg",
    },
  ],
  [
    EnigmaDegrees.FO9,
    {
      full: "https://imgur.com/31QpPVE.jpg",
      overlay: "https://imgur.com/mgJLs2O.jpg",
    },
  ],
  [
    EnigmaDegrees.SK1,
    {
      full: "https://imgur.com/m1ELMja.jpg",
      overlay: "https://imgur.com/G012Owh.jpg",
    },
  ],
  [
    EnigmaDegrees.SK2,
    {
      full: "https://imgur.com/Ba12kKv.jpg",
      overlay: "https://imgur.com/AatKj7A.jpg",
    },
  ],
  [
    EnigmaDegrees.SK3,
    {
      full: "https://imgur.com/D3AoVqb.jpg",
      overlay: "https://imgur.com/oSkWgRi.jpg",
    },
  ],
  [
    EnigmaDegrees.SK4,
    {
      full: "https://imgur.com/jnQ4Jzr.jpg",
      overlay: "https://imgur.com/MJzGdok.jpg",
    },
  ],
  [
    EnigmaDegrees.SK5,
    {
      full: "https://imgur.com/4eKd6w3.jpg",
      overlay: "https://imgur.com/aKL1rQn.jpg",
    },
  ],
  [
    EnigmaDegrees.SK6,
    {
      full: "https://imgur.com/xHkJGIW.jpg",
      overlay: "https://imgur.com/00qA7W7.jpg",
    },
  ],
  [
    EnigmaDegrees.SK7,
    {
      full: "https://imgur.com/7FZxR0m.jpg",
      overlay: "https://imgur.com/oAbP4GI.jpg",
    },
  ],
  [
    EnigmaDegrees.SK8,
    {
      full: "https://imgur.com/rrlVky8.jpg",
      overlay: "https://imgur.com/IxwJWZb.jpg",
    },
  ],
  [
    EnigmaDegrees.SK9,
    {
      full: "https://imgur.com/SgXKZNO.jpg",
      overlay: "https://imgur.com/wSLhU4W.jpg",
    },
  ],
  [
    EnigmaDegrees.HE1,
    {
      full: "https://imgur.com/Cn0xgs6.jpg",
      overlay: "https://imgur.com/xYuz9Qe.jpg",
    },
  ],
  [
    EnigmaDegrees.HE2,
    {
      full: "https://imgur.com/1qesLat.jpg",
      overlay: "https://imgur.com/0oBnUhS.jpg",
    },
  ],
  [
    EnigmaDegrees.HE3,
    {
      full: "https://imgur.com/xMe9RCy.jpg",
      overlay: "https://imgur.com/xQes0dk.jpg",
    },
  ],
  [
    EnigmaDegrees.HE4,
    {
      full: "https://imgur.com/9q3T6L9.jpg",
      overlay: "https://imgur.com/jPVbhJe.jpg",
    },
  ],
  [
    EnigmaDegrees.HE5,
    {
      full: "https://imgur.com/FZICJaZ.jpg",
      overlay: "https://imgur.com/I5iLfMT.jpg",
    },
  ],
  [
    EnigmaDegrees.HE6,
    {
      full: "https://imgur.com/j5qHsii.jpg",
      overlay: "https://imgur.com/8RDh8uy.jpg",
    },
  ],
  [
    EnigmaDegrees.HE7,
    {
      full: "https://imgur.com/3YcPV0u.jpg",
      overlay: "https://imgur.com/NytXJ9S.jpg",
    },
  ],
  [
    EnigmaDegrees.HE8,
    {
      full: "https://imgur.com/NjgJDs7.jpg",
      overlay: "https://imgur.com/bHeQ3Ho.jpg",
    },
  ],
  [
    EnigmaDegrees.HE8b,
    {
      full: "https://imgur.com/NjgJDs7.jpg",
      overlay: "https://imgur.com/bHeQ3Ho.jpg",
    },
  ],
  [
    EnigmaDegrees.HE9,
    {
      full: "https://imgur.com/cJdpVbb.jpg",
      overlay: "https://imgur.com/3rL0PZr.jpg",
    },
  ],
  [
    EnigmaDegrees.KN1,
    {
      full: "https://imgur.com/Pqp51Ga.jpg",
      overlay: "https://imgur.com/vjOWlw2.jpg",
    },
  ],
  [
    EnigmaDegrees.KN2,
    {
      full: "https://imgur.com/gXUXNG6.jpg",
      overlay: "https://imgur.com/yR59uHT.jpg",
    },
  ],
  [
    EnigmaDegrees.KN3,
    {
      full: "https://imgur.com/Kd4MfKg.jpg",
      overlay: "https://imgur.com/Faq9bSz.jpg",
    },
  ],
  [
    EnigmaDegrees.KN4,
    {
      full: "https://imgur.com/KOx49si.jpg",
      overlay: "https://imgur.com/SPEPml5.jpg",
    },
  ],
  [
    EnigmaDegrees.KN5,
    {
      full: "https://imgur.com/O2vswF7.jpg",
      overlay: "https://imgur.com/jvg3wCI.jpg",
    },
  ],
  [
    EnigmaDegrees.KN6,
    {
      full: "https://imgur.com/Aix5M7F.jpg",
      overlay: "https://imgur.com/LI0h0wC.jpg",
    },
  ],
  [
    EnigmaDegrees.KN7,
    {
      full: "https://imgur.com/U0hYLws.jpg",
      overlay: "https://imgur.com/zmMomhR.jpg",
    },
  ],
  [
    EnigmaDegrees.KN8,
    {
      full: "https://imgur.com/RhZP3QO.jpg",
      overlay: "https://imgur.com/o2RJBTq.jpg",
    },
  ],
  [
    EnigmaDegrees.KN9,
    {
      full: "https://imgur.com/DstR9WF.jpg",
      overlay: "https://imgur.com/5vY1rNf.jpg",
    },
  ],
  [
    EnigmaDegrees.MO1,
    {
      full: "https://imgur.com/Frmejt4.jpg",
      overlay: "https://imgur.com/6lu1Vjh.jpg",
    },
  ],
  [
    EnigmaDegrees.MO2,
    {
      full: "https://imgur.com/XlbvZh4.jpg",
      overlay: "https://imgur.com/pOafjm6.jpg",
    },
  ],
  [
    EnigmaDegrees.MO3,
    {
      full: "https://imgur.com/vGWD23I.jpg",
      overlay: "https://imgur.com/yD4Hvm9.jpg",
    },
  ],
  [
    EnigmaDegrees.MO4,
    {
      full: "https://imgur.com/AeUBs7w.jpg",
      overlay: "https://imgur.com/oI5Jog3.jpg",
    },
  ],
  [
    EnigmaDegrees.MO5,
    {
      full: "https://imgur.com/uAYEbSM.jpg",
      overlay: "https://imgur.com/CPxEvsf.jpg",
    },
  ],
  [
    EnigmaDegrees.MO6,
    {
      full: "https://imgur.com/VXJRK5n.jpg",
      overlay: "https://imgur.com/4IoTRSj.jpg",
    },
  ],
  [
    EnigmaDegrees.MO7,
    {
      full: "https://imgur.com/RRBjzcH.jpg",
      overlay: "https://imgur.com/UoXRHJs.jpg",
    },
  ],
  [
    EnigmaDegrees.MO8,
    {
      full: "https://imgur.com/Qg57fi2.jpg",
      overlay: "https://imgur.com/Sxp5gIn.jpg",
    },
  ],
  [
    EnigmaDegrees.MO9,
    {
      full: "https://imgur.com/sTzsdxn.jpg",
      overlay: "https://imgur.com/wQ9m4GI.jpg",
    },
  ],
  [
    EnigmaDegrees.BL1,
    {
      full: "https://imgur.com/YogmpWV.jpg",
      overlay: "https://imgur.com/3rWUlet.jpg",
    },
  ],
  [
    EnigmaDegrees.BL2,
    {
      full: "https://imgur.com/MPxhlCu.jpg",
      overlay: "https://imgur.com/dvcw83m.jpg",
    },
  ],
  [
    EnigmaDegrees.BL3,
    {
      full: "https://imgur.com/MyjqRjq.jpg",
      overlay: "https://imgur.com/M1MucCF.jpg",
    },
  ],
  [
    EnigmaDegrees.BL4,
    {
      full: "https://imgur.com/dUzu8w8.jpg",
      overlay: "https://imgur.com/amMwSsi.jpg",
    },
  ],
  [
    EnigmaDegrees.BL5,
    {
      full: "https://imgur.com/PqQXJs1.jpg",
      overlay: "https://imgur.com/LsEBrl1.jpg",
    },
  ],
  [
    EnigmaDegrees.BL6,
    {
      full: "https://imgur.com/KdseOOc.jpg",
      overlay: "https://imgur.com/OR0CBHU.jpg",
    },
  ],
  [
    EnigmaDegrees.BL7,
    {
      full: "https://imgur.com/g7rei5f.jpg",
      overlay: "https://imgur.com/9zBL0vl.jpg",
    },
  ],
  [
    EnigmaDegrees.BL8,
    {
      full: "https://imgur.com/WOBJIhW.jpg",
      overlay: "https://imgur.com/Roz1J5i.jpg",
    },
  ],
  [
    EnigmaDegrees.BL9,
    {
      full: "https://imgur.com/IIDsEVX.jpg",
      overlay: "https://imgur.com/1AdQ1DL.jpg",
    },
  ],
  [
    EnigmaDegrees.RO1,
    {
      full: "https://imgur.com/dOS9adE.jpg",
      overlay: "https://imgur.com/hRLnyFJ.jpg",
    },
  ],
  [
    EnigmaDegrees.RO2,
    {
      full: "https://imgur.com/JnEigLL.jpg",
      overlay: "https://imgur.com/qMEkB7R.jpg",
    },
  ],
  [
    EnigmaDegrees.RO3,
    {
      full: "https://imgur.com/gOcmhEH.jpg",
      overlay: "https://imgur.com/qvHNW8p.jpg",
    },
  ],
  [
    EnigmaDegrees.RO4,
    {
      full: "https://imgur.com/wd5ZNC2.jpg",
      overlay: "https://imgur.com/eYJZuED.jpg",
    },
  ],
  [
    EnigmaDegrees.RO5,
    {
      full: "https://imgur.com/pfbAPIs.jpg",
      overlay: "https://imgur.com/V5EdKAi.jpg",
    },
  ],
  [
    EnigmaDegrees.RO6,
    {
      full: "https://imgur.com/lo3ciTM.jpg",
      overlay: "https://imgur.com/FNyDAhT.jpg",
    },
  ],
  [
    EnigmaDegrees.RO7,
    {
      full: "https://imgur.com/9oIKiEb.jpg",
      overlay: "https://imgur.com/VjFTNwG.jpg",
    },
  ],
  [
    EnigmaDegrees.RO8,
    {
      full: "https://imgur.com/gxEptoJ.jpg",
      overlay: "https://imgur.com/JTED51s.jpg",
    },
  ],
  [
    EnigmaDegrees.RO9,
    {
      full: "https://imgur.com/hrSo92n.jpg",
      overlay: "https://imgur.com/QOegMaf.jpg",
    },
  ],
]);
export const EnigmaText = new Map<EnigmaDegrees, string>([
  [
    EnigmaDegrees.FE1,
    "Local records suggest that Hush House was a double monastery – a seventh-century foundation of both monks and nuns. There are two major traditions of its origin. This is the first.    \n “St Columba, with twelve companions, brought Christianity from Ireland to Scotland, and founded a monastery on the blessed isle of Iona, where his bones remained until the Northmen came. But in Brancrug Village they have it that St Columba brought a thirteenth companion, a ‘hybrid beauty’ named Rowena who was perhaps his tutor, perhaps his seducer, or perhaps his daughter. At his death, the monks sought to stone her for her impurities. She bore Columba’s bones away so the monks would not have them (substituting, from tact or mischief, the bones of a horse). She brought them to Brancrug Isle, which even then was a hidden place, to make a double foundation of nuns and monks, and become its first abbess: but she would admit none to the order who was a virgin, nor innocent of any crime. Since then, Brancrug has been a refuge for all the world might consider impure.”\n\n[After this place, a suitable wisdom.]\n\nYou've achieved the first degree, 'library', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FE2,
    "Aesthetics, necromancy, silence; the techniques used also by Reckoners.\n\n [In each of us there's a healing sadness.]\n\nYou've achieved the second degree, 'wisdom', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FE3,
    "The change and the longing.\n\n[A tung of yung phanes.]\n\nYou've achieved the third degree, 'element', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FE4,
    "A language of surpassing beauty and allusiveness, revealed through the ecstatic apprehensions of the Orphics, the Eleusinians, and the Sibyls of the Rhine. Ericapaean, these mystics claimed, allows the elaboration of hues, sensations and states of mind too subtle for grosser tongues.\n\n[A visitor to Hush House who catalogued a collection that in many histories was first-numbered among the lost. Alternatively, his chrismed unson.]\n\nYou've achieved the fourth degree, 'language', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FE5,
    "Out into the night! We escape unseen, but the next day there are reports of a fire at Strathcoyne’s. Did someone knock a live coal on to the hearth-rug? Or did Strathcoyne destroy the place himself, as part of some larger scheme?…\n\n[Crow and mirror, sand-sown, oak-denying]\n\nYou've achieved the fifth degree, 'visitor', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FE5b,
    "For four years he served as Strathcoyne’s pupil and protégé, but Illopoly’s relationship with this austere and secretive man was always complicated. He wrote later: ‘I still think his intentions are good. Certainly he agrees. But I never understood the final goal of his investigations. He was never prepared to enlighten me. And good intentions or not, I can no longer bear this dream of eyes. We have agreed to part, almost amicably.”\n\n[Crow and mirror, sand-sown, oak-denying]\n\nYou've achieved the fifth degree, 'visitor', of the FE (b) direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FE6,
    "Along the dunes by the skeleton abbey, blue-silver, black-steel.\n\n[Dr Hengerst Department of English and Philology University College of Swansea Singleton Abbey Mumbles Road Sketty Swansea]\n\nYou've achieved the sixth degree, 'flower', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FE6a,
    "Along the dunes by the skeleton abbey, blue-silver, black-steel.\n\n[Dr Hengerst Department of English and Philology University College of Swansea Singleton Abbey Mumbles Road Sketty Swansea]\n\nYou've achieved the sixth degree, 'flower', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FE7,
    "ST RHONWEN TRUST: a charitable trust established in 1922 for the advancement of education, chiefly through scholarships for promising young talents…\n\n[Coseley never forgave Husher, but at last he respected him.]\n\nYou've achieved the seventh degree, 'protectress', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FE8,
    "Techniques for perception and analysis which permit invidious and apocalyptic conclusions. Probably the most assiduously suppressed book in history. The entire run was destroyed – even the presses were melted and dispersed – but the manuscript edition has survived.\n\n[[Not until there are enough here. But look around.]]\n\nYou've achieved the eighth degree, 'wise', of the FE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SC1,
    "The Labyrinth of Lions teaches horomachistry and Illumination. In the First History, it was established as a labyrinth-fortress in the lands of the Shadowless King-of-Kings. When days were yet undivided, it lay under the hand of the Sun. Now the Lionsmith lends his protection. For twenty-two centuries, mystics, strategists, and sorrowful warriors have all sought to penetrate its coils in an attempt to advance their understanding.\n\n[After this place, a suitable wisdom]\n\nYou've achieved the first degree, 'library', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SC2,
    "Mystical exercises to purify and illuminate the self and its surroundings. Relic Rites of the Unconquered Sun, mirrors and light sources, the Glory.\n\n[We have all benifited from the Glory's gifts.]\n\nYou've achieved the second degree, 'wisdom', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SC3,
    "Sight, perception, inspiration, all the Glory's gifts.\n\n[One tongue, many eyes.]\n\nYou've achieved the third degree, 'element', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SC4,
    "In the Tracks of Beasts, in the Convolutions of his own Carapace, in Egg-vein and Shell-shadow, the Many-Eyed One found the Signs which can be History.\n\n[A visitor to the Labyrinth, torch-named, who can never return, only alight]\n\nYou've achieved the fourth degree, 'language', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SC5,
    "Fulgents are confined to the Mansus and the Bounds, but they have considerable influence there. They’re well-placed to shape and send dreams. Fulgents avoid the Wood. It’s confusing and unpleasant, and the Wood-names there will devour them if they can. There are risks in the House, too, from Mansus-names, but that’s manageable, and they have allies in the House…\n\n[Dapple and motley, shepherd-sung, swine-denying.]\n\nYou've achieved the fifth degree, 'visitor', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SC6,
    "Power-plucked from sacred soil where old blood was shed. Shadow, then snow.\n\n[The King of the World made his dedication to the Evening Star at the Gate of Gods. She lies long in the land of the Lionsmith’s Labyrinth.]\n\n\n\nYou've achieved the sixth degree, 'flower', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SC7,
    "“The Khusgai that we slew. On their standard they bore a silver hand. We took it as a trophy and it graces now the standard of my regiment. I still write that – I will not strike it out – but of course I cannot no longer claim that honour. It graces now the standard of the Poona Horse. If you ask to see it I think they will show it to you – if you use Malcolmson’s name and not mine. It is older than the regiment – as old I think as England. But no older. There is a lesson in it. Greatest among the powers who illuminate is one called Watchman. He it is who says ‘Mercy is found only in shadow.’ But he does not say that mercy is nowhere found; and shadows lie long at the Labyrinth of Lions.”\n\n[A sleeping gentleman and a solar majuscule.]\n\n\n\nYou've achieved the seventh degree, 'protectress', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SC8,
    "Beneath the Church of the Holy Belt in Emesa/Homs, there is, as legend relates, a secret room which was also the first church, consecrated (in 59) – perhaps as a Christian shrine by Paul the Apostle, perhaps as an Invictine shrine by Saul the Illuminated. There in a sarcophagus of black corundum lies Elagabalus, accursed of Janus, neither Long nor mortal, neither man nor woman, neither real nor imagined. On his light-suffused skin is made manifest the Sun-in-Splendour’s grand design… or a monstrous lie.\n\n[[Not until there are enough here. But look around.]]\n\nYou've achieved the eighth degree, 'wise', of the SC direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.KN1,
    "The Great Hooded Princes do not reveal their library’s location. Those few permitted entry will say only that it’s ‘west of the Lion, and north of Victory’. It contains knowledge on the ways and foundations of the Mansus; on the Fifth History, and above all on Knock lore. The Princes do not say ‘Knowledge is Power’, but rather, ‘Power is Knowledge.’ Relationships between the Princes and the Mother of Ants are strained, and the Tomb lies under the hand of the Horned Axe.\n\n[After this place, a suitable wisdom.]\n\n\n\nYou've achieved the first degree, 'library', of the KN direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.BL1,
    "This is a mountain-monastery of renegade Taoists. They specialise in horticulture and medicine, in Moth and Heart lore, in the gossip of the Hours, all under the hand of the Applebright... but the Grove is supposed to be safe to visit, because of the arrangement the scholars and the Applebright have made.\n\n[After this place, a suitable wisdom.]\n\nYou've achieved the first degree, 'library', of the BL direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.BL2,
    "The lore of the primaeval wood; rarely written, often felt.\n\n[Hath each their darkness.]\n\nYou've achieved the second degree, 'wisdom', of the BL direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.BL3,
    "Pride, compassion; hatred and fear.\n\n[This tongue, silver-caging.]\n\nYou've achieved the third degree, 'element', of the BL direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.BL4,
    "If there is speech in Nowhere; if there is a language used by the Dead; if the House of the Moon has a native tongue; then it must be Killasimi. If none of this is true, it is still not a language to be spoken in daylight. Each word breathes woe. Read it, as they say, and weep.\n\n[A visitor to the Grove whose meals came winged east.]\n\nYou've achieved the fourth degree, 'language', of the BL direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.BL5,
    "“The Mother pierces,\" Zulfiya says conversationally, tugging at her fingernails. \"The Witch demands, and the Sister dissolves...”\n\n[Flask and cup, moon-sown, malady-denying.]\n\nYou've achieved the fifth degree, 'visitor', of the BL direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.BL6,
    "The Serapeum has its black tea, the Yeshiva its healing tisanes, but the Grove dries their own preparations.\n\n[Eagle-harried, eagle-born, nectar’s heart, blood’s fair fount. Later her name is fitting.]\n\nYou've achieved the sixth degree, 'flower', of the BL direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.BL7,
    "A Lovely who consumes an Ivory becomes an Ivory. A Lovely who consumes a Thirstly becomes a Thirstly. A Lovely who consumes a Name of another Hour might take its place. An incident where a Lovely consumes a Name of the Crowned Growth was described in some detail by Malskær in ‘The Intimations of Skin’, but Malskær did not record the name or the final condition of the consumption’s outcome.\n\n[There had to be a first time. We can learn from it. The Writer on the Walls can begin it, but only if he is suitably hybridised with the doctor’s inception.]\n\nYou've achieved the seventh degree, 'protectress', of the BL direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.BL8,
    "What is this? A tufted fossil of silken fibre, big as a child. Something consumed, and something was consumed. If we interpret its interweavings, we might understand.\n\n[Not until there are enough here. But look around.]\n\nYou've achieved the eighth degree, 'wise', of the BL direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.HE1,
    "In a garden city of the far West, in an establishment of uncertain age, in a gloriously decaying garden-mansion, you can find perhaps the only library in the world where silence is discouraged. The Watchman and the Vagabond are venerated there, and Sunset Celia’s shrine is aligned each day so the dawn may be greeted with music. It claims to be the site of the first Roost, though it’s by no means the only place to make that claim. The lights of the house are never extinguished, and its hospitalities, if you can find the place at all, are generally both warm and bright. Perhaps we’ll see you there.\n\n[After this place, a suitable wisdom.]\n\nYou've achieved the first degree, 'library', of the HE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.HE2,
    "Music, riddles, miscellany. The matters of the Roost, of Ghirbi, of the Leak, the Vagabond, the Carapace Cross and a hundred and five others.\n\n[We do not cease until we are ceased.]\n\nYou've achieved the second degree, 'wisdom', of the HE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.HE3,
    "Energy and tenacity; rhythm.\n\n[This tongue is the stone and it is not the stone, the thumb-sucking slayer-stone.]\n\nYou've achieved the third degree, 'element', of the HE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.HE4,
    "This language has been called ‘mantiq al-tair’ and ‘lenga aucel’ and ‘the speech of birds’ and ‘Ramsund’ and ‘the hazelnut tongue’, but it’s a language of secrets, and its true name may never be used. The aviform Hours use it at their Roost, or so the story goes.\n\n[A visitor to Crossrow who did not write himself. Perhaps the opposite.]\n\nYou've achieved the fourth degree, 'language', of the HE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.HE5,
    "Once Peel had peeled itself, it had the ink it needed to write the Tantra. It had to face the wrath of its fellows...\n\n[Scent and song, glory-garbed, death-denying.]\n\nYou've achieved the fifth degree, 'visitor', of the HE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.HE6,
    "There’s always a rebirth. We can’t do anything much about that.\n\n[SANCTA CAECILIA ORA PRO NOBIS PEREGRINIS NUNC ET IN HORA TRANSITUS NOSTRI]\n\nYou've achieved the sixth degree, 'flower', of the HE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.HE7,
    "No other Maid loves music so. In older texts she has been called Caelia the Elagabaline. Perhaps she was his daughter? Perhaps Tryphon’s sister? Perhaps, like the Watchman himself, she is like a shadow cast by two candles.\n\n[There is a History where Alexander defeated first the Great Knot of Sabazos, and then the King of Kings. There is another History where, instead, he learnt from them. How many more? If we curl our hands into the correct shapes, we may yet understand. One of each, precious of the moon and of the sea.]\n\nYou've achieved the seventh degree, 'protectress', of the HE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.HE8,
    "A calligraphic manual of Ramsund which employs as exemplar-text Farid ud-Din’s ‘Conference of the Birds’. Its commentary, illustrations and interleavings carry revelations never intended in the original.\n\n[Not until there are enough here. But look around.]\n\nYou've achieved the eighth degree, 'wise', of the HE direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SK1,
    "For fifty years a secret yeshiva in Tiflis has taught the Four Traditions of the Bei Ilai: the imprisonment of spirits, the expulsion of monsters, the conclusion of tenacious curses and the sealing of troublesome portals. The YT has had a long and very beneficial understanding with the Fifth Cup, but for the last twenty years has been engaged in a bitter and incomprehensible feud, approximately because someone hasn’t returned a book but no one can agree who or what. They specialise in preservation lore, with a strong second string in skolekosophy.\n\n[After this place, a suitable wisdom.]\n\nYou've achieved the first degree, 'library', of the SK direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SK2,
    "Healing and restoration; Commandments for the Preservation of All that Exists; Relic Rites of the Sisterhood of the Knot; legacy rites of the Gods-from-Stone.\n\n[Nothing without.]\n\nYou've achieved the second degree, 'wisdom', of the SK direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SK3,
    "The dwelling-place of the soul.\n\n[The hand enacts the tongue.]\n\nYou've achieved the third degree, 'element', of the SK direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SK4,
    "There is a History where Alexander defeated first the Great Knot of Sabazos, and then the King of Kings. There is another History where, instead, he learnt from them. How many more? If we curl our hands into the correct shapes, we may yet understand.\n\n[A visitor to the Yeshiva from whose body flowers shall grow...]\n\nYou've achieved the fourth degree, 'language', of the SK direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SK5,
    "“My darling Moishe will be there to greet me on the other side. Death shall mend one of the two great pains in my life: to live in such a beautiful city, but for so many years without him…”\n\n[Flush and fortune, myrmid-beguiling, devil-denying.]\n\nYou've achieved the fifth degree, 'visitor', of the SK direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SK6,
    "Dioscorides would have been permitted to enter. There’s no doubt of that.\n\n[Stronger and sharper than bronze Fiercer than mere amazons Tempted by feet She tried to be sweet But she hated the song of the swans]\n\nYou've achieved the sixth degree, 'flower', of the SK direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SK7,
    "“The Madrugad and the Witch-and-Sister are not counted among the Chancel, but they are more closely associated than most. And the Madrugad has been known to send her huntress after Hours-that-may; while the Witch-and-Sister’s adoption of renegade Names suggests certain permitted latitude. To each their own. You might call this heresy. I call it friendly gossip.”\n\n[The Witch of Lagash is best known for her paintings, and for the lively ‘In the Mountains…’ But she also wrote two more sombre, potent volumes which were in many respect each other’s mirrors.]\n\nYou've achieved the seventh degree, 'protectress', of the SK direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.SK8,
    "???\n\n[Not until there are enough here. But look around.]\n\nYou've achieved the eighth degree, 'wise', of the SK direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.RO1,
    "“The first and irreparable disaster was the fall of the Lantern.” Perhaps thanks to the protection of the Forge of Days, the Serapeum has survived the long decline of its parent library. Or perhaps it’s just that the Serapeum is invisible to the dull-sighted even once they’re inside it. The Forge does not usually favour libraries, but the Serapeum specialises in Forge lore and horomachistry, and favours non-combustible media.\n\n[After this place, a suitable wisdom.]\n\nYou've achieved the first degree, 'library', of the RO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.RO2,
    "The laws and contentions of the Hours and their emanations. What makes us what we are. Forbiddings and laws and the proper ways to proper roles.\n\n[What when unobserved?]\n\nYou've achieved the second degree, 'wisdom', of the RO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.RO3,
    "The capacity for meaningful choice.\n\n[A tongue of bowls and rolls.]\n\nYou've achieved the third degree, 'element', of the RO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.RO4,
    "The most secret script of the innermost rites of the deep sects of the deep desert. The birth-tongue, it is claimed, of the Mother of Ants herself.\n\n[A visitor to the Serapeum of a long-noted significant absence, from a city of thundering milk.]\n\nYou've achieved the fourth degree, 'language', of the RO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.RO5,
    "The good doctor has an interest in overlooked histories. He’s a newcomer to the city, but speaks fondly of his memories of previous visits, long ago...\n\n[Shard and serpent, fragrance-crowned, day-denying.]\n\nYou've achieved the fifth degree, 'visitor', of the RO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.RO6,
    "In Alexandria, where the white night-flowers shed their scent, you’re most likely to find entrances to the Serapeum. But it’s never very likely.\n\n[The Isle that is Veiled, the Scar that Soothes.]\n\nYou've achieved the sixth degree, 'flower', of the RO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.RO7,
    "“Was Eskhara-Meligounis once a Name of the Twins? Certainly it would explain why the Twins scraped the barrel so for the Names they own today.”\n\n[There’s a clouded but refulgent truth in these images – from the times before the Sun was divided. One day soon you’ll understand it..]\n\nYou've achieved the seventh degree, 'protectress', of the RO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.RO8,
    "Set down with reverence before the Intercalate, by one who understood. Glory.\n\n[Not until there are enough here. But look around.]\n\nYou've achieved the eighth degree, 'wise', of the RO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FO1,
    "“Spending on feasting and wine is better than hoarding our substance. That which we give makes us richer, that which is hoarded is lost.” A quietly unorthodox monastery with a tendency to apophatic theology and a strong winemaking tradition. Ithastry is their particular domain, but they’re also respected for their boskiness. Of all the nine great storehouses of the wisdoms, the Fifth Cup possesses the fewest actual books. Most of their knowledge is encoded in their wines, or in the devices in their triple-locked cellars, or in the skulls of the brethren. “Never spoken, never stolen.”\n\n[After this place, a suitable wisdom.]\n\nYou've achieved the first degree, 'library', of the FO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FO2,
    "Crafting, locksmithing, pyrotechnics: the arts that alter. Mirror alloys, the Noble Endeavour, the Corrivality.\n\n[All the living have it. Many of the dead retain it. Books have only this… at least those books that can be trusted.]\n\nYou've achieved the second degree, 'wisdom', of the FO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FO3,
    "Name, memory, that part which remains.\n\n[A tongue twice never Lydian.]\n\nYou've achieved the third degree, 'element', of the FO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FO4,
    "A people lived east of the lost lake Fucino. Horace warned that theirs was the land of witches. This was their language, called by some ‘the dry tongue’ and by others ‘the tongue of witches’.\n\n[A tricksy sheep-pot visitor, or guest.]\n\nYou've achieved the fourth degree, 'language', of the FO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FO5,
    "“I was,” she says. “Now I’m not.”\n\n[Gifts and bane, birth-feasting, delusion-denying.]\n\nYou've achieved the fifth degree, 'visitor', of the FO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FO6,
    "Winter turns her head until we see spring’s face.\n\n[Once in the Wood we call a visit. Twice in the Wood we call a journey. Thrice, we call coming home.]\n\nYou've achieved the sixth degree, 'flower', of the FO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FO7,
    "Aunt Mopsy c/o Osier House Publishing 14 Plover Street Kerisham G.B.\n\n[The black-eared hound knew well its taste, but never sought it. High it fell in the eagle-scarred place. Honestly, if you’re ever inclined to wait for more clues, wait for more clues for this.]\n\nYou've achieved the seventh degree, 'protectress', of the FO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.FO8,
    "???\n\n[Not until there are enough here. But look around.]\n\nYou've achieved the eighth degree, 'wise', of the FO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.MO1,
    "An enclave beyond the Evening Isles (and in the Bounds) established by an alliance of Catholic friars with Incan magicians. It preserves those things that are elsewhere considered unwise to preserve. The Haustorium lies beneath the hand of the Crowned Growth. It is in no way a safe place to visit, nor even really to communicate with. It’s probably not even a good idea to dream about it.\n\n[After this place, a suitable wisdom.]\n\nYou've achieved the first degree, 'library', of the MO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.MO2,
    "'The study of things that should not be studied’. Perversions and abrasions, Worms, Nowhere; earthquakes.\n\n[\"Without speech no answer is possible.\" This is suppressed by the White Door, or perhaps even left outside it, as a sword outside a king’s hall or as a key in the door.]\n\nYou've achieved the second degree, 'wisdom', of the MO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.MO3,
    "Eloquence and understanding. The door opens both ways.\n\n[This honey'd tongue]\n\nYou've achieved the third degree, 'element', of the MO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.MO4,
    "The Shepherd-Kings brought this speech west from Canaan to use in their wards and snares. Had they never come to Egypt, they might never found a way to write it; given its addictive qualities, that might have been for the best.\n\n[A visitor to the Haustorium who bore away a golden treasure.]\n\nYou've achieved the fourth degree, 'language', of the MO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.MO5,
    "Once upon a time, a very bad man encoded very bad secrets into the charming illustrations of a book of charming stories. Wake the pictures, and you will see…\n\n[Blood and flesh, needle-loving, sun-denying.]\n\nYou've achieved the fifth degree, 'visitor', of the MO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.MO6,
    "There are other modes than ours\n\n[vi. ‘A Child’s Treasury of Golden Afternoons’, Jacob Gristwood. Clearly I am aware of the Standing Incineration Order on this work but this may be the only copy still in existence and the skolekosophic resources available to the Branch are frankly embarrassing in their paucity. After a detailed examination, not to mention discussion with my very good friend the Dottore, I have determined that it is much too valuable to be destroyed. Retained.]\n\nYou've achieved the sixth degree, 'flower', of the MO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.MO7,
    "“If you are dead but ‘uplifted by green’, that’s the Ring-Yew’s blessing. (The Crowned Growth offers a similar but nastier benefit.) This is how Burgeoning Risen come about, but there are different degrees of sentience and freedom depending on which growths are involved. The consciousness of one ‘uplifted by green’ is always greatly altered, though – they never really seem like the same person. They may have dregs of their original souls, but these are often replaced by something else.” – Detective-Ostiary Wheelock, An Exorcist’s Field Manual\n\n[This is a proposal we would consider only in the most extreme circumstances. Where is the manner of the vein?]\n\nYou've achieved the seventh degree, 'protectress', of the MO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.MO8,
    "Once upon a time, a very bad man encoded very bad secrets into the charming illustrations of a book of charming stories. Wake the pictures, and you will see.\n\n[[Not until there are enough here. But look around.]]\n\nYou've achieved the eighth degree, 'wise', of the MO direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.KN2,
    "’Travelling at night.’ The ways and byways of other worlds.\n\n[Sometimes our reach exceeds our grasp, but in dreams our grasp can exceed our reach.]\n\nYou've achieved the second degree, 'wisdom', of the KN direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.KN3,
    "That part of us which dreams. The connection to the Mansus.\n\n[This tongue, entrance into secret light.]\n\nYou've achieved the third degree, 'element', of the KN direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.KN4,
    "Before gods arose from blood, before ever ape stood upright, this was the language heard in the House of the Sun…. ‘I am Vak,’ the Peacock Door boasted, ‘both the tongue and the Goddess. I am the only entrance into secret light. I was worshipped before you upright apes, and I will be still when all of you are ugly ash. Listen, and I will prove it.\n\n[A visitor to the Tomb who knew the value of seventy-seven winks.]\n\nYou've achieved the fourth degree, 'language', of the KN direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.KN5,
    "“So here you go, bill, book, all we’re missing is a candle, ha ha! I’ll be by again for the Equinox. Could use your help on a thing with the Mausoleum. And the Club, actually. Bit of a business, there…”\n\n[Wing and huntress, bark-blessing, drouth-denying.]\n\nYou've achieved the fifth degree, 'visitor', of the KN direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.KN6,
    "The Princes favor this flower.\n\n[Fair to Friends, Horned to Foes, to Day-Flyers Scaled, by Hawthorn Homed.]\n\nYou've achieved the sixth degree, 'flower', of the KN direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.KN7,
    "“There are strict limits on the number of Hours, Names, Long and Know. Strict limits. Seven Names for each Hour, seven Long for each Name, seven Know for each Long. Since there can only ever be exactly thirty Hours, we can do the sums and work it all out perfectly. Except, no matter which way I do the sums, it never comes to thirty Hours. If I include the ones in Nowhere, it’s twenty-eight. If I’m a bit more speculative, it’s thirty-four. The Chancel has its accounted thirty, Xenodice told me once, but Xenodice doesn’t share her mistress’ secrets.”\n\n[“The Cross died not but passed within.” Strathcoyne knew, and Strathcoyne learnt almost too late. Gore’s stories might have shown the way, but Gore looked too deep, past the truth.]\n\nYou've achieved the seventh degree, 'protectress', of the KN direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.KN8,
    "The histories of the Carapace Cross, as recorded on the walls of the Mansus and transcribed into a book of ninety-nine pages by one known only as ‘cc’. This book does not exist, but it can be read in sleep, if one pulverizes and then consumes a hallowed diamond. Certain fragments do exist, when jotted down on waking.\n\n[Not until there are enough here. But look around.]\n\nYou've achieved the eighth degree, 'wise', of the KN direction of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
  [
    EnigmaDegrees.HE8b,
    "It is as old I think as England. But no older.\n\n [[Not until there are enough here. But look around.]]\n\nYou've achieved the eighth degree, \"otherwise\", of the Enigma of Secret Histories. You're entitled to use this badge wherever you like, either the full version or the transparent overlay.",
  ],
]);
export const enigmaAnswers = new Map<string, EnigmaDegrees>([
  ["hush-house", EnigmaDegrees.FE1],
  ["hush-house-hushery", EnigmaDegrees.FE2],
  ["hushery-trist", EnigmaDegrees.FE3],
  ["trist-ericapaean", EnigmaDegrees.FE4],
  ["ericapaean-fraser-strathcoyne", EnigmaDegrees.FE5],
  ["fraser-strathcoyne-sea-holly", EnigmaDegrees.FE6],
  ["sea-holly-rowena", EnigmaDegrees.FE7],
  ["rowena-towards-a-fundamental-aesthetic", EnigmaDegrees.FE8],
  ["ericapaean-christopher-strathcoyne", EnigmaDegrees.FE5b],
  ["christopher-strathcoyne-sea-holly", EnigmaDegrees.FE6a],
  ["labyrinth-of-lions", EnigmaDegrees.SC1],
  ["labyrinth-of-lions-illumination", EnigmaDegrees.SC2],
  ["illumination-phost", EnigmaDegrees.SC3],
  ["phost-cracktrack", EnigmaDegrees.SC4],
  ["cracktrack-everett-lapidoth", EnigmaDegrees.SC5],
  ["everett-lapidoth-moly", EnigmaDegrees.SC6],
  ["moly-lamma", EnigmaDegrees.SC7],
  ["lamma-the-man-with-the-plan", EnigmaDegrees.SC8],
  ["tomb-of-lies", EnigmaDegrees.KN1],
  ["tomb-of-lies-nyctodromy", EnigmaDegrees.KN2],
  ["nyctodromy-fet", EnigmaDegrees.KN3],
  ["fet-hyksos", EnigmaDegrees.KN4],
  ["hyksos-dagmar-von-nagelsburg", EnigmaDegrees.KN5],
  ["dagmar-von-nagelsburg-phalaenopsis", EnigmaDegrees.KN6],
  ["phalaenopsis-xenodice", EnigmaDegrees.KN7],
  ["xenodice-the-writing-on-the-wall", EnigmaDegrees.KN8],
  ["haustorium", EnigmaDegrees.MO1],
  ["haustorium-skolelosophy", EnigmaDegrees.MO2],
  ["skolelosophy-shapt", EnigmaDegrees.MO3],
  ["shapt-hyksos", EnigmaDegrees.MO4],
  ["hyksos-lord-gristwood", EnigmaDegrees.MO5],
  ["lord-gristwood-snow-plant", EnigmaDegrees.MO6],
  ["snow-plant-robigo", EnigmaDegrees.MO7],
  ["robigo-a-childs-treasury-of-golden-afternoons", EnigmaDegrees.MO8],
  ["grove-of-green-immortals", EnigmaDegrees.BL1],
  ["grove-of-green-immortals-bosk", EnigmaDegrees.BL2],
  ["bosk-ereb", EnigmaDegrees.BL3],
  ["ereb-killasimi", EnigmaDegrees.BL4],
  ["killasimi-zulfiya-zakirova", EnigmaDegrees.BL5],
  ["zulfiya-zakirova-osmanthus", EnigmaDegrees.BL6],
  ["osmanthus-idonea", EnigmaDegrees.BL7],
  ["idonea-kopralith-omphalos", EnigmaDegrees.BL8],
  ["crossrow", EnigmaDegrees.HE1],
  ["crossrow-birdsong", EnigmaDegrees.HE2],
  ["birdsong-chor", EnigmaDegrees.HE3],
  ["chor-ramsund", EnigmaDegrees.HE4],
  ["ramsund-arun-peel", EnigmaDegrees.HE5],
  ["arun-peel-trumpet-lily", EnigmaDegrees.HE6],
  ["trumpet-lily-sunset-celia", EnigmaDegrees.HE7],
  ["sunset-celia-the-turquoise-hand", EnigmaDegrees.HE8],
  ["sunset-celia-the-silver-hand", EnigmaDegrees.HE8b],
  ["yesheva-tigris", EnigmaDegrees.SK1],
  ["yesheva-tigris-preservation", EnigmaDegrees.SK2],
  ["preservation-health", EnigmaDegrees.SK3],
  ["health-sabazine", EnigmaDegrees.SK4],
  ["sabazine-moishe-farouk", EnigmaDegrees.SK5],
  ["moishe-farouk-aglaophotis", EnigmaDegrees.SK6],
  ["aglaophotis-skadi", EnigmaDegrees.SK7],
  ["invisible-serapeum", EnigmaDegrees.RO1],
  ["invisible-serapeum-horomachistry", EnigmaDegrees.RO2],
  ["horomachistry-character", EnigmaDegrees.RO3],
  ["character-deep-mandaic", EnigmaDegrees.RO4],
  ["deep-mandaic-ibn-al-adim", EnigmaDegrees.RO5],
  ["ibn-al-adim-jasmine-sambac", EnigmaDegrees.RO6],
  ["jasmine-sambac-eskhara-meligounis", EnigmaDegrees.RO7],
  ["eskhara-meligounis-book-of-suns", EnigmaDegrees.RO8],
  ["monastery-of-the-fifth-cup", EnigmaDegrees.FO1],
  ["monastery-of-the-fifth-cup-ithastry", EnigmaDegrees.FO2],
  ["ithastry-wist", EnigmaDegrees.FO3],
  ["wist-fucine", EnigmaDegrees.FO4],
  ["fucine-medea", EnigmaDegrees.FO5],
  ["medea-lenten-rose", EnigmaDegrees.FO6],
  ["lenten-rose-aunt-mopsy", EnigmaDegrees.FO7],
]);

export const enigmaTitles: Map<EnigmaDegrees, string> = new Map<
  EnigmaDegrees,
  string
>([
  [EnigmaDegrees.FE1, "Hush House"],
  [EnigmaDegrees.FE2, "Hushery"],
  [EnigmaDegrees.FE3, "Trist"],
  [EnigmaDegrees.FE4, "Ericapaean"],
  [EnigmaDegrees.FE5, "Fraser Strathcoyne"],
  [EnigmaDegrees.FE6, "Sea Holly"],
  [EnigmaDegrees.FE7, "Rowena"],
  [EnigmaDegrees.FE8, "Towards A Fundamental Aesthetic"],
  [EnigmaDegrees.FE5b, "Christopher Strathcoyne"],
  [EnigmaDegrees.FE6a, "Sea Holly"],
  [EnigmaDegrees.SC1, "Labyrinth Of Lions"],
  [EnigmaDegrees.SC2, "Illumination"],
  [EnigmaDegrees.SC3, "Phost"],
  [EnigmaDegrees.SC4, "Cracktrack"],
  [EnigmaDegrees.SC5, "Everett Lapidoth"],
  [EnigmaDegrees.SC6, "Moly"],
  [EnigmaDegrees.SC7, "Lamma"],
  [EnigmaDegrees.SC8, "The Man With The Plan"],
  [EnigmaDegrees.KN1, "Tomb Of Lies"],
  [EnigmaDegrees.KN2, "Nyctodromy"],
  [EnigmaDegrees.KN3, "Fet"],
  [EnigmaDegrees.KN4, "Hyksos"],
  [EnigmaDegrees.KN5, "Dagmar Von Nagelsburg"],
  [EnigmaDegrees.KN6, "Phalaenopsis"],
  [EnigmaDegrees.KN7, "Xenodice"],
  [EnigmaDegrees.KN8, "The Writing On The Wall"],
  [EnigmaDegrees.MO1, "Haustorium"],
  [EnigmaDegrees.MO2, "Skolelosophy"],
  [EnigmaDegrees.MO3, "Shapt"],
  [EnigmaDegrees.MO4, "Hyksos"],
  [EnigmaDegrees.MO5, "Lord Gristwood"],
  [EnigmaDegrees.MO6, "Snow Plant"],
  [EnigmaDegrees.MO7, "Robigo"],
  [EnigmaDegrees.MO8, "A Childs Treasury Of Golden Afternoons"],
  [EnigmaDegrees.BL1, "Grove Of Green Immortals"],
  [EnigmaDegrees.BL2, "Bosk"],
  [EnigmaDegrees.BL3, "Ereb"],
  [EnigmaDegrees.BL4, "Killasimi"],
  [EnigmaDegrees.BL5, "Zulfiya Zakirova"],
  [EnigmaDegrees.BL6, "Osmanthus"],
  [EnigmaDegrees.BL7, "Idonea"],
  [EnigmaDegrees.BL8, "Kopralith Omphalos"],
  [EnigmaDegrees.HE1, "Crossrow"],
  [EnigmaDegrees.HE2, "Birdsong"],
  [EnigmaDegrees.HE3, "Chor"],
  [EnigmaDegrees.HE4, "Ramsund"],
  [EnigmaDegrees.HE5, "Arun Peel"],
  [EnigmaDegrees.HE6, "Trumpet Lily"],
  [EnigmaDegrees.HE7, "Sunset Celia"],
  [EnigmaDegrees.HE8, "The Turquoise Hand"],
  [EnigmaDegrees.HE8b, "The Silver Hand"],
  [EnigmaDegrees.SK1, "Yesheva Tigris"],
  [EnigmaDegrees.SK2, "Preservation"],
  [EnigmaDegrees.SK3, "Health"],
  [EnigmaDegrees.SK4, "Sabazine"],
  [EnigmaDegrees.SK5, "Moishe Farouk"],
  [EnigmaDegrees.SK6, "Aglaophotis"],
  [EnigmaDegrees.SK7, "Skadi"],
  [EnigmaDegrees.RO1, "Invisible Serapeum"],
  [EnigmaDegrees.RO2, "Horomachistry"],
  [EnigmaDegrees.RO3, "Character"],
  [EnigmaDegrees.RO4, "Deep Mandaic"],
  [EnigmaDegrees.RO5, "Ibn Al Adim"],
  [EnigmaDegrees.RO6, "Jasmine Sambac"],
  [EnigmaDegrees.RO7, "Eskhara-Meligounis"],
  [EnigmaDegrees.RO8, "Book Of Suns"],
  [EnigmaDegrees.FO1, "Monastery Of The Fifth Cup"],
  [EnigmaDegrees.FO2, "Ithastry"],
  [EnigmaDegrees.FO3, "Wist"],
  [EnigmaDegrees.FO4, "Fucine"],
  [EnigmaDegrees.FO5, "Medea"],
  [EnigmaDegrees.FO6, "Lenten Rose"],
  [EnigmaDegrees.FO7, "Aunt Mopsy"],
]);
export function enigmaEmbed(degree: EnigmaDegrees): EmbedBuilder[] {
  return [
    new EmbedBuilder()
      .setTitle(enigmaTitles.get(degree)!)
      .setDescription(EnigmaText.get(degree)!),
    new EmbedBuilder()
      .setImage(EnigmaImages.get(degree)!.full)
      .setURL("https://weatherfactory.biz/enigma"),
    new EmbedBuilder()
      .setImage(EnigmaImages.get(degree)!.overlay)
      .setURL("https://weatherfactory.biz/enigma"),
  ];
}
