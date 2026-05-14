import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { MentorPanel } from "@/components/MentorPanel";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Trainers — BlueGuardia" },
      { name: "description", content: "Meet the practitioners building the next generation of cybersecurity defenders." },
      { property: "og:title", content: "Our Trainers — BlueGuardia" },
      { property: "og:description", content: "Industry practitioners with decades of combined cyber experience." },
    ],
  }),
  component: TrainersPage,
});

const trainers = [
  {
    name: "Aisha Rahman",
    title: "Lead SOC Trainer",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop&crop=face",
    certs: ["GCIA", "GCFA", "CISSP", "Splunk Certified Architect"],
    exp: "12+ years in security operations, formerly Tier-3 SOC Lead at a Fortune 100 financial institution. Built detection-as-code pipelines covering 10,000+ endpoints.",
    achievements: ["Authored 200+ Sigma rules adopted by SOC Prime", "Speaker at SANS DFIR Summit 2023", "Mentored 400+ SOC analysts"],
  },
  {
    name: "Marcus Chen",
    title: "Lead Offensive Security Trainer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    certs: ["OSCP", "OSEP", "OSWE", "CRTO"],
    exp: "10+ years in red team operations and adversary emulation. Former Senior Pentester at a Big 4 consulting firm, led 80+ full-scope engagements across finance and healthcare.",
    achievements: ["Hall of Fame: Google, Microsoft, Apple bug bounty", "Published 3 CVEs in enterprise software", "DEF CON CTF finalist"],
  },
  {
    name: "Priya Iyer",
    title: "Foundations & Network Security Trainer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=face",
    certs: ["CCNP Security", "CEH", "CISA"],
    exp: "8+ years teaching foundational networking, OS internals and applied cryptography. Former NOC engineer turned security instructor.",
    achievements: ["University guest lecturer at 3 top engineering schools", "Built BlueGuardia's foundational lab platform", "Trained 600+ entry-level analysts"],
  },
];

function TrainersPage() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <Reveal>
            <div className="font-mono-tag mb-4">// TRAINER PROFILES</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Taught by <span className="text-gradient">practitioners.</span>
              <br />
              Not lecturers.
            </h1>
          </Reveal>
          <div className="hidden lg:block">
            <MentorPanel />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-8">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="grid lg:grid-cols-3 gap-0 rounded-2xl border border-border bg-surface overflow-hidden">
                <div className="aspect-square lg:aspect-auto bg-surface-elevated relative overflow-hidden">
                  <img src={t.img} alt={t.name} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono-tag">{`TRAINER_0${i + 1}`}</div>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold">{t.name}</h2>
                  <div className="text-primary mt-2">{t.title}</div>

                  <div className="mt-8 grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 font-mono-tag mb-3"><GraduationCap className="h-3.5 w-3.5" /> Certifications</div>
                      <div className="flex flex-wrap gap-2">
                        {t.certs.map((c) => (
                          <span key={c} className="text-xs px-2.5 py-1 rounded border border-border bg-background/50 font-mono">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 font-mono-tag mb-3"><Briefcase className="h-3.5 w-3.5" /> Experience</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.exp}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 font-mono-tag mb-3"><Award className="h-3.5 w-3.5" /> Achievements</div>
                    <ul className="space-y-1.5">
                      {t.achievements.map((a) => (
                        <li key={a} className="text-sm text-foreground/80 flex gap-2">
                          <span className="text-primary">→</span> {a}
                        </li>
                      ))}
                    </ul>
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
