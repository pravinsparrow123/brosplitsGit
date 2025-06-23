"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const pageName = pathname === "/" ? "Home" : pathname.replace("/", "").toUpperCase();

  return (
    <>
      <Header currentPage={pageName} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
