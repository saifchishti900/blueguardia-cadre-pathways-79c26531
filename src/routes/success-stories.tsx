import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Hourglass, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — BlueGuardia" },
      { name: "description", content: "Real graduate outcomes — coming soon as our first Cadres complete training." },
      { property: "og:title", content: "Success Stories — BlueGuardia" },
      { property: "og:description", content: "Authentic stories from BlueGuardia graduates — publishing soon." },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// OUTCOMES</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
              From Cadre to <span className="text-gradient">career.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-10 lg:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-10" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary mx-auto">
                  <Hourglass className="h-6 w-6" />
                </div>

                <div className="font-mono-tag mt-6">// STATUS · PENDING_GRADUATION</div>

                <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
                  Real stories.
                  <br />
                  <span className="text-gradient">Coming soon.</span>
                </h2>

                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  We don't believe in fabricated testimonials. Our first Cadres are
                  still in training — the moment they land their roles, their stories
                  will live here. Authentic, verifiable, and worth the wait.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-terminal/40 bg-terminal/10 text-terminal font-mono text-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  Stick with us — first stories drop with Cadre 01 graduation
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/training"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-medium hover:bg-primary/90 hover:scale-105 transition-all"
                  >
                    See the Training <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md font-medium hover:bg-surface-elevated"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
