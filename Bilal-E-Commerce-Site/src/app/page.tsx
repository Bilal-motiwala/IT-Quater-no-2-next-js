import Image from "next/image";
import Header from "./Components/Header";
import Herro from "./Components/Herro";
import Products from "./Components/product";
import Category from "./Components/Category";
import Music from "./Components/Music";
import Explore from "./Components/Explore";
import Freshsale from "./Components/Freshsale";
import Featured from "./Components/Featured";
import Freedelvry from "./Components/Free";
import Footer from "./Components/Footer"; 

export default function Home() {
  return (
    <>
    <Header />
    <Herro />
    <Freshsale />
    <Category />
    <Products />
    <Music />
    <Explore />
    <Featured />
    <Freedelvry />
    <Footer />
    </>
     );
}
