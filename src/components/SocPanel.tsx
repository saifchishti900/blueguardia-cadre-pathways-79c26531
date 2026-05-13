import { motion } from "framer-motion";
import { ShieldAlert, Activity, Eye } from "lucide-react";

const alerts = [
  { sev: "CRIT", color: "text-destructive border-destructive/40 bg-destructive/10", rule: "T1486 · Ransomware encryption behavior", host: "fin-srv-04", score: 98 },
  { sev: "HIGH", color: "text-primary border-primary/40 bg-primary/10", rule: "T1021.002 · SMB lateral movement", host: "wks-eng-17", score: 86 },
  { sev: "HIGH", color: "text-primary border-primary/40 bg-primary/10", rule: "T1003 · LSASS memory access", host: "dc-01.corp", score: 81 },
  { sev: "MED", color: "text-terminal border-terminal/40 bg-terminal/10", rule: "T1071 · Beaconing to rare ASN", host: "wks-mkt-09", score: 64 },
  { sev: "LOW", color: "text-muted-foreground border-border bg-surface", rule: "T1110 · Failed auth burst", host: "vpn-edge-02", score: 38 },
];

export function SocPanel() {
  return (
    <div className="relative w-full max-w-xl mx-auto" aria-hidden="true">
      <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-xl border border-border bg-surface/90 backdrop-blur-sm shadow-[0_30px_80px_-30px_oklch(0.72_0.06_240/0.5)] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-background/40">
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground tracking-wider">
            <ShieldAlert className="h-3.5 w-3.5 text-primary" />
            SOC · Alert Triage Queue
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-terminal">
            <span className="h-1.5 w-1.5 rounded-full bg-terminal animate-pulse" />
            STREAMING
          </div>
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-3 border-b border-border/60 text-center font-mono text-[10px] uppercase tracking-wider">
          <div className="px-3 py-3 border-r border-border/60">
            <div className="text-2xl font-bold text-destructive">07</div>
            <div className="text-muted-foreground mt-1">Critical</div>
          </div>
          <div className="px-3 py-3 border-r border-border/60">
            <div className="text-2xl font-bold text-primary">23</div>
            <div className="text-muted-foreground mt-1">High</div>
          </div>
          <div className="px-3 py-3">
            <div className="text-2xl font-bold text-terminal">182</div>
            <div className="text-muted-foreground mt-1">Triaged · 24h</div>
          </div>
        </div>

        {/* Alerts */}
        <div className="p-3 space-y-2 min-h-[260px]">
          {alerts.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
              className="flex items-center gap-3 p-2.5 rounded-md border border-border/60 bg-background/30"
            >
              <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${a.color}`}>
                {a.sev}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[11px] text-foreground/90 truncate">{a.rule}</div>
                <div className="font-mono text-[10px] text-muted-foreground">host: {a.host}</div>
              </div>
              <div className="shrink-0 font-mono text-xs text-primary">{a.score}</div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="grid grid-cols-3 border-t border-border/60 text-[10px] font-mono uppercase tracking-wider">
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <Eye className="h-3 w-3 text-primary" /> SIEM
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <Activity className="h-3 w-3 text-terminal" /> EDR · OK
          </div>
          <div className="px-3 py-2 text-muted-foreground">MITRE ATT&CK</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-primary/40 bg-background/80 backdrop-blur font-mono text-[10px] text-primary"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        BLUE TEAM · TIER-2
      </motion.div>
    </div>
  );
}
