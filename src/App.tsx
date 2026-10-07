import React, { useState } from 'react';
import {
  SCHOOL_CONTACT,
  SCHOOL_IMAGES,
  NEWS_ITEMS,
  SCHOOL_DOCUMENTS,
  BELL_SCHEDULE,
  NewsItem,
  SchoolDocument,
} from './data/schoolData';
import { SchoolOverview } from './components/SchoolOverview';
import { ParentsStudentsSection } from './components/ParentsStudentsSection';
import { StaffAndDocsSection } from './components/StaffAndDocsSection';
import { ContactSection } from './components/ContactSection';

type MainTab = 'start' | 'o-szkole' | 'rodzice' | 'kadra-dokumenty' | 'kontakt';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('start');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<SchoolDocument | null>(null);
  const [isEdupageModalOpen, setIsEdupageModalOpen] = useState(false);
  const [edupageLogin, setEdupageLogin] = useState('');
  const [edupagePass, setEdupagePass] = useState('');
  const [edupageNotice, setEdupageNotice] = useState('');
  const [newsFilter, setNewsFilter] = useState<string>('Wszystkie');

  const handleNavigateTab = (tab: string) => {
    setActiveTab(tab as MainTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDocById = (docId: string) => {
    const found = SCHOOL_DOCUMENTS.find((d) => d.id === docId);
    if (found) {
      setSelectedDoc(found);
    }
  };

  const handleDownloadDocumentText = (doc: SchoolDocument) => {
    const textContent = [
      SCHOOL_CONTACT.fullName,
      'ul. Piastów Śląskich 8 / ul. Dzierżonia 26, 41-408 Mysłowice',
      '====================================================================',
      `DOKUMENT: ${doc.title}`,
      `KOD DOKUMENTU: ${doc.fileCode} | AKTUALIZACJA: ${doc.updatedAt}`,
      '--------------------------------------------------------------------',
      '',
      'OPIS DOKUMENTU:',
      doc.description,
      '',
      'KLUCZOWE POSTANOWIENIA I INFORMACJE:',
      ...doc.keyPoints.map((pt, idx) => `${idx + 1}. ${pt}`),
      '',
      '--------------------------------------------------------------------',
      `Sekretariat ul. Piastów Śląskich 8: tel. 32 222 47 18 (7:30 - 15:30)`,
      `Sekretariat ul. Dzierżonia 26: tel. 32 222 32 85 (7:00 - 15:00)`,
      `E-mail: ${SCHOOL_CONTACT.emailPrimary}`,
    ].join('\n');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.id}_SP15_Myslowice.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const categories = ['Wszystkie', 'Profilaktyka i wychowanie', 'Stołówka szkolna', 'Rekrutacja', 'Życie szkoły', 'Dla rodziców'];
  const visibleNews =
    newsFilter === 'Wszystkie'
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === newsFilter);

  const leadNews = visibleNews[0] || NEWS_ITEMS[0];
  const secondaryNews = visibleNews.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900">
      {/* TOP BAR CONTRACT: One row, 3 zones (Brand wordmark | 5 Nav links | 1 Primary action) */}
      <header className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-xs border-b border-[#1E3A8A]/20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavigateTab('start')}
            className="text-lg sm:text-xl font-display font-semibold tracking-tight text-stone-900 text-left whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A] inline-block shrink-0"></span>
            <span>SP nr 15 w Mysłowicach</span>
          </button>

          {/* Zone 2: 5 single-line navigation links */}
          <nav aria-label="Główna nawigacja" className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {[
              { id: 'start', label: 'Aktualności' },
              { id: 'o-szkole', label: 'O szkole' },
              { id: 'rodzice', label: 'Dla rodziców' },
              { id: 'kadra-dokumenty', label: 'Kadra i dokumenty' },
              { id: 'kontakt', label: 'Kontakt' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigateTab(item.id)}
                className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-[#1E3A8A] border-[#1E3A8A] font-semibold'
                    : 'border-transparent hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setEdupageNotice('');
                setIsEdupageModalOpen(true);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1E3A8A] border border-[#1E3A8A] rounded-lg hover:bg-[#172e6e] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
            >
              Dziennik EduPage
            </button>
          </div>
        </div>

        {/* Nawigacja mobilna / tabletowa */}
        <div className="lg:hidden border-t border-stone-200 px-4 py-2 flex items-center gap-2 overflow-x-auto bg-stone-100/80">
          {[
            { id: 'start', label: 'Aktualności' },
            { id: 'o-szkole', label: 'O szkole' },
            { id: 'rodzice', label: 'Dla rodziców' },
            { id: 'kadra-dokumenty', label: 'Kadra i dokumenty' },
            { id: 'kontakt', label: 'Kontakt' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigateTab(item.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                activeTab === item.id
                  ? 'bg-white text-[#1E3A8A] border border-[#1E3A8A]/30 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* OPERATIONAL UTILITY RIBBON (Kluczowe informacje operacyjne na jednym pasku) */}
      <div className="bg-stone-900 text-stone-200 border-b-2 border-[#1E3A8A] text-xs">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-stone-400">Budynek I:</span>
            <span className="font-semibold text-white">ul. Piastów Śląskich 8</span>
            <span className="text-stone-300 font-normal tracking-wide">(tel. 32 222 47 18 · 7:30–15:30)</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-400">Budynek II:</span>
            <span className="font-semibold text-white">ul. Dzierżonia 26</span>
            <span className="text-stone-300 font-normal tracking-wide">(tel. 32 222 32 85 · 7:00–15:00)</span>
          </div>
          <div className="flex items-center gap-3 text-stone-300 font-normal tracking-wide">
            <span>E-mail: {SCHOOL_CONTACT.emailPrimary}</span>
          </div>
        </div>
      </div>

      {/* GŁÓWNA ZAWARTOŚĆ STRONY */}
      <main className="flex-1 max-w-[1240px] w-full mx-auto px-4 sm:px-8 py-10 sm:py-14">
        {activeTab === 'start' && (
          <div className="space-y-16">
            {/* INSTITUTIONAL HERO SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center border-b border-stone-200 pb-14">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                  <span className="px-2 py-0.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] font-medium border border-[#1E3A8A]/20">
                    Publiczna Szkoła Podstawowa
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] font-medium border border-[#1E3A8A]/20">
                    Oddziały Dwujęzyczne
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Mysłowice</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-stone-900 leading-[1.15] tracking-tight">
                  Szkoła Podstawowa nr 15 z Oddziałami Dwujęzycznymi im. Alfreda Szklarskiego w Mysłowicach
                </h1>

                <p className="text-base text-stone-700 leading-relaxed max-w-prose">
                  Miejsce bezpiecznej nauki, wszechstronnego rozwoju i otwartości na świat. Kształcimy
                  uczniów w klasach I–VIII w dwóch budynkach przy ul. Piastów Śląskich 8 oraz ul.
                  Dzierżonia 26, zapewniając opiekę świetlicową, domową stołówkę, wsparcie
                  specjalistów oraz naukę w oddziałach dwujęzycznych.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    onClick={() => handleNavigateTab('rodzice')}
                    className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-[#172e6e] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                  >
                    Strefa rodzica, świetlica i obiady
                  </button>
                  <button
                    onClick={() => handleNavigateTab('kadra-dokumenty')}
                    className="px-4 py-2.5 text-xs sm:text-sm font-medium text-[#1E3A8A] bg-white border-2 border-[#1E3A8A]/30 rounded-lg hover:bg-[#1E3A8A]/5 hover:border-[#1E3A8A] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Kadra pedagogiczna i dokumenty
                  </button>
                </div>

                <div className="pt-4 border-t border-[#1E3A8A]/20 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs bg-[#1E3A8A]/5 p-4 rounded-xl border border-[#1E3A8A]/20">
                  <div>
                    <div className="text-stone-500 font-medium">Dyrektor szkoły</div>
                    <div className="font-semibold text-stone-900 mt-0.5 text-sm">{SCHOOL_CONTACT.director}</div>
                  </div>
                  <div>
                    <div className="text-stone-500 font-medium">Wicedyrektor</div>
                    <div className="font-semibold text-stone-900 mt-0.5 text-sm">{SCHOOL_CONTACT.viceDirector}</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-stone-500 font-medium">Stołówka szkolna</div>
                    <div className="mt-0.5 flex items-baseline gap-1.5 font-sans">
                      <span className="text-base sm:text-lg font-bold text-[#1E3A8A] tracking-tight">6,00 zł</span>
                      <span className="text-stone-600 font-medium text-xs">/ obiad</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-stone-200 rounded-xl overflow-hidden border-2 border-[#1E3A8A]/35 shadow-sm aspect-16/9 relative">
                  <img
                    src={SCHOOL_IMAGES.heroCampus}
                    alt="Budynek Szkoły Podstawowej nr 15 im. Alfreda Szklarskiego w Mysłowicach w otoczeniu zieleni"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 text-white border-t border-[#1E3A8A]/40">
                    <p className="text-xs text-stone-200">
                      Rok szkolny 2026/2027 · ul. Piastów Śląskich 8 oraz ul. Dzierżonia 26
                    </p>
                    <p className="text-sm font-medium mt-0.5">
                      Rekrutacja, projekty unijne „Edukacja dla wszystkich” oraz „Przyjazna Szkoła”
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* AKTUALNOŚCI I OGŁOSZENIA (Editorial 3-Tier Salience) */}
            <section className="border-b border-stone-200 pb-14">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs font-medium text-[#1E3A8A] mb-2">
                    01. Życie szkoły i komunikaty urzędowe · Bieżący rok szkolny
                  </p>
                  <h2 className="text-3xl font-semibold text-stone-900 tracking-tight">
                    Aktualności i ogłoszenia
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-200/70 border border-[#1E3A8A]/20 rounded-lg">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setNewsFilter(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        newsFilter === cat
                          ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                          : 'text-stone-600 hover:text-[#1E3A8A]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Tier 1: Lead Story */}
                <article className="lg:col-span-7 bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#1E3A8A] transition-all">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-3">
                      <span className="font-semibold text-[#1E3A8A] px-2 py-0.5 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20">
                        {leadNews.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{leadNews.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{leadNews.building}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4 leading-snug">
                      {leadNews.title}
                    </h3>

                    <p className="text-base text-stone-700 leading-relaxed mb-6">
                      {leadNews.summary}
                    </p>

                    <div className="space-y-3 text-sm text-stone-600 leading-relaxed border-t border-stone-200 pt-5 mb-6">
                      {leadNews.content.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E3A8A]/20">
                    <span className="text-xs text-stone-500">
                      Opublikowano przez Dyrekcję SP nr 15 w Mysłowicach
                    </span>
                    <button
                      onClick={() => setSelectedNews(leadNews)}
                      className="text-xs font-semibold text-[#1E3A8A] hover:underline whitespace-nowrap cursor-pointer"
                    >
                      Otwórz pełny komunikat i załączniki →
                    </button>
                  </div>
                </article>

                {/* Tier 2: Secondary News List */}
                <div className="lg:col-span-5 space-y-4">
                  {secondaryNews.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white border-2 border-[#1E3A8A]/25 rounded-xl p-5 hover:border-[#1E3A8A] transition-all shadow-xs"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1.5">
                        <span className="font-medium text-[#1E3A8A] px-2 py-0.5 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20">
                          {item.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{item.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.building}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-3">{item.summary}</p>
                      <button
                        onClick={() => setSelectedNews(item)}
                        className="text-xs font-semibold text-[#1E3A8A] hover:underline cursor-pointer"
                      >
                        Czytaj całość →
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* SKRÓT NAJWAŻNIEJSZYCH INFORMACJI ZE STRONY EDUPAGE (Szybki dostęp) */}
            <section className="border-b border-stone-200 pb-14">
              <div className="mb-8">
                <p className="text-xs font-medium text-[#1E3A8A] mb-2">
                  02. Informator szkolny w pigułce · Wszystkie kluczowe dane w jednym miejscu
                </p>
                <h2 className="text-3xl font-semibold text-stone-900 tracking-tight">
                  Najważniejsze informacje dla rodziców i uczniów
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Karta 1: Stołówka i obiady */}
                <div className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 flex flex-col justify-between shadow-xs hover:border-[#1E3A8A] transition-all">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-md border border-[#1E3A8A]/25">
                        Stołówka szkolna
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">
                      Obiady szkolne — 6,00 zł
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      Obiady wydawane od 7 września 2026 r. Nieobecność dziecka należy zgłosić do
                      godz. <strong>8:30 danego dnia</strong> pod numerem{' '}
                      <span className="font-semibold text-stone-900">32 222 32 85</span> (Intendent:
                      Pani Judyta Łojek) lub przez e-Dziennik.
                    </p>
                    <div className="p-3 bg-[#1E3A8A]/5 border border-[#1E3A8A]/25 rounded-lg text-xs space-y-1 mb-4">
                      <div className="text-stone-600 font-medium">Rachunek bankowy (płatność do 10. dnia miesiąca):</div>
                      <div className="font-semibold text-[#1E3A8A] tracking-wider text-xs sm:text-sm">
                        {SCHOOL_CONTACT.bankAccountCanteen}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNavigateTab('rodzice')}
                    className="text-xs font-semibold text-[#1E3A8A] hover:underline text-left cursor-pointer pt-2"
                  >
                    Przejdź do jadłospisu i kalkulatora opłat →
                  </button>
                </div>

                {/* Karta 2: Świetlica szkolna */}
                <div className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 flex flex-col justify-between shadow-xs hover:border-[#1E3A8A] transition-all">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-md border border-[#1E3A8A]/25">
                        ul. Piastów Śląskich 8
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">
                      Bezpłatna świetlica szkolna
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      Opieka poranna (6:30–8:00) oraz popołudniowa (do 16:30) dla dzieci rodziców
                      pracujących. Zajęcia plastyczne, muzyczne, teatralne, czytelnicze i ruchowe.
                    </p>
                    <dl className="space-y-1.5 text-xs border-t border-[#1E3A8A]/20 pt-3 mb-4">
                      <div className="flex justify-between">
                        <dt className="text-stone-500">Poniedziałek i Piątek:</dt>
                        <dd className="font-semibold text-stone-900">6:30–8:00 · 10:30–16:30</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-stone-500">Wtorek, Środa, Czwartek:</dt>
                        <dd className="font-semibold text-stone-900">6:30–8:00 · 11:30–16:30</dd>
                      </div>
                    </dl>
                  </div>
                  <button
                    onClick={() => handleNavigateTab('rodzice')}
                    className="text-xs font-semibold text-[#1E3A8A] hover:underline text-left cursor-pointer pt-2"
                  >
                    Szczegóły pracy świetlicy i zapisy →
                  </button>
                </div>

                {/* Karta 3: Godziny dzwonków i specjaliści */}
                <div className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 flex flex-col justify-between shadow-xs hover:border-[#1E3A8A] transition-all">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-md border border-[#1E3A8A]/25">
                        Organizacja dnia
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">
                      Dzwonki i szkolni specjaliści
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-3">
                      W szkole działają: pedagog (mgr Maria Królikowska), pedagog specjalny (mgr
                      Katarzyna Halska), psycholog (mgr Natalia Jędras-Sala), logopedzi oraz doradca
                      zawodowy.
                    </p>
                    <div className="space-y-1 text-xs border-t border-[#1E3A8A]/20 pt-3 mb-4">
                      {BELL_SCHEDULE.slice(0, 4).map((b) => (
                        <div key={b.number} className="flex justify-between text-stone-700">
                          <span className="font-medium">{b.label}</span>
                          <span className="font-semibold text-[#1E3A8A]">
                            {b.start} – {b.end}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => handleNavigateTab('rodzice')}
                    className="text-xs font-semibold text-[#1E3A8A] hover:underline text-left cursor-pointer pt-2"
                  >
                    Pełny harmonogram dzwonków (0.–8. lekcja) →
                  </button>
                </div>
              </div>
            </section>

            {/* PEŁNY PRZEGLĄD O SZKOLE NA STRONIE GŁÓWNEJ */}
            <SchoolOverview onNavigateTab={handleNavigateTab} />
          </div>
        )}

        {activeTab === 'o-szkole' && <SchoolOverview onNavigateTab={handleNavigateTab} />}

        {activeTab === 'rodzice' && (
          <ParentsStudentsSection onOpenDocModal={handleOpenDocById} />
        )}

        {activeTab === 'kadra-dokumenty' && (
          <StaffAndDocsSection onSelectDoc={(doc) => setSelectedDoc(doc)} />
        )}

        {activeTab === 'kontakt' && <ContactSection />}
      </main>

      {/* QUIET INSTITUTIONAL FOOTER */}
      <footer className="bg-white border-t-2 border-[#1E3A8A]/30 mt-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-200">
            <div className="md:col-span-5 space-y-3">
              <div className="text-lg font-display font-semibold text-stone-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A] inline-block shrink-0"></span>
                <span>{SCHOOL_CONTACT.fullName}</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
                Publiczna ośmioletnia szkoła podstawowa z oddziałami dwujęzycznymi prowadzona przez
                Gminę Miasto Mysłowice.
              </p>
              <div className="text-xs text-stone-500 pt-1">
                Dyrektor: <strong className="text-stone-800">{SCHOOL_CONTACT.director}</strong> ·
                Wicedyrektor: <strong className="text-stone-800">{SCHOOL_CONTACT.viceDirector}</strong>
              </div>
            </div>

            <div className="md:col-span-4 space-y-2 text-xs">
              <div className="font-semibold text-stone-900 mb-2">Budynki i sekretariaty</div>
              <div className="text-stone-600">
                <strong className="text-stone-800">ul. Piastów Śląskich 8</strong>, 41-408 Mysłowice
                <div className="text-stone-500 font-medium mt-0.5">
                  tel. 32 222 47 18 · czynny 7:30–15:30
                </div>
              </div>
              <div className="text-stone-600 pt-2">
                <strong className="text-stone-800">ul. Jana Dzierżonia 26</strong>, 41-408 Mysłowice
                <div className="text-stone-500 font-medium mt-0.5">
                  tel. 32 222 32 85 · czynny 7:00–15:00
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-2 text-xs">
              <div className="font-semibold text-stone-900 mb-2">Szybka nawigacja i BIP</div>
              <ul className="space-y-1.5 text-stone-600">
                <li>
                  <button
                    onClick={() => handleNavigateTab('kadra-dokumenty')}
                    className="hover:text-[#1E3A8A] hover:underline cursor-pointer"
                  >
                    Statut Szkoły i Standardy Ochrony Małoletnich
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOpenDocById('deklaracja-dostepnosci-rodo')}
                    className="hover:text-[#1E3A8A] hover:underline cursor-pointer"
                  >
                    Deklaracja Dostępności i Klauzula RODO
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOpenDocById('deklaracja-dostepnosci-rodo')}
                    className="hover:text-[#1E3A8A] hover:underline cursor-pointer"
                  >
                    Biuletyn Informacji Publicznej (BIP)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigateTab('rodzice')}
                    className="hover:text-[#1E3A8A] hover:underline cursor-pointer"
                  >
                    Stołówka szkolna, świetlica i dzwonki
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
            <div>
              © {new Date().getFullYear()} Szkoła Podstawowa nr 15 im. Alfreda Szklarskiego w
              Mysłowicach. Wszelkie prawa zastrzeżone.
            </div>
            <div className="text-stone-600">
              E-mail: <span className="text-[#1E3A8A] font-semibold">{SCHOOL_CONTACT.emailPrimary}</span> · Konto stołówki: <span className="font-semibold text-stone-800">{SCHOOL_CONTACT.bankAccountCanteen}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: SZCZEGÓŁY AKTUALNOŚCI */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border-2 border-[#1E3A8A]/40 border-t-4 border-t-[#1E3A8A] rounded-xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[#1E3A8A]/20 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1">
                  <span className="font-medium text-[#1E3A8A] px-2 py-0.5 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20">{selectedNews.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedNews.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedNews.building}</span>
                </div>
                <h3 className="text-2xl font-semibold text-stone-900">{selectedNews.title}</h3>
              </div>
              <button
                onClick={() => setSelectedNews(null)}
                className="px-3 py-1.5 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg shrink-0 cursor-pointer"
              >
                Zamknij
              </button>
            </div>

            <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
              {selectedNews.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {selectedNews.attachments && selectedNews.attachments.length > 0 && (
              <div className="border-t border-[#1E3A8A]/20 pt-4 space-y-2">
                <div className="text-xs font-semibold text-stone-900">Powiązane dokumenty:</div>
                <div className="space-y-2">
                  {selectedNews.attachments.map((att, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-blue-50/40 border border-[#1E3A8A]/30 rounded-lg text-xs"
                    >
                      <span className="font-medium text-stone-800">
                        {att.name} ({att.size})
                      </span>
                      <button
                        onClick={() => {
                          setSelectedNews(null);
                          handleNavigateTab('kadra-dokumenty');
                        }}
                        className="font-semibold text-[#1E3A8A] hover:underline cursor-pointer"
                      >
                        Przejdź do dokumentacji →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: PODGLĄD I POBIERANIE DOKUMENTU SZKOLNEGO */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border-2 border-[#1E3A8A]/40 border-t-4 border-t-[#1E3A8A] rounded-xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[#1E3A8A]/20 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1">
                  <span className="font-medium text-[#1E3A8A] px-2 py-0.5 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20">{selectedDoc.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-stone-700">{selectedDoc.fileCode}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-stone-900">
                  {selectedDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-3 py-1.5 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg shrink-0 cursor-pointer"
              >
                Zamknij
              </button>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed">{selectedDoc.description}</p>

            <div className="bg-blue-50/40 border border-[#1E3A8A]/30 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-wide">
                Najważniejsze zapisy i informacje zawarte w dokumencie:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
                {selectedDoc.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-bold text-[#1E3A8A] shrink-0">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-200">
              <span className="text-xs text-stone-500">
                Oryginały dokumentów dostępne są również w sekretariatach przy ul. Piastów Śląskich 8 i Dzierżonia 26.
              </span>
              <button
                onClick={() => handleDownloadDocumentText(selectedDoc)}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-[#172e6e] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              >
                Pobierz wyciąg z dokumentu (.txt)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: LOGOWANIE DO E-DZIENNIKA EDUPAGE */}
      {isEdupageModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border-2 border-[#1E3A8A]/40 border-t-4 border-t-[#1E3A8A] rounded-xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[#1E3A8A]/20 pb-4">
              <div>
                <p className="text-xs font-medium text-[#1E3A8A]">System dziennika elektronicznego</p>
                <h3 className="text-xl font-semibold text-stone-900">
                  Dziennik Elektroniczny EduPage
                </h3>
              </div>
              <button
                onClick={() => setIsEdupageModalOpen(false)}
                className="px-3 py-1.5 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg cursor-pointer"
              >
                Zamknij
              </button>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              Zaloguj się do konta ucznia, rodzica lub nauczyciela w systemie{' '}
              <strong className="text-[#1E3A8A]">szkolapodstawowanr15wmyslowicach.edupage.org</strong>, aby sprawdzić oceny,
              frekwencję, zastępstwa lub zgłosić nieobecność dziecka na obiedzie (do godz. 8:30).
            </p>

            {edupageNotice && (
              <div className="p-3 bg-blue-50/60 border border-[#1E3A8A]/30 rounded-lg text-xs text-stone-800 leading-relaxed">
                {edupageNotice}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!edupageLogin.trim() || !edupagePass.trim()) {
                  setEdupageNotice('Wprowadź login (lub adres e-mail) oraz hasło do konta EduPage.');
                  return;
                }
                setEdupageNotice(
                  `Weryfikacja konta „${edupageLogin}” w domenie szkolapodstawowanr15wmyslowicach.edupage.org. W przypadku utraty hasła prosimy o kontakt z wychowawcą klasy lub sekretariatem (32 222 47 18).`
                );
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="edupage-user" className="block text-xs font-medium text-stone-700 mb-1">
                  Nazwa użytkownika / E-mail
                </label>
                <input
                  id="edupage-user"
                  type="text"
                  value={edupageLogin}
                  onChange={(e) => setEdupageLogin(e.target.value)}
                  placeholder="np. jan.kowalski"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                />
              </div>
              <div>
                <label htmlFor="edupage-pass" className="block text-xs font-medium text-stone-700 mb-1">
                  Hasło
                </label>
                <input
                  id="edupage-pass"
                  type="password"
                  value={edupagePass}
                  onChange={(e) => setEdupagePass(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-[#172e6e] transition-colors cursor-pointer shadow-xs"
              >
                Zaloguj do e-Dziennika EduPage
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
