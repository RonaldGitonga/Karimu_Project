import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Chefs from "@/components/Chefs";
import BookTable from "@/components/BookTable";
import Location from "@/components/Location";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

export default function Home() {
  return (
    <>
      <AOSInit />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Chefs />
        <BookTable />
        <Location />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
