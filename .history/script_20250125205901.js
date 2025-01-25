const searchField = document.querySelector('#searchField')

const sandsTableContent = document.querySelector('.sandsTable > .sandsTableContent')

const popupModal = document.querySelector('.popupModal')

const btnClose = document.querySelector('.btnClose')

const sands = [
	{
		nr: 1,
		name: 'Poca poca',
	},
	{
		nr: 2,
		name: 'Miles tailor',
	},
	{
		nr: 3,
		name: 'Pszczoła',
	},
	{
		nr: 4,
		name: 'Net4Chic*',
	},
	{
		nr: 5,
		name: 'K.A Men',
	},
	{
		nr: 6,
		name: 'Joanna Kwiatek',
	},
	{
		nr: 7,
		name: 'Flis',
	},
	{
		nr: 8,
		name: 'Promessa',
	},
	{
		nr: 9,
		name: 'Tip top',
	},
	{
		nr: 10,
		name: 'Creative Dance',
	},
	{
		nr: 11,
		name: 'Magda Popiel',
	},
	{
		nr: 12,
		name: 'Bella Sposa',
	},
	{
		nr: 13,
		name: 'Modehaus Klaus',
	},
	{
		nr: 14,
		name: 'Guittard',
	},
	{
		nr: 15,
		name: 'Fillip Lebelt',
	},
	{
		nr: 16,
		name: 'Trendy mody szczekociny (przody)',
		imgName: 'trendy_mody.jpg',
		imgOrder: 'trendy_mody_zlecenie.jpg',
	},
	{
		nr: 17,
		name: 'Emilii F salon mody ślubnej',
	},
	{
		nr: 18,
		name: 'Margaret',
	},
	{
		nr: 19,
		name: 'Maria i Magdalena',
	},
	{
		nr: 20,
		name: 'Lavika lub Lanka *',
	},
	{
		nr: 21,
		name: 'Jemiol',
	},
	{
		nr: 22,
		name: 'Szpileczka',
	},
	{
		nr: 23,
		name: 'Cotton Club',
	},
	{
		nr: 24,
		name: 'White stories',
	},
	{
		nr: 25,
		name: 'Kate Keter',
	},
	{
		nr: 26,
		name: 'Lavard',
	},
	{
		nr: 27,
		name: 'Rage age',
	},
	{
		nr: 28,
		name: 'Lara D',
	},
	{
		nr: 29,
		name: 'Ellegant',
	},
	{
		nr: 30,
		name: 'Chór Akademicki',
	},
	{
		nr: 31,
		name: 'Evita',
		imgName: 'evita.jpg',
	},
	{
		nr: 32,
		name: 'Kasia Zapała (przody)',
		imgName: 'kasia_zapala_przody.jpg',
		imgOrder: 'kasia_zapala_zlecenie.jpg',
		additionalInfo: 'farba biala rozpuszczalnikowa lub czarna rozpuszczalnikowa w zaleznosci od koloru pokrowca ',
	},
	{
		nr: 33,
		name: 'Moda Męska W.I.P (przody)',
		imgName: 'wip_moda_meska.jpg',
		additionalInfo: 'farba biało wodna + czerwona rozpuszczalnikowa',
	},
	{
		nr: 34,
		name: 'Monao',
	},
	{
		nr: 35,
		name: 'Cherir Paris',
	},
	{
		nr: 36,
		name: 'Larmen Ślubne Marzenie',
	},
	{
		nr: 37,
		name: 'Larmen Ślubne Marzenie 2',
	},
	{
		nr: 38,
		name: 'Sklep odzieżowy duet',
	},
	{
		nr: 39,
		name: 'Love by sandro',
	},
	{
		nr: 40,
		name: 'Sobolewski',
	},
	{
		nr: 41,
		name: 'Julia Kwaszkiewicz',
	},
	{
		nr: 42,
		name: 'Grand',
	},
	{
		nr: 43,
		name: 'M&K',
	},
	{
		nr: 44,
		name: 'Kokosz',
	},
	{
		nr: 45,
		name: 'Masters',
	},
	{
		nr: 46,
		name: 'Cymbeline',
	},
	{
		nr: 47,
		name: 'Krawiec z dojazdem 1/2',
	},
	{
		nr: 48,
		name: 'Krawiec z dojazdem nowe',
		imgName: 'krawiec_z_dojazdem.jpg',
	},
	{
		nr: 49,
		name: 'La Gracja',
	},
	{
		nr: 50,
		name: 'Komis ślubny plus size (plecy)',
		imgName: 'komis_slubny_plus_size.jpg',
		imgOrder: 'komis_slubny_plus_size_zlecenie.jpg',
	},
	{
		nr: 51,
		name: 'Jurko',
	},
	{
		nr: 52,
		name: 'Lili Masiee',
	},
	{
		nr: 53,
		name: 'CYMBALLA',
	},
	{
		nr: 54,
		name: 'KANU Studio Krawieckie',
	},
	{
		nr: 55,
		name: 'Lesfees dumaring *',
	},
	{
		nr: 56,
		name: 'Maison Anoufa Paris',
	},
	{
		nr: 57,
		name: 'Gentelmen',
	},
	{
		nr: 58,
		name: 'Maribel',
	},
	{
		nr: 59,
		name: 'Reykjavik',
	},
	{
		nr: 60,
		name: 'Belle salon',
	},
	{
		nr: 60,
		name: 'Belle salon',
	},
	{
		nr: 61,
		name: 'Lapetite Blanche',
	},
	{
		nr: 62,
		name: 'Lapetite Blanche',
	},
	{
		nr: 63,
		name: 'Crux',
	},
	{
		nr: 64,
		name: 'Sebastian Żukowski (przody)',
		imgName: 'sebastian_zukowski.jpg',
		additionalInfo: 'farba ciemnozielona rozpuszczalnikowa',
	},
	{
		nr: 65,
		name: 'Sebastian Żukowski (przody)',
		imgName: 'sebastian_zukowski.jpg',
		additionalInfo: 'farba ciemnozielona rozpuszczalnikowa',
	},
	{
		nr: 66,
		name: 'Maciej Zień (przody)',
		imgName: 'maciej_zien_czarne_pokrowce.jpg',
		imgName2: 'maciej_zien_biale_pokrowce.jpg',
		imgOrder: 'maciej_zien_zlecenie.jpg',
	},
	{
		nr: 67,
		name: 'Kamila Fvoelke *',
	},
	{
		nr: 68,
		name: 'Bespoke Tailor',
	},
	{
		nr: 69,
		name: 'Tattan Gregson',
	},
	{
		nr: 70,
		name: 'Konieczny (torby)',
	},
	{
		nr: 71,
		name: 'Marien',
	},
	{
		nr: 72,
		name: 'Muskatos *',
	},
	{
		nr: 73,
		name: 'Polpharma',
	},
	{
		nr: 74,
		name: 'Atelier Pologne',
	},
	{
		nr: 75,
		name: 'Marta Sulekova lub Sulevom *',
	},
	{
		nr: 76,
		name: 'Biały sklep (plecy)',
		imgName: 'białySklep.jpg',
		additionalInfo: 'farba czerwona prawdopodobnie',
	},
	{
		nr: 77,
		name: 'Dąbrowski & Góral (ortalion plecy)',
		imgName: 'dabrowski&goral.jpg',
	},
	{
		nr: 78,
		name: 'Kamila Froelke *',
	},
	{
		nr: 79,
		name: 'Lovely (plecy)',
		imgName: 'lovely.jpg',
		imgOrder: 'lovely_zlecenie.jpg',
		additionalInfo: 'proporcje farby rozpuszczalnikowych: 1 czerwony, 4 bialy',
	},
	{
		nr: 80,
		name: 'Nevesta',
	},
	{
		nr: 81,
		name: 'Esme',
	},
	{
		nr: 82,
		name: 'Men Garnitury',
	},
	{
		nr: 83,
		name: 'Adam Lwówek',
	},
	{
		nr: 84,
		name: 'Julia Gastoł (plecy)',
		imgName: 'julia_gastol.jpg',
		imgOrder: 'julia_gastol_zlecenie.jpg',
		additionalInfo: 'złota farba rozpuszczalnikowa',
	},
	{
		nr: 85,
		name: 'Mia Love (plecy)',
		imgName: 'mia_love.jpg',
		imgOrder: 'mia_love_zlecenie.jpg',
		additionalInfo: 'złota farba rozpuszczalnikowa',
	},
	{
		nr: 86,
		name: 'White daisy',
	},
	{
		nr: 87,
		name: 'Drapella',
	},
	{
		nr: 88,
		name: 'Monica Moncini lub Mancini *',
	},
	{
		nr: 89,
		name: 'Tatuum',
	},
	{
		nr: 90,
		name: 'Masina',
	},
	{
		nr: 91,
		name: 'W.I.P',
	},
	{
		nr: 92,
		name: 'Armando',
		imgName: 'armando.jpg',
	},
	{
		nr: 93,
		name: 'Salon sukien ślubnych Agat (plecy)',
		imgName: 'salon_sukien_slubnych_agat.jpg',
		imgOrder: 'salon_sukien_slubnych_agat_zlecenie.jpg',
		additionalInfo: 'srebrna farba rozpuszczalnikowa',
	},
	{
		nr: 94,
		name: 'Vogue',
	},
	{
		nr: 95,
		name: 'Tailor',
	},
	{
		nr: 96,
		name: 'Lovin',
	},
	{
		nr: 97,
		name: 'Chór Kul',
	},
	{
		nr: 98,
		name: 'Mister K',
	},
	{
		nr: 99,
		name: 'Best care',
	},
	{
		nr: 100,
		name: 'Best care *',
	},
	{
		nr: 101,
		name: 'Fellhof *',
	},
	{
		nr: 102,
		name: 'Laurella *',
	},
	{
		nr: 103,
		name: 'AC Tailor',
	},
	{
		nr: 104,
		name: 'House of weeding',
	},
	{
		nr: 105,
		name: 'Marzena',
	},
	{
		nr: 106,
		name: 'Irian Sam (torby) *',
	},
	{
		nr: 107,
		name: 'Dorota goldpoint',
	},
	{
		nr: 108,
		name: 'Bombowa krawcowa  *',
	},
	{
		nr: 109,
		name: 'Monalisa',
	},
	{
		nr: 110,
		name: 'Anette Wedding (plecy)',
		imgName: 'anette_wedding.jpg',
		imgOrder: 'anette_wedding_zlecenie.jpg',
		additionalInfo: 'farba grafitowa',
	},
	{
		nr: 111,
		name: 'Mik Kadrou lub Kadrov *',
	},
	{
		nr: 112,
		name: 'Szatański',
	},
	{
		nr: 113,
		name: 'Anna Purna',
	},
	{
		nr: 114,
		name: 'Justin Redding',
	},
	{
		nr: 115,
		name: 'X Powiatowy',
	},
	{
		nr: 116,
		name: 'Jack of diamonds',
	},
	{
		nr: 117,
		name: 'Le Soleil',
	},
	{
		nr: 118,
		name: 'Kubenz MTM',
	},
	{
		nr: 119,
		name: 'The best wedding dres',
	},
	{
		nr: 120,
		name: 'Far Far',
	},
	{
		nr: 121,
		name: 'Elegantka',
	},
	{
		nr: 122,
		name: 'Emily (stary)',
	},
	{
		nr: 123,
		name: 'Charles Atelier Krawieckie',
	},
	{
		nr: 124,
		name: 'Magdalena Popiel (przody)',
		imgName: 'magdalena_popiel.jpg',
		additionalInfo: 'szara farba',
	},
	{
		nr: 125,
		name: 'Nasna',
	},
	{
		nr: 126,
		name: 'Rent dress code',
	},
	{
		nr: 127,
		name: 'Spoiwo lub Spowo *',
	},
	{
		nr: 128,
		name: 'Studio 761',
	},
	{
		nr: 129,
		name: 'Lara - D',
	},
	{
		nr: 130,
		name: 'Glow',
	},
	{
		nr: 131,
		name: 'NA KZ',
	},
	{
		nr: 132,
		name: 'Lara Levai',
	},
	{
		nr: 133,
		name: 'Pralnia Agm',
	},
	{
		nr: 134,
		name: 'My atelier/alter ego',
	},
	{
		nr: 135,
		name: 'Marzenie',
	},
	{
		nr: 136,
		name: 'Igar (plecy)',
		imgName: 'igar.jpg',
		imgOrder: 'igar_zlecenie.jpg',
	},
	{
		nr: 137,
		name: 'De la Garza',
	},
	{
		nr: 138,
		name: 'Justin Paukin',
	},
	{
		nr: 139,
		name: 'Tom Sebastien (przody)',
		imgName: 'tom_sebastien_przody.jpg',
		imgOrder: 'tom_sebastien_zlecenie.jpg',
		additionalInfo: 'czarna farba rozpuszczalnikowa, pokrowce gramatura 80',
	},
	{
		nr: 140,
		name: 'The wedding butik (plecy)',
		imgName: 'the_wedding_butik.jpg',
		imgOrder: 'the_wedding_butik_zlecenie.jpg',
	},
	{
		nr: 141,
		name: 'Joanna i jest piekne (plecy) (prawdopodbnie)',
		imgName: 'joanna_i_jest_pieknie.jpg',
		additionalInfo: 'farba granatowa (prawdopodobnie)',
	},
	{
		nr: 142,
		name: 'Paulina Mora (plecy)',
		imgName: 'paulina_mora.jpg',
		imgOrder: 'paulina_mora_zlecenie.jpg',
		additionalInfo: 'zakryc nie drukowac napisy Suknie slubne',
	},
	{
		nr: 143,
		name: 'Plon',
	},
	{
		nr: 144,
		name: 'Bellavoi',
	},
	{
		nr: 145,
		name: 'Mc Premium',
	},
	{
		nr: 146,
		name: 'MMC',
	},
	{
		nr: 147,
		name: 'Moda Męska',
	},
	{
		nr: 148,
		name: 'Marees de france',
	},
	{
		nr: 149,
		name: 'Taranko 2',
	},
	{
		nr: 150,
		name: 'DP Club Conesera (przody)',
		imgName: 'dp_club_conesera.jpg',
	},
	{
		nr: 151,
		name: 'Gentelman lub Gentleman *',
	},
	{
		nr: 152,
		name: 'Vizard',
		imgName: 'vizard.jpg',
	},
	{
		nr: 153,
		name: 'Incanto Bridal',
	},
	{
		nr: 154,
		name: 'Ellstone',
	},
	{
		nr: 155,
		name: 'Justin Paukin',
	},
	{
		nr: 156,
		name: 'Elegant',
		imgName: 'elegant.jpg',
		additionalInfo: 'złota farba',
	},
	{
		nr: 157,
		name: 'Ellstone',
	},
	{
		nr: 158,
		name: 'Odevy Vodenka',
	},
	{
		nr: 159,
		name: 'Vodenkova (przody)',
		imgName: 'vodenkova.jpg',
	},
	{
		nr: 160,
		name: 'LAMANIA',
	},
	{
		nr: 161,
		name: 'EUFEME',
	},
	{
		nr: 162,
		name: 'On i Ona',
	},
	{
		nr: 163,
		name: 'Celebrity Bridal',
	},
	{
		nr: 164,
		name: 'Atelier rosa Sylwia Marciniak (przody)',
		imgName: 'atelier_rosa_sylwia_marciniak_przody.jpg',
		imgOrder: 'atelier_rosa_sylwia_marciniak_zlecenie.jpg',
		additionalInfo: 'farba złota rozpuszczalnikowa',
	},
	{
		nr: 165,
		name: 'MKL Suknie',
	},
	{
		nr: 166,
		name: 'Leśniowolski',
	},
	{
		nr: 167,
		name: 'Aleksandra',
	},
	{
		nr: 168,
		name: 'Galant',
	},
	{
		nr: 169,
		name: 'Amica',
	},
	{
		nr: 170,
		name: 'Novague',
	},
	{
		nr: 171,
		name: 'Off White (Laura)',
	},
	{
		nr: 172,
		name: 'New Men (przody)',
		imgName: 'new_men.jpg',
		imgOrder: 'new_men_zlecenie.jpg',
	},
	{
		nr: 173,
		name: 'Magdalena',
		imgName: 'magdalena.jpg',
		imgOrder: 'magdalena_zlecenie.jpg',
		additionalInfo: 'farba czerwona malboro rozpuszczalnikowa ',
	},
	{
		nr: 174,
		name: 'Un',
	},
	{
		nr: 175,
		name: 'Pralnia Delfin',
	},
	{
		nr: 176,
		name: 'Branchess',
	},
	{
		nr: 177,
		name: 'Ferrano',
	},
	{
		nr: 178,
		name: 'U Zośki',
	},
	{
		nr: 179,
		name: 'Moda Prostejon',
	},
	{
		nr: 180,
		name: 'Atelier rosa Sylwia Marciniak (plecy)',
		imgName: 'atelier_rosa_sylwia_marciniak_plecy.jpg',
		imgOrder: 'atelier_rosa_sylwia_marciniak_zlecenie.jpg',
		additionalInfo: 'farba złota rozpuszczalnikowa',
	},
	{
		nr: 181,
		name: 'Sklepy Szyszka',
		imgName: 'sklepy_szyszka.jpg',
	},
	{
		nr: 182,
		name: 'INCANTO Bridal',
	},
	{
		nr: 183,
		name: 'Marcus Kerr ',
		additionalInfo: 'Małe czarne 100x60 z klinem(bez wycietej szyjki)',
		imgName: 'marcusKerr.jpg',
	},
	{
		nr: 184,
		name: 'Juda Pietkiewicz',
	},
	{
		nr: 185,
		name: 'Mon Amour',
	},
	{
		nr: 186,
		name: 'Piast',
	},
	{
		nr: 187,
		name: 'Adriana Reina',
	},
	{
		nr: 188,
		name: 'Patrycja Knyt',
	},
	{
		nr: 189,
		name: 'Nikola B',
	},
	{
		nr: 190,
		name: 'Astra',
	},
	{
		nr: 191,
		name: 'Trendy Moda Ślubna',
	},
	{
		nr: 192,
		name: 'Tess',
	},
	{
		nr: 193,
		name: 'Lord moda męska',
	},
	{
		nr: 194,
		name: 'Kaledonia Eva Hudy (plecy)',
		imgName: 'kaledonia.jpg',
		imgOrder: 'kaledonia_zlecenie.jpg',
	},
	{
		nr: 195,
		name: 'Brant punkt lub Braut *',
	},
	{
		nr: 196,
		name: 'Warsaw Poet (plecy)',
		imgName: 'warsaw_poet.jpg',
		imgOrder: 'warsaw_poet_zlecenie.jpg',
		additionalInfo: 'farba granatowa pantone 533C rozpuszczalnikowa',
	},
	{
		nr: 197,
		name: 'Sposa',
	},
	{
		nr: 198,
		name: 'Gena (woreczki)',
	},
	{
		nr: 199,
		name: 'Mikołajkowe Spotkania Taneczne',
	},
	{
		nr: 200,
		name: 'Monica Nera',
	},
	{
		nr: 201,
		name: 'Lara Levai',
	},
	{
		nr: 202,
		name: 'Monika Sałapat',
	},
	{
		nr: 203,
		name: 'Mademoiselle',
	},
	{
		nr: 204,
		name: 'An-pol',
	},
	{
		nr: 205,
		name: 'Tańcz z Hand',
	},
	{
		nr: 206,
		name: 'Filharmonia',
	},
	{
		nr: 207,
		name: 'Evita (korona)',
	},
	{
		nr: 208,
		name: 'Releve Dance Wear',
	},
	{
		nr: 209,
		name: 'Eliza',
	},
	{
		nr: 210,
		name: 'Fusset (plecy, owal)',
		imgName: 'fusset.jpg',
		imgOrder: 'fusset_zlecenie.jpg',
		additionalInfo: 'czarna farba rozpuszczalnikowa',
	},
	{
		nr: 211,
		name: 'Manhattan',
	},
	{
		nr: 212,
		name: 'Modowa Krawcowa ',
		imgName: 'modowa_krawcowa.jpg',
	},
	{
		nr: 213,
		name: 'Queens Factory',
	},
	{
		nr: 214,
		name: 'Sklep Oliwier & Oliwia',
	},
	{
		nr: 215,
		name: 'Guns & tuxedos',
	},
	{
		nr: 216,
		name: 'Klasyka',
	},
	{
		nr: 217,
		name: 'Pantera',
	},
	{
		nr: 218,
		name: 'Winter',
	},
	{
		nr: 219,
		name: 'Epuzer',
	},
	{
		nr: 220,
		name: 'Epuzer',
	},
	{
		nr: 221,
		name: 'Janet Marie',
	},
	{
		nr: 222,
		name: 'White Angel (plecy)',
		imgName: 'white_angel.jpg',
		imgOrder: 'white_angel_zlecenie.jpg',
	},
	{
		nr: 223,
		name: 'Concept store by Evita',
	},
	{
		nr: 224,
		name: 'Kamil Hala',
	},
	{
		nr: 225,
		name: 'Releve Dance',
	},
	{
		nr: 226,
		name: 'Morfeusz',
	},
	{
		nr: 227,
		name: 'Pitti Style',
	},
	{
		nr: 228,
		name: 'Vestito',
	},
	{
		nr: 229,
		name: 'Marochianto 1989',
	},
	{
		nr: 230,
		name: 'Zespół Polskie Kwiaty',
	},
	{
		nr: 231,
		name: 'Josh',
	},
	{
		nr: 232,
		name: 'Reglment Etrancer',
	},
	{
		nr: 233,
		name: 'Verona',
	},
	{
		nr: 234,
		name: 'Malena',
	},
	{
		nr: 235,
		name: 'Fashion ltd Angel',
	},
	{
		nr: 236,
		name: 'Exclusive tailoring (material , ortalion)',
		imgName: 'exclusive_tailoring_1.jpg',
		imgName2: 'exclusive_tailoring_2.jpg',
		additionalInfo: 'drugie zdjecie ortaliony,farba zlota rozpuszczalnikowa',
	},
	{
		nr: 237,
		name: 'Lux Anna',
		imgName: 'anna_lux.jpg',
		imgOrder: 'anna_lux_zlecenie.jpg',
	},
	{
		nr: 238,
		name: 'Larumi',
	},
	{
		nr: 239,
		name: 'Salon Gabriel',
	},
	{
		nr: 240,
		name: 'Diva',
	},
	{
		nr: 241,
		name: 'Bartmańska',
	},
	{
		nr: 242,
		name: 'Skampol',
	},
	{
		nr: 243,
		name: 'Elegant Kurtki',
	},
	{
		nr: 244,
		name: 'hochzart',
	},
	{
		nr: 245,
		name: 'Legion etrangere',
	},
	{
		nr: 246,
		name: 'Branta',
	},
	{
		nr: 247,
		name: 'Salon Gabriel',
	},
	{
		nr: 248,
		name: 'Mallone',
	},
	{
		nr: 249,
		name: 'Nicole',
	},
	{
		nr: 250,
		name: 'Stachowska (przody)',
		imgName: 'stachowska_przody.jpg',
		imgOrder: 'stachowska_zlecenie.jpg',
	},
	{
		nr: 251,
		name: 'Stachowska (plecy)',
		imgName: 'stachowska_plecy.jpg',
		imgOrder: 'stachowska_zlecenie.jpg',
	},
	{
		nr: 252,
		name: 'La Blanche',
	},
	{
		nr: 253,
		name: 'Dream',
	},
	{
		nr: 254,
		name: 'Strefa panny młodej',
	},
	{
		nr: 255,
		name: 'Nesto',
	},
	{
		nr: 256,
		name: 'Bellovelo',
	},
	{
		nr: 257,
		name: 'Melrose Bridal',
	},
	{
		nr: 258,
		name: 'Modema',
	},
	{
		nr: 259,
		name: 'La Blanka',
	},

	{
		nr: 260,
		name: 'Poca Poca Petite',
	},

	{
		nr: 261,
		name: 'Melia',
	},
	{
		nr: 262,
		name: 'Trojan Sport',
	},
	{
		nr: 263,
		name: 'Hanna Bieńskowska',
	},
	{
		nr: 264,
		name: 'Meble Piegza(przody)',
		imgName: 'meble_piegza_przody.jpg',
	},
	{
		nr: 265,
		name: 'Po Prostu (plecy)',
		imgName: 'po_prostu.jpg',
		imgOrder: 'po_prostu_zlecenie.jpg',
	},
	{
		nr: 266,
		name: 'Stolarczyk Suits (ortalion)',
		imgName: 'stolarczyk_suits.jpg',
		additionalInfo: 'material ortaliony',
	},
	{
		nr: 267,
		name: 'Ciao Maxtara',
	},
	{
		nr: 268,
		name: 'Jola Przebinda (przody)',
		imgName: 'jolaPrzebinda.jpg',
		additionalInfo: 'małe czarne 110/64 !!! z wycieta szyjka',
	},
	{
		nr: 269,
		name: 'Mari Lill (plecy)',
		imgName: 'mari_lill.jpg',
		imgOrder: 'mari_lill_zlecenie.jpg',
	},
	{
		nr: 270,
		name: 'Komunijne Sukienki',
	},
	{
		nr: 271,
		name: 'Mr Badura',
	},
	{
		nr: 272,
		name: 'La Blanca',
	},
	{
		nr: 273,
		name: 'Leger',
	},
	{
		nr: 274,
		name: 'Bastek',
	},
	{
		nr: 275,
		name: 'Wonder Affair (plecy)',
		imgName: 'wonder_affair.jpg',
	},
	{
		nr: 276,
		name: 'Ak Moda',
	},
	{
		nr: 277,
		name: 'Dom Krawca',
	},
	{
		nr: 278,
		name: 'Taranko 1 (ortalion)',
		imgName: 'taranko.jpg',
		additionalInfo: 'material ortalion',
	},
	{
		nr: 279,
		name: 'Elegant',
	},
	{
		nr: 280,
		name: 'Magnat',
	},
	{
		nr: 281,
		name: 'Hawrot',
	},
	{
		nr: 282,
		name: 'Vesti Clero',
	},
	{
		nr: 283,
		name: 'Wekend',
	},
	{
		nr: 284,
		name: 'Madonna (plecy)',
		imgName: 'madonna.jpg',
		additionalInfo: 'pokrowce 180/75(prawdopodobnie)',
	},
	{
		nr: 285,
		name: 'Devikap / Denoeix',
	},
	{
		nr: 286,
		name: 'Villaro (przody)',
		additionalInfo: 'małe czarne 100x60 z wycieta szyjka',
		imgName: 'villaro.jpg',
	},
	{
		nr: 287,
		name: 'Garnitex',
	},
	{
		nr: 288,
		name: 'Novia Studi (plecy)',
		imgName: 'novia_studio.jpg',
	},
	{
		nr: 289,
		name: 'Kros',
	},
	{
		nr: 290,
		name: 'Garnitex',
	},
	{
		nr: 291,
		name: 'Korczak i Syn',
	},
	{
		nr: 292,
		name: 'Laura salon mody ślubnej',
	},
	{
		nr: 293,
		name: 'Ciao Maxtara',
	},
	{
		nr: 294,
		name: 'Moda pol',
	},
	{
		nr: 295,
		name: 'Pralnia Laguna',
	},
	{
		nr: 296,
		name: 'Blue Shadow',
	},
	{
		nr: 297,
		name: 'bastek',
	},
	{
		nr: 298,
		name: 'Andre grand',
	},
	{
		nr: 299,
		name: 'Mavi (plecy)',
		imgName: 'mavi.jpg',
		imgOrder: 'mavi_zlecenie.jpg',
		additionalInfo: 'farba grafitowa-ciemnoszara (wodna biała + czarna)',
	},
	{
		nr: 300,
		name: 'Korczak i Syn',
	},
	{
		nr: 301,
		name: 'Fenomen',
	},
	{
		nr: 302,
		name: 'Massimo',
	},
	{
		nr: 303,
		name: 'Szyjemy Sukienki',
	},
	{
		nr: 304,
		name: 'Letoice du matin',
	},
	{
		nr: 305,
		name: 'BW',
	},
	{
		nr: 306,
		name: 'BW',
	},

	{
		nr: null,
		name: 'Vizarro (przody)',
		imgName: 'vizarro.jpg',
		additionalInfo: 'małe czarne 100x60 z klinem',
	},

	{
		nr: null,
		name: 'Garnitex Plecy',
		imgName: 'garnitex_plecy.jpg',
		additionalInfo: 'nadruk 19cm od gory',
	},

	{
		nr: null,
		name: 'Polux (przody)',
		imgName: 'polux.jpg',
		imgOrder: 'polux_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Ankar (przody)',
		imgName: 'ankar.jpg',
	},
	{
		nr: null,
		name: 'Oho Wedding (plecy)',
		imgName: 'oho_wedding.jpg',
	},
	{
		nr: null,
		name: 'Guga (przody)',
		imgName: 'guga.jpg',
		additionalInfo: 'biała farba + jasnożółta',
	},
	{
		nr: null,
		name: 'Venus Beata Pandyra (plecy)',
		imgName: 'venus_beata_pandyra.jpg',
		imgOrder: 'venus_beata_pandyra_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Estelle suknie slubne (plecy)',
		imgName: 'estelle.jpg',
	},
	{
		nr: null,
		name: 'Sabina Skokoń (plecy)',
		imgName: 'sabina_skokon.jpg',
	},
	{
		nr: null,
		name: 'Joanna Pisarska (plecy*)',
		imgName: 'joanna_pisarska.jpg',
	},
	{
		nr: null,
		name: 'Tailors Club (plecy)',
		imgName: 'tailors_club.jpg',
		additionalInfo: 'dwa nadruki - odbicie lustrzane',
	},
	{
		nr: null,
		name: 'Victorio (przody)',
		imgName: 'victorio.jpg',
	},
	{
		nr: null,
		name: 'Pavluchenko (przody)',
		imgName: 'pavluchenko.jpg',
		imgName2: 'pavluchenko_pokrowce_czarne.jpg',
		imgOrder: 'pavluchenko_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Malloe (przody)',
		imgName: 'malloe_przody.jpg',
	},
	{
		nr: null,
		name: 'Malloe (plecy)',
		imgName: 'malloe_plecy.jpg',
	},
	{
		nr: null,
		name: 'Meble piegza (plecy)',
		imgName: 'meble_piegza_plecy.jpg',
	},
	{
		nr: null,
		name: 'Maria , łowicz (plecy)',
		imgName: 'maria_lowicz.jpg',
	},
	{
		nr: null,
		name: 'nelke (kolo + kaptury)',
		imgName: 'nelke_kolo.jpg',
		imgName2: 'nelke_kaptur.jpg',
	},
	{
		nr: null,
		name: 'Armia Janosika (plecy)',
		imgName: 'armia_janosika.jpg',
	},
	{
		nr: null,
		name: 'La perle (przody)',
		imgName: 'la_perle_przody.jpg',
	},
	{
		nr: null,
		name: 'La perle (plecy)',
		imgName: 'la_perle_plecy.jpg',
	},
	{
		nr: null,
		name: 'Moda męska Artur , cottbus (przody) //// lub nr 147',
		imgName: 'moda_meska_artur.jpg',
	},
	{
		nr: null,
		name: 'White Lady (plecy)',
		imgName: 'white_lady.jpg',
	},
	{
		nr: null,
		name: 'Boska suknie slubne (plecy)',
		imgName: 'boska_suknie_slubne.jpg',
	},
	{
		nr: null,
		name: 'Sienna (plecy)',
		imgName: 'sienna.jpg',
	},
	{
		nr: null,
		name: 'lamania szarek pokrowce (przody)',
		imgName: 'lamania_szare_przody.jpg',
		additionalInfo: 'sito z duzym napisem lamania',
	},
	{
		nr: null,
		name: 'Tom Sebastien (plecy)',
		imgName: 'tom_sebastien_plecy.jpg',
		imgOrder: 'tom_sebastien_zlecenie.jpg',
		additionalInfo: 'czarna farba rozpuszczalnikowa, pokrowce gramatura 80',
	},

	{
		nr: null,
		name: 'Asmen (2 rozne sklepy)',
		imgName: 'asmen_zator.jpg',
		additionalInfo: 'Sklep zator, ',
	},
	{
		nr: null,
		name: 'Presitge men style (przody) nowe sito',
		imgName: 'prestige.jpg',
		additionalInfo: 'złota farba',
	},

	{
		nr: null,
		name: 'Stacja winiarska (torby)',
		imgName: 'stacja_winiarska_czarna_torba.jpg',
		imgName2: 'stacja_winiarska_szara_torba.jpg',
		additionalInfo: 'ndruk na srodku pomiedzy uszammi a dolem torby',
	},

	{
		nr: null,
		name: 'Maria Yazh (plecy)',
		imgName: 'maria_yazh.jpg',
		imgOrder: 'maria_yazh_zlecenie.jpg',
		additionalInfo: 'zlota farba rozpuszczalnikowa',
	},

	{
		nr: null,
		name: 'Szachmat (przody)',
		imgName: 'szachmat.jpg',
		imgOrder: 'szachmat_zlecenie.jpg',
		additionalInfo: 'farba biala wodna + zlota  rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'Kaminiski Sons (plecy)',
		imgName: 'kaminski_sons_plecy.jpg',
		imgOrder: 'kaminski_sons_zlecenie.jpg',
		additionalInfo: 'zlota  rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'Kaminiski Sons (przody)',
		imgName: 'kaminski_sons_przody.jpg',
		imgOrder: 'kaminski_sons_zlecenie.jpg',
		additionalInfo: 'herb - zlota  rozpuszczalnikowa, napis biala wodna',
	},
	{
		nr: 'brak numeru lub 171',
		name: 'Off white bridal (plecy)',
		imgName: 'off_white_bridal.jpg',
		imgOrder: 'off_white_bridal_zlecenie.jpg',
	},
	{
		nr: 'brak numeru lub 171',
		name: 'Off white bridal (plecy)',
		imgName: 'off_white_bridal.jpg',
		imgOrder: 'off_white_bridal_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Kuklinska dk fashion (plecy)',
		imgName: 'kuklinska.jpg',
		imgOrder: 'kuklinska_zlecenie.jpg',
		additionalInfo: 'farba ciemnoszara',
	},
	{
		nr: null,
		name: 'Nadia (plecy)',
		imgName: 'nadia.jpg',
		imgOrder: 'nadia_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Vivien (plecy)',
		imgName: 'vivien.jpg',
		imgOrder: 'vivien_zlecenie.jpg',
		additionalInfo: 'prawdopodobnie wisniowa farba rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'Sarah (plecy)',
		imgName: 'sarah.jpg',
		imgOrder: 'sarah_zlecenie.jpg',
		additionalInfo: 'farba niebieski pantone 634 rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'Wilinski (przody)',
		imgName: 'wilinski.jpg',
		imgOrder: 'wilinski_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Classa (plecy)',
		imgName: 'classa.jpg',
		imgOrder: 'classa_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Vintage (przody)',
		imgName: 'vintage_przody.jpg',
		imgOrder: 'vintage_zlecenie.jpg',
		additionalInfo: 'farba biala wodna',
	},
	{
		nr: null,
		name: 'Vintage (plecy)',
		imgName: 'vintage_plecy.jpg',
		imgOrder: 'vintage_zlecenie.jpg',
		additionalInfo: 'farba biala wodna',
	},
	{
		nr: null,
		name: 'Blanca (plecy)',
		imgName: 'blanca.jpg',
	},
	{
		nr: null,
		name: 'Garnitex beżowe pokrowce (przody)',
		imgName: 'garnitex_bezowe_pokrowce.jpg',
		additionalInfo: 'logo prawdopodobnie z przodow garnitexa zwyklego, farba czarna rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'Fanfaronada (plecy)',
		imgName: 'fanfaronada.jpg',
		imgOrder: 'fanfaronada_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Kowalowe (plecy)',
		imgName: 'kowalowe_pokrowce_biale.jpg',
		imgName2: 'kowalowe_pokrowce_czarne.jpg',
		imgOrder: 'kowalowe_zlecenie.jpg',
		additionalInfo: 'złota farba rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'Malcon (oratalion)',
		imgName: 'malcon.jpg',
	},
	{
		nr: null,
		name: 'Lamania (nowa tkanina)',
		imgName: 'lamania_nowa_tkanina.jpg',
		imgOrder: 'lamania_nowa_tkanina_zlecenie.jpg',
		additionalInfo: 'sito lamania nowa tkanina, nadruk 1/3 wysokosc materialu od gory',
	},
	{
		nr: null,
		name: 'Carmen (plecy)',
		imgName: 'carmen.jpg',
		imgOrder: 'carmen_zlecenie.jpg',
		additionalInfo:
			'2 nadruki  u gory napis Carmen slubne marzenie na dole odbicie lustrzane strona interneowa, farba srebrna rozpuszczalnikowa',
	},
	{
		nr: 'brak numeru lub mozliwe ze nr 32',
		name: 'Maciej Domanski (plecy)',
		imgName: 'maciej_domanski.jpg',
		imgOrder: 'maciej_domanski_zlecenie.jpg',
	},

	{
		nr: null,
		name: 'Blue Crystal (plecy)',
		imgName: 'blue_crystal.jpg',
		additionalInfo: 'farba granatowa pantone 533C rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'Mateusz Szczepański (plecy)',
		imgName: 'mateusz_szczepanski.jpg',
		imgOrder: 'mateusz_szczepanski_zlecenie.jpg',
		additionalInfo: 'farba złota rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'flex art (przody)',
		imgName: 'flex_art.jpg',
		imgOrder: 'flex_art_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Dorota Mackiewicz (plecy)',
		imgName: 'dorota_mackiewicz.jpg',
		imgOrder: 'dorota_mackiewicz_zlecenie.jpg',
	},

	{
		nr: null,
		name: 'Kasia Zapała (plecy)',
		imgName: 'kasia_zapala_plecy.jpg',
		imgOrder: 'kasia_zapala_zlecenie.jpg',
		additionalInfo: 'farba biala rozpuszczalnikowa lub czarna rozpuszczalnikowa w zaleznosci od koloru pokrowca ',
	},
	{
		nr: null,
		name: 'Myclaire (przody)',
		imgName: 'myclaire.jpg',
		imgOrder: 'myclaire_zlecenie.jpg',
	},
	{
		nr: null,
		name: 'Grenade (plecy)',
		imgName: 'grenade.jpg',
		imgOrder: 'grenade_zlecenie.jpg',
		additionalInfo: 'farba złota rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'Solo Miya (plecy)',
		imgName: 'solo_miya.jpg',
		imgOrder: 'solo_miya_zlecenie.jpg',
		additionalInfo: 'farba złota rozpuszczalnikowa',
	},
	{
		nr: null,
		name: 'Janimen (przody)',
		imgName: 'janimen.jpg',
		imgOrder: 'janimen_zlecenie.jpg',
		additionalInfo: 'biala farba wodna',
	},
	{
		nr: null,
		name: 'Impresja (plecy)',
		imgName: 'impresja.jpg',
		imgOrder: 'impresja_zlecenie.jpg',
		additionalInfo: 'cimno szara farba wodna (biala + czarna_',
	},

	//do sprawdzenia:
	// 264 meble piegza
	// 141 joanna i jest pieknie
	// 147 czy jest to moda meska Artur
	// 139 czy jest sa to przody tom sebastien
	//  64,65 ktore to przody sebastian zukowski
	//  off white bridal brak lub 171
	//  222 czy to plecywhite angel
	//  164,180 czy to atelier rosa sylwia marciniak przody i plecy dobrze
	//  278 czy 149  taranko
]

