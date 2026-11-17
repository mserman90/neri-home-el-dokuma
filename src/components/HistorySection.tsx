import React from "react";

export const HistorySection: React.FC = () => {
  const steps = [
    {
      y: "1875 • Büyük Rumeli Göçü",
      t: "Balkanlar’dan Tekirdağ’a Yolculuk",
      d: "Aileler, çeyiz sandıklarında sakladıkları asırlık motifleri, tezgâh hafızalarını ve yaşama umutlarını Tekirdağ Saray Küçükyoncalı’ya (tarihi adıyla Küçükmanika) taşıdı.",
    },
    {
      y: "Sandıkların Sessiz Dili",
      t: "İlmeklere Dönüşen Dualar",
      d: "Su Yolu, Göç Yolları, Pıtrak ve Üç Güller motifleri; sevinçleri, koruyucu inançları ve misafirperverliği anlatmak üzere genç kızların ve annelerin ellerinde dokundu.",
    },
    {
      y: "Bugün • Yaşayan Kadın Atölyesi",
      t: "Kadın Ustaların Ahşap Tezgâhı",
      d: "Aynı motifler, Tekirdağ Saray atölyemizde Neriman Çakır öncülüğündeki kadın dokuma ustalarımızın ellerinde boyasız keçi kılı ve yünle modern evlere yeniden can veriyor.",
    },
  ];

  return (
    <section id="hikayemiz" className="py-16 sm:py-24 bg-[var(--surface-2)] border-y border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Kolon: Zaman Çizelgesi */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)]">
              1875 Mirasımız
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
              Hikâyemiz: Sandıktan Tezgâha
            </h2>
            <p className="mt-3 text-sm sm:text-base opacity-80 leading-relaxed">
              Neri Home, bir çeyiz sandığının sessiz dilini bugünün çağdaş yaşam alanlarına taşıma arzusuyla kuruldu. Her dokuma, sabrın, göç yolculuğunun ve kadın emeğinin devamıdır.
            </p>

            <ol className="mt-8 space-y-0">
              {steps.map((s) => (
                <li
                  key={s.y}
                  className="relative pl-10 pb-8 border-l-2 border-[var(--brass)]/50 last:pb-0"
                >
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--plum)] border-2 border-[var(--surface)]" />
                  <p className="text-xs font-bold text-[var(--plum)] uppercase tracking-wider">
                    {s.y}
                  </p>
                  <h3 className="font-serif-display text-2xl font-bold mt-0.5">{s.t}</h3>
                  <p className="text-sm opacity-80 mt-1.5 leading-relaxed">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Sağ Kolon: Atölye Kartı */}
          <div className="rounded-3xl border border-[var(--line)] shadow-xl bg-[var(--card)] p-4 sm:p-5">
            <div className="w-full aspect-[4/3] rounded-2xl bg-[var(--surface-2)] flex flex-col items-center justify-center gap-3 text-center px-6 py-8 border border-[var(--line)]">
              <div className="w-14 h-14 rounded-full bg-[var(--plum)] text-white flex items-center justify-center font-serif-display text-xl font-bold shadow">
                1875
              </div>
              <p className="font-serif-display text-3xl font-bold text-[var(--ink)]">
                Küçükyoncalı Atölyesi
              </p>
              <p className="text-sm opacity-80 max-w-sm leading-relaxed">
                Ahşap tezgâhta, her santimetresi hesaplanarak devam eden kadim dokuma geleneği. Kadın üreticilerimizin emeğini doğrudan evinizde yaşatın.
              </p>
              <p className="text-xs font-bold text-[var(--plum)] uppercase tracking-widest mt-1">
                Saray • Tekirdağ
              </p>
            </div>
            <div className="px-3 py-3.5 flex justify-between items-center text-xs opacity-80">
              <span className="font-semibold">Neri Home Kadın Dokuma İnisiyatifi</span>
              <span>Küçükyoncalı Mahallesi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
