import Providers from "@/store/Providers";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="px-4 m-4 rounded-xl overflow-y-scroll h-[95%] bg-slate-700">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
