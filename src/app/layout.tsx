// src/app/layout.tsx

import React from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "GitHub Finder",
  description: "Find GitHub users and see their repositories",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags, links, or scripts here */}
      </head>
      <body>
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
