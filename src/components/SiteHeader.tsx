import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLScQMUmb0Ywue2EhnQ0UelJz96N4dYYK_VmeOBc4u2FnU-fraw/viewform?usp=sharing&ouid=109210716830392689531";

const navItems: Array<{
  label: string;
  to?: string;
  children?: Array<{ label: string; to: string; desc: string }>;
}> = [
  { label: "Home", to: "/" },
  {
    label: "Career Paths",
    children: [
      { label: "SOC Analyst", to: "/careers/soc-analyst", desc: "Defend. Detect. Respond." },
      { label: "Penetration Tester", to: "/careers/pentester", desc: "Attack. Exploit. Report." },
    ],
  },
  { label: "Our Vision", to: "/vision" },
  {
    label: "Virtual Training",
    children: [
      { label: "Training Outline", to: "/training#outline", desc: "Module breakdown" },
      { label: "Brochure", to: "/training#brochure", desc: "Download PDF" },
      { label: "Certificate", to: "/training#certificate", desc: "Sample certificates" },
    ],
  },
  { label: "Trainers", to: "/trainers" },
  { label: "Success Stories", to: "/success-stories" },
  // { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="BlueGuardia" className="h-9 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.to ? (
                  <Link
                    to={item.to}
                    className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
                    activeProps={{ className: "px-3 py-2 text-sm text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                )}

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 pt-3 min-w-[280px]"
                    >
                      <div className="bg-surface-elevated border border-border rounded-lg p-2 shadow-2xl">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block px-3 py-2.5 rounded-md hover:bg-background/60 transition-colors group"
                          >
                            <div className="text-sm text-foreground group-hover:text-primary transition-colors">
                              {c.label}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">{c.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              Apply Now
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-24"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="py-2">
                    <div className="font-mono-tag mb-2">{item.label}</div>
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="block py-2 pl-4 text-lg text-foreground/80"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-xl text-foreground border-b border-border/40"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-medium"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { APPLY_URL };
