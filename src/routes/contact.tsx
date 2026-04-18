import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Linkedin, Twitter, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BlueGuardia" },
      { name: "description", content: "Get in touch with BlueGuardia. Enrollment, partnerships and corporate training." },
      { property: "og:title", content: "Contact BlueGuardia" },
      { property: "og:description", content: "Reach out about enrollment, partnerships, or corporate training." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="font-mono-tag mb-4">// SECURE CHANNEL</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
              Let's <span className="text-gradient">talk.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Whether you're applying to a Cadre, partnering with us, or sourcing
              corporate training — start the conversation here.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", v: "hello@blueguardia.com" },
                { icon: Phone, label: "Phone", v: "+1 (555) 010-2025" },
                { icon: MapPin, label: "HQ", v: "Cyber District, Tower 4, Lvl 12" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-5 p-6 rounded-lg border border-border bg-surface">
                  <div className="h-11 w-11 rounded-md bg-primary/15 flex items-center justify-center text-primary shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono-tag mb-1">{c.label}</div>
                    <div className="text-lg text-foreground">{c.v}</div>
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-lg border border-border bg-surface">
                <div className="font-mono-tag mb-3">FOLLOW</div>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="h-11 w-11 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.15}>
            <form
              className="p-8 lg:p-10 rounded-xl border border-border bg-surface space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! This is a demo form. Real submissions will be wired up later.");
              }}
            >
              <div className="font-mono-tag">// MESSAGE</div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Name</label>
                  <input required className="w-full bg-background border border-border rounded-md px-4 py-3 focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email</label>
                  <input required type="email" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:border-primary outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Subject</label>
                <input className="w-full bg-background border border-border rounded-md px-4 py-3 focus:border-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Message</label>
                <textarea rows={6} className="w-full bg-background border border-border rounded-md px-4 py-3 focus:border-primary outline-none resize-none" />
              </div>
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:bg-primary/90 transition-all hover:scale-105">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
