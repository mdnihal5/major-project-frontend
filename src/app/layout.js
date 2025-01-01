import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { Providers } from "@/app/store/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RGUKT-B",
  description: "RGUKT-B Modern Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Providers>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen overflow-hidden bg-cyan-50 dark:bg-slate-300">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden ml-0 md:ml-64">
              <Header />
              <main className="flex-1 overflow-y-auto p-4 md:p-8">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
