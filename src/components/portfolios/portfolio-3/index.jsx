import React, { useEffect } from 'react';
import {FooterThree, FooterTwo, HeaderFive, HeaderFour, HeaderSix, HeaderThree, Wrapper} from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioItems from './portfolio-items';
import HeroArea from "../../homes/home/hero-area";
import HeaderTwo from "../../../layout/headers/header-2";

const PortfolioThree = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFive />
      <HeroArea />
      <PortfolioItems />
      <FooterTwo />
    </Wrapper>
  );
};

export default PortfolioThree;