
import Feature_Products_Full from "@/components/Feature_Products_Full"; // Correct component name
import Hero_Section from "@/components/Hero_Section"; // Correct Hero name
import Navbar_Full from "@/components/Navbar_Full"; // Correct Header name
import Footer_Work from "@/components/Footer_Work"; // Correct Footer name
import Features_Posts_Full from "@/components/Features_Posts_Full";
import Editor_Picks_Work from "@/components/Editor_Picks_Work";

export default function Homepage() {
  return (
    <>
      <Navbar_Full /> {/* Changed from Header to Navbar_Full */}
      <Hero_Section /> {/* Changed from Hero to Hero_Section */}
      <Editor_Picks_Work/>
      <Feature_Products_Full/>
      <Features_Posts_Full/>
      <Footer_Work /> {/* Changed from Footer to Footer_Work */}
    </>
  );
}
