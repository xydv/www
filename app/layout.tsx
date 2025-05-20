import type React from "react";
import "@/app/globals.css";
import { Funnel_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ViewTransitions } from "next-view-transitions";

const funnelSans = Funnel_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "portfolio & blog",
  description: "my personal portfolio and blog",
  metadataBase: new URL("https://example.com"),
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${funnelSans.className} min-h-screen flex flex-col bg-background text-foreground`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
          >
            <Navigation />
            <main className="flex-1 mx-auto w-full px-4 py-8 md:py-12 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[65%] xl:max-w-[50%]">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
