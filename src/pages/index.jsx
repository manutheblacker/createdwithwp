import { Wrapper } from "../layout";
import SEO from "../components/seo";
import HeroArea from "../components/homes/home/hero-area";
import PortfolioThreeMain from "../components/portfolios/portfolio-3";

export default function index() {
  
  return (
    <Wrapper>
      <SEO pageTitle={'Home Default'} />
        <PortfolioThreeMain/>
    </Wrapper>
  )
}
