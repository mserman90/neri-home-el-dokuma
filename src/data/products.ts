import { Product } from "../types";

import imgGanos from "../assets/e34e4b08e1004d85-WhatsApp_Image_2026-11-16_at_18_54_44_3.jpeg";
import imgMeric from "../assets/dc7b72df498768bd-WhatsApp_Image_2026-11-16_at_20_31_30.jpeg";
import imgSalon from "../assets/3c8596234219cadd-Gemini_Generated_Image_n8fuovn8fuovn8fu.jpg";
import imgCollage from "../assets/4248d23782e10ebc-Gemini_Generated_Image_u02zlpu02zlpu02z.jpg";
import imgBagDuo from "../assets/b61dd98e1c266dc0-WhatsApp_Image_2026-11-16_at_20_29_57.jpeg";
import imgBagBlack from "../assets/cfb06e20a575b30b-WhatsApp_Image_2026-11-16_at_18_54_44_2.jpeg";
import imgGocAlt from "../assets/06b4ee5ae704c3dc-WhatsApp_Image_2026-11-16_at_18_54_44_1.jpeg";
import imgKareAlt from "../assets/4a133cdf98bd6864-WhatsApp_Image_2026-11-16_at_18_54_43.jpeg";
import imgLivingSofa from "../assets/3c8596234219cadd-Gemini_Generated_Image_n8fuovn8fuovn8fu.jpg";
import imgRunnerTable from "../assets/b734caefff2a6d9e-Gemini_Generated_Image_n8fuovn8fuovn8fu_1.jpg";
import imgBagEntry from "../assets/b9ac0c1b88d107b1-Gemini_Generated_Image_n8fuovn8fuovn8fu_2.jpg";
import imgFullFlat from "../assets/4248d23782e10ebc-Gemini_Generated_Image_u02zlpu02zlpu02z.jpg";

export {
  imgGanos,
  imgMeric,
  imgSalon,
  imgCollage,
  imgBagDuo,
  imgBagBlack,
  imgGocAlt,
  imgKareAlt,
  imgLivingSofa,
  imgRunnerTable,
  imgBagEntry,
  imgFullFlat
};

export const livingLabel = (img: string): string | undefined => {
  if (img === imgLivingSofa) return "Yaşam Alanı / Salonda";
  if (img === imgRunnerTable) return "Yaşam Alanı / Sofrada";
  if (img === imgBagEntry) return "Yaşam Alanı / Girişte";
  if (img === imgFullFlat) return "Tam Seçki";
  return undefined;
};

