import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppinsFont = Poppins({
  weight:["200","300","400","600"],
  style:["normal"],
  subsets:["latin"] ,
  variable:"--fontPoppins" 
});

export const metadata: Metadata = {
  title: "Karvi - Challenge",
  description: "Prueba Técnica para Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppinsFont.className}>
        {children}
      </body>
    </html>
  );
}