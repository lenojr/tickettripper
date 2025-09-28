
import InfoPageLayout from "@/components/InfoPageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <InfoPageLayout 
      title="Help Center" 
      subtitle="Find answers to your questions and get support"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How can we help you today?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Booking Issues</h3>
            <p className="text-sm mb-4">Help with reservations, changes, and cancellations</p>
            <Button variant="outline" asChild>
              <Link to="/help/booking">View Articles</Link>
            </Button>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Travel Information</h3>
            <p className="text-sm mb-4">Luggage policies, schedules, and travel requirements</p>
            <Button variant="outline" asChild>
              <Link to="/help/travel-info">View Articles</Link>
            </Button>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Payment & Refunds</h3>
            <p className="text-sm mb-4">Billing questions, payment methods, and refund status</p>
            <Button variant="outline" asChild>
              <Link to="/help/payments">View Articles</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I book a ticket?</AccordionTrigger>
          <AccordionContent>
            You can book a ticket online through our website or mobile app. Simply enter your origin, 
            destination, travel date, and the number of passengers. Then choose from available departure 
            times and complete your purchase with a credit/debit card or other payment methods.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I cancel or change my booking?</AccordionTrigger>
          <AccordionContent>
            Yes, you can cancel or change your booking up to 24 hours before your scheduled departure. 
            Changes are subject to availability and may incur a fee. For cancellations, refunds are 
            processed according to our refund policy, which depends on how far in advance you cancel.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>How much luggage can I bring?</AccordionTrigger>
          <AccordionContent>
            Each passenger can bring one piece of luggage (up to 20kg) to be stored in the luggage 
            compartment, plus one small carry-on bag. Additional or overweight luggage may incur extra 
            fees. Special items like bicycles or musical instruments may require advance notice.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>Are there power outlets and WiFi on the bus?</AccordionTrigger>
          <AccordionContent>
            Most of our buses are equipped with power outlets at each seat and complimentary WiFi. 
            However, WiFi connectivity may vary depending on the route and geographical area. We 
            recommend bringing your devices fully charged and downloading any essential content before 
            your journey.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>What if my bus is delayed?</AccordionTrigger>
          <AccordionContent>
            In case of delays, we'll notify you via email and SMS if you provided your contact 
            information during booking. You can also check the status of your bus in real-time through 
            our website or app. For significant delays, our customer service team will assist with 
            alternative arrangements if necessary.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="mb-4">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="mb-1">1-546-LENOJR-BUS (1-546-869-2432)</p>
            <p className="text-sm text-muted-foreground">Available 24/7</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="mb-1"><a href="mailto:support@lenojrbus.com" className="text-primary">support@vlenojrbus.com</a></p>
            <p className="text-sm text-muted-foreground">Response within 24 hours</p>
          </div>
        </div>
        <div className="mt-6">
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default Help;
