import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Remote Chica | Trabajo Remoto y Libertad",
  description: "Te ayudo a conseguir trabajos remotos con mejores salarios, libertad y equilibrio vida-trabajo. Cursos, mentorías y comunidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
