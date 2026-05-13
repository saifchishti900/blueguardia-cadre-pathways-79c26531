import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { href: "https://www.linkedin.com/company/blueguardia", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/blue.guardia?igsh=enR2cGJrcnFrcGJm", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/share/1FdCDM6kXu/", label: "Facebook", Icon: Facebook },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="BlueGuardia" className="h-10 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-md">
            Cybersecurity training built by practitioners. Forging the next generation
            of SOC Analysts and Penetration Testers.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-surface/40 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-mono-tag mb-4">Navigate</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/vision" className="hover:text-primary">Our Vision</Link></li>
            <li><Link to="/training" className="hover:text-primary">Virtual Training</Link></li>
            <li><Link to="/trainers" className="hover:text-primary">Trainers</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-tag mb-4">Careers</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/careers/soc-analyst" className="hover:text-primary">SOC Analyst</Link></li>
            <li><Link to="/careers/pentester" className="hover:text-primary">Pentester</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground font-mono">
          <div>© {new Date().getFullYear()} BLUEGUARDIA — ALL RIGHTS RESERVED</div>
          <div>FORGING DEFENDERS / FORGING ATTACKERS</div>
        </div>
      </div>
    </footer>
  );
}
