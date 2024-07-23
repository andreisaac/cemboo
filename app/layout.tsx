import type { Metadata } from "next";
import "./globals.css";
import Nav from "@components/layout/menu"


export const metadata: Metadata = {
  title: "Cemboo",
  description: "Streaming with no lag neither messy ads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="relative overflow-x-hidden">
        
      <div className="fixed max-lg:right-0 max-lg:left-0 lg:top-0 bottom-0 z-20">
        <Nav/>
      </div>
      <div className="relative max-lg:bottom-[10%] pb-[15%] lg:left-[95px] z-10 bg-n900">
       {children}
      </div>
      
      </body>
    </html>
  );
}
