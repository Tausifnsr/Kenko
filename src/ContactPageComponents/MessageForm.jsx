import YWave from "../assets/waveyellow.png";


function MessageForm() {
  return (
    <div>
      <div className="text-[30px] heading">Send a Message</div>
      <img className="h-2 mt-2" src={YWave} alt="" />
      <form className="footerFont" action="">
        <div className="flex">
          <div className="flex flex-col w-1/2 mt-5">
            <label className="mx-2 text-[#222]" htmlFor="Your_Name">
              Your Name
            </label>
            <input
              className="bg-[#f5f5f5] mx-2 mt-2 py-4 px-5 outline-[#f5a93f] rounded-full"
              type="text"
            />
          </div>
          <div className="flex flex-col w-1/2 mt-5">
            <label className="mx-2 text-[#222]" htmlFor="Your_Email">
              Email Address
            </label>
            <input
              className="bg-[#f5f5f5] mx-2 mt-2 py-4 px-5 outline-[#f5a93f] rounded-full"
              type="text"
            />
          </div>
        </div>

        <div className="flex mt-7">
          <div className="flex flex-col w-1/2">
            <label className="mx-2 text-[#222]" htmlFor="Subject">
              Subject
            </label>
            <input
              className="bg-[#f5f5f5] mx-2 mt-2 py-4 px-5 outline-[#f5a93f] rounded-full"
              type="text"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="mx-2 text-[#222]" htmlFor="Phone">
              Phone
            </label>
            <input
              className="bg-[#f5f5f5] mx-2 mt-2 py-4 px-5 outline-[#f5a93f] rounded-full"
              type="tel"
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-10">
          <label className="mx-2 text-[#222]" htmlFor="Message">
            Message
          </label>
          <textarea
            className="bg-[#f5f5f5] mx-2 mt-4 py-4 px-5 h-[100px] outline-[#f5a93f] rounded-3xl align-top"
            id="Message"
            rows="4"
          />
        </div>
        <button className="footerFont mt-10 mx-2 uppercase border-2 px-10 py-3 rounded-full font-bold border-[#f5a93f] hover:bg-[#f5a93f] hover:text-white transition-all duration-700 ease-in-out">Submit Now</button>
      </form>
    </div>
  );
}

export default MessageForm;
