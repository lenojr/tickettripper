
import InfoPageLayout from "@/components/InfoPageLayout";

const Privacy = () => {
  return (
    <InfoPageLayout 
      title="Privacy Policy" 
      subtitle="How we collect, use, and protect your personal information"
    >
      <p>
        At Lenojr, we are committed to protecting your privacy and ensuring the security of your 
        personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
        your information when you use our website, mobile application, and transportation services.
      </p>
      
      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Personal Information</h3>
      <ul>
        <li>Contact information (name, email address, phone number, mailing address)</li>
        <li>Account credentials (username, password)</li>
        <li>Payment information (credit card details, billing address)</li>
        <li>Identification information for certain routes (ID number, passport information)</li>
        <li>Birth date (for age verification and special discounts)</li>
      </ul>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Usage Information</h3>
      <ul>
        <li>Booking history and travel preferences</li>
        <li>Device information (IP address, browser type, operating system)</li>
        <li>Location data (when you use location-based features of our app)</li>
        <li>Log data (pages visited, time spent on our platforms, clicks)</li>
        <li>Customer service interactions</li>
      </ul>
      
      <h2>How We Use Your Information</h2>
      <p>We use your information for the following purposes:</p>
      <ul>
        <li>Process and manage your bookings and transactions</li>
        <li>Provide customer support and respond to inquiries</li>
        <li>Verify your identity and prevent fraud</li>
        <li>Send important service-related notifications</li>
        <li>Deliver marketing communications (with your consent)</li>
        <li>Improve our services and develop new features</li>
        <li>Comply with legal obligations</li>
      </ul>
      
      <h2>Information Sharing and Disclosure</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>Service providers (payment processors, IT services, customer support)</li>
        <li>Business partners (when necessary to provide our services)</li>
        <li>Legal authorities (when required by law or to protect our rights)</li>
      </ul>
      <p>
        We do not sell, rent, or lease your personal information to third parties for their marketing purposes.
      </p>
      
      <h2>Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal information against unauthorized 
        access, alteration, disclosure, or destruction. These measures include:
      </p>
      <ul>
        <li>Encryption of sensitive data</li>
        <li>Regular security assessments</li>
        <li>Access controls and authentication procedures</li>
        <li>Secure data storage practices</li>
      </ul>
      <p>
        However, no method of transmission over the Internet or electronic storage is 100% secure, and we 
        cannot guarantee absolute security.
      </p>
      
      <h2>Your Privacy Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Correct inaccurate or incomplete information</li>
        <li>Request deletion of your personal information</li>
        <li>Object to certain processing of your data</li>
        <li>Request restriction of processing</li>
        <li>Data portability</li>
        <li>Withdraw consent</li>
      </ul>
      <p>
        To exercise these rights, please contact us at <a href="mailto:privacy@lenojrbus.com" className="text-primary">privacy@lenojrbus.com</a>.
      </p>
      
      <h2>Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies to enhance your experience on our platforms, 
        analyze usage patterns, and deliver targeted advertisements. You can control cookie settings 
        through your browser preferences.
      </p>
      
      <h2>Children's Privacy</h2>
      <p>
        Our services are not directed to individuals under the age of 13. We do not knowingly collect 
        personal information from children. If you believe we have collected information from a child, 
        please contact us immediately.
      </p>
      
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
        the new Privacy Policy on this page and updating the "Last Updated" date.
      </p>
      
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
      </p>
      <p>
        Email: <a href="mailto:privacy@lenojrbus.com" className="text-primary">privacy@lenojrbus.com</a><br />
        Address: 123 Transit Way, Suite 456, Bus City, BC 12345<br />
        Phone: 1-546-PRIVACY (1-546-774-8229)
      </p>
      
      <p className="mt-8 text-sm text-muted-foreground">
        Last updated: June 1, 2023
      </p>
    </InfoPageLayout>
  );
};

export default Privacy;
