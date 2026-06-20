import { images } from "./images";

export const processSteps = [
  {
    id: 1,
    title: "Extraction du sable",
    description:
      "Prélèvement contrôlé des gisements sablonneux riches en silice (SiO₂). Les sites sont sélectionnés selon des critères géologiques stricts pour garantir une matière première optimale.",
    image: images.process[0],
    alt: "Extraction de sable dans une carrière",
  },
  {
    id: 2,
    title: "Tri et purification",
    description:
      "Séparation granulométrique, lavage et élimination des impuretés (fer, alumine, autres oxydes). Le silice atteint une pureté supérieure à 98 % avant la fusion.",
    image: images.process[1],
    alt: "Installation industrielle de tri",
  },
  {
    id: 3,
    title: "Fusion à haute température",
    description:
      "Le sable purifié est introduit dans des fours à arc ou fours à cuve, chauffés entre 1400 et 1600 °C. La silice fond et forme un verre incandescent homogène.",
    image: images.process[2],
    alt: "Four industriel en fusion",
  },
  {
    id: 4,
    title: "Refroidissement",
    description:
      "Le verre fondu est refroidi progressivement (recuit) pour éliminer les contraintes internes. Ce processus assure la résistance mécanique et la transparence du produit final.",
    image: images.process[3],
    alt: "Verre en cours de refroidissement",
  },
  {
    id: 5,
    title: "Fabrication des produits",
    description:
      "Moulage, laminage, trempage et finition : plaques, vitrages, récipients et composants techniques sont produits selon les spécifications clients et normes internationales.",
    image: images.process[4],
    alt: "Produits finis en verre",
  },
  {
    id: 6,
    title: "Verre intelligent",
    description:
      "Application d’un revêtement photocatalytique au dioxyde de titane (TiO₂) sur la surface du verre. Ce traitement confère des propriétés autonettoyantes, antibactériennes et de purification de l’air, pour un verre haute performance adapté aux environnements exigeants.",
    image: images.process[5],
    alt: "Verre intelligent au TiO₂",
  },
];
