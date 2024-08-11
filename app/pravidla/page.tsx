import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Rules from "./components/Rules";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Hero />
      <Rules />
      <Footer />
    </div>
  );
}
