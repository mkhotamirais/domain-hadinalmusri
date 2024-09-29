import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TentangKami() {
  return (
    <div className="min-h-[calc(50vh)] my-12">
      <div className="container">
        <h2 className={"mb-6 sm:mb-8 text-2xl font-bold text-primary text-center"}>Tentang Hadin Al-Musri`</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="rounded-md w-full h-full flex-1 border p-1">
            <Image
              width={500}
              height={500}
              src="/images/slider2.jpg"
              alt="hadin image"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-full h-full flex-1 flex flex-col">
            <p className="indent-8 text-sm leading-loose">
              Media Center Hadin Al Musri hadir dalam berbagai platform digital, untuk menegaskan eksistensi Yayasan
              Hadin Al Musri Katomas Subang sebagai salah satu Pusat Dakwah Islam di Pagaden Subang. Media Center Hadin
              Al Musri berangkat dengan misi besar untuk memproduksi berbagai konten edukasi islami dan hiburan santun
              secara berkelanjutan...
            </p>
            <Button asChild className="mt-8 self-start">
              <Link href="/profil" className="">
                Selengkapnya
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
