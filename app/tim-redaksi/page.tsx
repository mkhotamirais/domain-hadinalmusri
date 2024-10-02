import { Metadata } from "next";
import { TimRedaksi } from "./TimRedaksi";

export const metadata: Metadata = {
  title: "Tim Redaksi",
};

export default function TimRedaksiPage() {
  return (
    <>
      <TimRedaksi />
    </>
  );
}
