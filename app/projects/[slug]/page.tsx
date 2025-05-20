"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "next-view-transitions";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/data/projects";
import { useState } from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">project not found</h1>
        <p>the project you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> back to projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <article className="space-y-6">
        <header className="space-y-2">
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-bold"
            style={{ viewTransitionName: params.slug }}
          >
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {project.description}
          </p>
        </header>

        <Separator />

        {/* Main image */}
        <div className="aspect-video w-full bg-muted overflow-hidden">
          <img
            src={project.images[activeImage] || "/placeholder.svg"}
            alt={`${project.title} screenshot ${activeImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnail gallery */}
        {project.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-video bg-muted overflow-hidden ${
                  activeImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-medium">about this project</h2>
          <div className="space-y-4 text-sm sm:text-base">
            {project.longDescription.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-medium">technologies used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-medium">links</h2>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> live demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> view code
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>

      <Button variant="outline" size="sm" asChild>
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> back to projects
        </Link>
      </Button>
    </div>
  );
}
