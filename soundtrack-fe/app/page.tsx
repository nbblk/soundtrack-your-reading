import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-between">
      <Navbar />
      <section className="w-full">
      this is the main page
      </section>
      <Footer />
    </main>
  );
}
