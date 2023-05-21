import React from 'react';
import footerLogo from '../../assets/footerLogo.png';

const Footer = () => (
  <div className="bg-[#404E6C] h-[10vh] grid grid-cols-2 content-center px-3 py-3 desktop:px-[200px] flex-wrap">
    <section className="flex flex-row justify-start items-center">
      <img src={footerLogo} alt="Footer Logo" className="px-2" />
      <div className="flex font-bebas flex-col gap-0 text-[21px] tracking-[0px] text-[#61759E] leading-[20px] uppercase">
        <span className="font-light">LOSANGELES</span>
        <span className="font-bold">MOUNTAINS</span>
      </div>
    </section>
    <i className="text-[12px] font-lato tracking-[1px] uppercase place-self-end text-[#61759E] leading-[20px] px-3 font-black">COPYRIGHT 2016. ALL RIGHTS RESERVED.</i>
  </div>
);

export default Footer;
