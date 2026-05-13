import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Sword, ArrowUpRight, AlertTriangle, TrendingUp, Users, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { HeroTerminal } from "@/components/HeroTerminal";
import { APPLY_URL } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BlueGuardia — Forge Cyber Defenders & Ethical Hackers" },
      { name: "description", content: "Hands-on cybersecurity training in SOC analysis and penetration testing. Join the next Cadre." },
      { property: "og:title", content: "BlueGuardia — Cybersecurity Training" },
      { property: "og:description", content: "SOC Analyst & Penetration Tester career tracks. 3-month intensive Cadre programs." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "$10.5T", label: "Annual cybercrime cost projection by 2025", source: "Cybersecurity Ventures" },
  { value: "3.5M", label: "Unfilled cybersecurity jobs globally", source: "ISC2 Workforce Study" },
  { value: "2,200+", label: "Cyber attacks happen every single day", source: "University of Maryland" },
  { value: "277 days", label: "Average time to identify & contain a breach", source: "IBM Cost of a Breach 2023" },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
          <div>
          <Reveal>
            <div className="font-mono-tag mb-6">// CADRE 02 — ENROLLMENT OPEN</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              Forge your career
              <br />
              in <span className="text-gradient">cybersecurity.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              BlueGuardia is a cybersecurity training institute building the next generation
              of <span className="text-foreground">SOC Analysts</span> and{" "}
              <span className="text-foreground">Penetration Testers</span> through intensive
              3-month Cadre programs.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                Apply to Cadre 02
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/vision"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-md font-medium hover:bg-surface-elevated transition-colors"
              >
                Read our vision
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-20 flex items-center gap-8 text-xs font-mono text-muted-foreground">
              <div>↓ SCROLL</div>
              <div className="h-px bg-border flex-1 max-w-[200px]" />
            </div>
          </Reveal>
          </div>

          <div className="hidden lg:block">
            <HeroTerminal />
          </div>
        </div>
      </section>

      {/* THREAT REALITY */}
      <section className="py-24 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// 01 — THE THREAT REALITY</div>
            <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05]">
              The internet is under siege.
              <br />
              <span className="text-muted-foreground">Defenders are scarce.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.08}>
                <div className="bg-surface p-6 lg:p-8 h-full">
                  <AlertTriangle className="h-5 w-5 text-primary mb-4" />
                  <div className="text-3xl lg:text-5xl font-bold text-gradient">{s.value}</div>
                  <div className="text-sm text-foreground/80 mt-3">{s.label}</div>
                  <div className="text-[10px] font-mono text-muted-foreground mt-2 uppercase tracking-wider">
                    src: {s.source}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE GAP */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <div className="font-mono-tag mb-4">// 02 — THE TALENT GAP</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1]">
                Companies are losing the war for talent.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Demand for cybersecurity professionals has grown <span className="text-foreground">350%</span> in
                the last decade. Yet certifications alone don't make a defender.
                What companies need are practitioners who can write detection rules at 3 AM,
                pivot through a network during a red team engagement, and write reports executives can act on.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                That's the gap BlueGuardia closes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-4">
              {[
                { icon: Users, k: "350%", v: "Growth in cyber roles since 2013" },
                { icon: TrendingUp, k: "$120K+", v: "Average SOC Analyst salary (US)" },
                { icon: Target, k: "$140K+", v: "Average Pentester salary (US)" },
              ].map((x) => (
                <div key={x.k} className="flex items-center gap-5 p-5 rounded-lg border border-border bg-surface/60">
                  <div className="h-12 w-12 rounded-md bg-primary/15 flex items-center justify-center text-primary">
                    <x.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{x.k}</div>
                    <div className="text-sm text-muted-foreground">{x.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAREER PATHS */}
      <section className="py-24 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// 03 — TWO CAREER PATHS</div>
            <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05]">
              Choose your side
              <br />
              of the firewall.
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                to: "/careers/soc-analyst",
                tag: "BLUE TEAM",
                icon: Shield,
                title: "SOC Analyst",
                desc: "Detect, investigate and respond to threats in real time. Master SIEM platforms, EDR tooling, threat hunting, and incident response.",
              },
              {
                to: "/careers/pentester",
                tag: "RED TEAM",
                icon: Sword,
                title: "Penetration Tester",
                desc: "Think like the adversary. Learn reconnaissance, exploitation, post-exploitation, and reporting using Burp Suite, Metasploit, Nmap and more.",
              },
            ].map((c, i) => (
              <Reveal key={c.to} delay={i * 0.15}>
                <Link
                  to={c.to}
                  className="group block p-8 lg:p-10 rounded-2xl border border-border bg-surface hover:bg-surface-elevated transition-all hover:border-primary/40 h-full"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="h-14 w-14 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                      <c.icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                  </div>
                  <div className="font-mono-tag mb-2">{c.tag}</div>
                  <h3 className="text-3xl font-bold mb-4">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW BLUEGUARDIA TRAINS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// 04 — HOW WE TRAIN</div>
            <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05]">
              Three months. One Cadre.
              <br />
              <span className="text-gradient">Career-ready.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                month: "MONTH 01",
                title: "Foundations",
                desc: "All cadets learn the same core: networking, OS internals, cryptography, threat landscape, and the cybersecurity mindset.",
              },
              {
                month: "MONTH 02",
                title: "Specialization",
                desc: "Choose your path — SOC or Pentesting. Split into specialised cohorts with dedicated trainers and tooling.",
              },
              {
                month: "MONTH 03",
                title: "Live Engagements",
                desc: "Capstone labs, simulated incidents, full pentest engagements, and reporting to mock executives.",
              },
            ].map((m, i) => (
              <Reveal key={m.month} delay={i * 0.1}>
                <div className="p-8 rounded-xl border border-border bg-surface h-full">
                  <div className="font-mono-tag text-primary mb-4">{m.month}</div>
                  <h3 className="text-2xl font-bold mb-3">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <Reveal>
            <div className="font-mono-tag mb-6">// READY?</div>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Become the defender
              <br />
              the world needs.
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                Apply to Cadre 02
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
