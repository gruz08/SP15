export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  building: string;
  summary: string;
  content: string[];
  attachments?: { name: string; type: string; size: string }[];
}

export interface BellPeriod {
  number: number;
  label: string;
  start: string;
  end: string;
  breakMinutes: number;
  breakNote?: string;
}

export interface TeacherGroup {
  id: string;
  department: string;
  category: 'dyrekcja' | 'wczesnoszkolna' | 'humanistyczne' | 'scisle' | 'artystyczne_wf' | 'specjalisci';
  members: {
    name: string;
    role: string;
    building?: string;
    details?: string;
  }[];
}

export interface SchoolDocument {
  id: string;
  title: string;
  category: 'Podstawowe dokumenty' | 'Rekrutacja 2026/2027' | 'Stołówka i świetlica' | 'Ochrona danych i dostępność';
  updatedAt: string;
  description: string;
  keyPoints: string[];
  fileCode: string;
}

export interface SchoolProject {
  id: string;
  title: string;
  fundingSource: string;
  period: string;
  status: string;
  summary: string;
  objectives: string[];
}

export const SCHOOL_IMAGES = {
  heroCampus: '/src/assets/images/hero_school_campus_1790872632276.jpg',
  patronBooks: '/src/assets/images/patron_adventure_books_1790872650596.jpg',
  libraryInterior: '/src/assets/images/school_library_interior_1790872662054.jpg',
  classroomActivities: '/src/assets/images/classroom_activities_1790872675167.jpg',
};

