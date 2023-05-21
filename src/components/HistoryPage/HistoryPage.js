import React from 'react';
import carousel1 from '../../assets/carousel1.png';
import carousel2 from '../../assets/carousel2.png';
import carousel3 from '../../assets/carousel3.png';
import carousel4 from '../../assets/carousel4.png';

const HistoryPage = () => (
  <div>
    <section className="bg-history-bg py-10 bg-no-repeat bg-center h-[50vh] px-5 desktop:px-[200px]">
      <div className="flex flex-row items-center text-[#687895] font-bold font-oswald">
        <h1 className="text-2xl font-bold py-10 opacity-0.502 text-[70px] desktop:text-[136px]">01</h1>
        <section className="flex flex-col item-start mt-3">
          <h2 className="text-[#404E6C] text-[16px] desktop:text-[32px]">HISTORY</h2>
          <div className="bg-[#414f6b] w-[10px] h-[10px]" />
        </section>
      </div>
      <p className="mb-20 pl-9 text-[16px] font-lato font-light text-[#000] bg-[#fff] desktop:bg-inherit desktop:ml-12 opacity-[0.702] py-3 leading-[24px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin in ante viverra, rutrum erat rutrum, consectetur mi.
        Proin at maximus est. Nullam purus ex, iaculis sed erat sed,
        blandit tincidunt quam. Cras scelerisque id quam sed dignissim
        Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam.
        Vivamus suscipit dignissim tortor nec congue.
      </p>
    </section>
    <section className="bg-carousel-bg py-10 desktop:py-2 flex justify-center items-center bg-no-repeat bg-center h-[20vh] px-5 desktop:px-[200px]">
      <section className="overflow-x-scroll snap-x">
        <div className="product-images-container flex flex-row gap-5 items-center">
          <img className="max-w-[50vw] max-h-[20vh] snap-start" src={carousel1} alt="Man on mountain" />
          <img className="max-w-[50vw] max-h-[20vh] snap-start" src={carousel2} alt="Mountain Peak" />
          <img className="max-w-[50vw] max-h-[20vh] snap-start" src={carousel3} alt="Man on mountain" />
          <img className="max-w-[50vw] max-h-[20vh] snap-start" src={carousel4} alt="Mountain Peak" />
        </div>
      </section>
    </section>
    <section className="py-10 bg-no-repeat bg-center h-[20vh] flex flex-row px-5 justify-center items-center gap-6 desktop:px-[200px]">
      <div className="flex flex-row items-center text-[#687895] font-bold font-oswald">
        <h1 className="text-2xl font-bold py-10 opacity-0.502 text-[80px] desktop:text-[136px]">02</h1>
        <section className="flex flex-col item-start mt-3">
          <h2 className="text-[#404E6C] text-[16px] desktop:text-[32px]">CLIMB</h2>
          <div className="bg-[#414f6b] w-[10px] h-[10px]" />
        </section>
      </div>
      <p className="text-[16px] font-light font-lato leading-[18px] desktop:leading-[24px]">
        Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
        gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
      </p>
    </section>
  </div>
);

export default HistoryPage;
