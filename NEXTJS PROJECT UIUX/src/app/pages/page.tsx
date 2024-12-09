import Footer_Work from '@/components/shop-components/Footer_Work'; // Corrected Footer name
import Navbar_Full from '@/components/shop-components/Navbar_Full'; // Corrected Header name
import Hero_Section from '@/components/shop-components/Hero_Section'; // Corrected Hero name
import TeamSection from '@/components/shop-components/team-section'; // Correct component name
import React from 'react';

const ShopPage = () => {
  return (
    <>
      <Navbar_Full /> {/* Changed from Header to Navbar_Full */}
      <Hero_Section /> {/* Changed from Hero to Hero_Section */}
      <TeamSection />
      <Footer_Work /> {/* Changed from Footer to Footer_Work */}
    </>
  );
};

export default ShopPage;
