import React, { useState } from 'react';
import {
  SCHOOL_CONTACT,
  SCHOOL_IMAGES,
  SCHOOL_PROJECTS,
  SCHOOL_EVENTS_CALENDAR,
} from '../data/schoolData';

interface SchoolOverviewProps {
  onNavigateTab: (tab: string) => void;
}

export const SchoolOverview: React.FC<SchoolOverviewProps> = ({ onNavigateTab }) => {
  const [selectedBuilding, setSelectedBuilding] = useState<'all' | 'piastow' | 'dzierzonia'>('all');

  return (
    <div className="space-y-16">
      {/* Sekcja 1: O szkole i dwa budynki */}
      <section className="border-b border-stone-200 pb-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-stone-500 mb-2">
              01. Struktura organizacyjna · Dwie lokalizacje w Mysłowicach
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight">
              Szkoła z tradycją i oddziałami dwujęzycznymi
            </h2>
          </div>
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 border border-[#1E3A8A]/20 rounded-lg self-start">
            <button
              onClick={() => setSelectedBuilding('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedBuilding === 'all'
                  ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-[#1E3A8A]'
              }`}
            >
              Oba budynki
            </button>
            <button
              onClick={() => setSelectedBuilding('piastow')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedBuilding === 'piastow'
                  ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-[#1E3A8A]'
              }`}
            >
              ul. Piastów Śląskich 8
            </button>
            <button
              onClick={() => setSelectedBuilding('dzierzonia')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedBuilding === 'dzierzonia'
                  ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-[#1E3A8A]'
              }`}
            >
              ul. Dzierżonia 26
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base text-stone-700 leading-relaxed max-w-prose">
              Szkoła Podstawowa nr 15 z Oddziałami Dwujęzycznymi im. Alfreda Szklarskiego w Mysłowicach
              łączy kameralną, bezpieczną atmosferę edukacji wczesnoszkolnej z nowoczesnym kształceniem
              przedmiotowym i językowym w klasach starszych. Zajęcia dydaktyczne odbywają się w dwóch
              dostosowanych do wieku uczniów budynkach.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {SCHOOL_CONTACT.buildings
                .filter((b) => selectedBuilding === 'all' || b.id === selectedBuilding)
                .map((b) => (
                  <div
                    key={b.id}
                    className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 flex flex-col justify-between shadow-xs hover:border-[#1E3A8A] transition-all"
                  >
                    <div>
                      <div className="mb-2">
                        <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-md border border-[#1E3A8A]/25">
                          {b.id === 'piastow' ? 'Budynek I (Klasy I–III)' : 'Budynek II (Klasy IV–VIII)'}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-stone-900 mb-3">{b.name}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed mb-5">{b.classesInfo}</p>
                    </div>
                    <dl className="border-t border-[#1E3A8A]/20 pt-4 space-y-2 text-xs">
                      <div className="flex justify-between gap-2">
                        <dt className="text-stone-500">Adres:</dt>
                        <dd className="font-medium text-stone-900 text-right">{b.address}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-stone-500">Telefon sekretariatu:</dt>
                        <dd className="font-bold text-[#1E3A8A]">{b.phone}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-stone-500">Godziny sekretariatu:</dt>
                        <dd className="text-stone-800 font-medium">{b.secretaryHours}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
            </div>

            <div className="bg-[#1E3A8A]/5 border-2 border-[#1E3A8A]/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#1E3A8A] text-white rounded-md">
                  Wyróżnik SP15
                </span>
                <h3 className="text-lg font-semibold text-stone-900">
                  Oddziały Dwujęzyczne z językiem angielskim
                </h3>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                Jako jedyna szkoła podstawowa w tej części miasta prowadzimy oddziały dwujęzyczne,
                w których nauczanie języka angielskiego odbywa się w zwiększonym wymiarze godzin,
                a wybrane przedmioty przyrodnicze i ścisłe realizowane są metodą CLIL (zintegrowanego
                kształcenia przedmiotowo-językowego).
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700">
                <span className="px-2 py-1 rounded-md bg-white border border-[#1E3A8A]/20 font-medium">Zwiększony wymiar j. angielskiego</span>
                <span aria-hidden="true" className="text-stone-400">·</span>
                <span className="px-2 py-1 rounded-md bg-white border border-[#1E3A8A]/20 font-medium">Drugi język: j. niemiecki</span>
                <span aria-hidden="true" className="text-stone-400">·</span>
                <span className="px-2 py-1 rounded-md bg-white border border-[#1E3A8A]/20 font-medium">Bezpłatne podręczniki MEN</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-200 rounded-xl overflow-hidden border-2 border-[#1E3A8A]/30 shadow-xs aspect-4/3 relative">
              <img
                src={SCHOOL_IMAGES.classroomActivities}
                alt="Jasna sala lekcyjna w Szkole Podstawowej nr 15 w Mysłowicach"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-stone-500 italic">
              Pracownie edukacji wczesnoszkolnej i językowej wyposażone w pomoce dydaktyczne w ramach projektów europejskich.
            </p>
          </div>
        </div>
      </section>

      {/* Sekcja 2: Patron Szkoły Alfred Szklarski */}
      <section className="border-b border-stone-200 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="bg-stone-200 rounded-xl overflow-hidden border-2 border-[#1E3A8A]/30 shadow-xs aspect-4/3">
              <img
                src={SCHOOL_IMAGES.patronBooks}
                alt="Książki podróżnicze, kompas i mapa symbolizujące patrona szkoły Alfreda Szklarskiego"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-stone-500 italic mt-2">
              Patron szkoły: Alfred Szklarski (1912–1992) — autor cyklu powieści o przygodach Tomka Wilmowskiego.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-medium text-[#1E3A8A]">
              02. Patron naszej szkoły · Literatura, geografia i ciekawość świata
            </p>
            <h2 className="text-3xl font-semibold text-stone-900 tracking-tight">
              Alfred Szklarski — przewodnik młodych odkrywców
            </h2>
            <p className="text-base text-stone-700 leading-relaxed max-w-prose">
              Nasza szkoła nosi imię <strong>Alfreda Szklarskiego (1912–1992)</strong> — wybitnego pisarza
              związanego z Górnym Śląskiem, kawalera Orderu Uśmiechu oraz twórcy słynnej dziewięciotomowej
              serii podróżniczo-przygodowej o Tomku Wilmowskim i trylogii <em>Złoto Gór Czarnych</em>.
            </p>
            <blockquote className="border-l-4 border-l-[#1E3A8A] bg-[#1E3A8A]/5 border-y border-r border-[#1E3A8A]/20 rounded-r-xl p-5 text-base sm:text-lg font-medium italic text-stone-800">
              „Poznawanie świata zaczyna się od odwagi zadawania pytań, szacunku dla innych kultur
              i wierności przyjaciołom w każdej podróży.”
            </blockquote>
            <p className="text-sm text-stone-600 leading-relaxed max-w-prose">
              Postać patrona inspiruje naszych uczniów do nauki języków obcych, poznawania geografii
              i przyrody kontynentów oraz aktywnego udziału w konkursach czytelniczych i historycznych
              organizowanych przez bibliotekę szkolną.
            </p>
          </div>
        </div>
      </section>

      {/* Sekcja 3: Projekty Unijne i Rządowe */}
      <section className="border-b border-stone-200 pb-14">
        <div className="mb-8">
          <p className="text-xs font-medium text-[#1E3A8A] mb-2">
            03. Rozwój i fundusze zewnętrzne · Realizowane programy
          </p>
          <h2 className="text-3xl font-semibold text-stone-900 tracking-tight">
            Projekty edukacyjne, unijne i rządowe
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCHOOL_PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className={`bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 flex flex-col justify-between shadow-xs hover:border-[#1E3A8A] transition-all ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-[#1E3A8A] px-2 py-0.5 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20">{project.fundingSource}</span>
                  <span aria-hidden="true">·</span>
                  <span>Okres: {project.period}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-700 font-medium">Status: {project.status}</span>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">{project.title}</h3>
                <p className="text-sm text-stone-700 leading-relaxed mb-4 max-w-3xl">
                  {project.summary}
                </p>
                <ul className="space-y-1.5 border-t border-[#1E3A8A]/20 pt-4 text-xs text-stone-600">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1E3A8A] select-none font-bold">—</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sekcja 4: Kalendarz roku szkolnego i wydarzeń */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-medium text-[#1E3A8A] mb-2">
              04. Organizacja roku szkolnego 2026/2027 · Wydarzenia
            </p>
            <h2 className="text-3xl font-semibold text-stone-900 tracking-tight">
              Kalendarz uroczystości i wydarzeń szkolnych
            </h2>
          </div>
          <button
            onClick={() => onNavigateTab('rodzice')}
            className="text-xs font-semibold text-[#1E3A8A] hover:underline self-start sm:self-auto whitespace-nowrap cursor-pointer"
          >
            Zobacz godziny dzwonków i świetlicy →
          </button>
        </div>

        <div className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl overflow-hidden shadow-xs">
          <div className="divide-y divide-stone-200">
            {SCHOOL_EVENTS_CALENDAR.map((ev, index) => (
              <div
                key={index}
                className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-blue-50/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="text-xs font-bold text-[#1E3A8A] sm:w-56 shrink-0">
                    {ev.date}
                  </span>
                  <span className="text-sm font-medium text-stone-900">{ev.title}</span>
                </div>
                <span className="text-xs text-stone-500 shrink-0 bg-stone-100 px-2.5 py-1 rounded-md">{ev.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
