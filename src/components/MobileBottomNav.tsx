import { Home, Briefcase, User, Layers, Mail } from "lucide-react";

const NAV = [
  { icon: Home, label: "Home", href: "#intro" },
  { icon: Briefcase, label: "Work", href: "#work" },
  { icon: Layers, label: "Services", href: "#services" },
  { icon: User, label: "About", href: "#about" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-3 left-3 right-3 z-50 md:hidden">
      <div className="rounded-full border border-[#DADADA] bg-[#FDFDFD] backdrop-blur-xl shadow-[0_20px_60px_-20px_#00000040]">
        <ul className="flex items-center justify-between px-2 py-2">
          {NAV.map((n) => (
            <li key={n.label} className="flex-1">
              <a
                href={n.href}
                className="flex flex-col items-center gap-1 py-2 text-[#515151] active:text-ink active:scale-95 transition"
              >
                <n.icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-[0.18em]">{n.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
