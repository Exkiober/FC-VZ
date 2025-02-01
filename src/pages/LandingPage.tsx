import React from "react";

import { Page } from "../components/ui/Page";

interface ListProps {
  items: { text: string; href: string }[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
      <ul style={{ listStyleType: "none", padding: 0 }}>
          {items.map((item, index) => (
              <li key={index}>
                  <NavLink href={item.href}>{item.text}</NavLink>
              </li>
          ))}
      </ul>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode; // Explicitly define the type for children
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-white no-underline hover:text-[#dfff90] hover:underline"
    >
      {children}
    </a>
  );
};

const LandingPage = () => {
  return (
    <Page>
      <List 
          items={[
              { text: "Navbar", href: "/test-navbar" },
              { text: "Typewriter", href: "/test-typewriter" },
              { text: "Accordion", href: "/test-accordion" },
              { text: "Button", href: "/test-button" },
              { text: "Calendar", href: "/test-calendar" },
          ]} 
      />
    </Page>
  );
};

export default LandingPage;
