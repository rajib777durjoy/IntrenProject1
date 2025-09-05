import { Poppins, Volkhov, } from 'next/font/google';
import "./globals.css";
import Navbar from "./(public_pages)/Navbar/page";
import Footer from './(public_pages)/Footer/page';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-volkhov',
});


export const metadata = {
  title: "Travello",
  description: "Discover the best travel destinations worldwide with Travello. Browse top destinations like Rome, London, and Full Europe trips. Find 10 to 28-day travel packages at affordable prices and plan your dream vacation today",
  keywords: [
    "Travello",
    "travel destinations",
    "Rome trips",
    "London trips",
    "Europe travel",
    "travel packages",
    "affordable trips",
    "vacation planning"
  ],
  authors: { name: 'Durjoy Chando', url: 'https://portfolio-38edc.web.app' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  ${volkhov.variable} antialiased bg-white`}
      >
        <header className="max-w-[1920px] fixed left-0 right-0 bg-amber-100 shadow-md z-30">
          <Navbar></Navbar>
        </header>
        {children}
        <footer>
          <Footer></Footer>
        </footer>

      </body>
    </html>
  );
}
