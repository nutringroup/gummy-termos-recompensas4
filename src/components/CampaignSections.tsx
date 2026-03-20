import { motion } from "framer-motion";
import {
  Eye,
  ShieldCheck,
  FileText,
  Video,
  CreditCard,
  Share2,
  Settings,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SectionProps {
  number: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  delay?: number;
}

const Section = ({ number, title, icon: Icon, children, delay = 0 }: SectionProps) => (
  <motion.section
    id={`section-${number}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay }}
    className="scroll-mt-24"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent">
        <Icon className="w-4 h-4 text-accent-foreground" />
      </div>
      <h2 className="text-xl font-bold text-foreground">
        <span className="text-muted-foreground mr-1">{number}.</span> {title}
      </h2>
    </div>
    <div className="pl-12 space-y-4">{children}</div>
  </motion.section>
);

const ListItem = ({
  children,
  variant = "check",
}: {
  children: ReactNode;
  variant?: "check" | "warning" | "x";
}) => {
  const icons = {
    check: <CheckCircle2 className="w-5 h-5 text-gummy-success flex-shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    x: <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />,
  };

  return (
    <li className="flex gap-3 text-foreground/85 leading-relaxed">
      {icons[variant]}
      <span>{children}</span>
    </li>
  );
};

const CampaignSections = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
      {/* Visão Geral */}
      <Section number="01" title="Visão Geral da Campanha" icon={Eye}>
        <p className="text-foreground/75 leading-relaxed">
          Campanha promocional voltada para criadores afiliados da TikTok Shop, com
          o objetivo de impulsionar vendas por meio de conteúdos alinhados à
          narrativa da marca.
        </p>
        <p className="text-foreground/75 leading-relaxed">
          Durante o período da campanha, os participantes poderão gerar receita por
          meio de comissões na plataforma e, adicionalmente, conquistar recompensas
          com base no desempenho em vendas e na produção de conteúdo.
        </p>
      </Section>

      {/* Elegibilidade */}
      <Section number="02" title="Elegibilidade" icon={ShieldCheck}>
        <p className="text-foreground/75 mb-3">
          Para participar da campanha, é necessário:
        </p>
        <ul className="space-y-3">
          <ListItem>
            Possuir uma conta ativa e válida como afiliado na TikTok Shop
          </ListItem>
          <ListItem>
            Estar conectado à comunidade oficial da Gummy Original
          </ListItem>
          <ListItem>
            Estar de acordo com os termos e condições desta campanha
          </ListItem>
        </ul>
      </Section>

      {/* Termos Gerais */}
      <Section number="03" title="Termos Gerais" icon={FileText}>
        <ul className="space-y-3">
          <ListItem>
            A campanha é válida exclusivamente para vendas realizadas dentro da
            TikTok Shop
          </ListItem>
          <ListItem>
            O GMV (Volume Bruto de Mercadorias) será calculado com base nas vendas
            válidas durante o período da campanha
          </ListItem>
          <ListItem variant="warning">
            Pedidos cancelados, devolvidos ou reembolsados serão automaticamente
            descontados do GMV total
          </ListItem>
          <ListItem>
            A apuração final dos resultados será realizada pela Gummy, que possui
            total critério sobre validação e classificação
          </ListItem>
        </ul>
      </Section>

      {/* Regras de Participação */}
      <Section number="04" title="Regras de Participação" icon={Video}>
        <p className="text-foreground/75 mb-3">
          Para que as vendas e conteúdos sejam considerados na campanha, é
          obrigatório:
        </p>
        <ul className="space-y-3">
          <ListItem>
            Marcar corretamente os produtos Gummy nos vídeos
          </ListItem>
          <ListItem>Utilizar a hashtag oficial da campanha</ListItem>
          <ListItem>
            Publicar no mínimo <strong>20 vídeos novos</strong> durante o período
            da campanha
          </ListItem>
        </ul>
        <div className="mt-4 p-4 rounded-xl bg-accent text-sm text-accent-foreground leading-relaxed">
          Serão consideradas apenas vendas provenientes de conteúdos que estejam em
          conformidade com as diretrizes. A Gummy se reserva o direito de
          desconsiderar conteúdos que não estejam alinhados com a proposta da
          campanha, mesmo que tenham gerado vendas.
        </div>
      </Section>

      {/* Práticas Não Permitidas */}
      <Section number="05" title="Práticas Não Permitidas" icon={AlertTriangle}>
        <div className="p-5 rounded-2xl bg-gummy-danger-bg space-y-3">
          <ul className="space-y-3">
            <ListItem variant="x">
              Inflar artificialmente o GMV por meio de compras próprias ou práticas
              fraudulentas
            </ListItem>
            <ListItem variant="x">
              Utilizar múltiplas contas de forma indevida
            </ListItem>
            <ListItem variant="x">
              Divulgar informações falsas, não comprovadas ou não aprovadas pela marca
            </ListItem>
            <ListItem variant="x">
              Produzir conteúdos que desvalorizem o posicionamento da Gummy Original
            </ListItem>
          </ul>
          <p className="text-sm text-destructive font-medium pt-2 border-t border-destructive/10">
            A violação dessas diretrizes poderá resultar na desclassificação do
            participante.
          </p>
        </div>
      </Section>

      {/* Diretrizes de Conteúdo */}
      <Section number="06" title="Diretrizes de Conteúdo" icon={FileText}>
        <p className="text-foreground/75 mb-3">
          Os participantes devem seguir as seguintes orientações:
        </p>
        <ul className="space-y-3">
          <ListItem>
            Utilizar exclusivamente informações e alegações oficiais disponíveis em{" "}
            <a
              href="https://gummy.com.br"
              className="text-primary font-medium underline underline-offset-2 decoration-primary/30 hover:decoration-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              gummy.com.br
            </a>{" "}
            e link fixado na comunidade
          </ListItem>
          <ListItem variant="x">
            Não realizar alegações médicas, terapêuticas ou relacionadas a doenças
          </ListItem>
          <ListItem variant="x">
            Não prometer resultados que não estejam comprovados
          </ListItem>
        </ul>
        <div className="mt-4 p-4 rounded-xl bg-accent text-sm text-accent-foreground leading-relaxed">
          A Gummy poderá remover ou desconsiderar conteúdos que não estejam em
          conformidade com essas diretrizes.
        </div>
      </Section>

      {/* Condições de Pagamento */}
      <Section number="07" title="Condições de Pagamento" icon={CreditCard}>
        <ul className="space-y-3">
          <ListItem>
            As comissões geradas pelos vídeos serão pagas diretamente pela
            plataforma TikTok
          </ListItem>
          <ListItem>
            As recompensas da campanha serão pagas em até{" "}
            <strong>45 dias</strong> após o encerramento da campanha
          </ListItem>
          <ListItem>
            É obrigatório que o participante possua dados de pagamento válidos na
            plataforma
          </ListItem>
          <ListItem variant="warning">
            A emissão de Nota Fiscal é <strong>obrigatória</strong> para
            recebimento das recompensas
          </ListItem>
          <ListItem variant="x">
            Na ausência de Nota Fiscal válida, o pagamento não será realizado
          </ListItem>
          <ListItem>
            Todos os impostos e tributos são de responsabilidade exclusiva do
            participante
          </ListItem>
        </ul>
      </Section>

      {/* Utilização de Conteúdo */}
      <Section number="08" title="Utilização de Conteúdo" icon={Share2}>
        <p className="text-foreground/75 leading-relaxed">
          Ao participar da campanha e receber recompensas, o participante autoriza a
          Gummy a utilizar seus conteúdos para fins de marketing, incluindo
          veiculação em plataformas de mídia paga, como Meta Ads.
        </p>
        <p className="text-foreground/75 leading-relaxed">
          Caso o participante não concorde com a utilização de seus conteúdos,
          deverá informar previamente à equipe responsável.
        </p>
      </Section>

      {/* Modificações */}
      <Section number="09" title="Modificações e Encerramento" icon={Settings}>
        <p className="text-foreground/75 leading-relaxed">
          A Gummy reserva-se o direito de modificar, suspender ou encerrar a
          campanha a qualquer momento, conforme necessário.
        </p>
        <p className="text-foreground/75 leading-relaxed">
          Eventuais alterações serão comunicadas por meio dos canais oficiais da
          marca.
        </p>
      </Section>
    </div>
  );
};

export default CampaignSections;
