import { ModeToggle } from "../theme/mode-toggle";
import { Logo } from "./logo";
import { Navbar, NavbarBtn } from "./navbar";
// import { Socials } from "./socials";

export default function Header() {
  return (
    <header className="z-50 backdrop-blur bg-white/70 dark:bg-black/70 md:bg-inherit sticky top-0 h-16 shadow">
      <div className="container h-full flex justify-between items-center w-full">
        <div>
          <Logo />
        </div>
        <div className="flex gap-2 md:gap-8 items-center">
          <Navbar />
          {/* <Socials className="hidden md:block" /> */}
          <ModeToggle />
          <NavbarBtn />
        </div>
      </div>
    </header>
  );
}
