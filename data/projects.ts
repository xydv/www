export interface Project {
  title: string
  slug: string
  description: string
  longDescription: string
  technologies: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projectsData: Project[] = [
  {
    title: "minimal markdown editor",
    slug: "minimal-markdown-editor",
    description: "a distraction-free markdown editor built with react and typescript",
    longDescription:
      "this project is a minimalist markdown editor designed to provide a clean, distraction-free writing environment. it features real-time preview, syntax highlighting, and keyboard shortcuts for common markdown formatting.\n\nthe editor supports all standard markdown syntax including headings, lists, code blocks, and tables. it also includes a dark mode for comfortable writing at night and local storage to automatically save your work.\n\ni built this project to improve my understanding of state management in react and to create a tool that i would actually use in my daily workflow. the biggest challenge was implementing the syntax highlighting and ensuring the preview updates in real-time without performance issues.",
    technologies: ["react", "typescript", "codemirror", "tailwind css", "vite"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://markdown-editor.example.com",
    githubUrl: "https://github.com/example/markdown-editor",
  },
  {
    title: "task management api",
    slug: "task-management-api",
    description: "restful api for task management built with node.js and express",
    longDescription:
      "this project is a comprehensive task management api that allows users to create, read, update, and delete tasks. it includes features like user authentication, task categorization, due dates, and priority levels.\n\nthe api is built with node.js and express, using mongodb as the database. it follows restful principles and includes comprehensive documentation using swagger. authentication is handled with jwt tokens, and the api includes rate limiting to prevent abuse.\n\nbuilding this api helped me deepen my understanding of backend development, particularly around authentication, database design, and api documentation. one of the main challenges was designing a flexible yet simple data model that could accommodate various task management features while remaining performant.",
    technologies: ["node.js", "express", "mongodb", "mongoose", "jwt", "swagger"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    githubUrl: "https://github.com/example/task-api",
  },
  {
    title: "e-commerce dashboard",
    slug: "e-commerce-dashboard",
    description: "admin dashboard for e-commerce stores with analytics and inventory management",
    longDescription:
      "this e-commerce dashboard provides store owners with a comprehensive view of their business performance. it includes sales analytics, inventory management, order processing, and customer management features.\n\nthe dashboard is built with next.js and uses chart.js for data visualization. it connects to a custom api that integrates with popular e-commerce platforms like shopify and woocommerce. the ui is designed to be intuitive and responsive, working well on both desktop and mobile devices.\n\nthis project was particularly challenging because it required handling and visualizing large amounts of data while maintaining good performance. i learned a lot about data aggregation, caching strategies, and creating intuitive interfaces for complex data.",
    technologies: ["next.js", "react", "typescript", "chart.js", "tailwind css", "prisma", "postgresql"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://dashboard-demo.example.com",
    githubUrl: "https://github.com/example/ecommerce-dashboard",
  },
  {
    title: "weather visualization",
    slug: "weather-visualization",
    description: "interactive weather data visualization using d3.js and openweather api",
    longDescription:
      "this project visualizes weather data from around the world using interactive maps and charts. users can search for locations and view current conditions, forecasts, and historical weather patterns.\n\nbuilt with d3.js for visualizations and the openweather api for data, this application presents complex meteorological information in an intuitive and engaging way. it includes features like temperature heatmaps, precipitation patterns, and wind direction visualizations.\n\nthe biggest challenge in this project was working with the large datasets returned by the weather api and creating visualizations that were both informative and performant. i learned a lot about data processing, geospatial visualization, and creating responsive d3.js charts.",
    technologies: ["javascript", "d3.js", "openweather api", "html5 canvas", "css3", "webpack"],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    liveUrl: "https://weather-viz.example.com",
  },
]
