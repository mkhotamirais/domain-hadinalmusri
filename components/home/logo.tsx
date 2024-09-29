import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 min-w-max">
      <Avatar>
        <AvatarImage src="/logo.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h1 className="text-lg font-bold text-primary leading-none">Hadin Al-Musri`</h1>
        <p className="text-sm text-muted-foreground tracking-[-1px]">katomas pagaden subang</p>
      </div>
    </Link>
  );
}
