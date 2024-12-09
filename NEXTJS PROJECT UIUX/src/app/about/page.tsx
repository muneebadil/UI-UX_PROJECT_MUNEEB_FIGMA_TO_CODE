import AboutUs from "@/components/about-components/aboutus";
import BigCompannies from "@/components/about-components/companies";
import MeetTeam from "@/components/about-components/meetTeam";
import Problem from "@/components/about-components/problem";
import Work from "@/components/about-components/work";
import Footer_Work from "@/components/shop-components/Footer_Work"; // Corrected Footer name
import Navbar_Full from "@/components/shop-components/Navbar_Full"; // Corrected Navbar name
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Navbar_Full /> {/* Changed from Header to Navbar_Full */}
      <AboutUs />
      <Problem />
      <MeetTeam />
      <BigCompannies />
      <Work />
      <Footer_Work /> {/* Changed from Footer to Footer_Work */}
    </>
  );
};

export default AboutPage;
