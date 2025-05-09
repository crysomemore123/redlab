import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Red Lab Productions",
  description: "Opera and Theatre in Cultural Collaboration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-black font-sans relative min-h-screen">
        {/* Fixed background div with the dotted pattern */}
        <div className="fixed inset-0 bg-dotted-pattern bg-repeat z-[-1]" />
        
        <Navbar />
        <main className="px-4 sm:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}