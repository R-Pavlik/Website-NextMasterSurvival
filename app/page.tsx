import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Minigames from "./components/Minigames"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Hero />
      <Minigames />
      <Footer />
    </div>
  );
}
