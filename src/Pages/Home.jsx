import Banner1 from "../Components/Banner1/Banner1";
import Banner2 from "../Components/Banner2/Banner2";
import BannerBenefit from "../Components/BannerBenefit/BannerBenefit";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Register from "../Components/Register/Register";
import SectionDecorate from "../Components/SectionDecorate/SectionDecorate";
import ShowcaseCats from "../Components/ShowcaseCats/ShowcaseCats";
import SliderProducts from "../Components/SliderProducts/SliderProducts";
import Spacing from "../Components/Spacing/Spacing";

const Home = () => {
  return (
    <>
      <Header />
      <Banner1 />
      <Spacing />
      <BannerBenefit />
      <SliderProducts />
      <Banner2 />
      <SectionDecorate />
      <ShowcaseCats />
      <Register />
      <Footer />
    </>
  );
};

export default Home;
