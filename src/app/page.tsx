import { Main } from "next/document";
import Image from "next/image";
import MainNav from "@/components/MainNav";
import Isoal_ai from "@/components/Isoal_ai";
import Isoal_com from "@/components/Isoal_com";
import GlobeDemo from "@/components/GlobeDemo";
import Nav from "@/components/Nav";
import Websites from "@/components/Websites";
import ThreeD from "@/components/ThreeD";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Nav/>
      <MainNav/>
      <Isoal_ai/>
      
      <ThreeD/>
      <Footer/>
      
     
      
    </div>
  );
}
