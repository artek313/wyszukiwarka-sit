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
		name: 'Trendy mody',
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
	},
	{
		nr: 32,
		name: 'Kasia Zapała',
	},
	{
		nr: 33,
		name: 'Moda Męska W.I.P',
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
	},
	{
		nr: 49,
		name: 'La Gracja',
	},
	{
		nr: 50,
		name: 'Komis ślubny + size',
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
		name: 'Sebastian Żukowski',
	},
	{
		nr: 65,
		name: 'Sebastian Żukowski',
	},
	{
		nr: 66,
		name: 'Maciej Zień',
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
		name: 'Biały sklep',
		imgName: 'białySklep.jpg',
	},
	{
		nr: 77,
		name: 'Dąbrowski & Góral',
		imgName: 'dabrowski&goral.jpg',
	},
	{
		nr: 78,
		name: 'Kamila Froelke *',
	},
	{
		nr: 79,
		name: 'Lovely',
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
		name: 'Julia Gastoł',
	},
	{
		nr: 85,
		name: 'Mia Love',
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
		name: 'Agat',
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
		name: 'Anette Wedding',
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
		name: 'Magdalena Popiel',
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
		name: 'Jgak lub Jgar *',
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
		name: 'Ts tom Sebastian lub Sebastien *',
	},
	{
		nr: 140,
		name: 'The wedding butik',
	},
	{
		nr: 141,
		name: 'Joanna',
	},
	{
		nr: 142,
		name: 'Paulina Mora',
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
		name: 'DP Club Conesera',
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
		name: 'Vodenkova',
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
		name: 'Atelier rosa',
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
		name: 'New Men',
	},
	{
		nr: 173,
		name: 'Magdalena',
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
		name: 'Atelier Rosa',
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
		name: 'Marcus Kerr',
		additionalInfo: 'Małe czarne 100x60 bez wycietej szyjki',
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
		name: 'Kaledonia',
	},
	{
		nr: 195,
		name: 'Brant punkt lub Braut *',
	},
	{
		nr: 196,
		name: 'Warsaw Poet',
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
		name: 'Fusset',
	},
	{
		nr: 211,
		name: 'Manhattan',
	},
	{
		nr: 212,
		name: 'Modowa Krawcowa *',
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
		name: 'White Angel',
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
		name: 'Exclusive tailoring',
	},
	{
		nr: 237,
		name: 'Lux Anna',
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
		name: 'Stachowska',
	},
	{
		nr: 251,
		name: 'Stachowska',
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
		name: 'Meble Piegza',
	},
	{
		nr: 265,
		name: 'Po Prostu',
	},
	{
		nr: 266,
		name: 'Stolarczyk Suits',
	},
	{
		nr: 267,
		name: 'Ciao Maxtara',
	},
	{
		nr: 268,
		name: 'Jola Przebinda',
		imgName: 'jolaPrzebinda.jpg',
		additionalInfo: 'małe czarne 110/64 !!! z wycieta szyjka',
	},
	{
		nr: 269,
		name: 'Mari Lill',
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
		name: 'Wonder Affair',
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
		name: 'Taranko 1',
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
		name: 'Madonna',
	},
	{
		nr: 285,
		name: 'Devikap / Denoeix',
	},
	{
		nr: 286,
		name: 'Villaro',
		additionalInfo: 'małe czarne 100x60 z wycieta szyjka',
		imgName: 'villaro.jpg',
	},
	{
		nr: 287,
		name: 'Garnitex',
	},
	{
		nr: 288,
		name: 'Novia Studio',
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
		name: 'Mavi',
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
		name: 'Vizarro',
		imgName: 'vizarro.jpg',
		additionalInfo: 'małe czarne 100x60 z klinem',
	},
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
		const tr = `<tr>
            <td>${el.nr ? el.nr : 'bez numeru'}</td>
            <td>${el.name}</td>
            <td><img  class="thumbnailImage" src="${el.imgName ? 'img/' + el.imgName : ''}"/></td>
            <td>${el.additionalInfo ? el.additionalInfo : ''}</td>
        </tr>`

		sandsTableContent.insertAdjacentHTML('beforeend', tr)
	})
})
