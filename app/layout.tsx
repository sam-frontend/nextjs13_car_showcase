import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Sam-Car Deals",
  description: "Check out  best car deals",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
