import "./globals.css";
import ThemeToggler from "../components/global/ThemeToggler";

export const metadata = {
  title: "Billetera Inteligente",
  description: "Billetera Inteligente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='antialiased bg-gray-100 text-gray-800 dark:text-gray-100 dark:bg-big-stone-950'
      >
          <ThemeToggler />
          {children}
      </body>
    </html>
  );
}
