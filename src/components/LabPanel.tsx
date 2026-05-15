import { motion } from "framer-motion";
import { Server, Wifi, Users } from "lucide-react";

const boot = [
  { p: "[ OK ]", c: "text-terminal", t: "Spinning up isolated cyber-range · vlan-204" },
  { p: "[ OK ]", c: "text-terminal", t: "Mounting Kali workstation · 4 vCPU · 8 GB" },
  { p: "[ OK ]", c: "text-terminal", t: "Provisioning Splunk + Elastic SIEM stack" },
  { p: "[ OK ]", c: "text-terminal", t: "Deploying vulnerable AD forest · 3 hosts" },
  { p: "[ .. ]", c: "text-primary", t: "Connecting cadet → mentor live session" },
  { p: "[ OK ]", c: "text-terminal", t: "Lab ready · session BG-CADRE-01-LAB-17" },
];

export function LabPanel() {
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
            <Server className="h-3.5 w-3.5 text-primary" />
            Cyber-Range · Lab Boot
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-terminal">
            <span className="h-1.5 w-1.5 rounded-full bg-terminal animate-pulse" />
            ONLINE
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-border/60 font-mono text-[10px] uppercase tracking-wider">
          <div className="px-3 py-3 border-r border-border/60">
            <div className="text-muted-foreground">Cadre</div>
            <div className="text-sm font-bold text-foreground normal-case mt-0.5">02</div>
          </div>
          <div className="px-3 py-3 border-r border-border/60">
            <div className="text-muted-foreground">Cadets</div>
            <div className="text-sm font-bold text-primary normal-case mt-0.5">24 / 30</div>
          </div>
          <div className="px-3 py-3">
            <div className="text-muted-foreground">Uptime</div>
            <div className="text-sm font-bold text-terminal normal-case mt-0.5">99.97%</div>
          </div>
        </div>

        <div className="p-4 font-mono text-[12px] leading-relaxed min-h-[240px]">
          {boot.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.35 }}
              className="flex gap-2 py-0.5"
            >
              <span className={`shrink-0 ${l.c}`}>{l.p}</span>
              <span className="text-foreground/85 truncate">{l.t}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="flex items-center gap-2 mt-2 text-primary"
          >
            <span>cadet@bg-lab:~$</span>
            <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
          </motion.div>
        </div>

        <div className="grid grid-cols-3 border-t border-border/60 text-[10px] font-mono uppercase tracking-wider">
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <Users className="h-3 w-3 text-primary" /> Live Mentor
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border-r border-border/60">
            <Wifi className="h-3 w-3 text-terminal" /> VPN · OK
          </div>
          <div className="px-3 py-2 text-muted-foreground">3 Months · Virtual</div>
        </div>
      </motion.div>
    </div>
  );
}
