import { motion } from "framer-motion";
import { Network, Rocket, CheckCircle2 } from "lucide-react";

const phases = [
  { code: "PH-01", t: "Training Institute", s: "LIVE", c: "text-terminal border-terminal/40 bg-terminal/10", desc: "SOC & Pentest Cadres" },
  { code: "PH-02", t: "Pentest Services", s: "Q1", c: "text-primary border-primary/40 bg-primary/10", desc: "Web · Network · AD" },
  { code: "PH-03", t: "Managed SOC (MSSP)", s: "Q3", c: "text-primary border-primary/40 bg-primary/10", desc: "24×7 detect & respond" },
  { code: "PH-04", t: "AI & OT Security", s: "PLAN", c: "text-muted-foreground border-border bg-surface", desc: "LLM red-team · ICS" },
  { code: "PH-05", t: "GRC Practice", s: "PLAN", c: "text-muted-foreground border-border bg-surface", desc: "ISO · SOC2 · NIST" },
];

export function RoadmapPanel() {
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
            <Network className="h-3.5 w-3.5 text-primary" />
            BlueGuardia · Build Pipeline
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-terminal">
            <span className="h-1.5 w-1.5 rounded-full bg-terminal animate-pulse" />
            EXECUTING
          </div>
        </div>

        <div className="p-4 space-y-2 min-h-[300px]">
          {phases.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex items-center gap-3 p-3 rounded-md border border-border/60 bg-background/30"
            >
              <span className="font-mono text-[10px] text-muted-foreground shrink-0">{p.code}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-foreground truncate">{p.t}</div>
                <div className="font-mono text-[10px] text-muted-foreground truncate">{p.desc}</div>
              </div>
              <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${p.c}`}>
                {p.s}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 border-t border-border/60 text-[10px] font-mono uppercase tracking-wider">
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <CheckCircle2 className="h-3 w-3 text-terminal" /> 1 / 5 LIVE
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <Rocket className="h-3 w-3 text-primary" /> Roadmap
          </div>
          <div className="px-3 py-2 text-muted-foreground">MSSP · 2026 →</div>
        </div>
      </motion.div>
    </div>
  );
}
