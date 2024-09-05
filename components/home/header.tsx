import { Container } from "../wrapper";
import { Logo } from "./logo";
import { Navbar, NavbarBtn } from "./navbar";
import { Socials } from "./socials";

export default function Header() {
  return (
    <header className="z-50 backdrop-blur bg-white/80 sticky top-0 h-16 shadow">
      <Container>
        <div className="h-full flex justify-between items-center w-full">
          <Logo />
          <Navbar />
          <Socials className="hidden md:block" />
          <NavbarBtn />
        </div>
      </Container>
    </header>
  );
}