export const SCHOOL_CONTACT = {
  fullName: 'Szkoła Podstawowa nr 15 z Oddziałami Dwujęzycznymi im. Alfreda Szklarskiego w Mysłowicach',
  shortName: 'SP nr 15 w Mysłowicach',
  emailPrimary: 'sp15@poczta.onet.eu',
  emailSecondary: 'sp15@myslowice.pl',
  edupageUrl: 'https://szkolapodstawowanr15wmyslowicach.edupage.org/',
  bankAccountCanteen: '05 1030 1508 0000 0008 2421 8000',
  director: 'mgr Aneta Szczęsny',
  viceDirector: 'mgr Adriana Wawer',
  buildings: [
    {
      id: 'piastow',
      name: 'Budynek główny — ul. Piastów Śląskich 8',
      address: 'ul. Piastów Śląskich 8, 41-408 Mysłowice',
      phone: '32 222 47 18',
      secretaryHours: '7:30 – 15:30 (poniedziałek – piątek)',
      classesInfo: 'Edukacja wczesnoszkolna (klasy I–III), główny sekretariat szkoły, gabinet dyrekcji, świetlica szkolna, biblioteka oraz gabinety specjalistów.',
    },
    {
      id: 'dzierzonia',
      name: 'Budynek drugi — ul. Dzierżonia 26',
      address: 'ul. Jana Dzierżonia 26, 41-408 Mysłowice',
      phone: '32 222 32 85',
      secretaryHours: '7:00 – 15:00 (poniedziałek – piątek)',
      classesInfo: 'Klasy starsze i oddziały dwujęzyczne (klasy IV–VIII), pracownie przedmiotowe, stołówka szkolna, biuro intendenta oraz sala gimnastyczna.',
    },
  ],
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'tydzien-przeciwdzialania-przemocy',
    title: 'Ogólnopolski Tydzień Przeciwdziałania Przemocy Rówieśniczej',
    date: '29 września 2026',
    category: 'Profilaktyka i wychowanie',
    building: 'Oba budynki szkoły',
    summary:
      'Nasza szkoła aktywnie włączyła się w ogólnopolską inicjatywę budowania bezpiecznej przestrzeni edukacyjnej, wzajemnego szacunku, empatii oraz reagowania na wszelkie przejawy wykluczenia.',
    content: [
      'W ramach Ogólnopolskiego Tygodnia Przeciwdziałania Przemocy Rówieśniczej w obu budynkach naszej szkoły (przy ul. Piastów Śląskich 8 oraz ul. Dzierżonia 26) odbywają się warsztaty wychowawcze, pogadanki z psychologiem i pedagogiem szkolnym oraz zajęcia integracyjne.',
      'Celem akcji jest uwrażliwienie uczniów na potrzeby rówieśników, nauka konstruktywnego rozwiązywania sporów bez użycia agresji słownej czy cyberprzemocy, a także przypomnienie ścieżek wsparcia dostępnych na terenie szkoły.',
      'Przypominamy, że każdy uczeń i rodzic może w każdej chwili skorzystać z bezpośredniej rozmowy z pedagogiem szkolnym (mgr Maria Królikowska), pedagogiem specjalnym (mgr Katarzyna Halska) oraz psychologiem szkolnym (mgr Natalia Jędras-Sala).',
    ],
  },
  {
    id: 'obiady-stolowka-2026',
    title: 'Organizacja obiadów w stołówce szkolnej w roku szkolnym 2026/2027',
    date: '4 września 2026',
    category: 'Stołówka szkolna',
    building: 'Piastów Śląskich 8 / Dzierżonia 26',
    summary:
      'Informujemy, że wydawanie obiadów w stołówce szkolnej rozpoczyna się 7 września 2026 r. Koszt jednego obiadu wynosi 6,00 zł. Warunkiem korzystania z posiłków jest złożenie podpisanej umowy.',
    content: [
      'Obiady w roku szkolnym 2026/2027 wydawane są od dnia 7 września 2026 r. Wysokość opłaty za jeden obiad (wsad do kotła) wynosi 6,00 zł.',
      'Aby zapisać dziecko na obiady, rodzice zobowiązani są do wypełnienia i zwrócenia do szkoły podpisanej umowy o korzystanie ze stołówki szkolnej.',
      'Nieobecność dziecka na obiedzie należy zgłosić telefonicznie pod numer 32 222 32 85 (do intendenta szkoły, Pani Judyty Łojek) lub poprzez dziennik elektroniczny EduPage najpóźniej do godziny 8:30 danego dnia. Tylko terminowe zgłoszenie umożliwia odliczenie kwoty za niewykorzystany posiłek.',
      'Wpłat za obiady należy dokonywać do 10. dnia każdego następnego miesiąca na rachunek bankowy szkoły: 05 1030 1508 0000 0008 2421 8000 (w tytule przelewu prosimy podać imię, nazwisko dziecka, klasę oraz miesiąc, którego dotyczy opłata).',
    ],
    attachments: [
      { name: 'Umowa_na_obiady_2026_2027.pdf', type: 'PDF', size: '184 KB' },
      { name: 'Jadlospis_tygodniowy_biezacy.pdf', type: 'PDF', size: '142 KB' },
    ],
  },
  {
    id: 'talenciaki-2026',
    title: 'Szkoły Pełne Talentów — zbieramy Talenciaki 2026',
    date: '15 września 2026',
    category: 'Życie szkoły',
    building: 'Oba budynki szkoły',
    summary:
      'Po raz kolejny bierzemy udział w ogólnopolskiej akcji „Szkoły Pełne Talentów”. Zebrane kupony wymienimy na wyposażenie dydaktyczne i sportowe dla naszych uczniów.',
    content: [
      'Zachęcamy wszystkich uczniów, rodziców, dziadków oraz przyjaciół Szkoły Podstawowej nr 15 im. Alfreda Szklarskiego w Mysłowicach do przekazywania kuponów „Talenciaki” na rzecz naszej placówki.',
      'Kupony można wrzucać do specjalnie oznaczonych pudełek umieszczonych przy wejściach do budynków przy ul. Piastów Śląskich 8 oraz ul. Dzierżonia 26, przekazywać wychowawcom klas lub rejestrować samodzielnie online za pomocą kodu QR.',
      'W poprzednich edycjach dzięki Państwa zaangażowaniu udało się wzbogacić bazę szkoły o pomoce matematyczne, gry planszowe dla świetlicy oraz sprzęt rekreacyjny.',
    ],
  },
  {
    id: 'rekrutacja-klasy-pierwsze',
    title: 'Rekrutacja do klas pierwszych — informacje dla rodziców',
    date: '20 sierpnia 2026',
    category: 'Rekrutacja',
    building: 'ul. Piastów Śląskich 8',
    summary:
      'Szczegółowe zasady zapisów dzieci zamieszkałych w obwodzie szkoły oraz postępowania rekrutacyjnego dla kandydatów spoza obwodu wraz z wzorami dokumentów.',
    content: [
      'Do klasy pierwszej przyjmowane są z urzędu dzieci zamieszkałe w obwodzie Szkoły Podstawowej nr 15 w Mysłowicach na podstawie Karty zapisu dziecka złożonej przez rodziców lub prawnych opiekunów.',
      'Obowiązkiem szkolnym objęte są dzieci 7-letnie. Na wniosek rodziców naukę w klasie I może również rozpocząć dziecko, które w danym roku kalendarzowym kończy 6 lat, jeżeli korzystało z wychowania przedszkolnego w roku poprzedzającym lub posiada opinię poradni psychologiczno-pedagogicznej.',
      'Kandydaci zamieszkali poza obwodem szkoły mogą zostać przyjęci do klasy I po przeprowadzeniu postępowania rekrutacyjnego, jeżeli szkoła nadal dysponuje wolnymi miejscami.',
      'Wypełnione dokumenty przyjmowane są w sekretariacie budynku głównego przy ul. Piastów Śląskich 8 (w godz. 7:30–15:30) lub drogą elektroniczną na adres sp15@poczta.onet.eu. W razie pytań prosimy o kontakt pod numerem 32 222 47 18.',
    ],
    attachments: [
      { name: 'Karta_zapisu_dziecka_z_obwodu.pdf', type: 'PDF', size: '210 KB' },
      { name: 'Wniosek_o_przyjecie_spoza_obwodu.pdf', type: 'PDF', size: '225 KB' },
      { name: 'Potwierdzenie_woli_przyjecia.pdf', type: 'PDF', size: '115 KB' },
    ],
  },
  {
    id: 'list-ministra-i-programy-sportowe',
    title: 'Informacje dla rodziców: programy sportowe, pomoc prawna i materiały MEN',
    date: '2 września 2026',
    category: 'Dla rodziców',
    building: 'Informacja ogólna',
    summary:
      'Udostępniamy list Ministra Edukacji do rodziców uczniów szkół podstawowych, informator o bezpłatnych programach sportowych dla dzieci i młodzieży oraz poradnik o nieodpłatnej pomocy prawnej.',
    content: [
      'W zakładce Dla Rodziców udostępniliśmy komplet materiałów informacyjnych przygotowanych przez Ministerstwo Edukacji Narodowej oraz instytucje samorządowe na nowy rok szkolny.',
      'Wśród udostępnionych materiałów znajdują się informacje o bezpłatnych zajęciach sportowych dla dzieci i młodzieży wspierających aktywność fizyczną po lekcjach, a także broszury informujące o zasadach korzystania z nieodpłatnej pomocy prawnej i poradnictwa obywatelskiego.',
      'Przypominamy również, że wszyscy uczniowie klas I–VIII otrzymują bezpłatne podręczniki oraz materiały ćwiczeniowe w ramach dotacji celowej Ministerstwa Edukacji.',
    ],
  },
];

