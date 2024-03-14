const searchField = document.querySelector('#searchField')

const sandsTableContent = document.querySelector('.sandsTable > .sandsTableContent')

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
		name: 'Kamen',
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
		name: 'vittard *',
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
		name: 'Emilii salon mody ślubnej',
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
		name: 'Lavika lub Lavivia *',
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
		name: 'Kate Ketex lub Keter *',
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
		name: 'W.I.P',
	},
	{
		nr: 34,
		name: 'Monao *',
	},
	{
		nr: 35,
		name: 'Cherir Paris',
	},
	{
		nr: 36,
		name: 'Larmen',
	},
	{
		nr: 37,
		name: 'Larmen 2',
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
		name: '',
	},
	{
		nr: 49,
		name: 'La Gracja',
	},
	{
		nr: 50,
		name: 'Komis + size',
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
		name: 'KANU',
	},
	{
		nr: 55,
		name: 'Lesfees dumaring *',
	},
	{
		nr: 56,
		name: 'Maison',
	},
	{
		nr: 57,
		name: 'Gentelmen',
	},
	{
		nr: 58,
		name: 'Maribec  lub Mavibec lub Muribec lub Mavibel *',
	},
	{
		nr: 59,
		name: 'Reyujavik *',
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
		name: 'Crux lub Cruxs *',
	},
	{
		nr: 64,
		name: 'Sebastian Źukowski',
	},
	{
		nr: 65,
		name: 'Sebastian Źukowski',
	},
	{
		nr: 66,
		name: 'Zień *',
	},
	{
		nr: 67,
		name: 'Kamila Fvoelke *',
	},
	{
		nr: 68,
		name: 'Bespoke Tailor *',
	},
	{
		nr: 69,
		name: 'Tatfan Greyson',
	},
	{
		nr: 70,
		name: 'Konieczny *',
	},
	{
		nr: 71,
		name: 'Marien lub Mavien *',
	},
	{
		nr: 72,
		name: 'Muchtos *',
	},
	{
		nr: 73,
		name: 'Polpharma',
	},
	{
		nr: 74,
		name: 'Atelier Pologne *',
	},
	{
		nr: 75,
		name: 'Marta Selevom *',
	},
	{
		nr: 76,
		name: 'Biały sklep',
	},
	{
		nr: 77,
		name: 'Dąbrowski & Góral',
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
		name: 'Monica Mancini *',
	},
	{
		nr: 89,
		name: 'Tatuum',
	},
	{
		nr: 90,
		name: 'Masira *',
	},
	{
		nr: 91,
		name: 'W.I.P',
	},
	{
		nr: 92,
		name: 'Armando',
	},
	{
		nr: 93,
		name: 'Agat',
	},
	{
		nr: 94,
		name: 'Vogue lub Voque *',
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
		name: 'Chór Kul *',
	},
	{
		nr: 98,
		name: 'Mister K',
	},
	{
		nr: 99,
		name: 'Best care *',
	},
	{
		nr: 100,
		name: 'Best care *',
	},
	{
		nr: 101,
		name: 'Fellnol *',
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
		name: 'Marzena *',
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
		name: 'Mivi Kadrou *',
	},
	{
		nr: 112,
		name: 'Szatański',
	},
	{
		nr: 113,
		name: 'Anna Purna lub Anna Durna *',
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
		name: 'Spoiwo *',
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
		name: 'My atelier ego',
	},
	{
		nr: 135,
		name: 'Muizenie lub Marzenie',
	},
]

searchField.addEventListener('input', function (e) {
	e.preventDefault()
	const searchText = e.target.value

	sandsTableContent.innerHTML = ''

	if (searchText.length < 3) return

	const searchSands = sands.filter(function (elem, i, arr) {
		return elem.name.toUpperCase().includes(searchText.toUpperCase())
	})

	console.log(searchSands)

	searchSands.forEach(function (el, i) {
		const tr = `<tr>
            <td>${el.nr}</td>
            <td>${el.name}</td>
        </tr>`
		sandsTableContent.insertAdjacentHTML('beforeend', tr)
	})
})
