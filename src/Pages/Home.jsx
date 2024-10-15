import Banner1 from "../Components/Banner1/Banner1";
import Banner2 from "../Components/Banner2/Banner2";
import BannerBenefit from "../Components/BannerBenefit/BannerBenefit";
import Header from "../Components/Header/Header";
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
    </>
  );
};

export default Home;
