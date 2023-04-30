import Navbar from "@/components/Navbar";
import HomePage from "./home";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function(){
  return (
    <>
      <Helmet>
          <title>GDSC x VITB</title>
      </Helmet>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  )
}