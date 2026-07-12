/**
 * Catalog of designer works.
 * 1. Copy image files into: public/works/
 * 2. Add an entry here for each image (file = exact filename).
 */
export const works = [
  {
    id: 'horizon-study',
    title: 'Horizon Study',
    file: 'horizon-study.svg',
    year: '2025',
    medium: 'Digital',
    featured: true,
  },
  {
    id: 'soft-geometry',
    title: 'Soft Geometry',
    file: 'soft-geometry.svg',
    year: '2025',
    medium: 'Print',
  },
  {
    id: 'ink-field',
    title: 'Ink Field',
    file: 'ink-field.svg',
    year: '2024',
    medium: 'Illustration',
  },
  {
    id: 'quiet-room',
    title: 'Quiet Room',
    file: 'quiet-room.svg',
    year: '2024',
    medium: 'Editorial',
  },
  {
    id: 'amber-signal',
    title: 'Amber Signal',
    file: 'amber-signal.svg',
    year: '2024',
    medium: 'Brand',
  },
  {
    id: 'tide-line',
    title: 'Tide Line',
    file: 'tide-line.svg',
    year: '2023',
    medium: 'Poster',
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
