// import components
import Hero from "../components/Hero";
import About from "../components/About";
import How from "../components/How";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

// import data
import {
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
  testimonialData,
  footerData,
} from "../data.json";

const Home = ({
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
  testimonialData,
  footerData,
}) => {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <Hero headerData={headerData} heroData={heroData} navData={navData} />
      <About howData={howData} />
      <How howData={howData} testimonialData={testimonialData} />
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData} />
      <Footer footerData={footerData} />
      <Copyright />
      <div className="h-[2000px]"></div>
    </div>
  );
};

// fetch data.json

export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      faqData,
      aboutData,
      howData,
      testimonialData,
      footerData,
    },
  };
};

export default Home;
