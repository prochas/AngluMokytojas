import { DM_Sans } from "next/font/google";


import Header from "@/components/Header/Header";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Anglų kalbos korepetitorius – pamokos vaikams ir suaugusiems",
  description:
    "Individualios anglų kalbos pamokos vaikams ir suaugusiems. Profesionalus pasiruošimas egzaminams, kalbėjimo, rašymo ir gramatikos įgūdžių lavinimas.",
  keywords: [
    "anglų korepetitorius",
    "anglų pamokos vaikams",
    "anglų pamokos suaugusiems",
    "anglų egzaminų pasiruošimas",
    "anglų kalbos mokymas Vilnius",
    "individualus anglų mokymas",
    "anglų kalbos korepetitorius",
  ],
  authors: [
    { name: "Justinas Leganovič", url: "https://anglukorepetitorius.lt" },
  ],
  creator: "Justinas Leganovič",
  metadataBase: new URL("https://anglukorepetitorius.lt"),
  openGraph: {
    title: "Anglų kalbos korepetitorius",
    description:
      "Kokybiškos anglų kalbos pamokos vaikams ir suaugusiems. Egzaminų pasiruošimas ir kalbos tobulinimas profesionaliai.",
    url: "https://anglukorepetitorius.lt",
    siteName: "Anglų pamokos su korepetitoriumi",
    type: "website",
    locale: "lt_LT",
  },
  alternates: {
    canonical: "https://anglukorepetitorius.lt",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt" className={dmSans.variable}>
      <body className="antialiased bg-gray-50 text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
