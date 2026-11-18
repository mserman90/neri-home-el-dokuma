export interface PressItem {
  id: string;
  source: string;
  badge: string;
  badgeEn: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  quote?: string;
  quoteEn?: string;
  date: string;
  dateEn: string;
  url: string;
}

export const GOOGLE_NEWS_QUERY_URL =
  "https://news.google.com/search?q=k%C3%BC%C3%A7%C3%BCkyoncal%C4%B1%20el%20dokuma&hl=tr&gl=TR&ceid=TR%3Atr";

export const pressItems: PressItem[] = [
  {
    id: "aa-cicim-miras",
    source: "Anadolu Ajansı (AA) & T.C. İletişim Başkanlığı",
    badge: "Ulusal Haber Ajansı",
    badgeEn: "National News Agency",
    title: "Tekirdağlı kadınlar asırlık 'cicim' dokumasını geleceğe taşıyor",
    titleEn: "Women of Tekirdağ carry century-old 'cicim' weaving into the future",
    summary:
      "Tekirdağ’ın Saray ilçesine bağlı Küçükyoncalı Mahallesi’nde kadınlar, sandıklardan çıkan 100 ila 200 yıllık yorgan ve heybelerdeki tarihi motifleri ahşap tezgâhlara aktararak kaybolmaya yüz tutan geleneksel cicim dokuma sanatını yeniden canlandırıyor.",
    summaryEn:
      "In Küçükyoncalı, artisan women revive the endangered traditional cicim weaving art by transferring 100-to-200-year-old historic chest motifs onto authentic wooden handlooms.",
    quote:
      "Sandıklardan çıkan asırlık yorgan, döşek ve heybe örnekleri incelenerek Su Yolu, Elibelinde, Koçboynuzu ve Göç Yolları motifleri yeniden hayat buluyor.",
    quoteEn:
      "Examining century-old chest heirlooms, motifs like Waterway, Hands-on-Hips, Ram's Horn, and Migration Routes come alive once again.",
    date: "2024",
    dateEn: "2024",
    url: GOOGLE_NEWS_QUERY_URL,
  },
  {
    id: "trt-dokuyan-eller",
    source: "TRT Haber & Ensonhaber",
    badge: "Ulusal Medya & Kültür-Sanat",
    badgeEn: "National Media & Arts",
    title: "Sandıklardan çıkan 200 yıllık miras: Küçükyoncalı Dokuyan Eller",
    titleEn: "200-year heritage from dowry chests: The Weaving Hands of Küçükyoncalı",
    summary:
      "Keşkek Festivali hazırlıklarında açılan asırlık sandıklardan gün yüzüne çıkan Rumeli göç mirası kumaşlar; usta ellerde kırlent, çanta, heybe ve masa örtüsü olarak günümüz modern ev dekorasyonuna kazandırılıyor.",
    summaryEn:
      "Unearthed during local festival preparations from two-century-old dowry chests, Rumelian migration textile patterns are transformed into contemporary heirloom cushions and bags.",
    quote:
      "Geleneksel motifler hem kültürel mirası koruyor hem de mahalledeki kadınların ekonomik üretime katılmasını sağlıyor.",
    quoteEn:
      "Traditional patterns preserve living cultural memory while empowering village women in sustainable economic artisan craft.",
    date: "2024",
    dateEn: "2024",
    url: GOOGLE_NEWS_QUERY_URL,
  },
  {
    id: "trakyaka-cografi-isaret",
    source: "Trakya Kalkınma Ajansı (TRAKYAKA)",
    badge: "Resmi Kurum & Coğrafi İşaret",
    badgeEn: "Official Provenance & GI",
    title: "Küçükyoncalı Dokuması İçin Coğrafi İşaret ve Tescil Protokolü İmzalandı",
    titleEn: "Geographical indication and registration protocol signed for Küçükyoncalı Weaving",
    summary:
      "Trakya Kalkınma Ajansı, Çerkezköy Ticaret ve Sanayi Odası ve Saray Belediyesi iş birliğiyle; Küçükyoncalı el dokumasının tescillenmesi, kök boyalı yün tekniklerinin korunması ve kadın istihdamına destek amacıyla resmi protokol imzalandı.",
    summaryEn:
      "Under the partnership of Thrace Development Agency and Saray Municipality, an official geographical indication protocol was signed to certify Küçükyoncalı weaving standards.",
    quote:
      "Trakya'nın kültürel zenginliğini simgeleyen Küçükyoncalı cicim dokuması resmi tescil ile koruma altına alınıyor.",
    quoteEn:
      "Representing the cultural richness of Thrace, Küçükyoncalı cicim weaving is officially safeguarded through geographic origin protection.",
    date: "2023 - 2024",
    dateEn: "2023 - 2024",
    url: GOOGLE_NEWS_QUERY_URL,
  },
  {
    id: "marmara-haber-kultur-elcisi",
    source: "Marmara Haber & Yerel Basın",
    badge: "Bölgesel Basın & Sosyal Kalkınma",
    badgeEn: "Regional Press & Community",
    title: "Küçükyoncalı'nın Dokuyan Elleri Trakya'nın Kültür Elçisi Oldu",
    titleEn: "Weaving Hands of Küçükyoncalı become Thrace's cultural ambassadors",
    summary:
      "Kök boyalı saf yün iplikler ve el tezgâhlarında sabırla dokunan kırlent, runner ve büzgülü çantalar; hem Türkiye genelindeki prestijli iç mimari projelerinde hem de uluslararası tasarım çevrelerinde büyük ilgiyle karşılanıyor.",
    summaryEn:
      "Naturally dyed wool cushions, runners, and drawstring bags woven patiently on timber looms gain distinguished attention in interior design and heritage craft circles.",
    quote:
      "Kadınların sabır ve el emeğiyle dokuduğu her bir parça, geçmişin ruhunu bugünün estetiğiyle buluşturuyor.",
    quoteEn:
      "Every piece woven with artisan patience and natural fiber connects ancestral soul to modern spaces.",
    date: "2024",
    dateEn: "2024",
    url: GOOGLE_NEWS_QUERY_URL,
  },
];
