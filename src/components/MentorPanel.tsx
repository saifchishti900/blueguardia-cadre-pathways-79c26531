import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Swords, Target, Terminal } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Defenders who've held the line",
    desc: "Trainers with hands-on SOC, DFIR and detection-engineering experience — not slide-deck instructors.",
  },
  {
    icon: Swords,
    title: "Attackers who've broken in",
    desc: "Offensive specialists who have run real engagements, written real reports, and shipped real findings.",
  },
  {
    icon: Target,
    title: "Built around your outcome",
    desc: "Mentorship, lab reviews, and career guidance designed to make you employable — not just certified.",
  },
];

export function MentorPanel() {
  return (
    <div className="relative w-full max-w-xl mx-auto" aria-hidden="true">
      <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-xl border border-border bg-surface/90 backdrop-blur-sm shadow-[0_30px_80px_-30px_oklch(0.72_0.06_240/0.5)] overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-background/40">
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground tracking-wider">
            <GraduationCap className="h-3.5 w-3.5 text-primary" />
            Mentor Network · Operating Principles
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-terminal">
            <span className="h-1.5 w-1.5 rounded-full bg-terminal animate-pulse" />
            ACTIVE
          </div>
        </div>

        <div className="divide-y divide-border/60">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.12 }}
              className="flex gap-3 px-4 py-4"
            >
              <div className="h-9 w-9 shrink-0 rounded-md border border-primary/30 bg-primary/10 flex items-center justify-center text-primary">
                <p.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground leading-snug">{p.title}</div>
                <div className="mt-1 text-[12px] text-muted-foreground leading-relaxed">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="px-4 py-3 border-t border-border/60 bg-background/30 font-mono text-[11px] text-muted-foreground leading-relaxed flex gap-2">
          <Terminal className="h-3.5 w-3.5 text-terminal mt-0.5 shrink-0" />
          <span>
            <span className="text-terminal">{"// "}</span>
            We don't measure ourselves in vanity metrics. We measure ourselves in
            cadets who walk into their first SOC shift or first engagement and
            already know what to do.
          </span>
        </div>
      </motion.div>
    </div>
  );
}