export const products: Product[] = [
  { 
    id: "ganos-bel", 
    series: "Ganos Serisi", 
    name: "Zikzak Motifli Keçi Kılı Dikdörtgen Bel Yastığı", 
    category: "bel", 
    size: "35 x 55 cm", 
    weavingTime: "5–7 Gün El Tezgâhı", 
    motif: "Su Yolu & Usta Damgası", 
    price: 3250, 
    images: [imgLivingSofa, imgGanos, imgGocAlt, imgSalon], 
    optionsLabel: "Dolgu Seçeneği", 
    options: [
      { label: "Sadece Kılıf (Astarlı & Fermuarlı)", extraPrice: 0 }, 
      { label: "Silikon İç Dolgu Yastığı Dahil", extraPrice: 250 }
    ], 
    material: "%100 Doğal Keçi Kılı & Koyun Yünü Karışımı", 
    shortDesc: "Ham keçi kılı koyu kahve zemin üzerinde çift sıra Su Yolu zikzakları, mürdüm şeritler ve sağ alt köşede el işlemesi usta damgası.", 
    motifStory: "Üzerindeki zikzaklara Küçükyoncalı ustaları “Su Yolu” der; bedensel ve ruhsal sağlığı, saflığı ve yaşamın kesintisiz akışını simgeler. Köşedeki işlemesi dokuyan ustanın imzasıdır.",
    stockStatus: "in_stock",
    stockNote: "Atölyede Son 2 Adet Hazır Stok"
  },
  { 
    id: "kucukmanika-kare", 
    series: "Küçükmanika Serisi", 
    name: "Zeytin Yeşili & Mürdüm Şeritli Kare Kırlent", 
    category: "kare-dolay", 
    size: "45 x 45 cm", 
    weavingTime: "4–6 Gün El Tezgâhı", 
    motif: "Su Yolu & Göç Yolları", 
    price: 2950, 
    images: [imgKareAlt, imgMeric, imgSalon], 
    optionsLabel: "Dolgu Seçeneği", 
    options: [
      { label: "Sadece Kılıf (Astarlı & Fermuarlı)", extraPrice: 0 }, 
      { label: "Silikon İç Dolgu Yastığı Dahil", extraPrice: 250 }
    ], 
    material: "Doğal Keçi Kılı & Kök Boya Tonlu Yün", 
    shortDesc: "Zeytin yeşili dokuma zemin üzerinde mürdüm ve doğal ekru dikey şeritler, kenarlarında kabartmalı Su Yolu zikzak geçişleri.", 
    motifStory: "1875 Rumeli göç yollarını ve bereketli Trakya doğasını simgeleyen yatay-dikey şerit uyumu, klasik ve modern koltuk takımlarına derinlik katar.",
    stockStatus: "in_stock",
    stockNote: "Hemen Kargo / Stokta Mevcut"
  },
  { 
    id: "goc-yollari-bel", 
    series: "Göç Yolları Serisi", 
    name: "Mürdüm Çizgili Ham Ekru Keçi Kılı Bel Yastığı", 
    category: "bel", 
    size: "35 x 55 cm", 
    weavingTime: "3–5 Gün El Tezgâhı", 
    motif: "Göç Yolları & Sofra Şeridi", 
    price: 2850, 
    images: [imgGocAlt, imgGanos, imgMeric], 
    optionsLabel: "Dolgu Seçeneği", 
    options: [
      { label: "Sadece Kılıf (Astarlı & Fermuarlı)", extraPrice: 0 }, 
      { label: "Silikon İç Dolgu Yastığı Dahil", extraPrice: 250 }
    ], 
    material: "Boyasız Ham Keçi Kılı & Koyun Yünü", 
    shortDesc: "Doğal ham taş rengi keçi kılı dokuma ortasından geçen üçlü mürdüm ve koyu kahve sofra şeritli sade ve karakteristik tasarım.", 
    motifStory: "Balkanlar’dan Trakya’ya uzanan tarihi göç yolculuğunu simgeleyen “Göç Yolları” çizgisi, minimalist ve rustik mekânlar için dingin bir odak noktası sunar.",
    stockStatus: "made_to_order",
    stockNote: "Siparişe Özel Tezgâha Alınır (3–5 Gün)"
  },
  { 
    id: "kucukmanika-siyah-canta", 
    series: "Küçükmanika Serisi", 
    name: "Büzgülü Sırt & Omuz Çantası – Siyah Zemin Çiçek Motifli", 
    category: "aksesuar", 
    size: "34 x 40 cm", 
    weavingTime: "6–8 Gün El Tezgâhı", 
    motif: "Üç Güller & Pıtrak", 
    price: 3850, 
    images: [imgBagBlack, imgBagEntry, imgBagDuo, imgCollage], 
    optionsLabel: "Askı & Astar Detayı", 
    options: [
      { label: "Örgü Kordon Askılı & Pamuk Astarlı", extraPrice: 0 }
    ], 
    material: "Sık Dokuma Keçi Kılı & Yün Cicim İşleme", 
    shortDesc: "Koyu antrasit-siyah keçi kılı zemin üzerine kırmızı, hardal ve zeytin yeşili kabartma cicim çiçek motifleriyle dokunmuş büzgülü sırt ve omuz çantası.", 
    motifStory: "1875 Rumeli sandıklarından çıkan “Üç Güller” ve “Pıtrak” motifleri; sevinci, mutluluğu ve kötü gözlerden korunmayı simgeler. Kalın örgü büzgü ipleriyle hem sırt hem omuz çantası olarak kullanılır.",
    stockStatus: "in_stock",
    stockNote: "Atölyede Son 1 Adet Hazır"
  },
  { 
    id: "kucukmanika-ikili-canta", 
    series: "Küçükmanika Özel Koleksiyon", 
    name: "Büzgülü Çanta İkili Koleksiyon – Doğal Ekru & Siyah", 
    category: "aksesuar", 
    size: "2 Adet (34 x 40 cm)", 
    weavingTime: "12+ Gün El Tezgâhı", 
    motif: "Üç Güller & Bereket Dalları", 
    price: 6950, 
    images: [imgBagDuo, imgBagEntry, imgBagBlack, imgCollage], 
    optionsLabel: "Set İçeriği", 
    options: [
      { label: "1 Adet Ham Ekru + 1 Adet Siyah Çanta Seti", extraPrice: 0 }, 
      { label: "Sadece Doğal Ekru & Buz Mavisi Çanta (Tekli)", extraPrice: -3300 }
    ], 
    material: "Boyasız Ham Ekru & Koyu Keçi Kılı Dokuma", 
    shortDesc: "Boyasız doğal ekru üzerine buz mavisi-kahve çiçek dalları ve siyah zemin üzerine renkli cicim çiçek işlemeli ikili tasarım seti.", 
    motifStory: "Gündüz ve gece kombinleri için bir arada tasarlanan bu ikili set, geleneksel azık torbası formunun çağdaş şehir yaşamına uyarlanmış en zarif örneğidir.",
    stockStatus: "made_to_order",
    stockNote: "Siparişe Özel Çift Tezgâh (5–7 Gün)"
  },
  { 
    id: "gul-boncuk-runner", 
    series: "Hoşsohbet & Sofra Serisi", 
    name: "Gül Motifli ve Renkli Boncuk Püsküllü El Dokuma Runner", 
    category: "aksesuar", 
    size: "40 x 135 cm", 
    weavingTime: "6–8 Gün El Tezgâhı", 
    motif: "Üç Güller & Eli Belinde Bordür", 
    price: 4250, 
    images: [imgRunnerTable, imgCollage, imgSalon], 
    optionsLabel: "Kullanım Formu", 
    options: [
      { label: "Tek Parça Uzun Masa Runner (40x135 cm)", extraPrice: 0 }, 
      { label: "3’lü Amerikan Servis & Sehpa Örtüsü Seti", extraPrice: 650 }
    ], 
    material: "Doğal Keten-Yün Karışımlı El Dokuma & El Dizimi Boncuk", 
    shortDesc: "Ham ekru dokuma zemin üzerinde kabartma gül motifleri, yeşil ince şeritler ve uçlarında el emeği renkli boncuklu saçak püskülleri.", 
    motifStory: "Her bir püskül düğümüne tek tek renkli boncukların geçirildiği bu özel dokuma, Trakya çeyiz geleneğindeki misafirperverliği ve sofra bereketini yaşatır.",
    stockStatus: "in_stock",
    stockNote: "Atölyede Hazır Stok (Aynı Gün Kargo)"
  },
  { 
    id: "trakya-dolay", 
    series: "Trakya Serisi", 
    name: "Zeytin Yeşili & Mürdüm Dolay Silindir Yastık", 
    category: "kare-dolay", 
    size: "20 x 50 cm (Silindir)", 
    weavingTime: "4–6 Gün El Tezgâhı", 
    motif: "Göç Yolları & Su Yolu", 
    price: 3100, 
    images: [imgSalon, imgLivingSofa, imgKareAlt, imgMeric], 
    optionsLabel: "Dolgu Seçeneği", 
    options: [
      { label: "Silindir İç Dolgusu Dahil Kullanıma Hazır", extraPrice: 0 }, 
      { label: "Sadece Fermuarlı Kılıf", extraPrice: -250 }
    ], 
    material: "Doğal Keçi Kılı & Kök Boya Tonlu Yün", 
    shortDesc: "Geleneksel “Dolay Yastık” formunda; zeytin yeşili gövde, mürdüm şeritler ve kabartmalı ekru Su Yolu zikzak geçişleriyle berjer ve sedirler için.", 
    motifStory: "Eski Küçükyoncalı evlerinde sedir ve yer döşeklerinin baş köşesinde kullanılan “dolay yastık” formunun modern oturma gruplarına uyarlanmış halidir.",
    stockStatus: "in_stock",
    stockNote: "Hazır Stokta (Son 3 Adet)"
  },
  { 
    id: "meric-hardal", 
    series: "Meriç Serisi", 
    name: "Hardal Çizgili Ham Ekru Keçi Kılı Bel Yastığı", 
    category: "bel", 
    size: "35 x 55 cm", 
    weavingTime: "3–4 Gün El Tezgâhı", 
    motif: "Elif & İnce Sofra Çizgileri", 
    price: 2750, 
    images: [imgMeric, imgKareAlt, imgGanos], 
    optionsLabel: "Dolgu Seçeneği", 
    options: [
      { label: "Sadece Kılıf (Astarlı & Fermuarlı)", extraPrice: 0 }, 
      { label: "Silikon İç Dolgu Yastığı Dahil", extraPrice: 250 }
    ], 
    material: "Boyasız Ham Ekru Keçi Kılı & Yün", 
    shortDesc: "Boyasız doğal ekru dokuma üzerine Trakya ayçiçeği sarısı (hardal) ve ince antrasit/yeşil yatay çizgilerle dingin ve modern tasarım.", 
    motifStory: "İskandinav, minimal ve bohem dekorasyonlarla kusursuz uyum sağlayan bu dokuma, doğruluk ve sadeliği temsil eden ince çizgi ritmiyle hazırlanmıştır.",
    stockStatus: "in_stock",
    stockNote: "Hazır Stok"
  },
  { 
    id: "kucukmanika-heybe-omuz", 
    series: "Küçükmanika Miras Serisi", 
    name: "Çift Yüzlü Keçi Kılı & Cicim Omuz Heybesi", 
    category: "aksesuar", 
    size: "36 x 42 cm", 
    weavingTime: "7–9 Gün El Tezgâhı", 
    motif: "Pıtrak, Koçboynuzu & Bereket Dalları", 
    price: 4450, 
    images: [imgBagBlack, imgBagEntry, imgBagDuo, imgCollage], 
    optionsLabel: "İç Detay Seçeneği", 
    options: [
      { label: "Örgü Omuz Askılı & Pamuk Astarlı", extraPrice: 0 }, 
      { label: "Fermuarlı İç Cepli Özel Seri", extraPrice: 250 }
    ], 
    material: "Doğal Keçi Kılı & Kök Boyalı Yün Cicim", 
    shortDesc: "Geleneksel Rumeli azık heybesi formundan esinlenen, koyu keçi kılı ön yüzü ve ham ekru yan/arka dokumasıyla günlük kullanıma uygun omuz çantası.", 
    motifStory: "1875 yılında göç eden ninelerimizin sandıklarından çıkarılan pıtrak ve bereket dalları motifleriyle bezeli özgün tasarım.",
    stockStatus: "made_to_order",
    stockNote: "Siparişe Özel Üretim (5–8 Gün)"
  },
  { 
    id: "neri-tam-koleksiyon-set", 
    series: "Küçükyoncalı İmza Koleksiyon", 
    name: "Neri Home Tam Koleksiyon & Salon Seti", 
    category: "set", 
    size: "3 Kırlent + 1 Dolay Yastık", 
    weavingTime: "14+ Gün Usta İşçiliği", 
    motif: "Su Yolu, Göç Yolları & Koçboynuzu", 
    price: 10850, 
    images: [imgFullFlat, imgLivingSofa, imgCollage, imgGanos, imgSalon], 
    optionsLabel: "Set Paket Seçeneği", 
    options: [
      { label: "4’lü Salon Yastık Seti (Kılıf Olarak)", extraPrice: 0 }, 
      { label: "4’lü Salon Yastık Seti (İç Dolgular Dahil)", extraPrice: 850 }
    ], 
    material: "%100 Doğal Keçi Kılı & Yapağı Yün (Astarlı)", 
    shortDesc: "Ganos bel yastığı, Küçükmanika kare kırlent, bordo-yeşil motifli kırlent ve zeytin yeşili dolay silindir yastıktan oluşan prestijli salon seti.", 
    motifStory: "Tekirdağ Saray Küçükyoncalı atölyemizin en seçkin dört parçasını tek sepette buluşturan bu set, yaşam alanınıza 200 yıllık Rumeli-Anadolu dokuma ruhunu taşır.",
    stockStatus: "made_to_order",
    stockNote: "Özel Sandık Kutulu & Sertifikalı (7–10 Gün)"
  }
];
