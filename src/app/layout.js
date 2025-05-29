import Providers from "@/store/Providers";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="px-4 m-4 rounded-xl overflow-y-scroll bg-slate-700 max-md:m-2 max-sm:m-0.5">
          <Navbar />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
