import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Hero from "./Hero/Hero";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section3b from "./Section3b/Section3b";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Signin from "./Sign in/Signin";

export default function Home() {
  return (
      <>
        <Nav/>
        <Hero/>
        <Section1/>
        <Section2/>
        <Section3b/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        {/* <Footer/> */}
        <Signin/>
      </>
  );
}
