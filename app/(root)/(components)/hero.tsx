"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { LuChevronLeft, LuCircle, LuCircleDot } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const BtnDaftar = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=6282218828384&text=Assalamualaikum+wr+wb%0ABapa%2FIbu+pengurus+Media+Center+Yayasan+Hadin+Al-Musri%27%0ANama+saya+...%2C+saya+ingin+menanyakan+terkait+pendaftaran+sekolah%0ATerima+kasih&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-lg p-1 sm:p-2 px-2 sm:px-4 leading-none text-sm sm:text-base bg-green-500 bg-opacity-50 hover:bg-opacity-100"
    >
      Daftar
    </a>
  );
};

const sliders = [
  { img: "/images/slider1.jpg", title: `media center yayasan hadin al-musri'`, content: <BtnDaftar /> },
  { img: "/images/slider2.jpg", title: "Hadin Al-Musri'", content: "" },
  { img: "/images/slider3.jpg", title: "Hadin Al-Musri'", content: "" },
];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [mouseEnter, setMouseenter] = useState(false);

  const next = useCallback(() => {
    setIndex((index) => {
      if (index === sliders.length - 1) return 0;
      else return index + 1;
    });
  }, []);

  const prev = () => {
    setIndex((index) => {
      if (index === 0) return sliders.length - 1;
      else return index - 1;
    });
  };

  const arrow =
    "z-40 absolute top-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 bg-black bg-opacity-50 rounded-full text-white opacity-50 hover:bg-opacity-50 group-hover:opacity-100 hover:scale-110 transition";

  const dots =
    "stroke-white fill-[rgba(0,0,0,.5)] opacity-50 group-hover:opacity-100 hover:scale-110 focus-visible:scale-110 transition-all duraiton-100";

  useEffect(() => {
    if (!mouseEnter) {
      const move = setInterval(() => {
        next();
      }, 7000);
      return () => clearInterval(move);
    }
  }, [next, mouseEnter]);

  return (
    <section className="overflow-hidden w-full aspect-[4/2] lg:aspect-[5/2]">
      <div
        onMouseEnter={() => setMouseenter(true)}
        onMouseLeave={() => setMouseenter(false)}
        className="w-full h-full relative group"
      >
        <div className="w-full h-full flex">
          {sliders.map((sld, i) => (
            <div key={i} className="w-full h-full flex-grow-0 flex-shrink-0">
              <Image
                src={sld?.img}
                alt={sld?.title}
                width={900}
                height={500}
                style={{ translate: `${-100 * index}%` }}
                className={`z-40 object-cover w-full h-full ease-in-out duration-500`}
              />
              <div
                className={`z-40 bottom-8 sm:bottom-12 left-12 sm:left-16 right-10 absolute text-white capitalize ${
                  i === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } transition-all duration-300`}
              >
                <div className="text-base sm:text-2xl lg:text-3xl mb-0 sm:mb-5">{i === index ? sld?.title : ""}</div>
                <div>{i === index ? sld?.content : ""}</div>
              </div>
              {i === index ? sld?.content : ""}
              <div className="z-40 cursor-pointer absolute top-2 left-2 text-white bg-black bg-opacity-50 text-xs rounded px-1 opacity-20">
                {index + 1} -{sliders.length}
              </div>
            </div>
          ))}
        </div>
        <button type="button" title="left arrow" onClick={() => prev()} className={`${arrow} left-3 sm:left-6`}>
          <FaChevronLeft />
        </button>
        <button type="button" title="right arrow" onClick={() => next()} className={`${arrow} right-3 sm:right-6`}>
          <FaChevronRight />
        </button>
        <div className="z-40 absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {sliders.map((_, i) => (
            <button title="dots" type="button" key={i} onClick={() => setIndex(i)}>
              {i === index ? <LuCircleDot className={`${dots}`} /> : <LuCircle className={`${dots}`} />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
