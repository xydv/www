"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "next-view-transitions";
import { MusicWidget } from "@/components/music-widget";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { SSEProvider } from "react-hooks-sse";

export default function Home() {
  // Get the first 3 projects for the homepage
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-10 md:space-y-12">
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border overflow-hidden flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/84765888?v=4"
            alt="aditya yadav"
            className="w-full h-full object-cover transition duration-300 grayscale hover:grayscale-0"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">aditya yadav</h1>
          <h2 className="text-base sm:text-lg font-medium text-muted-foreground">
            backend engineer
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-prose">
            i build accessible, responsive, and performant web applications with
            modern technologies. focused on creating elegant solutions to
            complex problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <Button asChild className="w-full sm:w-auto">
              <Link href="https://t.me/xaydv" target="_blank">
                contact me
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/blogs">read my blogs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      <section className="space-y-4 md:space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">projects</h2>
          <Link
            href="/projects"
            className="text-sm font-medium hover:underline flex items-center"
          >
            view all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-8 md:space-y-8">
          {featuredProjects.map((project) => (
            <div key={project.slug} className="space-y-1">
              <h3 className="text-base sm:text-lg font-medium">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:underline"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-3 md:space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold">now playing</h2>
        <SSEProvider endpoint="https://dedomil.alwaysdata.net">
          <MusicWidget />
        </SSEProvider>
      </section>
    </div>
  );
}
