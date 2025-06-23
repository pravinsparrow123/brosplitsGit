export default function Footer() {
    const brandName = process.env.NEXT_PUBLIC_BRAND_NAME;
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      © {new Date().getFullYear()} {brandName}. All rights reserved.
    </footer>
  );
}
