import FloatingNavBar from "@/components/FloatingNavBar";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <FloatingNavBar />
      {children}
    </div>
  );
}
