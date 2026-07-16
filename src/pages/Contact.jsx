import { useState } from "react";
import { Instagram, ArrowRight, MapPin, Mail } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import { profile } from "../data/site";

const reasons = ["Sponsorship / partnership", "Media / interview", "Speaking", "General"];

const initialForm = { name: "", email: "", reason: reasons[0], message: "" };

export default function Contact() {
  usePageTitle("Contact");
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `[${form.reason}] Message from ${form.name || "website"}`;
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        lede="Media, sponsorship, speaking, or a general question — send a note and I'll get back to you personally."
      />

      <section className="bg-paper pb-24 pt-4 sm:pb-28">
        <div className="container-content grid gap-16 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
          <Reveal>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-soft">Name</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    className="border-0 border-b border-line bg-transparent py-3 text-[16px] text-ink outline-none transition-colors focus:border-ink"
                    placeholder="Your name"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-soft">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className="border-0 border-b border-line bg-transparent py-3 text-[16px] text-ink outline-none transition-colors focus:border-ink"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-soft">Reason</span>
                <select
                  value={form.reason}
                  onChange={update("reason")}
                  className="border-0 border-b border-line bg-transparent py-3 text-[16px] text-ink outline-none transition-colors focus:border-ink"
                >
                  {reasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-soft">Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="resize-none border-0 border-b border-line bg-transparent py-3 text-[16px] text-ink outline-none transition-colors focus:border-ink"
                  placeholder="What's on your mind?"
                />
              </label>

              <button type="submit" className="btn-primary mt-2 self-start">
                Send message
                <ArrowRight size={14} />
              </button>
              {sent && (
                <p className="text-[13px] text-ink-faint">
                  Your email app should now be open with this message ready to send.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={1} className="flex flex-col gap-8">
            <div>
              <p className="eyebrow">Direct</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 flex items-center gap-3 text-[16px] text-ink transition-colors hover:text-red"
              >
                <Mail size={17} strokeWidth={1.75} />
                {profile.email}
              </a>
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-3 text-[16px] text-ink transition-colors hover:text-red"
              >
                <Instagram size={17} strokeWidth={1.75} />
                {profile.instagramHandle}
              </a>
              <p className="mt-3 flex items-center gap-3 text-[16px] text-ink-soft">
                <MapPin size={17} strokeWidth={1.75} />
                {profile.residence}
              </p>
            </div>

            <div className="border-t border-line pt-8">
              <p className="eyebrow">Best for</p>
              <ul className="mt-4 space-y-2 text-[15px] text-ink-soft">
                {reasons.map((r) => (
                  <li key={r} className="flex items-center gap-3">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-red" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
