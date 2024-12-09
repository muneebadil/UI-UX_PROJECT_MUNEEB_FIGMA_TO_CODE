import EditorsPics from "@/components/Editor_Picks_Work"; // Correct component name
import FeatureProducts from "@/components/Feature_Products_Full"; // Correct component name
import FeauresPosts from "@/components/Features_Posts_Full"; // Correct component name
import Hero_Section from "@/components/Hero_Section"; // Correct Hero name
import Navbar_Full from "@/components/Navbar_Full"; // Correct Header name
import Footer_Work from "@/components/Footer_Work"; // Correct Footer name

export default function Home() {
  return (
    <>
      <Navbar_Full /> {/* Changed from Header to Navbar_Full */}
      <Hero_Section /> {/* Changed from Hero to Hero_Section */}
      <EditorsPics />
      <FeatureProducts />
      <FeauresPosts />
      <Footer_Work /> {/* Changed from Footer to Footer_Work */}
    </>
  );
}
