import ContactUs from '@/components/contact-components/contactus';
import Office from '@/components/contact-components/office';
import Footer_Work from '@/components/shop-components/Footer_Work'; // Corrected Footer name
import Navbar_Full from '@/components/shop-components/Navbar_Full'; // Corrected Header name
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <Navbar_Full /> {/* Changed from Header to Navbar_Full */}
      <ContactUs />
      <Office />
      <Footer_Work /> {/* Changed from Footer to Footer_Work */}
    </>
  );
};

export default ContactPage;
