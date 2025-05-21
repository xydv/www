export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "pulp - share code seamlessly",
    slug: "minimal-markdown-editor",
    description:
      "pulp is a code sharing platform to share code snippets seamlessly",
    longDescription: "<todo-add-description>",
    technologies: ["nextjs", "typescript", "codemirror", "cobra-cli"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://pulpx.vercel.app",
    githubUrl: "https://github.com/xydv/pulp",
  },
];
