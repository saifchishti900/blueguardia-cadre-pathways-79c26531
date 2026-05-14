import { motion } from "framer-motion";
import { GraduationCap, Award, Users } from "lucide-react";

const stats = [
  { k: "30+", v: "Years combined experience" },
  { k: "12", v: "Industry certifications" },
  { k: "1000+", v: "Analysts mentored" },
  { k: "80+", v: "Real engagements led" },
];

const certs = ["OSCP", "OSEP", "OSWE", "GCIA", "GCFA", "CISSP", "CRTO", "CEH"];

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
            Mentor Network · Signal Check
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-terminal">
            <span className="h-1.5 w-1.5 rounded-full bg-terminal animate-pulse" />
            VERIFIED
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-border/60">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`px-4 py-4 ${i % 2 === 0 ? "border-r border-border/60" : ""} ${i < 2 ? "border-b border-border/60" : ""}`}
            >
              <div className="text-2xl font-bold text-primary">{s.k}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
            </motion.div>
          ))}
        </div>

        <div className="p-4">
          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
            <Award className="h-3 w-3 text-primary" /> Certification Stack
          </div>
          <div className="flex flex-wrap gap-1.5">
            {certs.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.06 }}
                className="px-2 py-1 rounded border border-primary/30 bg-primary/5 text-primary font-mono text-[11px]"
              >
                {c}
              </motion.span>
            ))}
          </div>

          <div className="mt-5 p-3 rounded-md border border-border/60 bg-background/30 font-mono text-[11px] text-muted-foreground leading-relaxed">
            <span className="text-terminal">{"// "}</span>
            Practitioners. Not lecturers. Every trainer has shipped detections,
            led engagements, and broken into production environments — with
            permission.
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-border/60 text-[10px] font-mono uppercase tracking-wider">
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <Users className="h-3 w-3 text-primary" /> Tier-3 SOC
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <Award className="h-3 w-3 text-terminal" /> Red Team Lead
          </div>
          <div className="px-3 py-2 text-muted-foreground">SANS · OffSec</div>
        </div>
      </motion.div>
    </div>
  );
}
