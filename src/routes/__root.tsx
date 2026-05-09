import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LanguageProvider } from "@/context/LanguageContext";
import { ProgressProvider } from "@/context/ProgressContext";
import { Navbar } from "@/components/Navbar";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="font-display text-7xl gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the cosmos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page drifted into the void. Return to discover wonders.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-gold"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full glass px-5 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "WonderSphere — Interactive Journey Through The 7 Wonders" },
      {
        name: "description",
        content:
          "A cinematic, bilingual exploration of the 7 Wonders of the World — interactive globe, culture, history, documentaries, and quizzes.",
      },
      { name: "author", content: "WonderSphere" },
      { property: "og:title", content: "WonderSphere — Interactive Journey Through The 7 Wonders" },
      {
        property: "og:description",
        content: "Spin the globe, explore wonders, listen to cultures, and earn your traveler's passport.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ProgressProvider>
          <div className="relative min-h-screen overflow-x-clip">
            <div className="fixed inset-0 -z-20 star-field opacity-60" />
            <div className="fixed inset-0 -z-20" style={{ background: "var(--gradient-cosmic)" }} />
            <FloatingParticles />
            <Navbar />
            <main className="pt-28">
              <Outlet />
            </main>
            <Footer />
          </div>
        </ProgressProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
