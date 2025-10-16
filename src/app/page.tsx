"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "heroImage", url: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Abstract green matrix code background with binary style." },
  { id: "contactImage", url: "https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "modern office workspace - Photo by Jakub Zerdzicki" }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Webild"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Build Better Websites"
            description="Create beautiful, responsive websites with AI technology."
            imageSrc="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
            imagePosition="right"
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Contact Us"
            description="Have questions? Reach out to us and we'll get back to you promptly."
            imageSrc="https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            inputPlaceholder="Your email address"
            buttonText="Send"
            termsText="We respect your privacy. Unsubscribe at any time."
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 | Webild"
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}