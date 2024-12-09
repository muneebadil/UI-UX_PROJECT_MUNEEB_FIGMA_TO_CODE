import Cards from '@/components/product-components/cards'; // Correct component name
import Company from '@/components/product-components/company'; // Correct component name
import Navbar_Full from '@/components/product-components/Navbar_Full'; // Correct Header name
import Hero_Section from '@/components/product-components/Hero_Section'; // Correct Hero name
import Footer_Work from '@/components/shop-components/Footer_Work'; // Correct Footer name
import React from 'react';

const ProductPage = () => {
  return (
    <div>
      <Navbar_Full /> {/* Changed from Header to Navbar_Full */}
      <Hero_Section /> {/* Changed from Hero to Hero_Section */}
      <Company />
      <Footer_Work /> {/* Changed from Footer to Footer_Work */}
      <Cards />
    </div>
  );
};

export default ProductPage;
