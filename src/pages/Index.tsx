import CampaignHero from "@/components/CampaignHero";
import QuickStats from "@/components/QuickStats";
import CampaignSections from "@/components/CampaignSections";
import CampaignFooter from "@/components/CampaignFooter";
import StickyNav from "@/components/StickyNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <CampaignHero />
      <div className="py-8">
        <QuickStats />
      </div>
      <CampaignSections />
      <CampaignFooter />
    </div>
  );
};

export default Index;
