import Customizable from "~/components/Customizable";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Questions from "~/components/Questions";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Customizable />
      <Questions />
    </>
  );
}
