import FreeTrail from '@/components/pricing-component/freetrail'; // Correct component name
import Plan from '@/components/pricing-component/plan'; // Correct component name
import Price from '@/components/pricing-component/price'; // Correct component name
import PriceFaqs from '@/components/pricing-component/price-faqs'; // Correct component name
import Footer_Work from '@/components/shop-components/Footer_Work'; // Correct Footer name
import Navbar_Full from '@/components/shop-components/Navbar_Full'; // Correct Header name
import React from 'react';

const PricingPage = () => {
  return (
    <div>
      <Navbar_Full /> {/* Changed from Header to Navbar_Full */}
      <Price />
      <Plan />
      <PriceFaqs />
      <FreeTrail />
      <Footer_Work /> {/* Changed from Footer to Footer_Work */}
    </div>
  );
};

export default PricingPage;
