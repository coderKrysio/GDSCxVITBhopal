import About from "@/components/About";
import CommunityPartners from "@/components/Community-Partners";
import Home from "@/components/Home";
import JoinCommunity from "@/components/Join-Community";
import ReachUs from "@/components/ReachUs";
import RecentEvents from "@/components/Recent-Events";
import Sponsor from "@/components/Sponsors";
import Team from "@/components/Team";


export default function HomePage(){
  return (
    <section className="home--page">
      <Home/>
      <About/>
      <Team/>
      <RecentEvents/>
      <CommunityPartners/>
      <Sponsor/>
      <ReachUs/>
      <JoinCommunity/>
    </section>
  )
}