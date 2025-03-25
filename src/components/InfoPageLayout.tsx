
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface InfoPageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const InfoPageLayout = ({ children, title, subtitle }: InfoPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>}
            <div className="prose prose-blue dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InfoPageLayout;
