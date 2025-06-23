import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";

export const metadata = {
  title: process.env.NEXT_PUBLIC_BRAND_NAME,
  description: `${process.env.NEXT_PUBLIC_BRAND_NAME} - Personalized fitness coaching`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans" cz-shortcut-listen="true">
       <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
