"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

// Mock blog data
const blogPosts = {
  "getting-started-with-nextjs": {
    title: "getting started with next.js",
    date: "may 15, 2023",
    content: `
      <p>next.js is a react framework that enables server-side rendering and static site generation for react applications. it's designed to make it easy to build fast, seo-friendly websites with react.</p>

      <h2>why next.js?</h2>
      <p>next.js provides a number of benefits over a traditional react application:</p>
      <ul>
        <li>server-side rendering for improved performance and seo</li>
        <li>automatic code splitting for faster page loads</li>
        <li>simple client-side routing</li>
        <li>api routes to build api endpoints with serverless functions</li>
        <li>built-in css and sass support</li>
      </ul>

      <h2>setting up a next.js project</h2>
      <p>to create a new next.js project, you can use the create-next-app command:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>

      <p>this will set up a new next.js project with all the necessary configuration. once the installation is complete, you can navigate to the project directory and start the development server:</p>
      <pre><code>cd my-next-app
npm run dev</code></pre>

      <h2>creating pages</h2>
      <p>in next.js, pages are react components exported from files in the pages directory. each page is associated with a route based on its file name.</p>
      <p>for example, if you create a file at pages/about.js that exports a react component, it will be accessible at /about.</p>

      <h2>conclusion</h2>
      <p>next.js provides a powerful framework for building react applications with server-side rendering and static site generation. it's a great choice for building fast, seo-friendly websites with react.</p>
    `,
  },
  "power-of-server-components": {
    title: "the power of server components",
    date: "june 2, 2023",
    content: `
      <p>react server components represent a paradigm shift in how we build react applications. they allow components to run on the server, reducing the amount of javascript sent to the client and improving performance.</p>

      <h2>what are server components?</h2>
      <p>server components are a new kind of react component that runs on the server. they can access server-side resources like databases, file systems, and apis without requiring client-side javascript.</p>

      <h2>benefits of server components</h2>
      <p>server components offer several advantages:</p>
      <ul>
        <li>reduced javascript bundle size</li>
        <li>improved initial page load performance</li>
        <li>access to server-side resources</li>
        <li>automatic code splitting</li>
      </ul>

      <h2>using server components in next.js</h2>
      <p>next.js has integrated server components into its framework, making it easy to use them in your applications. by default, all components in the app router are server components unless specified otherwise.</p>

      <h2>conclusion</h2>
      <p>react server components represent a significant advancement in react development, offering improved performance and a better developer experience. as they become more widely adopted, they will likely become a standard part of react development.</p>
    `,
  },
  "building-portfolio-with-shadcn-ui": {
    title: "building a portfolio with shadcn/ui",
    date: "june 20, 2023",
    content: `
      <p>shadcn/ui is a collection of reusable components built with radix ui and tailwind css. it's a great choice for building a portfolio website because it provides a set of accessible, customizable components that can be easily styled to match your brand.</p>

      <h2>getting started with shadcn/ui</h2>
      <p>to use shadcn/ui in your next.js project, you can install the components you need using the cli:</p>
      <pre><code>npx shadcn@latest add button</code></pre>

      <p>this will add the button component to your project, along with any necessary dependencies.</p>

      <h2>building a portfolio</h2>
      <p>when building a portfolio with shadcn/ui, you can use components like card, button, and avatar to create a professional-looking website. here's an example of how you might structure your portfolio:</p>

      <h3>header</h3>
      <p>use the navigationmenu component to create a navigation bar with links to different sections of your portfolio.</p>

      <h3>hero section</h3>
      <p>use the card component to create a hero section with your name, title, and a brief introduction.</p>

      <h3>projects section</h3>
      <p>use the card component to showcase your projects, with images, descriptions, and links to live demos or github repositories.</p>

      <h3>contact section</h3>
      <p>use the form component to create a contact form that visitors can use to get in touch with you.</p>

      <h2>conclusion</h2>
      <p>shadcn/ui provides a great foundation for building a portfolio website. its components are accessible, customizable, and easy to use, making it a great choice for developers of all skill levels.</p>
    `,
  },
  "optimizing-images-nextjs": {
    title: "optimizing images in next.js",
    date: "july 5, 2023",
    content: `
      <p>images are often the largest files that need to be downloaded when a user visits a website. optimizing images can significantly improve the performance of your next.js application.</p>

      <h2>using the next.js image component</h2>
      <p>next.js provides an image component that automatically optimizes images. it resizes, optimizes, and serves images in modern formats like webp when the browser supports it.</p>

      <pre><code>import Image from 'next/image'

export default function MyComponent() {
  return (
    &lt;Image
      src="/profile.jpg"
      alt="profile picture"
      width={500}
      height={500}
    /&gt;
  )
}</code></pre>

      <h2>lazy loading</h2>
      <p>the next.js image component automatically lazy loads images, meaning they're only loaded when they enter the viewport. this can significantly improve the initial load time of your pages.</p>

      <h2>responsive images</h2>
      <p>you can make images responsive by setting the fill prop to true and using css to control the size of the image container:</p>

      <pre><code>import Image from 'next/image'

export default function MyComponent() {
  return (
    &lt;div style={{ position: 'relative', width: '100%', height: '500px' }}&gt;
      &lt;Image
        src="/landscape.jpg"
        alt="landscape"
        fill
        style={{ objectFit: 'cover' }}
      /&gt;
    &lt;/div&gt;
  )
}</code></pre>

      <h2>conclusion</h2>
      <p>optimizing images is crucial for improving the performance of your next.js application. the next.js image component makes it easy to serve optimized, responsive images that load quickly and look great on all devices.</p>
    `,
  },
  "typescript-tips-react-developers": {
    title: "typescript tips for react developers",
    date: "july 18, 2023",
    content: `
      <p>typescript is a powerful tool for react developers, providing type safety and improved developer experience. here are some tips for using typescript effectively in your react projects.</p>

      <h2>typing props</h2>
      <p>when defining a react component, you can use typescript to type the props:</p>

      <pre><code>interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ text, onClick, disabled = false }: ButtonProps) {
  return (
    &lt;button onClick={onClick} disabled={disabled}&gt;
      {text}
    &lt;/button&gt;
  );
}</code></pre>

      <h2>using react.fc</h2>
      <p>react.fc (function component) is a type that includes the children prop and other props that all react components have:</p>

      <pre><code>interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC&lt;ButtonProps&gt; = ({ text, onClick, disabled = false }) => {
  return (
    &lt;button onClick={onClick} disabled={disabled}&gt;
      {text}
    &lt;/button&gt;
  );
}</code></pre>

      <h2>typing hooks</h2>
      <p>when using hooks like usestate, you can specify the type of the state:</p>

      <pre><code>const [count, setCount] = useState&lt;number&gt;(0);</code></pre>

      <h2>typing event handlers</h2>
      <p>typescript provides types for dom events, which you can use when defining event handlers:</p>

      <pre><code>function handleChange(event: React.ChangeEvent&lt;HTMLInputElement&gt;) {
  console.log(event.target.value);
}</code></pre>

      <h2>conclusion</h2>
      <p>typescript can significantly improve the developer experience when working with react. by providing type safety and better tooling, it helps catch errors early and makes your code more maintainable.</p>
    `,
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
          <Link href="/blog">
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
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> back to blogs
        </Link>
      </Button>
    </div>
  );
}
