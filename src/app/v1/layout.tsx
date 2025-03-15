// import FloatingNavBar from "@/components/FloatingNavBar";
// import Link from "next/link";
import Nav from "./Nav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Nav />
      </div>

      {children}
    </div>
  );
}
