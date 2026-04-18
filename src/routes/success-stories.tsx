import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Quote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — BlueGuardia" },
      { name: "description", content: "Cadets who became cybersecurity professionals. Real outcomes from BlueGuardia." },
      { property: "og:title", content: "Success Stories — BlueGuardia" },
      { property: "og:description", content: "From Cadre to career. Real stories from BlueGuardia graduates." },
    ],
  }),
  component: SuccessPage,
});

const stories = [
  {
    name: "Daniel K.",
    cadre: "Cadre 01",
    role: "SOC Analyst @ Global Bank",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    quote: "I came in with a help-desk background and zero security experience. Three months later I was triaging real alerts on a Tier-1 SOC team. The detection engineering module changed how I think.",
    delta: "Help Desk → Tier-1 SOC Analyst",
  },
  {
    name: "Sara M.",
    cadre: "Cadre 01",
    role: "Junior Pentester @ Consulting Firm",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    quote: "The Burp Suite labs and AD attack chain modules were brutal in the best way. I walked into my first client engagement knowing exactly what to do.",
    delta: "Network Admin → Penetration Tester",
  },
  {
    name: "Imran S.",
    cadre: "Cadre 01",
    role: "Threat Hunter @ MSSP",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop&crop=face",
    quote: "BlueGuardia doesn't teach theory — they teach you to defend. The capstone simulation felt like a real breach. My first day on the job felt like day 90 of training.",
    delta: "CS Graduate → Threat Hunter",
  },
];

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
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Every story below started with an application. These cadets graduated
              and walked into cybersecurity roles at firms across the industry.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-6">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-8 p-8 lg:p-10 rounded-2xl border border-border bg-surface hover:border-primary/40 transition-colors">
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="mt-4 font-mono-tag">{s.cadre}</div>
                  <div className="text-lg font-bold mt-1">{s.name}</div>
                  <div className="text-sm text-primary">{s.role}</div>
                </div>
                <div>
                  <Quote className="h-8 w-8 text-primary/50 mb-4" />
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">"{s.quote}"</p>
                  <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-md border border-primary/40 bg-primary/10 text-primary text-sm font-mono">
                    {s.delta}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
