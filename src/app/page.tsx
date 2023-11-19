import Controls from "~/components/Controls";
import Customizable from "~/components/Customizable";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import PartnerCompanies from "~/components/Partners";
import Questions from "~/components/Questions";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Controls />
      <Customizable />
      <Questions />
      <PartnerCompanies
        companies={[
          {
            name: "Endesa",
            logo:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Endesa.svg/1280px-Endesa.svg.png",
          },
        ]}
      />
      <Footer />
    </>
  );
}
