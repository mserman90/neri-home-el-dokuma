import React, { useState } from "react";
import { Check, Clock, Send } from "lucide-react";
import { waLink } from "../utils/formatters";
import { storage } from "../utils/storage";

export const CustomOrderSection: React.FC = () => {
  const [formName, setFormName] = useState("");
  const [formType, setFormType] = useState("Kurumsal Logolu Dokuma");
  const [formNote, setFormNote] = useState("");
  const [formResult, setFormResult] = useState<{ saved: boolean; msg: string } | null>(null);
  const [formBusy, setFormBusy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formNote.trim()) {
      setFormResult({ saved: false, msg: "Lütfen ad/firma ve not alanlarını eksiksiz doldurun." });
      return;
    }

    setFormBusy(true);

    const orderData = {
      name: formName.trim(),
      type: formType,
      note: formNote.trim(),
      createdAt: new Date().toISOString(),
    };

    const savedOrders = storage.get<unknown[]>("neri_custom_orders", []);
    storage.set("neri_custom_orders", [...savedOrders, orderData]);

    setFormResult({
      saved: true,
      msg: "Talebiniz kaydedildi. WhatsApp üzerinden doğrudan Neriman Çakır'a iletiliyor…",
    });
    setFormBusy(false);

    const msg = `Merhaba Neriman Hanım, Neri Home üzerinden Özel / Kurumsal Dokuma teklifi almak istiyorum:\n\nAd / Firma: ${formName.trim()}\nTalep Türü: ${formType}\nDetay & Ölçü: ${formNote.trim()}`;
    window.open(waLink(msg), "_blank", "noopener");

    setFormName("");
    setFormNote("");
  };

  return (
    <section id="ozel-siparis" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[var(--ink)] text-[var(--surface)] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-[var(--brass)]/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sol Kolon: Açıklama */}
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--plum)] text-xs font-semibold">
              B2B & Kişiye Özel Atölye Üretimi
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold">
              Kurumsal Hediyelik & İsim/Logo Dokuma
            </h2>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Küçükyoncalı ustalarımız geleneksel tezgâhlarda yalnızca klasik motifleri değil; <strong>şirket logonuzu, kurum adınızı veya sevdiklerinizin ismini</strong> de ilmek ilmek dokuyabilmektedir.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm opacity-85">
              <li className="flex gap-2.5">
                <Check className="w-4 h-4 text-[var(--mustard)] shrink-0 mt-0.5" />
                <span>VIP kurumsal hediye setleri (Logolu bardak altlığı, laptop kılıfı, duvar panosu)</span>
              </li>
              <li className="flex gap-2.5">
                <Check className="w-4 h-4 text-[var(--mustard)] shrink-0 mt-0.5" />
                <span>İç mimarlar, butik oteller ve restoranlar için özel ölçü kırlent & sedir minderleri</span>
              </li>
              <li className="flex gap-2.5">
                <Check className="w-4 h-4 text-[var(--mustard)] shrink-0 mt-0.5" />
                <span>Çeyiz ve yeni ev hediyeleri için isme özel köşe damgalı dokumalar</span>
              </li>
            </ul>
            <p className="text-xs opacity-70 flex items-center gap-2 pt-2">
              <Clock className="w-4 h-4 text-[var(--mustard)]" /> Özel dokumalar boyut ve adede göre 3–10 günde tamamlanır.
            </p>
          </div>

          {/* Sağ Kolon: Form */}
          <div className="lg:col-span-6 bg-[var(--surface)] text-[var(--ink)] p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="font-serif-display text-2xl font-bold mb-3">Özel Dokuma Talebi Oluştur</h3>
            <form onSubmit={handleSubmit} className="space-y-3.5 text-sm" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="custom-name" className="block text-xs font-semibold mb-1">
                    Adınız / Firma Adı *
                  </label>
                  <input
                    id="custom-name"
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Örn: Ayşe Yılmaz / Mimarlık Ofisi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] text-xs focus:outline-none focus:ring-2 focus:ring-[var(--mustard)]"
                  />
                </div>
                <div>
                  <label htmlFor="custom-type" className="block text-xs font-semibold mb-1">
                    Talep Türü *
                  </label>
                  <select
                    id="custom-type"
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] text-xs focus:outline-none focus:ring-2 focus:ring-[var(--mustard)]"
                  >
                    <option>Kurumsal Logolu Dokuma</option>
                    <option>İsme Özel Kırlent / Çeyiz</option>
                    <option>Butik Otel / Mimari Proje (Toplu)</option>
                    <option>Özel Ölçü Yolluk / Kilim</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="custom-note" className="block text-xs font-semibold mb-1">
                  Dokunmasını İstediğiniz İsim, Ölçü veya Notunuz *
                </label>
                <textarea
                  id="custom-note"
                  rows={3}
                  required
                  value={formNote}
                  onChange={(e) => setFormNote(e.target.value)}
                  placeholder="Örn: 10 adet logolu bardak altlığı ve 4 adet 40x60 cm bel yastığı için fiyat almak istiyorum."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] text-xs focus:outline-none focus:ring-2 focus:ring-[var(--mustard)]"
                />
              </div>

              <button
                type="submit"
                disabled={formBusy}
                className="w-full py-3.5 rounded-xl bg-[var(--olive)] hover:bg-[var(--olive-dark)] text-white font-semibold transition flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
              >
                <Send className="w-4 h-4" />{" "}
                {formBusy ? "Talebiniz Kaydediliyor…" : "Talebi Kaydet ve WhatsApp ile Teklif Sor"}
              </button>

              {formResult && (
                <div
                  role="status"
                  className={`rounded-xl p-3 text-xs border ${
                    formResult.saved
                      ? "bg-green-50/50 dark:bg-green-950/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800"
                      : "bg-red-50/50 dark:bg-red-950/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800"
                  }`}
                >
                  {formResult.msg}
                </div>
              )}

              <p className="text-[11px] opacity-70">
                Talebiniz öncelikle sisteme kaydedilir, ardından doğrudan WhatsApp üzerinden Neriman Çakır'a yönlendirilir.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
