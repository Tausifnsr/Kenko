import { useState, useEffect } from "react";
import YWave from '../assets/waveyellow.png';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false); 

  //Tab Names
  const tabs = ["Description", "Additional Information", "Reviews(0)"];

  //Tab Content
  const tabContent = [
    <>
      <p className="my-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>

      <p className="mb-7">Anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
        ratione voluptatem sequi nesciunt.</p>

      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </>,
    <>
      <p className="my-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>

      <p className="mb-7">Anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
        ratione voluptatem sequi nesciunt.</p>

      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </>,
    <>
      <p className="my-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>

      <p className="mb-7">Anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
        ratione voluptatem sequi nesciunt.</p>

        <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </>,
  ];

  
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500); 

    return () => clearTimeout(timer); 
  }, [activeTab]);

  return (
    <div className="w-4/5 mx-auto mt-24">
      <div className="flex justify-around">
        {tabs.map((tab, index) => (
          <div key={index} className="flex flex-col items-center">
            <button
              className={`heading text-[28px] pt-4 ${
                activeTab === index
                  ? "text-[#346BAE]"
                  : "border-transparent"
              } transition-colors duration-300`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
            {activeTab === index && (
              <img src={YWave} alt="Wave underline" className="mt-2 h-2" />
            )}
          </div>
        ))}
      </div>
      <div
        className={`p-4 text-[#666] footerFont transition-transform duration-500 ease-in-out transform ${
          animate ? "scale-95 opacity-50" : "scale-100 opacity-100"
        }`}
      >
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
