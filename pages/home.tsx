import About from "@/components/About";
import Home from "@/components/Home";
import Team from "@/components/Team";


export default function HomePage(){
  return (
    <section className="home--page">
      <Home/>
      <About/>
      <Team/>
    </section>
  )
}