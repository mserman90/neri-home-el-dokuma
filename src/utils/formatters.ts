export const PHONE = "+90 537 696 65 02";
export const WA_BASE = "https://wa.me/905376966502";
export const FREE_SHIPPING = 5000;

export const tl = (n: number): string => `${n.toLocaleString("tr-TR")} ₺`;

export const waLink = (text: string): string => `${WA_BASE}?text=${encodeURIComponent(text)}`;
