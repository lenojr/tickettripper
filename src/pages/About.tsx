
import InfoPageLayout from "@/components/InfoPageLayout";

const About = () => {
  return (
    <InfoPageLayout 
      title="About Us" 
      subtitle="Learn more about VoyageBus and our mission"
    >
      <p>
        Founded in 2020, VoyageBus is committed to transforming the bus travel experience across the country. 
        We believe that bus travel should be comfortable, reliable, and accessible to everyone.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        To provide safe, comfortable, and sustainable bus transportation while delivering exceptional 
        customer service that exceeds expectations.
      </p>
      
      <h2>Our Values</h2>
      <ul>
        <li><strong>Safety First:</strong> The safety of our passengers and staff is our highest priority.</li>
        <li><strong>Customer Focus:</strong> We're dedicated to creating a positive experience for every traveler.</li>
        <li><strong>Sustainability:</strong> We're committed to reducing our environmental impact through modern, fuel-efficient vehicles.</li>
        <li><strong>Innovation:</strong> We continuously improve our services through technology and customer-focused solutions.</li>
        <li><strong>Inclusivity:</strong> We make travel accessible and welcoming for people from all walks of life.</li>
      </ul>
      
      <h2>Our Team</h2>
      <p>
        Our diverse team of professionals is united by a passion for transforming the travel industry. 
        From our experienced drivers to our customer service representatives and management team, 
        everyone at VoyageBus plays a vital role in delivering exceptional service.
      </p>
      
      <h2>Our Commitment</h2>
      <p>
        At VoyageBus, we're committed to making bus travel the preferred choice for short and medium-distance journeys. 
        By offering comfortable vehicles, convenient schedules, competitive prices, and excellent service, 
        we aim to make your journey as enjoyable as your destination.
      </p>
    </InfoPageLayout>
  );
};

export default About;
