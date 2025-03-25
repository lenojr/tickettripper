
import InfoPageLayout from "@/components/InfoPageLayout";

const Covid = () => {
  return (
    <InfoPageLayout 
      title="COVID-19 Information" 
      subtitle="Health and safety measures for bus travel"
    >
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Current Status</h2>
        <p>
          VoyageBus is fully operational across all routes. We continue to maintain enhanced cleaning 
          protocols and follow public health recommendations to ensure safe travel for all passengers.
        </p>
      </div>
      
      <h2>Our Health and Safety Measures</h2>
      <p>
        The safety of our passengers and employees remains our top priority. Here are the measures 
        we have implemented:
      </p>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Enhanced Cleaning</h3>
      <p>
        All our buses undergo thorough cleaning and disinfection:
      </p>
      <ul>
        <li>Deep cleaning of all buses after each journey</li>
        <li>Special attention to high-touch surfaces such as handrails, seat belts, arm rests, and restrooms</li>
        <li>Use of hospital-grade disinfectants approved for use against COVID-19</li>
        <li>Regular sanitization of bus terminals and waiting areas</li>
      </ul>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Air Quality</h3>
      <p>
        We've improved air circulation on our buses:
      </p>
      <ul>
        <li>Enhanced ventilation systems on all buses</li>
        <li>Regular replacement of air filters</li>
        <li>Fresh air exchange approximately every 10 minutes</li>
      </ul>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Health Screening</h3>
      <p>
        We maintain health screening processes:
      </p>
      <ul>
        <li>Daily health checks for all staff and drivers</li>
        <li>We ask passengers to self-screen and avoid travel if experiencing COVID-19 symptoms</li>
        <li>Contactless temperature checks may be conducted before boarding in certain locations</li>
      </ul>
      
      <h2>Travel Recommendations</h2>
      <p>
        We recommend the following for your journey:
      </p>
      <ul>
        <li>Consider wearing a mask in crowded settings, especially if you are at high risk</li>
        <li>Use hand sanitizer before boarding and after touching common surfaces</li>
        <li>Practice good hand hygiene throughout your journey</li>
        <li>If you feel unwell, please postpone your travel</li>
      </ul>
      
      <h2>Flexible Booking Policies</h2>
      <p>
        We understand that plans may change due to health concerns. Therefore, we offer:
      </p>
      <ul>
        <li>Free changes up to 24 hours before departure</li>
        <li>Full refund or travel credit for cancellations due to COVID-19 illness (with documentation)</li>
        <li>Extended validity for vouchers and credits</li>
      </ul>
      
      <h2>Travel Requirements</h2>
      <p>
        While most COVID-19 restrictions have been lifted, some areas may still have specific requirements. 
        Please check local regulations for your destination before traveling.
      </p>
      
      <h2>Updates and Information</h2>
      <p>
        This page is regularly updated with the latest information regarding our COVID-19 policies. 
        Last updated: June 1, 2023.
      </p>
      <p>
        For any specific questions or concerns regarding COVID-19 and your travel plans, please contact 
        our customer service team at <a href="mailto:covid-info@voyagebus.com" className="text-primary">covid-info@voyagebus.com</a> or 
        call 1-800-VOYAGE-BUS.
      </p>
    </InfoPageLayout>
  );
};

export default Covid;
