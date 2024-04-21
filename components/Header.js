import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <>
      <h1>小山田純 Next.jsテスト Home</h1>
    </>
  );
}