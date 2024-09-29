"use client";

import { Container, Title } from "@/components/wrapper";

const timRedaksiList = [
  { as: "Pemimpin Umum", person: "Dedih Alawi" },
  { as: "Pemimpin Redaksi", person: "Sonia Fitri" },
  { as: "Bendahara Redaksi", person: "Siti Rosihoh" },
  { as: "Fotografer", person: "Fahmi" },
  { as: "Videografer", person: "Wafi" },
  { as: "Editor Konten", person: "Oby" },
  { as: "Editor Audio Visual", person: "Abub" },
  { as: "Reporter", person: "Bu Haji Nani, Pak Guru Toha, The Ega, The Novi, Bu Aab, Bu Elih" },
  { as: "Admin (Uploader)", person: "Camay" },
];

const timPerusahaanIklanList = [
  { as: "Pimpinan", person: "Haji Heli" },
  { as: "Anggota", person: "Gigin, Heru, Abu, Tomi" },
];

export default function TimRedaksiPage() {
  return (
    <section>
      <div className="container">
        <Title title="Tim Redaksi" />
        <div className="py-8">
          <div className="py-4">
            <h3 className="text-xl font-bold py-4 text-primary">Tim Redaksi</h3>
            <div className="max-w-3xl">
              <table className="border w-full">
                <tbody>
                  {timRedaksiList.map((item, i) => (
                    <tr key={i} className="odd:bg-green-500/10">
                      <th className="border-b p-2 text-left">{item.as}</th>
                      <td className="border-b odd:bg-gray-500">{item.person}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="py-4">
            <h3 className="text-xl font-bold py-4 text-primary">Tim Perusahaan Dan Iklan</h3>
            <div className="max-w-3xl">
              <table className="border w-full">
                <tbody>
                  {timPerusahaanIklanList.map((item, i) => (
                    <tr key={i} className="odd:bg-green-500/10">
                      <th className="border-b p-2 text-left">{item.as}</th>
                      <td className="border-b odd:bg-gray-500">{item.person}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
