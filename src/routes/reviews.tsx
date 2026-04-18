import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — BlueGuardia" },
      { name: "description", content: "What our cadets say about BlueGuardia cybersecurity training." },
      { property: "og:title", content: "Reviews — BlueGuardia" },
      { property: "og:description", content: "Cadet reviews from past BlueGuardia training cohorts." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { n: "Aliyah R.", t: "Cadre 01 / SOC", r: 5, q: "Best decision I made for my career. The trainers actually work in the industry." },
  { n: "Hassan T.", t: "Cadre 01 / Pentester", r: 5, q: "The lab environment is incredible. I felt like I was on a real engagement, not in a classroom." },
  { n: "Nadia P.", t: "Cadre 01 / SOC", r: 5, q: "The detection engineering module alone was worth the entire program. Game-changing." },
  { n: "Omar S.", t: "Cadre 01 / Pentester", r: 4, q: "Tough, fast-paced, no hand-holding — exactly what cybersecurity training should be." },
  { n: "Zainab L.", t: "Cadre 01 / SOC", r: 5, q: "The mentorship after class hours was just as valuable as the lectures." },
  { n: "Vikram J.", t: "Cadre 01 / Pentester", r: 5, q: "Got my first pentest job two weeks after graduating. The reporting module made the difference." },
];

function ReviewsPage() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// CADET REVIEWS</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
              The unfiltered <span className="text-gradient">verdict.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.06}>
              <div className="p-6 rounded-xl border border-border bg-surface h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className={`h-4 w-4 ${idx < r.r ? "fill-primary text-primary" : "text-border"}`} />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed flex-1">"{r.q}"</p>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="font-semibold">{r.n}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">{r.t}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
