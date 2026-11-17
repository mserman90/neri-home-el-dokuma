export type Option = {
  label: string;
  extraPrice: number;
};

export type StockStatus = "in_stock" | "made_to_order";

export type Product = {
  id: string;
  series: string;
  name: string;
  category: "bel" | "kare-dolay" | "aksesuar" | "set";
  size: string;
  weavingTime: string;
  motif: string;
  price: number;
  images: string[];
  optionsLabel: string;
  options: Option[];
  material: string;
  shortDesc: string;
  motifStory: string;
  stockStatus: StockStatus;
  stockNote?: string;
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
  tag: string;
  color: string;
  desc: string;
};

export type FAQ = {
  q: string;
  a: string;
};

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  text: string;
  productName: string;
  rating: number;
  date: string;
};