// vizarro bez wycietej szyjki 100x60
//Elstone dodac zdjecie

function openPopupImage(imagePath) {
	if (imagePath) {
		document.querySelector('.popupModalImage').src = imagePath
		popupModal.classList.remove('hidden')
	}
}

function closePopup() {
	popupModal.classList.add('hidden')
}

btnClose.addEventListener('click', function () {
	closePopup()
})

document.querySelector('.sandsTableContent').addEventListener('click', function (e) {
	if (e.target.classList.contains('thumbnailImage')) {
		openPopupImage(e.target.getAttribute('src'))
	}
})

searchField.addEventListener('input', function (e) {
	e.preventDefault()
	const searchText = e.target.value

	sandsTableContent.innerHTML = ''

	if (searchText.length < 3) return

	const searchSands = sands.filter(function (elem, i, arr) {
		return elem.name.toUpperCase().includes(searchText.toUpperCase())
	})

	searchSands.forEach(function (el, i) {
		console.log(el.imgName)
		const tr = `<tr>
            <td>${el.nr ? el.nr : 'bez numeru'}</td>
            <td>${el.name}</td>
            <td>
						   <img  class="thumbnailImage ${el.imgName ? '' : 'hidden'}" src="${el.imgName ? 'img/' + el.imgName : ''}"/>
						   <img  class="thumbnailImage ${el.imgName2 ? '' : 'hidden'}" src="${el.imgName2 ? 'img/' + el.imgName2 : ''}"/>
						</td>
            <td><img  class="thumbnailImage ${el.imgOrder ? '' : 'hidden'}" src="${
			el.imgOrder ? 'img/' + el.imgOrder : ''
		}"/></td>

            <td>${el.additionalInfo ? el.additionalInfo : ''}</td>
        </tr>`

		sandsTableContent.insertAdjacentHTML('beforeend', tr)
	})
})
