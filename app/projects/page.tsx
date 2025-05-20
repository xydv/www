import { Link } from "next-view-transitions";
import { Separator } from "@/components/ui/separator";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <section className="space-y-3 md:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">projects</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-prose">
          a collection of my recent work and personal projects.
        </p>
      </section>

      <Separator />

      <section className="space-y-6 md:space-y-8">
        {projectsData.map((project) => (
          <article key={project.slug} className="space-y-1">
            <h2
              className="text-base sm:text-lg font-medium"
              style={{ viewTransitionName: project.slug }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="hover:underline"
              >
                {project.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
