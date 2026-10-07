import React, { useState } from 'react';
import { SCHOOL_CONTACT } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [recipientBuilding, setRecipientBuilding] = useState('Sekretariat główny — ul. Piastów Śląskich 8');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setFormError('Prosimy uzupełnić imię i nazwisko, adres e-mail oraz treść wiadomości.');
      return;
    }
    if (!senderEmail.includes('@') || !senderEmail.includes('.')) {
      setFormError('Prosimy podać poprawny adres e-mail (np. rodzic@domena.pl).');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-12">
      <div className="border-b border-stone-200 pb-8">
        <p className="text-xs font-medium text-stone-500 mb-2">
          Sekretariaty, dyrekcja, intendent i dane teleadresowe
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight">
          Kontakt ze szkołą
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Dane obu budynków */}
        <div className="lg:col-span-6 space-y-6">
          {SCHOOL_CONTACT.buildings.map((b) => (
            <div key={b.id} className="bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 space-y-4 shadow-xs">
              <div>
                <div className="mb-2">
                  <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-md border border-[#1E3A8A]/25">
                    {b.id === 'piastow' ? 'Siedziba główna · Klasy I–III' : 'Budynek II · Klasy IV–VIII'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-stone-900">{b.name}</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">{b.classesInfo}</p>

              <dl className="divide-y divide-stone-200 border-t border-[#1E3A8A]/20 pt-2 text-sm">
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-500">Adres:</dt>
                  <dd className="font-medium text-stone-900 text-right">{b.address}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-500">Telefon:</dt>
                  <dd className="font-bold text-[#1E3A8A]">{b.phone}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-500">Godziny pracy sekretariatu:</dt>
                  <dd className="text-stone-900 font-medium">{b.secretaryHours}</dd>
                </div>
              </dl>
            </div>
          ))}

          <div className="bg-[#1E3A8A]/5 border-2 border-[#1E3A8A]/30 rounded-xl p-6 space-y-3 text-xs shadow-xs">
            <h4 className="text-sm font-semibold text-stone-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E3A8A]"></span>
              <span>Dane urzędowe i poczta elektroniczna</span>
            </h4>
            <div className="space-y-1.5 text-stone-700">
              <div>
                <span className="text-stone-500">Pełna nazwa: </span>
                <span className="font-medium">{SCHOOL_CONTACT.fullName}</span>
              </div>
              <div>
                <span className="text-stone-500">Adres e-mail sekretariatu: </span>
                <span className="font-bold text-[#1E3A8A]">
                  {SCHOOL_CONTACT.emailPrimary}
                </span>{' '}
                oraz{' '}
                <span className="font-bold text-[#1E3A8A]">
                  {SCHOOL_CONTACT.emailSecondary}
                </span>
              </div>
              <div>
                <span className="text-stone-500">Konto bankowe (opłaty za obiady): </span>
                <span className="font-bold text-stone-900 tracking-wide">
                  {SCHOOL_CONTACT.bankAccountCanteen}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Formularz kontaktowy */}
        <div className="lg:col-span-6 bg-white border-2 border-[#1E3A8A]/35 border-t-4 border-t-[#1E3A8A] rounded-xl p-6 sm:p-8 shadow-xs">
          <p className="text-xs font-medium text-[#1E3A8A] mb-1">Korespondencja elektroniczna</p>
          <h3 className="text-2xl font-semibold text-stone-900 mb-2">
            Napisz wiadomość do sekretariatu
          </h3>
          <p className="text-xs text-stone-600 mb-6">
            Formularz umożliwia szybkie przesłanie zapytania do wybranego budynku szkoły lub
            zgłoszenie sprawy administracyjnej. W sprawach pilnych (np. odwołanie obiadu do godz.
            8:30) prosimy o kontakt telefoniczny lub przez e-Dziennik EduPage.
          </p>

          {submitted ? (
            <div className="bg-[#1E3A8A]/5 border-2 border-[#1E3A8A]/30 rounded-xl p-6 space-y-4">
              <div className="text-xs font-semibold text-[#1E3A8A]">
                Potwierdzenie wysłania wiadomości
              </div>
              <h4 className="text-lg font-semibold text-stone-900">
                Dziękujemy za kontakt, {senderName}
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                Twoja wiadomość skierowana do: <strong>{recipientBuilding}</strong> została
                zarejestrowana. Odpowiedź prześlemy na adres{' '}
                <span className="font-bold text-[#1E3A8A]">{senderEmail}</span> w godzinach
                pracy sekretariatu.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setSubject('');
                  setMessage('');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-[#172e6e] transition-colors cursor-pointer shadow-xs"
              >
                Wyślij kolejną wiadomość
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {formError && (
                <div className="p-3 bg-amber-50 border border-amber-300 rounded-lg text-xs text-amber-900">
                  {formError}
                </div>
              )}

              <div>
                <label htmlFor="recipient-select" className="block text-xs font-medium text-stone-700 mb-1">
                  Odbiorca wiadomości
                </label>
                <select
                  id="recipient-select"
                  value={recipientBuilding}
                  onChange={(e) => setRecipientBuilding(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                >
                  <option value="Sekretariat główny — ul. Piastów Śląskich 8">
                    Sekretariat główny — ul. Piastów Śląskich 8 (tel. 32 222 47 18)
                  </option>
                  <option value="Sekretariat — ul. Dzierżonia 26">
                    Sekretariat — ul. Dzierżonia 26 (tel. 32 222 32 85)
                  </option>
                  <option value="Intendent stołówki — p. Judyta Łojek">
                    Intendent stołówki — p. Judyta Łojek (sprawy obiadów)
                  </option>
                  <option value="Pedagog / Psycholog szkolny">
                    Gabinet Pedagoga i Psychologa Szkolnego
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sender-name" className="block text-xs font-medium text-stone-700 mb-1">
                    Imię i nazwisko *
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="np. Anna Kowalska"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label htmlFor="sender-email" className="block text-xs font-medium text-stone-700 mb-1">
                    Adres e-mail *
                  </label>
                  <input
                    id="sender-email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="np. a.kowalska@poczta.pl"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="msg-subject" className="block text-xs font-medium text-stone-700 mb-1">
                  Temat sprawy
                </label>
                <input
                  id="msg-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="np. Zapytanie o rekrutację do klasy I / zaświadczenie uczniowskie"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                />
              </div>

              <div>
                <label htmlFor="msg-body" className="block text-xs font-medium text-stone-700 mb-1">
                  Treść wiadomości *
                </label>
                <textarea
                  id="msg-body"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Wpisz treść wiadomości..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-xs text-stone-500">
                  Administratorem danych jest SP nr 15 w Mysłowicach (zgodnie z klauzulą RODO).
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-[#172e6e] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                >
                  Wyślij wiadomość
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
