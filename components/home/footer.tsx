import Link from "next/link";
import { Container } from "../wrapper";
import { Logo } from "./logo";
import { Socials } from "./socials";
import { FaEnvelope, FaHouse, FaMap, FaWhatsapp } from "react-icons/fa6";
import React from "react";

const footerHomeLinks = [
  { href: "/profil", text: "profil", icon: "" },
  { href: "/tim-redaksi", text: "tim redaksi", icon: "" },
  { href: "/info-iklan", text: "info iklan", icon: "" },
  { href: "/kontak", text: "kontak", icon: "" },
  { href: "/karir", text: "karir", icon: "" },
];

const footerLembagaPendidikanLinks = [
  { href: "#", text: "PAUD", icon: "" },
  { href: "#", text: "Raudhatul Athfal", icon: "" },
  { href: "#", text: "Ponpes Al-Musri'", icon: "" },
  { href: "#", text: "SMP Plus Darun Nazah", icon: "" },
];

const footerAlamat = [
  { href: "/profile", text: "PAUD", icon: FaHouse },
  {
    href: "https://api.whatsapp.com/send/?phone=6282218828384&text=Assalamualaikum+wr+wb%0ABapa%2FIbu+pengurus+Media+Center+Yayasan+Hadin+Al-Musri%27%0ANama+saya+...%2C+saya+ingin+menanyakan+terkait+pendaftaran+sekolah%0ATerima+kasih&type=phone_number&app_absent=0",
    text: "+62 822 1882 8384",
    icon: FaWhatsapp,
  },
  { href: "mailto:hadinalmusri@gmail.com", text: "hadinalmusri@gmail.com", icon: FaEnvelope },
  {
    href: "https://www.google.com/maps/place/Yayasan+Hadin+Al+Musri'/@-6.427813,107.777905,13z/data=!4m6!3m5!1s0x2e69475850fcbe57:0x4487b67cc5756858!8m2!3d-6.4278131!4d107.7779053!16s%2Fg%2F11f041208j?hl=en&entry=ttu",
    text: "Maps",
    icon: FaMap,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-green-300 to white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 py-8">
          <div>
            <Logo />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            <FooterLinkLinks title="media center yayasan hadin almusri" list={footerHomeLinks} />
            <FooterLinkLinks title="lembaga pendidikan" list={footerLembagaPendidikanLinks} />
            <FooterLinkLinks title="alamat kantor" list={footerAlamat} />
          </div>
        </div>
        <div className="py-4 flex items-center justify-between">
          <small>Copyright &copy; {new Date().getFullYear()}. Hadinalmusri</small>
          <Socials />
        </div>
      </Container>
    </footer>
  );
}

interface FooterLinkListProps {
  title: string;
  list: { href: string; text: string; icon?: any }[];
}
const FooterLinkLinks = ({ title, list }: FooterLinkListProps) => {
  return (
    <div>
      <h3 className="capitalize mb-2 font-semibold">{title}</h3>
      <div className="flex flex-col items-start gap-2">
        {list.map((item, i: number) => (
          <Link
            key={i}
            href={item.href}
            className="capitalize flex gap-2 items-center text-sm text-muted-foreground hover:text-green-600"
          >
            {item.icon ? <item.icon /> : ""}
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
