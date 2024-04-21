import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export function Footer() {
  return (
    <footer>
      <p>この ウェブサイト は
        <a rel="license" href="https://creativecommons.org/licenses/by/4.0/deed.ja" target="_blank">
          クリエイティブ・コモンズ 表示 4.0 国際 ライセンス
        </a>
        の下に提供されています。
      </p>
    </footer>
  );
}