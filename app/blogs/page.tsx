"use client";

import type React from "react";

import { Separator } from "@/components/ui/separator";
import { Link } from "next-view-transitions";

// Mock blog data
const blogPosts = [
  {
    id: "blog1",
    title: "getting started with next.js",
    date: "may 15, 2023",
    summary:
      "learn how to set up a next.js project from scratch and build your first application.",
    slug: "getting-started-with-nextjs",
  },
  {
    id: "blog2",
    title: "the power of server components",
    date: "june 2, 2023",
    summary:
      "explore how react server components can improve performance and user experience.",
    slug: "power-of-server-components",
  },
  {
    id: "blog3",
    title: "building a portfolio with shadcn/ui",
    date: "june 20, 2023",
    summary:
      "a step-by-step guide to creating a professional portfolio website using shadcn/ui components.",
    slug: "building-portfolio-with-shadcn-ui",
  },
  {
    id: "blog4",
    title: "optimizing images in next.js",
    date: "july 5, 2023",
    summary:
      "best practices for image optimization in next.js applications to improve loading times.",
    slug: "optimizing-images-nextjs",
  },
  {
    id: "blog5",
    title: "typescript tips for react developers",
    date: "july 18, 2023",
    summary:
      "practical typescript tips and tricks to improve your react development workflow.",
    slug: "typescript-tips-react-developers",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <section className="space-y-3 md:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">blogs</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-prose">
          thoughts, ideas, and insights about web development, design, and
          technology.
        </p>
      </section>

      <Separator />

      <section className="space-y-6 md:space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="space-y-1" data-slug={post.slug}>
            <h2
              className="text-base sm:text-lg font-medium"
              style={{ viewTransitionName: post.slug }}
            >
              <Link href={`/blogs/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {post.date}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
