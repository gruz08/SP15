import React, { useState, useMemo } from 'react';
import { TEACHER_GROUPS, SCHOOL_DOCUMENTS, SchoolDocument } from '../data/schoolData';

interface StaffAndDocsSectionProps {
  onSelectDoc: (doc: SchoolDocument) => void;
}

export const StaffAndDocsSection: React.FC<StaffAndDocsSectionProps> = ({ onSelectDoc }) => {
  const [staffFilter, setStaffFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [docCategoryFilter, setDocCategoryFilter] = useState<string>('all');

  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return TEACHER_GROUPS.filter((g) => staffFilter === 'all' || g.category === staffFilter)
      .map((group) => ({
        ...group,
        members: group.members.filter(
          (m) =>
            !q ||
            m.name.toLowerCase().includes(q) ||
            m.role.toLowerCase().includes(q) ||
            (m.details && m.details.toLowerCase().includes(q))
        ),
      }))
      .filter((group) => group.members.length > 0);
  }, [staffFilter, searchQuery]);

  const filteredDocs = useMemo(() => {
    if (docCategoryFilter === 'all') return SCHOOL_DOCUMENTS;
    return SCHOOL_DOCUMENTS.filter((d) => d.category === docCategoryFilter);
  }, [docCategoryFilter]);

  return (
    <div className="space-y-16">
      {/* SEKCJA 1: KADRA PEDAGOGICZNA I SPECJALIŚCI */}
      <section className="border-b border-stone-200 pb-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-medium text-stone-500 mb-2">
              Grono pedagogiczne · Dyrekcja, nauczyciele przedmiotów i specjaliści
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight">
              Kadra Szkoły Podstawowej nr 15
            </h2>
          </div>

          <div className="w-full lg:w-72">
            <label htmlFor="staff-search" className="sr-only">
              Szukaj nauczyciela lub przedmiotu
            </label>
            <input
              id="staff-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj nazwiska lub przedmiotu..."
              className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
            />
          </div>
        </div>

        {/* Filtry katedr */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-200/70 border border-[#1E3A8A]/20 rounded-lg w-fit mb-8">
          {[
            { id: 'all', label: 'Cała kadra' },
            { id: 'dyrekcja', label: 'Dyrekcja' },
            { id: 'specjalisci', label: 'Specjaliści i Biblioteka' },
            { id: 'wczesnoszkolna', label: 'Klasy I–III' },
            { id: 'humanistyczne', label: 'Humanistyczne i Języki' },
            { id: 'scisle', label: 'Matematyczno-Przyrodnicze' },
            { id: 'artystyczne_wf', label: 'Artystyczne i WF' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStaffFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                staffFilter === tab.id
                  ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-[#1E3A8A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filteredGroups.length === 0 ? (
          <div className="bg-white border-2 border-[#1E3A8A]/30 rounded-xl p-8 text-center shadow-xs">
            <p className="text-sm text-stone-600 mb-3">
              Nie znaleziono nauczyciela ani przedmiotu pasującego do frazy „{searchQuery}”.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setStaffFilter('all');
              }}
              className="text-xs font-semibold text-[#1E3A8A] hover:underline cursor-pointer"
            >
              Wyczyść filtry wyszukiwania
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredGroups.map((group) => (
              <div key={group.id} className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl overflow-hidden shadow-xs">
                <div className="px-6 py-4 bg-[#1E3A8A]/5 border-b border-[#1E3A8A]/20 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-stone-900">{group.department}</h3>
                  <span className="text-xs font-bold text-[#1E3A8A]">
                    Liczba osób: {group.members.length}
                  </span>
                </div>
                <div className="divide-y divide-stone-200">
                  {group.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-blue-50/20 transition-colors"
                    >
                      <div>
                        <div className="text-sm font-semibold text-stone-900">{member.name}</div>
                        {member.details && (
                          <div className="text-xs text-stone-500 mt-0.5">{member.details}</div>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 md:text-right">
                        <span className="font-semibold text-[#1E3A8A]">{member.role}</span>
                        {member.building && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-stone-500">{member.building}</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SEKCJA 2: DOKUMENTACJA SZKOLNA, STANDARDY OCHRONY MAŁOLETNICH, BIP, RODO */}
      <section>
        <div className="mb-8">
          <p className="text-xs font-medium text-[#1E3A8A] mb-2">
            Prawo wewnątrzszkolne, formularze do pobrania, RODO i BIP
          </p>
          <h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-6">
            Dokumentacja szkoły i pliki do pobrania
          </h2>

          <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-200/70 border border-[#1E3A8A]/20 rounded-lg w-fit">
            {[
              { id: 'all', label: 'Wszystkie dokumenty' },
              { id: 'Podstawowe dokumenty', label: 'Statut i Standardy Ochrony Małoletnich' },
              { id: 'Rekrutacja 2026/2027', label: 'Rekrutacja do klas I' },
              { id: 'Stołówka i świetlica', label: 'Stołówka i świetlica' },
              { id: 'Ochrona danych i dostępność', label: 'RODO, BIP i Dostępność' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setDocCategoryFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  docCategoryFilter === cat.id
                    ? 'bg-[#1E3A8A] text-white shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-[#1E3A8A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDocs.map((doc) => (
            <article
              key={doc.id}
              className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 flex flex-col justify-between shadow-xs hover:border-[#1E3A8A] transition-all"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-[#1E3A8A] px-2 py-0.5 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20">{doc.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Aktualizacja: {doc.updatedAt}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-stone-700">{doc.fileCode}</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{doc.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{doc.description}</p>
              </div>

              <div className="pt-4 border-t border-[#1E3A8A]/20 flex items-center justify-between gap-4">
                <span className="text-xs text-stone-500">Format: Dokument tekstowy / PDF</span>
                <button
                  onClick={() => onSelectDoc(doc)}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172e6e] rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                >
                  Otwórz treść i pobierz →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
