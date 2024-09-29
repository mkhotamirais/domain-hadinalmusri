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
    <div className="py-12 bg-secondary">
      <div className="container">
        <h2 className={"mb-6 sm:mb-8 text-2xl font-bold text-green-600 text-center"}>Galeri</h2>
        <div id="imgGaleri" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2">
          {hadinGalery.map((item, i) => (
            <Image
              key={i}
              width={400}
              height={400}
              src={item}
              alt={"hadin image"}
              className="h-64 w-full object-center object-cover rounded overflow-hidden"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
