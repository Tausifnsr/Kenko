import YWave from "../assets/waveyellow.png";
import CustomDropdown1 from "./CustomDropdown1";
import CustomDropdown2 from "./CustomDropdown2";
import CustomDropdown3 from "./CustomDropdown3";

function ServiceForm() {
  return (
    <div className="filterBg relative">
      <div className="bg-[#3F66F5] bg-opacity-40 pb-20">
        <div className="mb-80 py-24 mt-10 mx-auto pb-20">
          <h1 className="heading text-[50px] text-white text-center -mt-4 pr-5">
            Get Pure & Healthy
            <br />
            Drinking Water
          </h1>
          <img className="w-[80px] mx-auto mt-3 pr-6" src={YWave} alt="" />
        </div>
        <div className="w-[80%] absolute top-80 left-36 shadow-xl mx-auto py-20 px-10 bg-white rounded-md">
          <form className="footerFont" action="">
            <div className="flex">
              <div className="w-1/3">
                <label className="pl-2 text-[#666]" htmlFor="chooseService">
                  Choose a Service
                </label>
                <CustomDropdown1 className />
              </div>
              <div className="w-1/3">
                <label className="pl-2 text-[#666]" htmlFor="serviceType">Type of Service</label>
                <CustomDropdown2 className />
              </div>
              <div className="w-1/3">
                <label className="pl-2 text-[#666]" htmlFor="bottleNum">No. of Bottles (Optional)</label>
                <CustomDropdown3 className />
              </div>
            </div>
            <div className="flex mt-10 gap-x-14">
            <div className="flex flex-col">
                <label className="pl-2 text-[#666]" htmlFor="fullName">Your Name</label>
                <input className="bg-[#f5f5f5] w-[320px] mt-2 py-4 px-8 outline-[#f5a93f] rounded-full" type="text" placeholder="Provide Full Name" />
            </div>
            <div className="flex flex-col">
                <label className="pl-2 text-[#666]" htmlFor="fullName">Email</label>
                <input className="bg-[#f5f5f5] w-[320px] mt-2 py-4 px-8 outline-[#f5a93f] rounded-full" type="email" placeholder="Enter Valid Email Address" />
            </div>
            <div className="flex flex-col">
                <label className="pl-2 text-[#666]" htmlFor="fullName">Address</label>
                <input className="bg-[#f5f5f5] w-[320px] mt-2 py-4 px-8 outline-[#f5a93f] rounded-full" type="text" placeholder="Enter Address with Zipcode" />
            </div>
            </div>
            <div className="flex justify-between pl-2 pr-16">
                <div className="flex mt-14">
                <input type="checkbox"/>
                <label className="mx-2 mt-2" htmlFor="termsNCondition">I agree with Kenko <a className="text-[#346BAE] underline hover:text-[#f5a93f] transition-all duration-500 ease-in-out" href="#">Terms & Condition</a></label>
                </div>
                <button className="uppercase text-white font-bold text-[18px] mt-10 px-[85px] h-14 bg-[#f5a93f] rounded-full hover:bg-[#346bae] transition-all duration-500 ease-in-out">Get A Free Quote</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceForm;
