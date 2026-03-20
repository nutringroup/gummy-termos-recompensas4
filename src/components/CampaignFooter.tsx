const CampaignFooter = () => {
  return (
    <footer className="max-w-3xl mx-auto px-6 pb-16 pt-8">
      <div className="gummy-card-shadow rounded-2xl p-8 bg-card text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          Ao participar da campanha, você declara estar ciente e de acordo com todos
          os termos descritos nesta página.
        </p>
        <a
          href="https://chat.whatsapp.com/FVqNk0ZEDOV02jSIa4QkSA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Entrar na Comunidade Gummy
        </a>
        <p className="text-xs text-muted-foreground/60 pt-2">
          © 2026 Gummy Original · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default CampaignFooter;
