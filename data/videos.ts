export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Creative Discipline",
    description: "A reflection on consistency and focus in creative work.",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    id: 2,
    title: "Deep Focus",
    description: "Why modern creators struggle with attention.",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    id: 3,
    title: "Consistency Wins",
    description: "Small actions daily create mastery.",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    id: 4,
    title: "Build Systems",
    description: "Stop relying on motivation.",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
];
