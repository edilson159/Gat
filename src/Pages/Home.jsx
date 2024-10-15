import Banner1 from "../Components/Banner1/Banner1";
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
    </>
  );
};

export default Home;
