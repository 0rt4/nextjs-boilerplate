import { Header } from "./components/header";
import { Hero } from "./components/bodie/hero";
import { Feactures } from "./components/bodie/feactures";
import { CaracteristicasPrincipales } from "./components/bodie/caracPrinci";
import { Footer } from "./components/footer";
export default function Home() {
  return (
    <div>
      <Header />

      <Hero />
      <Feactures />
      <CaracteristicasPrincipales />

      <Footer />
    </div>
  );
}
