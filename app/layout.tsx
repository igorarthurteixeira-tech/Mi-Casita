import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/components/context/CartContext";
import CartIcon from "@/components/CartIcon";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <CartProvider>
          <CartIcon />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}