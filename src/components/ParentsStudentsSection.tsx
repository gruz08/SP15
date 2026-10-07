import React, { useState } from 'react';
import {
  BELL_SCHEDULE,
  SWIETLICA_HOURS,
  WEEKLY_MENU,
  SCHOOL_CONTACT,
  SCHOOL_IMAGES,
} from '../data/schoolData';

interface ParentsStudentsSectionProps {
  onOpenDocModal: (docId: string) => void;
}

export const ParentsStudentsSection: React.FC<ParentsStudentsSectionProps> = ({
  onOpenDocModal,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'stolowka' | 'swietlica' | 'dzwonki' | 'rekrutacja' | 'biblioteka_specjalisci'
  >('stolowka');
  const [mealDaysCount, setMealDaysCount] = useState<number>(20);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopyBank = () => {
    navigator.clipboard?.writeText(SCHOOL_CONTACT.bankAccountCanteen);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  return (
    <div className="space-y-12">
      {/* Nagłówek i przełącznik sekcji dla rodziców i uczniów */}
      <div className="border-b border-stone-200 pb-8">
        <p className="text-xs font-medium text-stone-500 mb-2">
          Informacje praktyczne · Organizacja opieki, żywienia i nauki
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight mb-6">
          Strefa Rodzica i Ucznia
        </h2>

        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-200/70 border border-[#1E3A8A]/20 rounded-xl w-fit">
          <button
            onClick={() => setActiveSubTab('stolowka')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeSubTab === 'stolowka'
                ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                : 'text-stone-600 hover:text-[#1E3A8A]'
            }`}
          >
            Stołówka i obiady (6,00 zł)
          </button>
          <button
            onClick={() => setActiveSubTab('swietlica')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeSubTab === 'swietlica'
                ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                : 'text-stone-600 hover:text-[#1E3A8A]'
            }`}
          >
            Świetlica szkolna
          </button>
          <button
            onClick={() => setActiveSubTab('dzwonki')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeSubTab === 'dzwonki'
                ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                : 'text-stone-600 hover:text-[#1E3A8A]'
            }`}
          >
            Godziny dzwonków
          </button>
          <button
            onClick={() => setActiveSubTab('rekrutacja')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeSubTab === 'rekrutacja'
                ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                : 'text-stone-600 hover:text-[#1E3A8A]'
            }`}
          >
            Rekrutacja do klas I
          </button>
          <button
            onClick={() => setActiveSubTab('biblioteka_specjalisci')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeSubTab === 'biblioteka_specjalisci'
                ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                : 'text-stone-600 hover:text-[#1E3A8A]'
            }`}
          >
            Biblioteka, Pielęgniarka i Samorząd
          </button>
        </div>
      </div>

      {/* WIDOK 1: STOŁÓWKA SZKOLNA */}
      {activeSubTab === 'stolowka' && (
        <div className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div>
                <p className="text-xs font-medium text-[#1E3A8A] mb-1">
                  Stołówka szkolna · Budynek przy ul. Dzierżonia 26 oraz wydawanie w budynku głównym
                </p>
                <h3 className="text-2xl font-semibold text-stone-900">
                  Zasady korzystania z obiadów w roku szkolnym 2026/2027
                </h3>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                Obiady w stołówce szkolnej wydawane są od <strong>7 września 2026 roku</strong>.
                Warunkiem zapisania dziecka na obiady jest wypełnienie oraz złożenie w szkole
                podpisanej umowy o korzystanie z posiłków.
              </p>

              <dl className="divide-y divide-stone-200 border-t border-b border-[#1E3A8A]/20 text-sm">
                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="text-stone-500">Cena jednego obiadu:</dt>
                  <dd className="font-bold text-[#1E3A8A]">6,00 zł / dzień</dd>
                </div>
                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="text-stone-500">Intendent szkoły:</dt>
                  <dd className="font-medium text-stone-900">
                    Pani Judyta Łojek (ul. Dzierżonia 26 · tel. 32 222 32 85)
                  </dd>
                </div>
                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="text-stone-500">Zgłaszanie nieobecności dziecka:</dt>
                  <dd className="font-semibold text-amber-800">
                    Do godz. 8:30 danego dnia (tel. 32 222 32 85 lub przez e-Dziennik EduPage)
                  </dd>
                </div>
                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="text-stone-500">Termin płatności za obiady:</dt>
                  <dd className="font-medium text-stone-900">
                    Do 10. dnia każdego następnego miesiąca
                  </dd>
                </div>
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <dt className="text-stone-500">Numer rachunku bankowego szkoły:</dt>
                  <dd className="flex items-center gap-3">
                    <span className="font-bold text-[#1E3A8A] text-xs sm:text-sm tracking-wide">
                      {SCHOOL_CONTACT.bankAccountCanteen}
                    </span>
                    <button
                      onClick={handleCopyBank}
                      className="px-2.5 py-1 text-xs font-semibold border-2 border-[#1E3A8A]/30 text-[#1E3A8A] rounded-md hover:bg-[#1E3A8A]/10 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      {copiedAccount ? 'Skopiowano' : 'Kopiuj konto'}
                    </button>
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenDocModal('umowa-obiady-stolowka')}
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-[#172e6e] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                >
                  Pobierz wzór umowy na obiady
                </button>
                <span className="text-xs text-stone-500">
                  W tytule przelewu prosimy podać: imię i nazwisko ucznia, klasę oraz miesiąc żywienia.
                </span>
              </div>
            </div>

            {/* Kalkulator opłat za obiady */}
            <div className="lg:col-span-5 bg-[#1E3A8A]/5 border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <p className="text-xs font-medium text-[#1E3A8A]">
                  Pomocnik rodzica · Obliczanie należności miesięcznej
                </p>
                <h3 className="text-xl font-semibold text-stone-900">
                  Kalkulator opłaty za obiady
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Wybierz liczbę dni żywieniowych w danym miesiącu (pomniejszoną o zgłoszone do godz. 8:30
                  nieobecności ucznia), aby obliczyć kwotę przelewu.
                </p>

                <div className="pt-2">
                  <label
                    htmlFor="meal-days-range"
                    className="block text-xs font-medium text-stone-700 mb-2"
                  >
                    Liczba dni obiadowych w miesiącu:{' '}
                    <span className="font-bold text-[#1E3A8A]">
                      {mealDaysCount} dni
                    </span>
                  </label>
                  <input
                    id="meal-days-range"
                    type="range"
                    min={1}
                    max={23}
                    value={mealDaysCount}
                    onChange={(e) => setMealDaysCount(Number(e.target.value))}
                    className="w-full accent-[#1E3A8A] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs font-medium text-stone-500 mt-1">
                    <span>1 dzień</span>
                    <span>10 dni</span>
                    <span>15 dni</span>
                    <span>20 dni</span>
                    <span>23 dni</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1E3A8A]/20 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-stone-600">Stawka dzienna:</span>
                  <span className="text-sm text-stone-800 font-semibold">6,00 zł</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium text-stone-900">Kwota do zapłaty:</span>
                  <span className="text-2xl font-bold text-[#1E3A8A]">
                    {(mealDaysCount * 6).toFixed(2).replace('.', ',')} zł
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tygodniowy Jadłospis */}
          <div className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <p className="text-xs font-medium text-[#1E3A8A] mb-1">
                  Stołówka szkolna · Program „Posiłek w szkole i w domu”
                </p>
                <h3 className="text-xl font-semibold text-stone-900">
                  Przykładowy jadłospis tygodniowy
                </h3>
              </div>
              <span className="text-xs text-stone-500">
                Posiłki przygotowywane na miejscu ze świeżych produktów
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#1E3A8A]/20 text-xs text-stone-600">
                    <th className="py-3 pr-4 font-semibold w-32">Dzień tygodnia</th>
                    <th className="py-3 px-4 font-semibold">Pierwsze danie (zupa)</th>
                    <th className="py-3 px-4 font-semibold">Drugie danie i dodatki</th>
                    <th className="py-3 pl-4 font-semibold w-48">Napój i alergeny</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-sm">
                  {WEEKLY_MENU.map((item) => (
                    <tr key={item.day} className="hover:bg-blue-50/20">
                      <td className="py-3.5 pr-4 font-bold text-stone-900 align-top">
                        {item.day}
                      </td>
                      <td className="py-3.5 px-4 text-stone-700 align-top">{item.soup}</td>
                      <td className="py-3.5 px-4 text-stone-800 font-medium align-top">
                        {item.main}
                      </td>
                      <td className="py-3.5 pl-4 text-xs text-stone-500 align-top">
                        <div>{item.drink}</div>
                        <div className="text-stone-400 mt-0.5">Alergeny: {item.allergens}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* WIDOK 2: ŚWIETLICA SZKOLNA */}
      {activeSubTab === 'swietlica' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <p className="text-xs font-medium text-[#1E3A8A] mb-1">
                Budynek główny przy ul. Piastów Śląskich 8 · Opieka bezpłatna
              </p>
              <h3 className="text-2xl font-semibold text-stone-900">
                Świetlica szkolna dla uczniów klas I–III
              </h3>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed">
              Świetlica szkolna w Szkole Podstawowej nr 15 w Mysłowicach jest{' '}
              <strong>całkowicie bezpłatna</strong> i funkcjonuje w budynku przy{' '}
              <strong>ul. Piastów Śląskich 8</strong>. Przeznaczona jest przede wszystkim dla uczniów
              klas I–III, których rodzice pracują zawodowo.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-stone-900">
                Zajęcia rozwijające prowadzone w świetlicy:
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Pod opieką wychowawców świetlicy (m.in. mgr Małgorzaty Mazur) dzieci uczestniczą
                w zajęciach teatralnych, muzycznych, tanecznych, plastyczno-technicznych,
                czytelniczych oraz grach i zabawach ruchowych na świeżym powietrzu. Zapewniamy także
                czas na odpoczynek oraz pomoc w odrabianiu zadań domowych.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenDocModal('karta-zgloszenia-swietlica')}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-[#172e6e] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              >
                Zobacz Kartę zgłoszenia dziecka do świetlicy
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 sm:p-8 shadow-xs">
            <p className="text-xs font-medium text-[#1E3A8A] mb-1">Harmonogram tygodniowy · ul. Piastów Śląskich 8</p>
            <h3 className="text-xl font-semibold text-stone-900 mb-4">
              Godziny pracy świetlicy szkolnej
            </h3>
            <p className="text-xs text-stone-600 mb-5">
              Świetlica działa w godzinach porannych (przed rozpoczęciem lekcji) oraz popołudniowych
              (po zakończeniu zajęć edukacji wczesnoszkolnej):
            </p>

            <div className="divide-y divide-stone-200 border-t border-b border-[#1E3A8A]/20">
              {SWIETLICA_HOURS.map((row) => (
                <div key={row.day} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-stone-900">{row.day}</span>
                  <div className="text-right text-stone-700 font-medium">
                    <span>{row.morning}</span>
                    <span className="mx-2 text-stone-400">oraz</span>
                    <span className="font-bold text-[#1E3A8A]">{row.afternoon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* WIDOK 3: GODZINY DZWONKÓW */}
      {activeSubTab === 'dzwonki' && (
        <div className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-medium text-[#1E3A8A] mb-1">
                Organizacja dnia lekcyjnego · Oba budynki szkoły
              </p>
              <h3 className="text-2xl font-semibold text-stone-900">
                Godziny dzwonków — plan lekcji i przerw
              </h3>
            </div>
            <span className="text-xs text-stone-500">
              Dwie długie przerwy obiadowe (po 4. oraz po 5. lekcji — po 20 minut)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1E3A8A]/20 text-xs text-stone-600">
                  <th className="py-3 pr-4 font-semibold">Jednostka lekcyjna</th>
                  <th className="py-3 px-4 font-semibold">Godziny trwania lekcji</th>
                  <th className="py-3 px-4 font-semibold">Czas przerwy</th>
                  <th className="py-3 pl-4 font-semibold">Uwagi organizacyjne</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-sm">
                {BELL_SCHEDULE.map((period) => (
                  <tr key={period.number} className="hover:bg-blue-50/20">
                    <td className="py-3.5 pr-4 font-bold text-stone-900">{period.label}</td>
                    <td className="py-3.5 px-4 font-bold text-[#1E3A8A]">
                      {period.start} – {period.end}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-stone-700">
                      {period.breakMinutes > 0 ? `${period.breakMinutes} min` : '—'}
                    </td>
                    <td className="py-3.5 pl-4 text-xs text-stone-600">{period.breakNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* WIDOK 4: REKRUTACJA DO KLAS I */}
      {activeSubTab === 'rekrutacja' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <p className="text-xs font-medium text-[#1E3A8A] mb-1">
                Nabór na rok szkolny 2026/2027 · Sekretariat przy ul. Piastów Śląskich 8
              </p>
              <h3 className="text-2xl font-semibold text-stone-900">
                Rekrutacja do klas pierwszych
              </h3>
            </div>

            <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
              <p>
                Dyrekcja Szkoły Podstawowej nr 15 z Oddziałami Dwujęzycznymi im. Alfreda Szklarskiego
                w Mysłowicach ogłasza zapisy dzieci do klas pierwszych. Obowiązkiem szkolnym objęte
                są dzieci 7-letnie (urodzone w 2019 r.). Na wniosek rodziców naukę w klasie I może
                również rozpocząć dziecko 6-letnie (urodzone w 2020 r.), które korzystało z wychowania
                przedszkolnego lub posiada opinię poradni psychologiczno-pedagogicznej.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="border-2 border-[#1E3A8A]/25 hover:border-[#1E3A8A] rounded-xl p-5 bg-[#1E3A8A]/5 transition-all">
                  <h4 className="font-semibold text-stone-900 mb-1.5">
                    1. Dzieci zamieszkałe w obwodzie szkoły
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Przyjmowane są z urzędu na podstawie wypełnionej przez rodziców/opiekunów
                    prawnych <strong>Karty zapisu dziecka do klasy I</strong>.
                  </p>
                  <button
                    onClick={() => onOpenDocModal('karta-zapisu-obwod')}
                    className="text-xs font-semibold text-[#1E3A8A] hover:underline cursor-pointer"
                  >
                    Otwórz Kartę zapisu (obwód) →
                  </button>
                </div>

                <div className="border-2 border-[#1E3A8A]/25 hover:border-[#1E3A8A] rounded-xl p-5 bg-[#1E3A8A]/5 transition-all">
                  <h4 className="font-semibold text-stone-900 mb-1.5">
                    2. Dzieci zamieszkałe poza obwodem szkoły
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Mogą zostać przyjęte w postępowaniu rekrutacyjnym w miarę wolnych miejsc na
                    podstawie <strong>Wniosku o przyjęcie dziecka spoza obwodu</strong>.
                  </p>
                  <button
                    onClick={() => onOpenDocModal('wniosek-spoza-obwodu')}
                    className="text-xs font-semibold text-[#1E3A8A] hover:underline cursor-pointer"
                  >
                    Otwórz Wniosek (spoza obwodu) →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#1E3A8A]/5 border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 space-y-4 shadow-xs">
            <h4 className="text-lg font-semibold text-stone-900">Gdzie złożyć dokumenty?</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Wypełnione i podpisane dokumenty rekrutacyjne można składać osobiście w sekretariacie
              budynku głównego lub przesłać drogą elektroniczną:
            </p>
            <dl className="space-y-3 text-xs border-t border-[#1E3A8A]/20 pt-4">
              <div>
                <dt className="text-stone-500">Miejsce składania wniosków:</dt>
                <dd className="font-semibold text-stone-900 mt-0.5">
                  Sekretariat SP nr 15 — ul. Piastów Śląskich 8, 41-408 Mysłowice
                </dd>
              </div>
              <div>
                <dt className="text-stone-500">Godziny przyjmowania stron:</dt>
                <dd className="font-medium text-stone-900 mt-0.5">
                  Poniedziałek – Piątek: 7:30 – 15:30
                </dd>
              </div>
              <div>
                <dt className="text-stone-500">Kontakt telefoniczny i e-mail:</dt>
                <dd className="font-bold text-[#1E3A8A] mt-0.5">
                  tel. 32 222 47 18 · {SCHOOL_CONTACT.emailPrimary}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}

      {/* WIDOK 5: BIBLIOTEKA, PIELĘGNIARKA I SAMORZĄD */}
      {activeSubTab === 'biblioteka_specjalisci' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border-2 border-[#1E3A8A]/30 border-l-4 border-l-[#1E3A8A] rounded-xl p-6 space-y-3 shadow-xs">
              <p className="text-xs font-medium text-[#1E3A8A]">Księgozbiór, czytelnia i podręczniki dotacyjne</p>
              <h3 className="text-xl font-semibold text-stone-900">Biblioteka Szkolna</h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                Bibliotekę szkolną prowadzą <strong>mgr Magdalena Czepek</strong> oraz{' '}
                <strong>mgr Sylwia Dyląg</strong>. Biblioteka gromadzi lektury szkolne, literaturę
                dziecięcą i młodzieżową (w tym pełny księgozbiór powieści naszego patrona Alfreda
                Szklarskiego), słowniki dwujęzyczne oraz realizuje wypożyczenia bezpłatnych
                podręczników w ramach dotacji MEN dla klas I–VIII.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1E3A8A]/30 border-l-4 border-l-[#1E3A8A] rounded-xl p-6 space-y-3 shadow-xs">
              <p className="text-xs font-medium text-[#1E3A8A]">Profilaktyka zdrowotna i pomoc przedlekarska</p>
              <h3 className="text-xl font-semibold text-stone-900">Pielęgniarka Szkolna</h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                W szkole funkcjonuje gabinet profilaktyki zdrowotnej i pomocy przedlekarskiej.
                Pielęgniarka szkolna przeprowadza testy przesiewowe wzroku, słuchu i postawy ciała,
                realizuje program fluoryzacji zębów u uczniów klas I–VI oraz udziela doraźnej pomocy
                medycznej w nagłych wypadkach.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1E3A8A]/30 border-l-4 border-l-[#1E3A8A] rounded-xl p-6 space-y-3 shadow-xs">
              <p className="text-xs font-medium text-[#1E3A8A]">Głos uczniów i wolontariat</p>
              <h3 className="text-xl font-semibold text-stone-900">Samorząd Uczniowski</h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                Samorząd Uczniowski zrzesza reprezentantów wszystkich klas i współdecyduje o życiu
                szkoły. Organizuje dni tematyczne, dyskoteki szkolne, zbiórki charytatywne, akcję
                „Talenciaki” oraz reprezentuje społeczność uczniowską podczas uroczystości miejskich.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="bg-stone-200 rounded-xl overflow-hidden border-2 border-[#1E3A8A]/30 shadow-xs aspect-4/3">
              <img
                src={SCHOOL_IMAGES.libraryInterior}
                alt="Wnętrze biblioteki i czytelni szkolnej w SP nr 15 w Mysłowicach"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-stone-500 italic">
              Biblioteka szkolna i strefa czytelnicza dostępna dla uczniów podczas przerw oraz zajęć świetlicowych.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
