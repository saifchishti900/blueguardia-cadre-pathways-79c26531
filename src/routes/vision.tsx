import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Eye, Crosshair, ScanLine, Brain, Factory, ScrollText } from "lucide-react";
import { RoadmapPanel } from "@/components/RoadmapPanel";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision — BlueGuardia" },
      { name: "description", content: "From cybersecurity training institute to full-service MSSP — our roadmap." },
      { property: "og:title", content: "Our Vision — BlueGuardia" },
      { property: "og:description", content: "Building the future Managed Security Service Provider." },
    ],
  }),
  component: VisionPage,
});

const services = [
  { icon: Eye, t: "Security Operations", d: "24/7 managed SOC services with custom detection engineering, threat hunting, and incident response retainers for organisations of every size." },
  { icon: Crosshair, t: "Penetration Testing Assessments", d: "Authorised offensive engagements across web, mobile, network, wireless, and physical domains — delivered with executive-grade reporting." },
  { icon: ScanLine, t: "Vulnerability Assessments", d: "Continuous vulnerability discovery, prioritisation, and remediation tracking across hybrid attack surfaces." },
  { icon: Brain, t: "AI Penetration Assessments", d: "Adversarial testing of LLMs, ML pipelines, and AI agents — prompt injection, model extraction, and supply-chain attacks." },
  { icon: Factory, t: "OT Security Operations", d: "Specialised monitoring and protection for industrial control systems, SCADA networks, and critical infrastructure." },
  { icon: ScrollText, t: "Governance, Risk & Compliance", d: "ISO 27001, SOC 2, NIST CSF, PCI DSS — compliance programs that align security with business outcomes." },
];

function VisionPage() {
  return (
    <div>
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <Reveal>
            <div className="font-mono-tag mb-4">// THE LONG GAME</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              From training institute
              <br />
              to <span className="text-gradient">full-service MSSP.</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              BlueGuardia begins as a cybersecurity training institute — but our vision
              is bigger. We are building the practitioners today who will run the security
              operations of tomorrow, under our own roof.
            </p>
          </Reveal>
          <div className="hidden lg:block">
            <RoadmapPanel />
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// TODAY</div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight">
              Right now, we train.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              Our entire focus today is on delivering uncompromising training in two
              specialisations — SOC Analyst and Penetration Tester. Every Cadre that
              graduates strengthens the talent pipeline the industry desperately needs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// TOMORROW</div>
            <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05]">
              Becoming a Managed
              <br />
              Security Service Provider.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              We are committed to expanding into a full-service MSSP across six
              cybersecurity domains. Each service line is detailed below.
            </p>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="p-8 rounded-xl border border-border bg-surface h-full hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="h-12 w-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-mono-tag mb-2">{`0${i + 1}`}</div>
                      <h3 className="text-2xl font-bold mb-3">{s.t}</h3>
                      <p className="text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-gradient">Train the talent.</span> Build the firm.
              <br />
              Defend the industry.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              That is the BlueGuardia long game.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
