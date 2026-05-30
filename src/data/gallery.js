import { images } from "./images";

export const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "Carrière de sable",
    category: "sable",
    src: images.gallery[0],
    alt: "Carrière de sable industrielle",
  },
  {
    id: 2,
    type: "image",
    title: "Usine de transformation",
    category: "usine",
    src: images.gallery[1],
    alt: "Complexe industriel",
  },
  {
    id: 3,
    type: "image",
    title: "Sable purifié",
    category: "sable",
    src: images.gallery[2],
    alt: "Sable fin purifié",
  },
  {
    id: 4,
    type: "image",
    title: "Verre en fusion",
    category: "fusion",
    src: images.gallery[3],
    alt: "Verre fondu incandescent",
  },
  {
    id: 5,
    type: "image",
    title: "Ligne de production",
    category: "usine",
    src: images.gallery[4],
    alt: "Ligne de production verrière",
  },
  {
    id: 6,
    type: "image",
    title: "Vitrage architectural",
    category: "produits",
    src: images.gallery[5],
    alt: "Produits verriers finis",
  },
  {
    id: 7,
    type: "image",
    title: "Procédé de fusion",
    category: "fusion",
    src: images.gallery[6],
    alt: "Procédé industriel de fusion",
  },
  {
    id: 8,
    type: "image",
    title: "Contrôle qualité",
    category: "usine",
    src: images.gallery[7],
    alt: "Laboratoire de contrôle qualité",
  },
  {
    id: 9,
    type: "image",
    title: "Produits finis",
    category: "produits",
    src: images.gallery[8],
    alt: "Produits verriers finis",
  },
];

export const galleryCategories = [
  { id: "all", label: "Tout" },
  { id: "sable", label: "Sable" },
  { id: "usine", label: "Usine" },
  { id: "fusion", label: "Fusion" },
  { id: "produits", label: "Produits" },
];
