import { Title } from "@/components/wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kontak",
};

export default function KontakPage() {
  return (
    <section>
      <div className="container">
        <Title title="Kontak" />
      </div>
    </section>
  );
}
