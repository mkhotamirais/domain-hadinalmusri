import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa6";
const socialsList = [
  { href: "https://www.youtube.com/@HadinAl-MusriKatomas", icon: <FaYoutube />, title: "youtube hadinalmusri" },
  {
    href: "https://www.instagram.com/hadinalmusrikatomas?igshid=YmMyMTA2M2Y%3D",
    icon: <FaInstagram />,
    title: "instagram hadinalmusri",
  },
  { href: "https://www.tiktok.com/@hadinalmusrikatomas", icon: <FaTiktok />, title: "tiktok hadinalmusri" },
];

export const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className={`flex gap-3`}>
        {socialsList.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 sm:w-7 hover:scale-110 hover:text-primary transition-all duration-100"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
