"use client";

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
    <div className="min-h-[calc(50vh)] my-8">
      <h2 className={"mb-8 sm:mb-12"}>Galeri</h2>
      <div id="imgGaleri" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
        {hadinGalery.map((item, i) => (
          <Image key={i} width={400} height={400} src={item} alt={"hadin image"} className="" />
        ))}
      </div>
    </div>
  );
}
