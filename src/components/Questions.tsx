"use client";
import Faq from "react-faq-component";

const data = {
  title: "Frequently asked questions",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "What is the package version",
      content: "v1.0.5",
    },
  ],
};

export default function Questions() {
  return (
    <section className="w-full flex items-center justify-center m-4">
      <div className="w-[1000px] h-[600px] rounded-lg p-8">
        <Faq data={data} />
      </div>
    </section>
  );
}
