"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const dataTigaPilar = [
  {
    title: "Media pendidikan inklusif",
    content:
      "Tim Media Center memproduksi berbagai konten kreatif berbasis pendidikan inklusif. Seluruh keluarga besar Yayasan Hadin Al Musri dan alumni berpartisipasi aktif untuk mendokumentasikan berbagai kegiatan, prestasi, info bermanfaat, hingga",
  },
  {
    title: "Media syariah islam",
    content:
      "Pengetahuan dan wawasan keislaman disebarkan secara massif di semua platform Media Center (Website, Facebook, Instagram, WhatsApp, Twitter, Tiktok) di bawah bimbingan para Kiai dan Ustads/Ustadah Yayasan Hadin Al Musri.",
  },
  {
    title: "Media silaturahim Keluarga Besar Hadin Al-Musri'",
    content:
      "Keluarga besar Yayasan Hadin Al Musri meliputi siswa siswi PAUD, MI, SMP, dan santri Pondok Pesantren, hingga orang tua murid dan alumni bisa saling berinteraksi dan bertukar informasi melalui berbagai platform Media Center Hadin Al Musri.",
  },
];

export function TigaPilarAcc() {
  return (
    <Accordion type="single" collapsible>
      {dataTigaPilar.map((item, i) => (
        <AccordionItem value={`${i}`} key={i}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
