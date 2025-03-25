
import InfoPageLayout from "@/components/InfoPageLayout";

const Press = () => {
  return (
    <InfoPageLayout 
      title="Press & Media" 
      subtitle="Latest news and media resources for VoyageBus"
    >
      <p>
        Welcome to the VoyageBus press center. Here you'll find our latest news, press releases, 
        media resources, and contact information for media inquiries.
      </p>
      
      <h2>Press Releases</h2>
      
      <div className="space-y-6 my-8">
        <div className="border-b pb-6">
          <span className="text-sm text-muted-foreground">June 15, 2023</span>
          <h3 className="text-xl font-semibold my-2">VoyageBus Expands Service to 10 New Cities</h3>
          <p>
            VoyageBus announced today the expansion of its service network to include 10 new cities, 
            making comfortable and affordable bus travel available to millions more travelers.
          </p>
          <a href="#" className="text-primary hover:underline">Read more</a>
        </div>
        
        <div className="border-b pb-6">
          <span className="text-sm text-muted-foreground">March 22, 2023</span>
          <h3 className="text-xl font-semibold my-2">VoyageBus Introduces New Eco-Friendly Fleet</h3>
          <p>
            As part of our commitment to sustainability, VoyageBus has invested in a new fleet of 
            hybrid electric buses that will reduce emissions by up to 40%.
          </p>
          <a href="#" className="text-primary hover:underline">Read more</a>
        </div>
        
        <div className="border-b pb-6">
          <span className="text-sm text-muted-foreground">January 5, 2023</span>
          <h3 className="text-xl font-semibold my-2">VoyageBus Reports Record Growth in 2022</h3>
          <p>
            VoyageBus today announced record growth for 2022, with a 75% increase in ridership 
            and expansion to 15 new markets across the country.
          </p>
          <a href="#" className="text-primary hover:underline">Read more</a>
        </div>
      </div>
      
      <h2>Media Contact</h2>
      <p>
        For press inquiries, please contact:<br />
        Sarah Johnson<br />
        Director of Communications<br />
        <a href="mailto:press@voyagebus.com" className="text-primary">press@voyagebus.com</a><br />
        (555) 123-4567
      </p>
      
      <h2>Media Resources</h2>
      <p>
        Download our press kit, including logos, executive headshots, and bus photos.<br />
        <a href="#" className="text-primary hover:underline">Download Press Kit (ZIP)</a>
      </p>
    </InfoPageLayout>
  );
};

export default Press;
