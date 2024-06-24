import { robotoSerif } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "Real State",
  description: "A service for renting and buying property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSerif.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
