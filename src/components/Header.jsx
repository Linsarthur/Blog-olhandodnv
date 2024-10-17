import Image from "next/image";
import Link from "next/link";
import { Agdasima } from "next/font/google";

const agdasima = Agdasima({
    weight: ["400", "700"],
    subsets: ["latin"],
  });
export default function Header() {
  return (
    <header className="flex justify-around w-auto h-20 gap-11 bg-red-800 items-center">
      <div>
        <Link href="/">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </Link>
      </div>
      <div className={agdasima.className}>
        <nav className="flex gap-3 font-bold w-8 text-white ">
          <Link href="#" className="hover:underline decoration-black">
            Filmes
          </Link>
          <Link href="#" className="hover:underline decoration-black">
            Series
          </Link>
          <Link href="#" className="hover:underline decoration-black">
            Sobre
          </Link>
        </nav>
      </div>
      <div>
        <label for="pesquisa">Pesquise aqui:</label>
        <input type="text" id="pesquisa"></input>
      </div>
    </header>
  );
}
