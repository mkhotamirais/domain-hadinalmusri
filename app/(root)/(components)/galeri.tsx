"use client";

import { Container } from "@/components/wrapper";
import Image from "next/image";

const hadinGalery = [
  "/images/hadin1.jpg",
  "/images/hadin2.jpg",
  "/images/hadin3.jpg",
  "/images/hadin4.jpg",
  "/images/hadin5.jpg",
  "/images/hadin6.jpg",
];

export default function Galeri() {
  return (
    <div className="py-8">
      <Container>
        <h2 className={"mb-6 sm:mb-8 text-2xl font-bold text-green-600 text-center"}>Galeri</h2>
        <div id="imgGaleri" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
          {hadinGalery.map((item, i) => (
            <Image
              key={i}
              width={400}
              height={400}
              src={item}
              alt={"hadin image"}
              className="size-56 md:size-72 object-center object-cover rounded overflow-hidden"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
