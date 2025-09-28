
import InfoPageLayout from "@/components/InfoPageLayout";

const Accessibility = () => {
  return (
    <InfoPageLayout 
      title="Accessibility" 
      subtitle="Our commitment to accessible travel for all"
    >
      <p>
        At LenojrBus, we believe that everyone should have access to comfortable, reliable transportation. 
        We are committed to providing accessible services to people of all abilities and continually 
        work to improve the accessibility of our vehicles, facilities, and digital platforms.
      </p>
      
      <h2>Accessible Buses</h2>
      <p>
        Our fleet includes buses with the following accessibility features:
      </p>
      <ul>
        <li>Wheelchair lifts or ramps</li>
        <li>Dedicated wheelchair spaces with appropriate securement systems</li>
        <li>Priority seating for passengers with disabilities</li>
        <li>Accessible restrooms on long-distance buses</li>
        <li>Announcements for stops and important information</li>
        <li>Service animals are welcome</li>
      </ul>
      
      <h2>Booking Accessible Travel</h2>
      <p>
        When booking your trip, you can indicate any accessibility requirements you have. We recommend 
        that passengers who need wheelchair access or other accommodations book at least 48 hours in 
        advance to ensure availability.
      </p>
      <p>
        You can specify your accessibility needs:
      </p>
      <ul>
        <li>During the online booking process</li>
        <li>By calling our dedicated accessibility helpline: 1-546-ACCESS-LB (1-546-222-3772)</li>
        <li>By emailing <a href="mailto:accessibility@lenojrbus.com" className="text-primary">accessibility@lenojrbus.com</a></li>
      </ul>
      
      <h2>Terminal Accessibility</h2>
      <p>
        Most terminals we serve have:
      </p>
      <ul>
        <li>Accessible entrances and waiting areas</li>
        <li>Accessible restrooms</li>
        <li>Visual and audio information systems</li>
        <li>Staff available to assist passengers with disabilities</li>
      </ul>
      <p>
        You can find detailed accessibility information for specific terminals on our website or by 
        contacting our customer service team.
      </p>
      
      <h2>Website and App Accessibility</h2>
      <p>
        We strive to ensure our digital platforms follow WCAG 2.1 AA standards and are usable by people 
        with diverse abilities. Our website and mobile app feature:
      </p>
      <ul>
        <li>Screen reader compatibility</li>
        <li>Keyboard navigation</li>
        <li>Resizable text without loss of content or functionality</li>
        <li>Adequate color contrast</li>
        <li>Alternative text for images</li>
        <li>Clear headings and labels</li>
      </ul>
      <p>
        If you encounter any accessibility issues with our website or app, please contact us at 
        <a href="mailto:digital-access@lenojrbus.com" className="text-primary"> digital-access@lenojrbus.com</a>.
      </p>
      
      <h2>Traveling with a Personal Care Attendant</h2>
      <p>
        If you require a personal care attendant to travel with you, they may be eligible for a 
        discounted fare. Please contact our customer service team for more information and to arrange this.
      </p>
      
      <h2>Feedback and Continuous Improvement</h2>
      <p>
        We are committed to continuously improving our accessibility services. If you have any feedback, 
        suggestions, or concerns about accessibility at LenojrBus, please contact our Accessibility 
        Coordinator at <a href="mailto:accessibility@lenojrbus.com" className="text-primary">accessibility@lenojrbus.com</a> or call 
        1-546-ACCESS-LB (1-546-222-3772).
      </p>
    </InfoPageLayout>
  );
};

export default Accessibility;
