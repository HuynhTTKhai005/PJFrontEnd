import About from "./about/page";
import WhyUs from "./whyUs/page";
import Stats from "./stats/page";
import Menu from "./menu/page";
import Testimonials from "./testimonials/page";
import Events from "./events/page";
import Book from "./book/page";
import Gallery from "./gallery/page";
import Contact from "./contact/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Stats />
      <Menu />
      <Testimonials />
      <Events />
      <Book />
      <Gallery />
      <Contact />
    </>
  );
}