export const SCHOOL_EVENTS_CALENDAR = [
  { date: '1 września 2026', title: 'Uroczyste rozpoczęcie roku szkolnego 2026/2027', location: 'Oba budynki szkoły' },
  { date: '7 września 2026', title: 'Rozpoczęcie wydawania obiadów w stołówce szkolnej', location: 'Stołówka szkolna' },
  { date: '17 września 2026', title: 'Próbny alarm przeciwpożarowy i ewakuacja budynków', location: 'Piastów Śląskich 8 / Dzierżonia 26' },
  { date: '28 września – 2 października 2026', title: 'Tydzień Przeciwdziałania Przemocy Rówieśniczej', location: 'Klasy I–VIII' },
  { date: '14 października 2026', title: 'Akademia z okazji Dnia Edukacji Narodowej oraz Ślubowanie klas I', location: 'Sala gimnastyczna' },
  { date: '11 listopada 2026', title: 'Narodowe Święto Niepodległości — projekt „Szkoła Patriotów”', location: 'Uroczystość szkolna' },
  { date: '16–29 listopada 2026', title: 'Zebrania i konsultacje z rodzicami — podsumowanie śródokresowe', location: 'Oba budynki szkoły' },
  { date: '18 maja 2027', title: 'Lekcja profilaktyczna „Chroń się przed kleszczami”', location: 'Klasy I–VIII' },
  { date: '1 czerwca 2027', title: 'Szkolny Dzień Dziecka i Dzień Sportu', location: 'Boisko szkolne' },
  { date: '12 czerwca 2027', title: 'Szkolny Piknik Rodzinny społeczności SP nr 15', location: 'Teren przy ul. Piastów Śląskich 8' },
  { date: '25 czerwca 2027', title: 'Zakończenie zajęć dydaktyczno-wychowawczych i apel „Bezpieczne wakacje”', location: 'Oba budynki szkoły' },
];

export const BELL_SCHEDULE: BellPeriod[] = [
  { number: 0, label: '0. lekcja', start: '07:10', end: '07:55', breakMinutes: 5, breakNote: 'Przerwa 7:55 – 8:00' },
  { number: 1, label: '1. lekcja', start: '08:00', end: '08:45', breakMinutes: 10, breakNote: 'Przerwa 8:45 – 8:55' },
  { number: 2, label: '2. lekcja', start: '08:55', end: '09:40', breakMinutes: 10, breakNote: 'Przerwa 9:40 – 9:50' },
  { number: 3, label: '3. lekcja', start: '09:50', end: '10:35', breakMinutes: 10, breakNote: 'Przerwa 10:35 – 10:45' },
  { number: 4, label: '4. lekcja', start: '10:45', end: '11:30', breakMinutes: 20, breakNote: 'Przerwa obiadowa 11:30 – 11:50' },
  { number: 5, label: '5. lekcja', start: '11:50', end: '12:35', breakMinutes: 20, breakNote: 'Przerwa obiadowa 12:35 – 12:55' },
  { number: 6, label: '6. lekcja', start: '12:55', end: '13:40', breakMinutes: 10, breakNote: 'Przerwa 13:40 – 13:50' },
  { number: 7, label: '7. lekcja', start: '13:50', end: '14:35', breakMinutes: 5, breakNote: 'Przerwa 14:35 – 14:40' },
  { number: 8, label: '8. lekcja', start: '14:40', end: '15:25', breakMinutes: 0, breakNote: 'Koniec zajęć lekcyjnych' },
];

