import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Award, Briefcase, GraduationCap, UserRound, Star } from "lucide-react";
import { MentorPanel } from "@/components/MentorPanel";
import trainerSaif from "@/assets/trainer-saif.jpg";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Trainers — BlueGuardia" },
      { name: "description", content: "Meet the practitioners building the next generation of cybersecurity defenders." },
      { property: "og:title", content: "Our Trainers — BlueGuardia" },
      { property: "og:description", content: "Industry practitioners with real-world cyber experience." },
    ],
  }),
  component: TrainersPage,
});

type Trainer = {
  name: string;
  title: string;
  eyebrow?: string;
  img?: string;
  anonymous?: boolean;
  featured?: boolean;
  certs: string[];
  exp: string;
  achievements: string[];
};

const trainers: Trainer[] = [
  {
    name: "Saif Ur Rehman",
    title: "Founder & Lead SOC Trainer",
    eyebrow: "FOUNDER",
    img: trainerSaif,
    featured: true,
    certs: [
      "Microsoft Certified: Security Operations Analyst Associate",
      "CompTIA Security+ (In progress)",
    ],
    exp: "Cybersecurity professional with 2+ years of dedicated SOC experience across the banking and global mining sectors. Proven track record in leading Incident Response (IR) for targeted attacks, spanning the full lifecycle from root-cause analysis to executive reporting. Expert in threat modeling and developing complex detection use cases within enterprise-grade security stacks to proactively mitigate adversary activity.",
    achievements: [
      "Training juniors at current company for complex SOC tasks",
      "Lead incident response activity",
      "Lead POCs with industry-leading global cybersecurity companies",
      "Major part of DLP control deployment at one of the top 5 banks",
    ],
  },
  {
    name: "Harry Najam",
    title: "Lead Pentest Trainer",
    anonymous: true,
    certs: [
      "TCM Security PNPT",
      "eLearnSecurity eJPT",
      "TryHackMe Jr Penetration Tester",
      "PentesterLab Web Application Security (White Badge)",
    ],
    exp: "Penetration Tester with 4 years experience, delivering pentest and red team assessments across aerospace, telecom, banking, media, and tech sectors. Specialized in Active Directory exploitation, external/internal network testing, web app pentesting, ADCS attacks, and phishing campaigns. Develops custom Python tooling and documents end-to-end attack chains with remediation guidance.",
    achievements: [
      "Reported multiple complete network compromises for aerospace, fintech and defense clients",
      "Contributed to development of commercial network scanner tools",
      "Created multiple red team tools for ADCS exploitation",
    ],
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-10">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`grid lg:grid-cols-3 gap-0 rounded-2xl border bg-surface overflow-hidden ${
                  t.featured
                    ? "border-primary/50 shadow-[0_30px_80px_-30px_oklch(0.72_0.06_240/0.45)]"
                    : "border-border"
                }`}
              >
                <div className="aspect-square lg:aspect-auto bg-surface-elevated relative overflow-hidden">
                  {t.anonymous ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-background to-surface-elevated p-6">
                      <div className="h-24 w-24 rounded-full border border-border bg-background/60 flex items-center justify-center text-muted-foreground">
                        <UserRound className="h-12 w-12" />
                      </div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground text-center">
                        Identity withheld
                        <br />
                        by request
                      </div>
                    </div>
                  ) : (
                    <img
                      src={t.img}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="font-mono-tag">{`TRAINER_0${i + 1}`}</div>
                    {t.featured && (
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded border border-primary/40 bg-primary/10 text-primary font-mono text-[10px] uppercase tracking-wider">
                        <Star className="h-3 w-3" /> Founder
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:col-span-2 p-8 lg:p-12">
                  {t.eyebrow && (
                    <div className="font-mono-tag mb-2 text-primary">{t.eyebrow}</div>
                  )}
                  <h2 className={`font-bold ${t.featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
                    {t.name}
                  </h2>
                  <div className="text-primary mt-2">{t.title}</div>

                  <div className="mt-8 grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 font-mono-tag mb-3">
                        <GraduationCap className="h-3.5 w-3.5" /> Certifications
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {t.certs.map((c) => (
                          <span key={c} className="text-xs px-2.5 py-1 rounded border border-border bg-background/50 font-mono">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 font-mono-tag mb-3">
                        <Briefcase className="h-3.5 w-3.5" /> Experience
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.exp}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 font-mono-tag mb-3">
                      <Award className="h-3.5 w-3.5" /> Achievements
                    </div>
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
