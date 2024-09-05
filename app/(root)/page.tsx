import Galeri from "./(components)/galeri";
import { Hero } from "./(components)/hero";
import TentangKami from "./(components)/tentang-kami";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TentangKami />
      <Galeri />
    </>
  );
}
