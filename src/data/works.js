/**
 * Catalog of designer works.
 * 1. Copy image files into: public/works/
 * 2. Add an entry here for each image (file = exact filename).
 */
export const works = [
	{
		id: 'boy-and-wolf',
		title: 'Boy and Wolf',
		file: 'boy-and-wolf.jpg',
		year: '2026',
		medium: 'Illustration',
		featured: true,
	},
	{
		id: 'gloomy-moutain',
		title: 'Gloomy Moutain',
		file: 'gloomy-moutain.jpg',
		year: '2026',
		medium: 'Illustration',
	},
	{
		id: 'suit-boy',
		title: 'Suit Boy',
		file: 'suit-boy.jpg',
		year: '2026',
		medium: 'Illustration',
	},
	{
		id: 'couple',
		title: 'Couple',
		file: 'couple.jpg',
		year: '2026',
		medium: 'Illustration',
	},
	{
		id: 'sorceress',
		title: 'Sorceress',
		file: 'sorceress.jpg',
		year: '2026',
		medium: 'Illustration',
	},
	{
		id: 'desolate-planet',
		title: 'Desolate Planet',
		file: 'desolate-planet.jpg',
		year: '2026',
		medium: 'Illustration',
	},
	{
		id: 'wood',
		title: 'Wood',
		file: 'wood.jpg',
		year: '2026',
		medium: 'Illustration',
	},
	{
		id: 'portrait-of-young-lady',
		title: 'Portrait of Young Lady',
		file: 'portrait-of-young-lady.jpg',
		year: '2026',
		medium: 'Illustration',
	},
	{
		id: 'girl-eating-doughnut',
		title: 'Girl eating a Doughnut',
		file: 'girl-eating-doughnut.jpg',
		year: '2026',
		medium: 'Illustration',
	},
]

export function getWorkById(id) {
	return works.find((w) => w.id === id)
}

export function getFeaturedWork() {
	return works.find((w) => w.featured) ?? works[0]
}

export function workImageUrl(work) {
	return `${import.meta.env.BASE_URL}works/${work.file}`
}
