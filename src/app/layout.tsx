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
      {/* ✅ Removed bg-white to allow background image to show */}
      <body className="text-black font-sans">
        <Navbar />
        <main className="px-4 sm:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
