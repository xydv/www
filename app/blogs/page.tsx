"use client";

import type React from "react";

import { Separator } from "@/components/ui/separator";
import { Link } from "next-view-transitions";

// Mock blog data
const blogPosts = [
  {
    id: "1",
    title: "hello world",
    date: "may 21, 2025",
    summary: "my first blog post",
    slug: "hello-world",
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
