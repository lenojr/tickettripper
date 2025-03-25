
import InfoPageLayout from "@/components/InfoPageLayout";

const Terms = () => {
  return (
    <InfoPageLayout 
      title="Terms of Service" 
      subtitle="Please read these terms carefully before using our services"
    >
      <p>
        These Terms of Service ("Terms") govern your use of the VoyageBus website, mobile application, 
        and transportation services (collectively, the "Services"). By accessing or using our Services, 
        you agree to be bound by these Terms.
      </p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our Services, you acknowledge that you have read, understood, and agree 
        to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
      </p>
      
      <h2>2. Service Description</h2>
      <p>
        VoyageBus provides bus transportation services between various destinations. We also offer 
        online and mobile platforms for users to search for, book, and manage their travel arrangements.
      </p>
      
      <h2>3. User Accounts</h2>
      <p>
        To access certain features of our Services, you may need to create an account. You are responsible 
        for maintaining the confidentiality of your account information and for all activities that occur 
        under your account. You agree to provide accurate and complete information when creating your 
        account and to update your information as necessary.
      </p>
      
      <h2>4. Booking and Ticketing</h2>
      <p>
        4.1. Tickets purchased through our Services are subject to our Booking Policy.<br />
        4.2. Tickets are valid only for the specific date, time, and route indicated.<br />
        4.3. VoyageBus reserves the right to refuse service to anyone who does not have a valid ticket or 
        who does not comply with our policies.<br />
        4.4. Changes and cancellations are subject to our Change and Cancellation Policy.
      </p>
      
      <h2>5. User Conduct</h2>
      <p>
        When using our Services, you agree not to:
      </p>
      <ul>
        <li>Violate any applicable laws or regulations</li>
        <li>Infringe on the rights of others</li>
        <li>Interfere with the operation of our Services</li>
        <li>Use our Services for any unauthorized or illegal purpose</li>
        <li>Engage in any behavior that may endanger or disrupt the travel experience of others</li>
      </ul>
      
      <h2>6. Travel Rules and Regulations</h2>
      <p>
        6.1. Passengers must arrive at the departure point at least 15 minutes before the scheduled departure time.<br />
        6.2. VoyageBus is not responsible for any delays due to traffic, weather, or other circumstances beyond our control.<br />
        6.3. Passengers must comply with all safety instructions given by our staff.<br />
        6.4. Baggage policies, including size and weight restrictions, are outlined in our Baggage Policy.
      </p>
      
      <h2>7. Intellectual Property</h2>
      <p>
        All content included on our website and mobile application, such as text, graphics, logos, images, 
        and software, is the property of VoyageBus or its content suppliers and is protected by copyright 
        and other intellectual property laws.
      </p>
      
      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, VoyageBus shall not be liable for any indirect, incidental, 
        special, consequential, or punitive damages, including loss of profits, data, or use, arising out 
        of or in connection with these Terms or your use of our Services.
      </p>
      
      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless VoyageBus, its affiliates, officers, directors, employees, 
        and agents from any claims, liabilities, damages, losses, costs, or expenses arising out of or in 
        connection with your use of our Services or your violation of these Terms.
      </p>
      
      <h2>10. Modifications to Terms</h2>
      <p>
        VoyageBus reserves the right to modify these Terms at any time. We will provide notice of significant 
        changes through our website or by other means. Your continued use of our Services after such changes 
        constitutes your acceptance of the new Terms.
      </p>
      
      <h2>11. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the state of [State], 
        without regard to its conflict of law principles.
      </p>
      
      <h2>12. Contact Information</h2>
      <p>
        If you have any questions or concerns about these Terms, please contact us at 
        <a href="mailto:legal@voyagebus.com" className="text-primary"> legal@voyagebus.com</a>.
      </p>
      
      <p className="mt-8 text-sm text-muted-foreground">
        Last updated: June 1, 2023
      </p>
    </InfoPageLayout>
  );
};

export default Terms;
