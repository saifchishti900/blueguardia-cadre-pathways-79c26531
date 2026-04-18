import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Download, Award, Shield, Sword } from "lucide-react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Virtual Training — BlueGuardia" },
      { name: "description", content: "Virtual cybersecurity training programs. Outline, brochure and certification details." },
      { property: "og:title", content: "Virtual Training — BlueGuardia" },
      { property: "og:description", content: "3-month virtual cybersecurity training. SOC and Pentester tracks." },
    ],
  }),
  component: TrainingPage,
});

const tracks = [
  {
    id: "soc",
    icon: Shield,
    tag: "BLUE TEAM",
    title: "SOC Analyst Track",
    desc: "Two months of specialised defensive training following the foundational month — SIEM, EDR, threat hunting, IR and detection engineering.",
    modules: [
      "Cyber Foundations (Month 01)",
      "SIEM Engineering & Log Analysis",
      "EDR & Endpoint Forensics",
      "Detection Rule Authoring (Sigma/YARA)",
      "Incident Response Methodologies",
      "Threat Hunting & MITRE ATT&CK",
      "Capstone: Live SOC Simulation",
    ],
  },
  {
    id: "pen",
    icon: Sword,
    tag: "RED TEAM",
    title: "Penetration Tester Track",
    desc: "Two months of offensive security following the foundational month — recon, exploitation, post-ex and reporting using industry tooling.",
    modules: [
      "Cyber Foundations (Month 01)",
      "OSINT & Reconnaissance",
      "Web App Pentesting (Burp Suite)",
      "Network Pentesting (Nmap, Metasploit)",
      "Active Directory Attacks",
      "Post-Exploitation & C2",
      "Capstone: Full Engagement + Report",
    ],
  },
];

function TrainingPage() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// VIRTUAL TRAINING</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
              Train from anywhere.
              <br />
              <span className="text-gradient">Live & hands-on.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Live virtual classrooms, isolated lab environments, real-time mentorship,
              and certifications recognised by hiring SOC and offensive security teams.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="outline" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-10">
          {tracks.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 0.1}>
              <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* LEFT */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-md bg-primary/15 flex items-center justify-center text-primary">
                        <t.icon className="h-6 w-6" />
                      </div>
                      <div className="font-mono-tag">{t.tag}</div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{t.desc}</p>

                    <div className="font-mono-tag mb-3">// MODULES</div>
                    <ul className="space-y-2 mb-8">
                      {t.modules.map((m, i) => (
                        <li key={m} className="flex gap-3 text-sm text-foreground/90">
                          <span className="font-mono text-xs text-primary mt-1">{String(i + 1).padStart(2, "0")}</span>
                          {m}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3" id={idx === 0 ? "brochure" : undefined}>
                      <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-medium hover:bg-primary/90 hover:scale-105 transition-all">
                        <Download className="h-4 w-4" /> Course Outline
                      </a>
                      <a href="#" className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md font-medium hover:bg-surface-elevated">
                        <Download className="h-4 w-4" /> Brochure
                      </a>
                    </div>
                  </div>

                  {/* RIGHT - sample certificate */}
                  <div id={idx === tracks.length - 1 ? "certificate" : undefined} className="bg-gradient-to-br from-background to-surface-elevated p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-border flex items-center">
                    <div className="w-full">
                      <div className="font-mono-tag mb-4">// SAMPLE CERTIFICATE</div>
                      <div className="aspect-[4/3] rounded-lg border-2 border-primary/30 bg-background relative overflow-hidden p-6 flex flex-col justify-between">
                        <div className="absolute inset-0 grid-bg opacity-10" />
                        <div className="relative">
                          <div className="font-mono text-[10px] text-primary tracking-widest">BLUEGUARDIA / CADRE 02</div>
                          <Award className="h-10 w-10 text-primary mt-3" />
                        </div>
                        <div className="relative">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">Certificate of Completion</div>
                          <div className="text-2xl font-bold mt-1">{t.title}</div>
                          <div className="text-sm text-muted-foreground mt-2">Awarded to: <span className="font-mono text-foreground">[Cadet Name]</span></div>
                        </div>
                        <div className="relative flex justify-between items-end">
                          <div className="text-[10px] font-mono text-muted-foreground">CERT_ID: BG-{t.id.toUpperCase()}-0001</div>
                          <div className="text-[10px] font-mono text-primary">VERIFIED ✓</div>
                        </div>
                      </div>
                    </div>
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
