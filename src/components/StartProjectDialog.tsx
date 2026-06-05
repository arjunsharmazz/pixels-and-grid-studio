import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CALENDLY_URL = "https://calendly.com/pixelsandgrid/intro";
const OPEN_EVENT = "open-start-project";

export function openStartProject() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(OPEN_EVENT));
}

const BUDGETS = ["< $10k", "$10–25k", "$25–75k", "$75k+"];
const SERVICES = ["Brand", "Product", "Web", "Motion"];

export function StartProjectDialog() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: BUDGETS[1],
    services: [] as string[],
    message: "",
  });

  useEffect(() => {
    const onOpen = () => {
      setSubmitted(false);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const toggleService = (s: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project — ${form.name || "Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\nServices: ${form.services.join(", ")}\n\n${form.message}`,
    );
    window.location.href = `mailto:studio@pixelsandgrid.co?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const bookCall = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#000000B3", backdropFilter: "blur(8px)" }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-paper text-ink border border-ink/10 shadow-2xl"
            style={{ backgroundColor: "#FDFDFD", color: "#0A0A0A" }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] hover:opacity-60"
              aria-label="Close"
            >
              Close ✕
            </button>

            <div className="px-[50px] pt-[50px] pb-[40px] border-b" style={{ borderColor: "#0000001A" }}>
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-4">
                [ Start a project ]
              </div>
              <h2
                className="font-display leading-[0.9] tracking-[-0.04em]"
                style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
              >
                Tell us a bit, <span className="italic font-light">or just book a call.</span>
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={bookCall}
                  className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] transition-colors"
                  style={{ backgroundColor: "#0A0A0A", color: "#FDFDFD" }}
                >
                  Book a call → Calendly
                </button>
                <a
                  href="mailto:studio@pixelsandgrid.co"
                  className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] border transition-colors hover:bg-ink hover:text-paper"
                  style={{ borderColor: "#0A0A0A", color: "#0A0A0A" }}
                >
                  Email studio
                </a>
              </div>
            </div>

            {submitted ? (
              <div className="px-6 sm:px-10 py-16 text-center">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-3">Sent</div>
                <h3 className="font-display text-3xl mb-3">Thanks — we'll be in touch.</h3>
                <p className="text-sm opacity-70 mb-6">
                  Prefer to skip the wait? Grab a slot directly.
                </p>
                <button
                  onClick={bookCall}
                  className="px-5 py-3 text-[10px] uppercase tracking-[0.3em]"
                  style={{ backgroundColor: "#0A0A0A", color: "#FDFDFD" }}
                >
                  Book a call →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 sm:px-10 py-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                  <Field
                    label="Company"
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                  />
                  <div>
                    <Label>Budget</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {BUDGETS.map((b) => (
                        <Chip
                          key={b}
                          active={form.budget === b}
                          onClick={() => setForm({ ...form, budget: b })}
                        >
                          {b}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Services</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {SERVICES.map((s) => (
                      <Chip
                        key={s}
                        active={form.services.includes(s)}
                        onClick={() => toggleService(s)}
                      >
                        {s}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Project brief</Label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What are you building, and what does success look like?"
                    className="mt-2 w-full bg-transparent border px-4 py-3 text-sm focus:outline-none resize-none"
                    style={{ borderColor: "#0000001A" }}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t" style={{ borderColor: "#0000001A" }}>
                  <p className="text-xs opacity-60">We reply within 24h.</p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={bookCall}
                      className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] border transition-colors hover:bg-ink hover:text-paper"
                      style={{ borderColor: "#0A0A0A" }}
                    >
                      Book a call ↗
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-3 text-[10px] uppercase tracking-[0.3em]"
                      style={{ backgroundColor: "#0A0A0A", color: "#FDFDFD" }}
                    >
                      Send brief →
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] uppercase tracking-[0.3em] opacity-60">{children}</div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent border px-4 py-3 text-sm focus:outline-none"
        style={{ borderColor: "#0000001A" }}
      />
    </label>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-2 text-[10px] uppercase tracking-[0.25em] border transition-colors"
      style={
        active
          ? { backgroundColor: "#0A0A0A", color: "#FDFDFD", borderColor: "#0A0A0A" }
          : { borderColor: "#0000001A", color: "#0A0A0A" }
      }
    >
      {children}
    </button>
  );
}
