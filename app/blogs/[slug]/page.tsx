"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

// fetch from api
const blogPosts = {
  "hello-world": {
    title: "hello world",
    date: "may 21, 2025",
    content: `this is a placeholder blog`,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">post not found</h1>
        <p>the blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/blogs">
            <ArrowLeft className="mr-2 h-4 w-4" /> back to blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <article className="space-y-4 md:space-y-6">
        <header className="space-y-2">
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-bold"
            style={{ viewTransitionName: params.slug }}
          >
            {post.title}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {post.date}
          </p>
        </header>

        <Separator />

        <div
          className="prose dark:prose-invert prose-sm sm:prose-base max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <Button variant="outline" size="sm" asChild>
        <Link href="/blogs">
          <ArrowLeft className="mr-2 h-4 w-4" /> back to blogs
        </Link>
      </Button>
    </div>
  );
}
