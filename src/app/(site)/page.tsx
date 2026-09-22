import { Hero } from "@/components/sections/Hero";
import { QuemSomosHome } from "@/components/sections/QuemSomosHome";
import { ServicosGrid } from "@/components/sections/ServicosGrid";
import { SecaoDestaque } from "@/components/sections/SecaoDestaque";
import { DiferenciaisHome } from "@/components/sections/DiferenciaisHome";
import { WMaiaOnline } from "@/components/sections/WMaiaOnline";
import { FerramentasDestaque } from "@/components/sections/FerramentasDestaque";
import { DepoimentosDestaque } from "@/components/sections/DepoimentosDestaque";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <QuemSomosHome />
      <ServicosGrid />
      <SecaoDestaque />
      <DiferenciaisHome />
      <WMaiaOnline />
      <FerramentasDestaque />
      <DepoimentosDestaque />
      <CtaFinal />
    </>
  );
}
