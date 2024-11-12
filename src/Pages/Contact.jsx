import Navbar from "../CommonComponents/Navbar";
import ContactInfo from "../ContactPageComponents/ContactInfo";
import MessageForm from "../ContactPageComponents/MessageForm";
import Footer from '../CommonComponents/Footer'

function Contact() {
  return (
    <>
      <Navbar />
      <div className="pageBg relative">
        <div className="text-center flex flex-col translate-y-60">
          <h1 className="heading text-[70px] font-extrabold">Contact Us</h1>
          <p className="footerFont text-[20px]">Pure Quality Drinking Water</p>
        </div>
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L24,208C48,224,96,256,144,245.3C192,235,240,181,288,170.7C336,160,384,192,432,218.7C480,245,528,267,576,250.7C624,235,672,181,720,181.3C768,181,816,235,864,250.7C912,267,960,245,1008,245.3C1056,245,1104,267,1152,256C1200,245,1248,203,1296,181.3C1344,160,1392,160,1416,160L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex w-[80%] mx-auto mt-20">
        <div className="w-1/3 heading">
        <ContactInfo />
        </div>
        <div className="w-2/3">
        <MessageForm/>
        </div>
      </div>
      <div className="mt-28">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.79475951716!2d80.04419698151072!3d13.047807814214304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1726465843670!5m2!1sen!2sus" 
      width="100%" 
      height="700px" 
      style={{ border: 0 }} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
