import { Header } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto grid min-h-screen w-full grid-rows-[min-content_max-content]">
      <Header />
      {children}
    </main>
  );
}
