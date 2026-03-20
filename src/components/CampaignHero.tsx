import { Badge } from "@/components/ui/badge";
import gummyLogo from "@/assets/gummy-logo.png";

const CampaignHero = () => {
  return (
    <section className="relative pt-8 pb-12 px-6 gummy-hero-gradient">
      <img src={gummyLogo} alt="Gummy Original" className="w-[300px] h-[175px] object-contain mb-6" />
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="campaign">Campanha Oficial</Badge>
          <Badge variant="active">● Ativa</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Regras de Ouro:{" "}
          <span className="text-primary">Campanha TikTok Shop 2026</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl">
          Tudo o que você precisa saber para maximizar suas comissões e garantir
          suas recompensas extras na campanha Gummy × TikTok Shop.
        </p>
      </div>
    </section>
  );
};

export default CampaignHero;
