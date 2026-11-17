export type Option = {
  label: string;
  extraPrice: number;
};

export type StockStatus = "in_stock" | "made_to_order";

export type Product = {
  id: string;
  series: string;
  seriesEn?: string;
  name: string;
  nameEn?: string;
  category: "bel" | "kare-dolay" | "aksesuar" | "set";
  size: string;
  weavingTime: string;
  weavingTimeEn?: string;
  motif: string;
  motifEn?: string;
  price: number;
  images: string[];
  optionsLabel: string;
  optionsLabelEn?: string;
  options: Option[];
  material: string;
  materialEn?: string;
  shortDesc: string;
  shortDescEn?: string;
  motifStory: string;
  motifStoryEn?: string;
  stockStatus: StockStatus;
  stockNote?: string;
  stockNoteEn?: string;
};

export type CartValue = {
  productId: string;
  optionIndex: number;
  qty: number;
  unitPrice: number;
  optionLabel: string;
};

export type CartRecord = {
  id: string;
  value: CartValue;
};

export type FavRecord = {
  id: string;
  value: {
    productId: string;
  };
};

export type Motif = {
  name: string;
  nameEn?: string;
  tag: string;
  tagEn?: string;
  color: string;
  desc: string;
  descEn?: string;
};

export type FAQ = {
  q: string;
  qEn?: string;
  a: string;
  aEn?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  text: string;
  textEn?: string;
  productName: string;
  productNameEn?: string;
  rating: number;
  date: string;
};
