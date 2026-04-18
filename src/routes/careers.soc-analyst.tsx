import { createFileRoute } from "@tanstack/react-router";
import { Shield, Eye, Siren, FileSearch, Activity, Bell, Lock, Database, ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CyberTree } from "@/components/CyberTree";
import { APPLY_URL } from "@/components/SiteHeader";

export const Route = createFileRoute("/careers/soc-analyst")({
  head: () => ({
    meta: [
      { title: "SOC Analyst Career Path — BlueGuardia" },
      { name: "description", content: "Become a Security Operations Center Analyst. SIEM, EDR, threat detection and incident response training." },
      { property: "og:title", content: "SOC Analyst Training — BlueGuardia" },
      { property: "og:description", content: "Master SIEM, EDR, detection engineering and incident response." },
    ],
  }),
  component: SocPage,
});

function SocPage() {
  return (
    <div>
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// CAREER PATH / BLUE TEAM</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
              SOC Analyst.
              <br />
              <span className="text-gradient">First responder of the digital world.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              When alarms fire at 2 AM, SOC Analysts are the ones triaging the alert,
              reconstructing the kill chain, and stopping the breach before it spreads.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ROLE OVERVIEW */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="font-mono-tag mb-4">// THE ROLE</div>
            <h2 className="text-4xl font-bold mb-6">What does a SOC Analyst actually do?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A Security Operations Center (SOC) Analyst monitors an organisation's networks,
              endpoints, and cloud workloads for malicious activity. They are the human signal
              behind every SIEM, the analyst behind every escalated EDR detection, and the
              communicator who turns raw telemetry into actionable intelligence.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Eye, t: "Monitor", d: "24/7 telemetry watch" },
                { icon: Siren, t: "Triage", d: "Validate & escalate alerts" },
                { icon: FileSearch, t: "Investigate", d: "Reconstruct attacks" },
                { icon: Bell, t: "Respond", d: "Contain & remediate" },
              ].map((r) => (
                <div key={r.t} className="p-5 rounded-lg border border-border bg-surface">
                  <r.icon className="h-5 w-5 text-primary mb-3" />
                  <div className="font-semibold mb-1">{r.t}</div>
                  <div className="text-xs text-muted-foreground">{r.d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CYBER TREE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// WHERE YOU FIT</div>
            <h2 className="text-4xl font-bold mb-10">The cybersecurity landscape</h2>
            <CyberTree highlight="soc" />
          </Reveal>
        </div>
      </section>

      {/* MARKET STATS */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// MARKET DEMAND</div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
              SOC roles are the <span className="text-gradient">most-hired</span> position in cyber.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {[
              { v: "67%", l: "Of cyber job postings are SOC-related", s: "BLS 2024" },
              { v: "$112K", l: "Median SOC Analyst salary (US)", s: "Glassdoor" },
              { v: "+32%", l: "Job growth projected through 2032", s: "BLS" },
              { v: "5.5M", l: "Open SOC roles globally", s: "ISC2" },
            ].map((s) => (
              <div key={s.v} className="bg-surface p-6 lg:p-8">
                <div className="text-3xl lg:text-5xl font-bold text-gradient">{s.v}</div>
                <div className="text-sm text-foreground/80 mt-3">{s.l}</div>
                <div className="text-[10px] font-mono text-muted-foreground mt-2 uppercase">src: {s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// HANDS-ON STACK</div>
            <h2 className="text-4xl font-bold mb-10">Tools you'll master</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { n: "Splunk / Elastic SIEM", d: "Log aggregation, search, dashboards" },
              { n: "CrowdStrike / SentinelOne EDR", d: "Endpoint detection & response" },
              { n: "Wireshark / Zeek", d: "Network forensics & packet analysis" },
              { n: "MISP / OpenCTI", d: "Threat intelligence platforms" },
              { n: "Sigma / YARA", d: "Detection rule writing" },
              { n: "TheHive / Cortex", d: "Incident response & SOAR" },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 0.05}>
                <div className="p-6 rounded-lg border border-border bg-surface hover:border-primary/40 transition-colors h-full">
                  <Database className="h-5 w-5 text-primary mb-3" />
                  <div className="font-semibold mb-2">{t.n}</div>
                  <div className="text-sm text-muted-foreground">{t.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="font-mono-tag mb-4">// CURRICULUM</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Skills you'll walk out with.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              From foundational concepts to live-fire incidents — every skill is taught
              with hands-on labs and real telemetry.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="space-y-3">
              {[
                "Cybersecurity fundamentals (networks, OS, crypto)",
                "Specialized Security Operations training",
                "Hands-on with SIEM, EDR & SOAR platforms",
                "Detection rule creation (Sigma, YARA, KQL)",
                "Incident investigation methodologies",
                "Tactics, Techniques & Procedures (MITRE ATT&CK)",
                "Threat hunting & intelligence",
                "Incident reporting & executive communication",
              ].map((s, i) => (
                <li key={s} className="flex items-start gap-4 p-4 rounded-md bg-surface/60 border border-border/60">
                  <span className="font-mono text-xs text-primary mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* HOW WE HELP + DOWNLOADS */}
      <section className="py-24 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <Reveal>
            <Lock className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              How BlueGuardia builds you into a SOC Analyst.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Two months of specialised SOC training following the foundational month.
              Real SIEM environments, simulated breaches, and mentorship from active SOC practitioners.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Download className="h-4 w-4" /> Download Brochure
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-md font-medium hover:bg-surface-elevated"
              >
                <Download className="h-4 w-4" /> Training Outline
              </a>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3.5 rounded-md font-medium hover:bg-primary/10"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

// unused import guard
void Activity;
void Shield;
