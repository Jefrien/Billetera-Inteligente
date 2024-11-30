import "./globals.css";
import '../app/fonts/css/all.min.css';
import ThemeToggler from "../components/global/ThemeToggler";

export const metadata = {
  title: "Billetera Inteligente",
  description: "Billetera Inteligente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='antialiased bg-gray-100 text-gray-900 dark:text-gray-100 dark:bg-gray-900'
      >
          <ThemeToggler />
          {children}
      </body>
    </html>
  );
}
