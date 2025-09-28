
import InfoPageLayout from "@/components/InfoPageLayout";

const Cookie = () => {
  return (
    <InfoPageLayout 
      title="Cookie Policy" 
      subtitle="How we use cookies and similar technologies"
    >
      <p>
        This Cookie Policy explains how VoyageBus ("we", "us", or "our") uses cookies and similar 
        technologies on our website and mobile application. It explains what these technologies are 
        and why we use them, as well as your rights to control our use of them.
      </p>
      
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your computer or mobile device when you visit 
        a website. They are widely used to make websites work more efficiently and provide information 
        to the owners of the site. Cookies can be "persistent" or "session" cookies.
      </p>
      
      <h2>Types of Cookies We Use</h2>
      <p>We use the following types of cookies for the purposes set out below:</p>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Essential Cookies</h3>
      <p>
        These cookies are essential for providing you with services available through our website and 
        to enable you to use certain features. Without these cookies, the services you have asked for 
        cannot be provided, and we only use these cookies to provide you with those services.
      </p>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Functionality Cookies</h3>
      <p>
        These cookies allow our website to remember choices you make when you use our website. The purpose 
        of these cookies is to provide you with a more personal experience and to avoid you having to 
        re-enter your preferences every time you visit our website.
      </p>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Analytics and Performance Cookies</h3>
      <p>
        These cookies are used to collect information about traffic to our website and how users use our 
        website. The information gathered does not identify any individual visitor. The information is 
        aggregated and anonymous. We use this information to help operate our website more efficiently, 
        to gather broad demographic information, monitor the level of activity on our website, and improve 
        the website.
      </p>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Social Media Cookies</h3>
      <p>
        These cookies are used when you share information using a social media sharing button or "like" 
        button on our website or you link your account or engage with our content on or through a social 
        networking website such as Facebook, Twitter, or Google+. The social network will record that you 
        have done this.
      </p>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Advertising Cookies</h3>
      <p>
        These cookies are used to deliver advertisements that are more relevant to you and your interests. 
        They are also used to limit the number of times you see an advertisement as well as help measure 
        the effectiveness of the advertising campaign. They are usually placed by advertising networks with 
        our permission. They remember that you have visited a website and this information is shared with 
        other organizations such as advertisers.
      </p>
      
      <h2>Other Tracking Technologies</h2>
      <p>
        In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies to 
        improve our understanding of how you navigate our website, collect demographic information about 
        our user base as a whole, track marketing campaign success, measure site engagement, optimize site 
        performance, and enhance the functionality of our website.
      </p>
      
      <h2>Your Choices</h2>
      <p>
        Most web browsers allow some control of most cookies through the browser settings. To find out 
        more about cookies, including how to see what cookies have been set, visit 
        <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary"> www.aboutcookies.org</a> or 
        <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary"> www.allaboutcookies.org</a>.
      </p>
      <p>
        You can manage your cookie preferences through our Cookie Consent Manager, which you can access 
        by clicking "Cookie Settings" in the footer of our website.
      </p>
      
      <h2>Do Not Track</h2>
      <p>
        Please note that we do not alter our website's data collection and use practices when we see a 
        Do Not Track signal from your browser.
      </p>
      
      <h2>Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in technology, regulation, 
        or our business practices. Any changes will become effective when we post the revised Cookie 
        Policy on our website. We will notify you of any significant changes.
      </p>
      
      <h2>Contact Us</h2>
      <p>
        If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
      </p>
      <p>
        Email: <a href="mailto:privacy@lenojrbus.com" className="text-primary">privacy@lenojrbus.com</a><br />
        Address: 123 Transit Way, Suite 456, Bus City, BC 12345<br />
        Phone: 1-800-COOKIES (1-546-266-5437)
      </p>
      
      <p className="mt-8 text-sm text-muted-foreground">
        Last updated: June 1, 2023
      </p>
    </InfoPageLayout>
  );
};

export default Cookie;
