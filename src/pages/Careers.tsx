
import InfoPageLayout from "@/components/InfoPageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <InfoPageLayout 
      title="Careers at VoyageBus" 
      subtitle="Join our team and help transform the future of bus travel"
    >
      <p>
        At VoyageBus, we're always looking for talented individuals who share our passion for exceptional 
        service and innovation in transportation. Join our diverse team and be part of shaping the future 
        of bus travel.
      </p>
      
      <h2>Why Work With Us</h2>
      <ul>
        <li>Competitive compensation and benefits</li>
        <li>Professional development opportunities</li>
        <li>Inclusive and supportive work environment</li>
        <li>Opportunity to make a real impact on the transportation industry</li>
        <li>Employee travel benefits</li>
      </ul>
      
      <h2>Open Positions</h2>
      
      <div className="space-y-6 my-8">
        <div className="border p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Bus Drivers</h3>
          <p className="mb-4">We're looking for experienced, safety-focused drivers to join our growing fleet.</p>
          <Button asChild>
            <Link to="/careers/drivers">View Details</Link>
          </Button>
        </div>
        
        <div className="border p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Customer Service Representatives</h3>
          <p className="mb-4">Help our customers have the best possible travel experience.</p>
          <Button asChild>
            <Link to="/careers/customer-service">View Details</Link>
          </Button>
        </div>
        
        <div className="border p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Software Engineers</h3>
          <p className="mb-4">Build the technology that powers our booking platform and operations.</p>
          <Button asChild>
            <Link to="/careers/engineering">View Details</Link>
          </Button>
        </div>
      </div>
      
      <p>
        Don't see a position that matches your skills? We're always interested in hearing from 
        talented individuals. Send your resume to <a href="mailto:careers@voyagebus.com" className="text-primary">careers@voyagebus.com</a>.
      </p>
    </InfoPageLayout>
  );
};

export default Careers;
