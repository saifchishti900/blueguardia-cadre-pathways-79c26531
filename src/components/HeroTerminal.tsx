import { motion } from "framer-motion";
import { Shield, Lock, Activity } from "lucide-react";

const logLines = [
  { t: "08:42:01", tag: "INFO", color: "text-terminal", text: "soc-agent: connection established → siem.blueguardia.io" },
  { t: "08:42:03", tag: "SCAN", color: "text-primary", text: "nmap -sS -p- 10.0.4.0/24  →  1,247 hosts probed" },
  { t: "08:42:07", tag: "ALERT", color: "text-destructive", text: "T1059.001 PowerShell — suspicious encoded payload" },
  { t: "08:42:09", tag: "HUNT", color: "text-primary", text: "Sigma rule matched: lateral_movement_smb_exec" },
  { t: "08:42:12", tag: "OK", color: "text-terminal", text: "playbook IR-014 dispatched · host quarantined" },
  { t: "08:42:15", tag: "EXPL", color: "text-destructive", text: "CVE-2024-3400 PoC validated in lab/sandbox-07" },
  { t: "08:42:18", tag: "OK", color: "text-terminal", text: "report.md signed · sha256: 9f4a…c2e1" },
];

export function HeroTerminal() {
  return (
    <div className="relative w-full max-w-xl mx-auto" aria-hidden="true">
      {/* Glow */}
      <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      {/* Terminal card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-xl border border-border bg-surface/90 backdrop-blur-sm shadow-[0_30px_80px_-30px_oklch(0.72_0.06_240/0.5)] overflow-hidden"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-background/40">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-terminal/70" />
          </div>
          <div className="font-mono text-[11px] text-muted-foreground tracking-wider">
            blueguardia@cadre-01 ~ /ops/live
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-terminal">
            <span className="h-1.5 w-1.5 rounded-full bg-terminal animate-pulse" />
            LIVE
          </div>
        </div>

        {/* Body */}
        <div className="p-5 font-mono text-[12px] leading-relaxed min-h-[280px]">
          {logLines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.18, duration: 0.4 }}
              className="flex gap-3 py-0.5"
            >
              <span className="text-muted-foreground/70 shrink-0">{l.t}</span>
              <span className={`shrink-0 w-12 ${l.color}`}>[{l.tag}]</span>
              <span className="text-foreground/85 truncate">{l.text}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex items-center gap-2 mt-3 text-primary"
          >
            <span>$</span>
            <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
          </motion.div>
        </div>

        {/* Footer status bar */}
        <div className="grid grid-cols-3 border-t border-border/60 text-[10px] font-mono uppercase tracking-wider">
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <Shield className="h-3 w-3 text-primary" /> Blue Team
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <Activity className="h-3 w-3 text-terminal" /> 247 evt/s
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <Lock className="h-3 w-3 text-primary" /> mTLS
          </div>
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-primary/40 bg-background/80 backdrop-blur font-mono text-[10px] text-primary"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        SOC · TIER-2
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-terminal/40 bg-background/80 backdrop-blur font-mono text-[10px] text-terminal"
      >
        OSCP · CRTO · CRTP
      </motion.div>
    </div>
  );
}
