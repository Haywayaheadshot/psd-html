import React, { useState } from 'react';

const TeamsPage = () => {
  const [activeButton, setActiveButton] = useState('mountain1');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <section className="bg-teams-bg py-10 bg-no-repeat bg-cover h-[90vh]">
        <ul className="h-[5vh] desktop:px-[200px] flex flex-row gap-4 justify-start items-center text-[#b0b4be] text-[20px] px-5 mt-[3vh] bg-[#404E6C] py-0">
          <li>
            <button className="active:text-[#414f6b] active:px-2 hover:underline active:underline-offset-8 active:bg-[#b0b4be]" type="button" onClick={() => handleButtonClick('mountain1')}>
              MOUNTAIN 1
            </button>
          </li>
          <li>
            <button className="active:text-[#414f6b] active:px-2 hover:underline active:underline-offset-8 active:bg-[#b0b4be]" type="button" onClick={() => handleButtonClick('mountain2')}>
              MOUNTAIN 2
            </button>
          </li>
        </ul>
        <div className="px-5 desktop:px-[200px]">
          {activeButton === 'mountain1' && (
            <div className="mt-8 bg-[#fff] flex flex-col justify-center items-start py-3 opacity-[0.702] px-5 w-fit">
              <h1 className="text-[32px] text-[#404E6C] font-bold font-oswald">SCHEDULE</h1>
              <table>
                <tbody>
                  <tr>
                    <td className="text-[16px] text-[#000] font-light leading-[24px] font-lato">25 Nov 2016</td>
                    <td className="pl-5 text-[16px] text-[#000] font-light leading-[24px] font-lato">Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td className="text-[16px] text-[#000] font-light leading-[24px] font-lato">28 Nov 2016</td>
                    <td className="pl-5 text-[16px] text-[#000] font-light leading-[24px] font-lato">Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td className="text-[16px] text-[#000] font-light leading-[24px] font-lato">18 Dec 2016</td>
                    <td className="pl-5 text-[16px] text-[#000] font-light leading-[24px] font-lato">Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td className="text-[16px] text-[#000] font-light leading-[24px] font-lato">7 Jan 2017</td>
                    <td className="pl-5 text-[16px] text-[#000] font-light leading-[24px] font-lato">Vestibulum viverra</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {activeButton === 'mountain2' && (
            <div className="mt-8 bg-[#fff] flex flex-col justify-center items-start py-3 opacity-[0.702] px-5 w-fit">
              <h1 className="text-[32px] text-[#404E6C] font-bold font-oswald">SCHEDULE</h1>
              <table>
                <tbody>
                  <tr>
                    <td className="text-[16px] text-[#000] font-light leading-[24px] font-lato">17 Nov 2016</td>
                    <td className="pl-5 text-[16px] text-[#000] font-light leading-[24px] font-lato">Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td className="text-[16px] text-[#000] font-light leading-[24px] font-lato">20 Nov 2016</td>
                    <td className="pl-5 text-[16px] text-[#000] font-light leading-[24px] font-lato">Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td className="text-[16px] text-[#000] font-light leading-[24px] font-lato">10 Dec 2016</td>
                    <td className="pl-5 text-[16px] text-[#000] font-light leading-[24px] font-lato">Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td className="text-[16px] text-[#000] font-light leading-[24px] font-lato">3 Jan 2017</td>
                    <td className="pl-5 text-[16px] text-[#000] font-light leading-[24px] font-lato">Vestibulum viverra</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;
