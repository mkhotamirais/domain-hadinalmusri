"use client";

import { useHome } from "@/hooks/use-home";
import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-6xl mx-auto h-full px-3">{children}</div>;
};

export const MainClient = ({ children }: { children: React.ReactNode }) => {
  const { nav, closeNav } = useHome();

  const onClick = () => {
    if (nav) closeNav();
  };

  return (
    <main onClick={onClick} className="grow">
      {children}
    </main>
  );
};

export const Title = ({ title }: { title: string }) => {
  return (
    <div className="h-32 border my-2 rounded-lg bg-[url('/images/slider1.jpg')] bg-cover bg-center overflow-hidden">
      <div className="bg-gradient-to-t from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.5)] flex items-center justify-center h-full">
        <h1 className="text-green-400 text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
};
