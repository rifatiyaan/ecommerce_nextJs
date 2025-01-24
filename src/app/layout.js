'use client';
import SectionOne from "@/components/section-one/page";
import MainBanner from "@/components/main-banner/page";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import './globals.css'; // Ensure this file includes global styles and font-family setup

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Your site description here" />
        <meta name="author" content="Your Name" />
        <title>Your Site Title</title>
        {/* Add other meta tags or links as needed */}
      </head>
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