export const SWIETLICA_HOURS = [
  { day: 'Poniedziałek', morning: '6:30 – 8:00', afternoon: '10:30 – 16:30' },
  { day: 'Wtorek', morning: '6:30 – 8:00', afternoon: '11:30 – 16:30' },
  { day: 'Środa', morning: '6:30 – 8:00', afternoon: '11:30 – 16:30' },
  { day: 'Czwartek', morning: '6:30 – 8:00', afternoon: '11:30 – 16:30' },
  { day: 'Piątek', morning: '6:30 – 8:00', afternoon: '10:30 – 16:30' },
];

export const WEEKLY_MENU = [
  {
    day: 'Poniedziałek',
    soup: 'Zupa pomidorowa z makaronem i świeżą natką pietruszki (250 ml)',
    main: 'Filet z indyka w sosie koperkowym, ziemniaki purée, surówka z marchewki i jabłka',
    drink: 'Kompot wieloowocowy',
    allergens: 'Gluten, mleko, seler',
  },
  {
    day: 'Wtorek',
    soup: 'Krupnik jęczmienny na wywarze jarzynowo-drobiowym (250 ml)',
    main: 'Pieczeń wieprzowa duszona, kasza jęczmienna, buraczki zasmażane',
    drink: 'Herbata z cytryną',
    allergens: 'Gluten, seler',
  },
  {
    day: 'Środa',
    soup: 'Zupa ogórkowa z ziemniakami (250 ml)',
    main: 'Pierogi leniwe z twarogiem, masłem i cynamonem, owoc sezonowy (gruszka)',
    drink: 'Kompot truskawkowy',
    allergens: 'Gluten, jaja, mleko, seler',
  },
  {
    day: 'Czwartek',
    soup: 'Rosół drobiowo-wołowy z makaronem nitki i zieloną pietruszką (250 ml)',
    main: 'Kotlet schabowy pieczony, ziemniaki z koperkiem, mizeria z jogurtem naturalnym',
    drink: 'Woda z cytryną i miętą',
    allergens: 'Gluten, jaja, mleko, seler',
  },
  {
    day: 'Piątek',
    soup: 'Zupa kalafiorowa z koperkiem (250 ml)',
    main: 'Pieczony filet z dorsza, ziemniaki gotowane, surówka z kiszonej kapusty',
    drink: 'Kompot jabłkowy',
    allergens: 'Ryby, gluten, mleko, seler',
  },
];

