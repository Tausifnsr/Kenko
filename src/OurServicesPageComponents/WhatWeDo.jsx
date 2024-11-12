import YWave from "../assets/waveyellow.png";
import Service1 from '../assets/service1.jpg'
import Service2 from '../assets/service2.jpg'
import Service3 from '../assets/service3.jpg'
import Service4 from '../assets/service4.jpg'
import Service5 from '../assets/service5.jpg'
import Service6 from '../assets/service6.jpg'

function WhatWeDo() {
  return (
    <div className="bg-[#f3f9ff] pb-20">
      <div className="mt-20 w-[80%] mx-auto">
        <div className="w-[80%] mx-auto px-28 flex py-16 justify-between">
          <div>
            <h1 className="heading text-[50px] -mt-3 pr-0">What We Do</h1>
            <img
              className="w-[60px] h-3 float-end mt-3 pr-0"
              src={YWave}
              alt=""
            />
          </div>
          <div className="border-r-4 border-r-[#246396]"></div>
          <p className="w-[50%] mt-2 text-gray-500 text-[14px]">
            Aliquaut enim mini veniam quis trud exercitation ullamco exa
            consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet
            consectetur adipisicing sed.
          </p>
        </div>
        <div className="flex gap-x-4">
            <div className="workCard flex flex-col overflow-hidden rounded-xl text-center w-1/3 bg-white">
                <div className="imgEffect">
                <img className="w-full h-full" src={Service1} alt="" />
                </div>
                <h1 className="heading mt-10 text-[25px] font-bold">Residential Waters</h1>
                <p className="footerFont mt-5 text-[#666] px-10">Exercitation kamco sed laboris aliquip duis aute ure dolor laboret buica dolore magna aliqua duis aute irure.</p>
                <h2 className="heading mt-10 text-[20px] text-[#f5a93f]">Starts from $35</h2>
                <button className="w-44 mt-5 mx-auto py-3 mb-14 rounded-full uppercase footerFont font-bold border-2 border-[#16BCEA] hover:text-white hover:bg-[#16bcea] transition-all duration-500 ease-in-out">Order Now</button>
            </div>
            <div className="workCard flex flex-col overflow-hidden rounded-xl text-center w-1/3 bg-white">
                <div className="imgEffect">
                <img className="w-full h-full" src={Service2} alt="" />
                </div>
                <h1 className="heading mt-10 text-[25px] font-bold">Commercial Waters</h1>
                <p className="footerFont mt-5 text-[#666] px-10">Exercitation kamco sed laboris aliquip duis aute ure dolor laboret buica dolore magna aliqua duis aute irure.</p>
                <h2 className="heading mt-10 text-[20px] text-[#f5a93f]">Starts from $32</h2>
                <button className="w-44 mt-5 mx-auto py-3 mb-14 rounded-full uppercase footerFont font-bold border-2 border-[#16BCEA] hover:text-white hover:bg-[#16bcea] transition-all duration-500 ease-in-out">Order Now</button>
            </div>
            <div className="workCard flex flex-col overflow-hidden rounded-xl text-center w-1/3 bg-white">
                <div className="imgEffect">
                <img className="w-full h-full" src={Service3} alt="" />
                </div>
                <h1 className="heading mt-10 text-[25px] font-bold">Filteration Plants</h1>
                <p className="footerFont mt-5 text-[#666] px-10">Exercitation kamco sed laboris aliquip duis aute ure dolor laboret buica dolore magna aliqua duis aute irure.</p>
                <h2 className="heading mt-10 text-[20px] text-[#f5a93f]">Starts from $40</h2>
                <button className="w-44 mt-5 mx-auto py-3 mb-14 rounded-full uppercase footerFont font-bold border-2 border-[#16BCEA] hover:text-white hover:bg-[#16bcea] transition-all duration-500 ease-in-out">Order Now</button>
            </div>
        </div>
        <div className="flex gap-x-4 mt-10">
            <div className="workCard flex flex-col overflow-hidden rounded-xl text-center w-1/3 bg-white">
                <div className="imgEffect">
                <img className="w-full h-full" src={Service4} alt="" />
                </div>
                <h1 className="heading mt-10 text-[25px] font-bold">Free Water Delivery</h1>
                <p className="footerFont mt-5 text-[#666] px-10">Exercitation kamco sed laboris aliquip duis aute ure dolor laboret buica dolore magna aliqua duis aute irure.</p>
                <h2 className="heading mt-10 text-[20px] text-[#f5a93f]">Starts from $1</h2>
                <button className="w-44 mt-5 mx-auto py-3 mb-14 rounded-full uppercase footerFont font-bold border-2 border-[#16BCEA] hover:text-white hover:bg-[#16bcea] transition-all duration-500 ease-in-out">Order Now</button>
            </div>
            <div className="workCard flex flex-col overflow-hidden rounded-xl text-center w-1/3 bg-white">
                <div className="imgEffect">
                <img className="w-full h-full" src={Service5} alt="" />
                </div>
                <h1 className="heading mt-10 text-[25px] font-bold">Water Softening</h1>
                <p className="footerFont mt-5 text-[#666] px-10">Exercitation kamco sed laboris aliquip duis aute ure dolor laboret buica dolore magna aliqua duis aute irure.</p>
                <h2 className="heading mt-10 text-[20px] text-[#f5a93f]">Starts from $29</h2>
                <button className="w-44 mt-5 mx-auto py-3 mb-14 rounded-full uppercase footerFont font-bold border-2 border-[#16BCEA] hover:text-white hover:bg-[#16bcea] transition-all duration-500 ease-in-out">Order Now</button>
            </div>
            <div className="workCard flex flex-col overflow-hidden rounded-xl text-center w-1/3 bg-white">
                <div className="imgEffect">
                <img className="w-full h-full" src={Service6} alt="" />
                </div>
                <h1 className="heading mt-10 text-[25px] font-bold">Coolers & Dispensers</h1>
                <p className="footerFont mt-5 text-[#666] px-10">Exercitation kamco sed laboris aliquip duis aute ure dolor laboret buica dolore magna aliqua duis aute irure.</p>
                <h2 className="heading mt-10 text-[20px] text-[#f5a93f]">Starts from $25</h2>
                <button className="w-44 mt-5 mx-auto py-3 mb-14 rounded-full uppercase footerFont font-bold border-2 border-[#16BCEA] hover:text-white hover:bg-[#16bcea] transition-all duration-500 ease-in-out">Order Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
