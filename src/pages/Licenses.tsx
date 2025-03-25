
import InfoPageLayout from "@/components/InfoPageLayout";

const Licenses = () => {
  return (
    <InfoPageLayout 
      title="Licenses & Attributions" 
      subtitle="Third-party software and resources used by VoyageBus"
    >
      <p>
        VoyageBus uses various open-source software packages, libraries, frameworks, and other resources 
        in the development and operation of our website, mobile application, and services. We are grateful 
        to the developers and contributors of these projects.
      </p>
      
      <p>
        Below is a list of the major third-party software and resources we use, along with their respective 
        licenses and attributions.
      </p>
      
      <h2>Software Libraries and Frameworks</h2>
      
      <div className="space-y-6 mt-6">
        <div className="border-b pb-4">
          <h3 className="font-semibold">React</h3>
          <p className="text-sm">
            A JavaScript library for building user interfaces.<br />
            License: MIT License<br />
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="text-primary">https://reactjs.org</a>
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h3 className="font-semibold">Tailwind CSS</h3>
          <p className="text-sm">
            A utility-first CSS framework.<br />
            License: MIT License<br />
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-primary">https://tailwindcss.com</a>
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h3 className="font-semibold">shadcn/ui</h3>
          <p className="text-sm">
            Re-usable components built using Radix UI and Tailwind CSS.<br />
            License: MIT License<br />
            <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-primary">https://ui.shadcn.com</a>
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h3 className="font-semibold">Lucide Icons</h3>
          <p className="text-sm">
            Beautiful & consistent icon toolkit.<br />
            License: ISC License<br />
            <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-primary">https://lucide.dev</a>
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h3 className="font-semibold">React Router</h3>
          <p className="text-sm">
            Declarative routing for React.<br />
            License: MIT License<br />
            <a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer" className="text-primary">https://reactrouter.com</a>
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h3 className="font-semibold">React Query</h3>
          <p className="text-sm">
            Hooks for fetching, caching and updating asynchronous data in React.<br />
            License: MIT License<br />
            <a href="https://tanstack.com/query" target="_blank" rel="noopener noreferrer" className="text-primary">https://tanstack.com/query</a>
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h3 className="font-semibold">Zod</h3>
          <p className="text-sm">
            TypeScript-first schema validation with static type inference.<br />
            License: MIT License<br />
            <a href="https://zod.dev" target="_blank" rel="noopener noreferrer" className="text-primary">https://zod.dev</a>
          </p>
        </div>
      </div>
      
      <h2 className="mt-8">Images and Media</h2>
      
      <p>
        We use various images and media in our website and promotional materials. These resources 
        are either:
      </p>
      <ul>
        <li>Created internally by our design team</li>
        <li>Licensed from stock photo providers</li>
        <li>Used under Creative Commons or similar licenses</li>
        <li>Royalty-free resources</li>
      </ul>
      
      <p>
        Specific attributions for third-party images used on our website:
      </p>
      
      <div className="space-y-4 mt-4">
        <div>
          <h3 className="font-semibold">Unsplash</h3>
          <p className="text-sm">
            Various photographs used throughout the website.<br />
            License: Unsplash License<br />
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-primary">https://unsplash.com</a>
          </p>
        </div>
      </div>
      
      <h2 className="mt-8">Fonts</h2>
      
      <div className="space-y-4 mt-4">
        <div>
          <h3 className="font-semibold">Inter</h3>
          <p className="text-sm">
            Main font used throughout the website.<br />
            License: SIL Open Font License 1.1<br />
            <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer" className="text-primary">https://rsms.me/inter/</a>
          </p>
        </div>
      </div>
      
      <h2 className="mt-8">License Information</h2>
      
      <p>
        For detailed license information about any of the software or resources listed above, please 
        visit the respective websites or contact us at <a href="mailto:legal@voyagebus.com" className="text-primary">legal@voyagebus.com</a>.
      </p>
      
      <p className="mt-8 text-sm text-muted-foreground">
        Last updated: June 1, 2023
      </p>
    </InfoPageLayout>
  );
};

export default Licenses;
