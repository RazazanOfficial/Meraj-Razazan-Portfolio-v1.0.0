import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
import Table from "@/components/Table";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <header>
          <FloatingNav navItems={navItems} />
        </header>
        <main>
          <Hero />
          <Grid />
          <RecentProjects />
          {/* <Clients /> */}
          <Services />
          <Table />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
