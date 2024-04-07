import React from 'react'
import Header from './Header';
import Stat from './Stat';

import Banner from './Banner';
import Claimp from './Claimp';
import Cim from './Cim';
import Review from './Review';
import BenefitIsu from './BenefitIsu';
import Accordian from './Accordian';
const Home = () => {
  return (
    <div >
      <Header /> 
      <Stat /> 
      
      <Claimp /> 
      <Cim /> 
      
      <Review/> 
      <BenefitIsu /> 
      <Banner /> 
      <Accordian />
    </div>
  );
}

export default Home