type Highlight = "soc" | "pentest";

export function CyberTree({ highlight }: { highlight: Highlight }) {
  const branches = [
    { id: "soc", label: "Defensive Security", children: ["SOC Analyst", "Threat Hunter", "Incident Response", "DFIR"] },
    { id: "pentest", label: "Offensive Security", children: ["Penetration Tester", "Red Team", "Bug Bounty", "Exploit Dev"] },
    { id: "grc", label: "Governance & Risk", children: ["GRC", "Auditor", "Risk Analyst", "Compliance"] },
    { id: "appsec", label: "Application Security", children: ["AppSec", "DevSecOps", "Code Review", "SAST/DAST"] },
    { id: "cloud", label: "Cloud & Infra", children: ["Cloud Security", "Container Sec", "IAM", "Zero Trust"] },
    { id: "ot", label: "OT / IoT Security", children: ["ICS/SCADA", "OT SOC", "IoT", "Critical Infra"] },
  ];
  return (
    <div className="rounded-xl border border-border bg-surface/60 p-6 md:p-10">
      <div className="text-center mb-8">
        <div className="font-mono-tag mb-2">// CYBERSECURITY DOMAINS</div>
        <div className="inline-block px-6 py-3 rounded-lg border border-primary/40 bg-primary/10 text-primary font-display text-lg">
          Cybersecurity
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {branches.map((b) => {
          const isActive =
            (highlight === "soc" && b.id === "soc") ||
            (highlight === "pentest" && b.id === "pentest");
          return (
            <div
              key={b.id}
              className={`rounded-lg border p-4 transition-all ${
                isActive
                  ? "border-primary bg-primary/10 shadow-[0_0_40px_-10px_oklch(0.72_0.06_240/0.6)]"
                  : "border-border/60 bg-background/40 opacity-60"
              }`}
            >
              <div className={`text-sm font-medium mb-3 ${isActive ? "text-primary" : "text-foreground"}`}>
                {b.label}
              </div>
              <ul className="space-y-1.5">
                {b.children.map((c) => {
                  const childActive =
                    isActive && ((highlight === "soc" && c === "SOC Analyst") || (highlight === "pentest" && c === "Penetration Tester"));
                  return (
                    <li
                      key={c}
                      className={`text-xs font-mono flex items-center gap-2 ${
                        childActive ? "text-primary font-bold" : "text-muted-foreground"
                      }`}
                    >
                      <span className={childActive ? "text-primary" : "text-border"}>└─</span>
                      {c}
                      {childActive && <span className="text-terminal text-[10px]">◀ YOU</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
