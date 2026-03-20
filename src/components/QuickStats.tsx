import { Calendar, Hash, Users } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    label: "Período",
    value: "20/03 — 31/03",
    sublabel: "2026 · Até 23h59 (BRT)",
  },
  {
    icon: Users,
    label: "Elegibilidade",
    value: "Afiliados TikTok Shop",
    sublabel: "Conta ativa + Comunidade Gummy",
  },
  {
    icon: Hash,
    label: "Hashtag Oficial",
    value: "#GummyTikTok",
    sublabel: "Obrigatória em todos os vídeos",
    highlight: true,
  },
];

const QuickStats = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 -mt-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="gummy-card-shadow rounded-2xl p-6 bg-card hover:-translate-y-0.5 transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          >
            <div className="flex items-center gap-2 mb-3">
              <stat.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
            <p
              className={`text-xl font-bold tabular-nums ${
                stat.highlight ? "text-secondary" : "text-primary"
              }`}
            >
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{stat.sublabel}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickStats;
