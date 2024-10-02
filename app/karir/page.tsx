import { Title } from "@/components/wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karir",
};

export default function KarirPage() {
  return (
    <section>
      <div className="container">
        <Title title="Karir" />
      </div>
    </section>
  );
}