export const TEACHER_GROUPS: TeacherGroup[] = [
  {
    id: 'dyrekcja',
    department: 'Dyrekcja Szkoły',
    category: 'dyrekcja',
    members: [
      {
        name: 'mgr Aneta Szczęsny',
        role: 'Dyrektor Szkoły Podstawowej nr 15 z Oddziałami Dwujęzycznymi',
        building: 'ul. Piastów Śląskich 8 / ul. Dzierżonia 26',
        details: 'Nadzór pedagogiczny i administracyjny nad całokształtem pracy szkoły',
      },
      {
        name: 'mgr Adriana Wawer',
        role: 'Wicedyrektor Szkoły · Edukacja wczesnoszkolna',
        building: 'ul. Piastów Śląskich 8 / ul. Dzierżonia 26',
        details: 'Organizacja pracy dydaktyczno-wychowawczej oraz zastępstw',
      },
    ],
  },
  {
    id: 'specjalisci',
    department: 'Szkolni Specjaliści, Biblioteka i Świetlica',
    category: 'specjalisci',
    members: [
      {
        name: 'mgr Maria Królikowska',
        role: 'Pedagog szkolny',
        building: 'Oba budynki szkoły',
        details: 'Wsparcie wychowawcze, pomoc uczniom i konsultacje dla rodziców',
      },
      {
        name: 'mgr Katarzyna Halska',
        role: 'Pedagog specjalny · Logopeda',
        building: 'Oba budynki szkoły',
        details: 'Organizacja kształcenia specjalnego, rewalidacja oraz terapia logopedyczna',
      },
      {
        name: 'mgr Natalia Jędras-Sala',
        role: 'Psycholog szkolny',
        building: 'Oba budynki szkoły',
        details: 'Pomoc psychologiczna, interwencja kryzysowa, wsparcie emocjonalne uczniów',
      },
      {
        name: 'mgr Monika Kołodziejska',
        role: 'Logopeda szkolny',
        building: 'ul. Piastów Śląskich 8',
        details: 'Diagnoza i terapia wad wymowy u uczniów klas młodszych',
      },
      {
        name: 'mgr Dorota Kwaśniewska',
        role: 'Doradca zawodowy',
        building: 'ul. Dzierżonia 26',
        details: 'Wsparcie uczniów klas VII–VIII w wyborze dalszej ścieżki kształcenia',
      },
      {
        name: 'mgr Magdalena Czepek',
        role: 'Nauczyciel bibliotekarz · Biologia · Edukacja zdrowotna',
        building: 'Biblioteka szkolna',
        details: 'Opieka nad księgozbiorem, podręcznikami dotacyjnymi i czytelnią',
      },
      {
        name: 'mgr Sylwia Dyląg',
        role: 'Nauczyciel bibliotekarz',
        building: 'Biblioteka szkolna',
        details: 'Projekty czytelnicze, obsługa wypożyczeń i zajęć bibliotecznych',
      },
      {
        name: 'mgr Małgorzata Mazur',
        role: 'Wychowawca świetlicy szkolnej',
        building: 'ul. Piastów Śląskich 8',
        details: 'Opieka świetlicowa, zajęcia plastyczne, czytelnicze i ruchowe dla klas I–III',
      },
    ],
  },
  {
    id: 'wczesnoszkolna',
    department: 'Edukacja Wczesnoszkolna (Klasy I–III)',
    category: 'wczesnoszkolna',
    members: [
      { name: 'mgr Sylwia Bartecka', role: 'Edukacja wczesnoszkolna', building: 'ul. Piastów Śląskich 8' },
      { name: 'mgr Ewa Czepczor', role: 'Edukacja wczesnoszkolna', building: 'ul. Piastów Śląskich 8' },
      { name: 'mgr Monika Dowchań', role: 'Edukacja wczesnoszkolna', building: 'ul. Piastów Śląskich 8' },
      { name: 'mgr Agata Maciejewska', role: 'Edukacja wczesnoszkolna', building: 'ul. Piastów Śląskich 8' },
      { name: 'mgr Agata Migoń', role: 'Edukacja wczesnoszkolna', building: 'ul. Piastów Śląskich 8' },
      { name: 'mgr Urszula Pajonk', role: 'Edukacja wczesnoszkolna', building: 'ul. Piastów Śląskich 8' },
      { name: 'mgr Adriana Wawer', role: 'Edukacja wczesnoszkolna · Wicedyrektor', building: 'ul. Piastów Śląskich 8' },
      { name: 'mgr Beata Wróbel', role: 'Edukacja wczesnoszkolna', building: 'ul. Piastów Śląskich 8' },
      { name: 'mgr Natalia Wylenżek', role: 'Edukacja wczesnoszkolna', building: 'ul. Piastów Śląskich 8' },
      { name: 'mgr inż. Klaudia Zasimuk', role: 'Edukacja wczesnoszkolna · Język angielski', building: 'ul. Piastów Śląskich 8' },
    ],
  },
  {
    id: 'humanistyczne',
    department: 'Język Polski, Języki Obce, Historia, WOS i Religia',
    category: 'humanistyczne',
    members: [
      { name: 'mgr Beata Kaczmarczyk', role: 'Język polski', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Edyta Michalik', role: 'Język polski', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Elżbieta Ordowska', role: 'Język polski', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Magdalena Goj', role: 'Język angielski (oddziały ogólne i dwujęzyczne)', building: 'Oba budynki' },
      { name: 'mgr Marta Klus', role: 'Język angielski (oddziały ogólne i dwujęzyczne)', building: 'Oba budynki' },
      { name: 'mgr Anna Markiewicz', role: 'Język angielski (oddziały ogólne i dwujęzyczne)', building: 'Oba budynki' },
      { name: 'mgr Izabela Simlat-Makuch', role: 'Język niemiecki', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Małgorzata Jałowiecka', role: 'Historia · Zajęcia praktyczno-techniczne', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Agnieszka Konieczniak', role: 'Historia', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Joanna Krzemień', role: 'Historia · Wiedza o społeczeństwie · Edukacja zdrowotna', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Elżbieta Czaplińska', role: 'Religia', building: 'Oba budynki' },
      { name: 'mgr Gabriela Grzegorzek s. Nikola', role: 'Religia', building: 'Oba budynki' },
      { name: 'ks. Marcin Leszczyński', role: 'Religia', building: 'Oba budynki' },
    ],
  },
  {
    id: 'scisle',
    department: 'Matematyka, Nauki Przyrodnicze i Informatyka',
    category: 'scisle',
    members: [
      { name: 'mgr Agnieszka Chrustowska', role: 'Matematyka', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Katarzyna Mierny', role: 'Matematyka', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Agata Kansy', role: 'Matematyka · Chemia · Fizyka', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Estera Popiołek', role: 'Fizyka · Informatyka', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Martyna Karoń', role: 'Przyroda · Informatyka', building: 'Oba budynki' },
      { name: 'mgr Małgorzata Caban', role: 'Informatyka', building: 'Oba budynki' },
      { name: 'mgr Żaklina Nardelli', role: 'Biologia', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Łukasz Kądziela', role: 'Geografia', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Magdalena Malicka', role: 'Geografia', building: 'ul. Dzierżonia 26' },
    ],
  },
  {
    id: 'artystyczne_wf',
    department: 'Przedmioty Artystyczne, Technika i Wychowanie Fizyczne',
    category: 'artystyczne_wf',
    members: [
      { name: 'mgr Zofia Kostorz', role: 'Muzyka', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Beata Stelmach', role: 'Plastyka · Technika', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Adam Adamek', role: 'Wychowanie fizyczne · Edukacja zdrowotna', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Ihor Chyhrynets', role: 'Wychowanie fizyczne', building: 'ul. Dzierżonia 26' },
      { name: 'mgr Tomasz Kręgiel', role: 'Wychowanie fizyczne', building: 'ul. Dzierżonia 26' },
    ],
  },
];

export const SCHOOL_PROJECTS: SchoolProject[] = [
  {
    id: 'edukacja-dla-wszystkich',
    title: 'PROJEKT „Edukacja dla wszystkich = wysoka jakość kształcenia”',
    fundingSource: 'Fundusze Europejskie dla Śląskiego (EFS+)',
    period: '2024 – 2026',
    status: 'W trakcie realizacji',
    summary:
      'Kompleksowy program wsparcia uczniów i nauczycieli ukierunkowany na wyrównywanie szans edukacyjnych, zajęcia rozwijające uzdolnienia oraz indywidualne wsparcie specjalistyczne.',
    objectives: [
      'Dodatkowe zajęcia dydaktyczno-wyrównawcze oraz koła zainteresowań z przedmiotów matematyczno-przyrodniczych i języków obcych.',
      'Doposażenie gabinetów specjalistycznych (psychologa, pedagoga specjalnego i logopedy) w nowoczesne pomoce diagnostyczne i terapeutyczne.',
      'Szkolenia podnoszące kompetencje kadry pedagogicznej w zakresie pracy z uczniem o zróżnicowanych potrzebach edukacyjnych.',
    ],
  },
  {
    id: 'myslowickie-podstawowki',
    title: 'PROJEKT „Mysłowickie podstawówki stawiają na jakość”',
    fundingSource: 'Unia Europejska · Europejski Fundusz Społeczny',
    period: 'Realizacja wieloletnia',
    status: 'Zrealizowany / Trwałość projektu',
    summary:
      'Miejski projekt edukacyjny rozwijający kompetencje kluczowe uczniów mysłowickich szkół podstawowych, umiejętności cyfrowe oraz nauczanie dwujęzyczne i eksperymentalne.',
    objectives: [
      'Wzbogacenie pracowni przedmiotowych (biologicznej, chemicznej, fizycznej i geograficznej) o sprzęt laboratoryjny i multimedialny.',
      'Realizacja zajęć projektowych rozwijających pracę zespołową, kreatywność oraz komunikację w języku angielskim.',
      'Wsparcie doradztwa edukacyjno-zawodowego dla uczniów klas starszych.',
    ],
  },
  {
    id: 'przyjazna-szkola-i-szkola-patriotow',
    title: 'Program Rządowy „Przyjazna Szkoła” oraz „Szkoła Patriotów”',
    fundingSource: 'Ministerstwo Edukacji Narodowej · Wojewoda Śląski',
    period: '2025 – 2027',
    status: 'W trakcie realizacji',
    summary:
      'Inicjatywy wspierające integrację społeczności szkolnej, dobrostan psychiczny uczniów, pielęgnowanie pamięci historycznej oraz tożsamości regionalnej Górnego Śląska.',
    objectives: [
      'Wsparcie asystentów międzykulturowych i integracja uczniów z doświadczeniem migracji.',
      'Opieka nad miejscami pamięci narodowej w Mysłowicach oraz organizacja żywych lekcji historii.',
      'Konkursy wiedzy o patronie szkoły Alfredzie Szklarskim oraz tradycjach regionu śląskiego.',
    ],
  },
  {
    id: 'posilek-w-szkole',
    title: 'Rządowy Program „Posiłek w szkole i w domu”',
    fundingSource: 'Budżet Państwa · Gmina Miasto Mysłowice',
    period: 'Stałe funkcjonowanie',
    status: 'Zrealizowany / Kontynuacja',
    summary:
      'Modernizacja i doposażenie zaplecza kuchennego oraz jadalni szkolnej umożliwiające codzienne przygotowywanie pełnowartościowych, świeżych obiadów dla uczniów.',
    objectives: [
      'Zakup profesjonalnych urządzeń gastronomicznych (pieców konwekcyjno-parowych, zmywarek gastronomicznych, ciągów wydawczych).',
      'Zapewnienie gorącego posiłku w przystępnej cenie (6,00 zł za obiad) oraz współpraca z MOPS w Mysłowicach w zakresie dofinansowania obiadów.',
    ],
  },
  {
    id: 'dotacja-podreczniki',
    title: 'Dotacja celowa na wyposażenie szkoły w podręczniki i materiały edukacyjne',
    fundingSource: 'Ministerstwo Edukacji Narodowej',
    period: 'Rok szkolny 2026/2027',
    status: 'Aktywny',
    summary:
      'Coroczne wyposażenie biblioteki szkolnej w komplety bezpłatnych podręczników, materiałów edukacyjnych i zeszytów ćwiczeń dla wszystkich uczniów klas I–VIII.',
    objectives: [
      'Bezpłatne wypożyczenie podręczników z biblioteki szkolnej dla każdego ucznia na początku września.',
      'Bezpłatne przekazanie materiałów ćwiczeniowych na własność uczniom poszczególnych oddziałów.',
    ],
  },
];

export const SCHOOL_DOCUMENTS: SchoolDocument[] = [
  {
    id: 'statut-szkoly',
    title: 'Statut Szkoły Podstawowej nr 15 z Oddziałami Dwujęzycznymi im. Alfreda Szklarskiego',
    category: 'Podstawowe dokumenty',
    updatedAt: 'Wrzesień 2026',
    fileCode: 'DOC-STATUT-2026',
    description:
      'Podstawowy akt prawny regulujący organizację pracy szkoły, strukturę oddziałów ogólnych i dwujęzycznych, prawa i obowiązki uczniów oraz szczegółowe warunki wewnątrzszkolnego oceniania.',
    keyPoints: [
      'Szkoła nosi imię Alfreda Szklarskiego i prowadzi oddziały ogólnodostępne oraz oddziały dwujęzyczne z językiem angielskim.',
      'Zajęcia dydaktyczne realizowane są w dwóch budynkach: przy ul. Piastów Śląskich 8 (klasy I–III) oraz ul. Dzierżonia 26 (klasy IV–VIII).',
      'Określa szczegółowe Wewnątrzszkolne Zasady Oceniania (WZO), kryteria ocen zachowania oraz tryb odwoławczy od ocen rocznych.',
      'Reguluje kompetencje organów szkoły: Dyrektora, Rady Pedagogicznej, Rady Rodziców oraz Samorządu Uczniowskiego.',
    ],
  },
  {
    id: 'standardy-ochrony-maloletnich',
    title: 'Standardy Ochrony Małoletnich w SP nr 15 w Mysłowicach (wersja zupełna i skrócona)',
    category: 'Podstawowe dokumenty',
    updatedAt: 'Sierpień 2026',
    fileCode: 'DOC-SOM-2026',
    description:
      'Zbiór zasad i procedur zapewniających bezpieczeństwo dzieciom, zapobieganie krzywdzeniu małoletnich oraz określających zasady bezpiecznych relacji personel–uczeń i uczeń–uczeń.',
    keyPoints: [
      'Zasady bezpiecznej rekrutacji personelu pedagogicznego i niepedagogicznego zgodnie z ustawą o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym.',
      'Jasna procedura interwencji w przypadku podejrzenia krzywdzenia dziecka w rodzinie lub w środowisku rówieśniczym.',
      'Zasady ochrony wizerunku i danych osobowych uczniów oraz bezpiecznego korzystania z sieci Internet na terenie szkoły.',
      'Wersja skrócona napisana prostym, zrozumiałym językiem dla uczniów klas I–III oraz IV–VIII wywieszona w widocznych miejscach w obu budynkach.',
    ],
  },
  {
    id: 'program-wychowawczo-profilaktyczny',
    title: 'Szkolny Program Wychowawczo-Profilaktyczny na rok szkolny 2026/2027',
    category: 'Podstawowe dokumenty',
    updatedAt: 'Wrzesień 2026',
    fileCode: 'DOC-PWP-2026',
    description:
      'Dokument uchwalony przez Radę Rodziców w porozumieniu z Radą Pedagogiczną, integrujący działania wychowawcze, profilaktykę rówieśniczą i wsparcie emocjonalne.',
    keyPoints: [
      'Sfera intelektualna, emocjonalna, społeczna i zdrowotna rozwoju ucznia.',
      'Profilaktyka przemocy rówieśniczej, cyberprzemocy oraz uzależnień behawioralnych.',
      'Kształtowanie postaw obywatelskich, patriotycznych i otwartości kulturowej inspirowanych twórczością patrona szkoły.',
    ],
  },
  {
    id: 'karta-zapisu-obwod',
    title: 'Karta zapisu dziecka do klasy I (dla dzieci zamieszkałych w obwodzie szkoły)',
    category: 'Rekrutacja 2026/2027',
    updatedAt: 'Luty / Sierpień 2026',
    fileCode: 'REK-OBWOD-2026',
    description:
      'Formularz zgłoszenia dziecka zamieszkałego w obwodzie Szkoły Podstawowej nr 15 w Mysłowicach do klasy pierwszej.',
    keyPoints: [
      'Przyjęcie dziecka zamieszkałego w obwodzie szkoły następuje z urzędu na podstawie niniejszego zgłoszenia.',
      'Dokument należy złożyć w sekretariacie przy ul. Piastów Śląskich 8 (godz. 7:30–15:30) lub przesłać skan na adres sp15@poczta.onet.eu.',
      'Zawiera dane adresowe dziecka, dane kontaktowe rodziców/opiekunów oraz oświadczenie o miejscu zamieszkania.',
    ],
  },
  {
    id: 'wniosek-spoza-obwodu',
    title: 'Wniosek o przyjęcie dziecka do klasy I (dla kandydatów spoza obwodu szkoły)',
    category: 'Rekrutacja 2026/2027',
    updatedAt: 'Luty / Sierpień 2026',
    fileCode: 'REK-SPOZA-2026',
    description:
      'Formularz rekrutacyjny dla rodziców dzieci zamieszkałych poza obwodem SP nr 15 w Mysłowicach wraz z oświadczeniami o spełnianiu kryteriów samorządowych.',
    keyPoints: [
      'Rozpatrywany w postępowaniu rekrutacyjnym w przypadku dysponowania przez szkołę wolnymi miejscami.',
      'Uwzględnia kryteria punktowe (m.in. uczęszczanie rodzeństwa do SP nr 15, miejsce pracy rodziców w obwodzie szkoły, zamieszkiwanie krewnych wspierających opiekę).',
      'Po zakwalifikowaniu wymagane jest złożenie dokumentu „Potwierdzenie woli przyjęcia dziecka”.',
    ],
  },
  {
    id: 'umowa-obiady-stolowka',
    title: 'Umowa o korzystanie z obiadów w stołówce szkolnej SP nr 15 w Mysłowicach',
    category: 'Stołówka i świetlica',
    updatedAt: 'Wrzesień 2026',
    fileCode: 'STO-UMOWA-2026',
    description:
      'Wzór umowy zawieranej pomiędzy rodzicem/opiekunem prawnym a szkołą określający zasady odpłatności (6,00 zł/obiad) i odpisów za nieobecności.',
    keyPoints: [
      'Stawka dzienna za jeden obiad wynosi 6,00 zł.',
      'Termin płatności: do 10. dnia każdego następnego miesiąca na rachunek bankowy 05 1030 1508 0000 0008 2421 8000.',
      'Zgłaszanie nieobecności do godz. 8:30 danego dnia pod numerem 32 222 32 85 (Intendent: p. Judyta Łojek) lub przez e-Dziennik EduPage.',
    ],
  },
  {
    id: 'karta-zgloszenia-swietlica',
    title: 'Karta zgłoszenia dziecka do świetlicy szkolnej i Regulamin Świetlicy',
    category: 'Stołówka i świetlica',
    updatedAt: 'Wrzesień 2026',
    fileCode: 'SWI-KARTA-2026',
    description:
      'Formularz zapisu ucznia klas I–III do bezpłatnej świetlicy szkolnej działającej w budynku przy ul. Piastów Śląskich 8.',
    keyPoints: [
      'Świetlica jest bezpłatna i przeznaczona w pierwszej kolejności dla uczniów klas I–III rodziców pracujących.',
      'Zawiera wykaz osób upoważnionych do odbioru dziecka ze świetlicy oraz godziny przebywania ucznia przed i po lekcjach.',
      'Godziny pracy świetlicy: rano 6:30–8:00 (codziennie) oraz po południu do godz. 16:30.',
    ],
  },
  {
    id: 'deklaracja-dostepnosci-rodo',
    title: 'Deklaracja Dostępności Cyfrowej i Architektonicznej oraz Klauzula RODO / BIP',
    category: 'Ochrona danych i dostępność',
    updatedAt: 'Aktualizacja 2026',
    fileCode: 'BIP-RODO-2026',
    description:
      'Informacje o dostępności architektonicznej budynków przy ul. Piastów Śląskich 8 i ul. Dzierżonia 26, ochronie danych osobowych oraz Biuletynie Informacji Publicznej.',
    keyPoints: [
      'Administratorem danych osobowych uczniów i rodziców jest Szkoła Podstawowa nr 15 z Oddziałami Dwujęzycznymi im. Alfreda Szklarskiego w Mysłowicach.',
      'Opis dostępności wejść, korytarzy, ciągów komunikacyjnych oraz możliwości skorzystania z pomocy tłumacza języka migowego po wcześniejszym zgłoszeniu.',
      'Pełna dokumentacja przetargowa, majątkowa i sprawozdawcza publikowana jest w Biuletynie Informacji Publicznej (BIP) Miasta Mysłowice.',
    ],
  },
];
