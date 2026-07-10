export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  role: string
  description: string
  coverImage: string
  youtubeId?: string
  pdfs: { label: string; url: string }[]
  links: ProjectLink[]
}

const BASE = import.meta.env.BASE_URL

export const projects: Project[] = [
  {
    id: 'sainsburys',
    title: "The Unexpected Guest | Sainsbury's | Christmas 2025",
    role: 'ETC | FX TD / Pipeline TD',
    description:
      'Responsible for breath FX on this Christmas 2025 commercial for Sainsbury\'s.',
    coverImage: `https://img.youtube.com/vi/QaF1my5h-Os/maxresdefault.jpg`,
    youtubeId: 'QaF1my5h-Os',
    pdfs: [],
    links: [],
  },
  {
    id: 'rebels',
    title: 'REBELS',
    role: 'BU | Tech Lead / Pipeline TD / FX TD / Rigging TD / R&D',
    description:
      'Short film project exploring USD-based pipelines and collaborative production workflows. Developed pipeline tooling, asset management systems, and renderfarm integration for a team of artists. Took part in asset build, animation, lighting and compositing.',
    coverImage: `${BASE}blog/rebels/cover.jpg`,
    youtubeId: 's2FfCYj8eow',
    pdfs: [
      { label: 'Dissertation', url: `${BASE}blog/rebels/REBELS_Dissertation_2026.pdf` },
    ],
    links: [],
  },
  {
    id: 'deadshot',
    title: 'Deadshot',
    role: 'BU | R&D',
    description:
      'R&D project focused on real-time web-based monocoluar motion capture. Accepted into the posters category of ACM Siggraph Eurographics Symposium on Computer Animation 2026',
    coverImage: `${BASE}blog/deadshot/cover.jpg`,
    pdfs: [
    ],
    links: [
      { label: 'Live Demo', url: 'https://cjhosken.github.io/deadshot' },
      { label: 'SCA 2026 Poster', url: 'https://diglib.eg.org/server/api/core/bitstreams/a83ad39f-90d9-43e3-8ebf-87e5f83716e6/content' },
    ],
  },
]
