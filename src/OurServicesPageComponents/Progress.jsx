import YWave from '../assets/waveyellow.png'
import BWave from '../assets/waveBlack.png'
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';

function Progress() {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progressElement = document.querySelector('.progress-wrapper');
      const rect = progressElement.getBoundingClientRect();

        //The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
       // ----Md Tausif Ansari---- MDN Web Docs




      
      // Only trigger if element is in view and counting hasn't started yet
      if (rect.top <= window.innerHeight && rect.bottom >= 0 && !startCounting) {
        setStartCounting(true); // Set flag to true to start counting and prevent future triggers
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startCounting]);

  return (
    <>
      <div className='w-[70%] mx-auto mt-20'>
        <h1 className='heading text-[50px] text-center'>
          We Provide All Kinds of Residential & Commercial Water Solutions
        </h1>
        <img src={YWave} className='h-2 mx-auto mt-5' alt="" />

        <p className='w-[88%] mx-auto text-center text-[#666] my-10'>
          Aliquaut enim mini veniam quis trud exercitation ullamco exa consequat.
          Duis aute rue dolor prehendrit duis aute irure dolor reprehend erit
          temp voluptate velit esse cillum dolore eudy fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat no proident off bcia sed ipsum. Qui officia deserunt mol anim sedid ipsum est laborum.
        </p>
      </div>

      <div className='w-[75%] mx-auto flex gap-x-20 progress-wrapper'>
        <div data-aos='fade-up' className='text-center'>
          {startCounting && (
            <>
              <CountUp className='text-[50px] heading font-bold text-sky-500' delay={.4} duration={3} end={70} /><span className='text-[50px] heading font-bold text-sky-500'>k</span>
            </>
          )}
          <p className='uppercase footerFont text-[14px]'>Bottles Delivered</p>
        </div>
        <img className='h-16 my-auto' src={BWave} alt="" />
        <div data-aos='fade-up' data-aos-delay='200' className='text-center'>
          {startCounting && (
            <CountUp className='text-[50px] heading font-bold text-sky-500' delay={.6} duration={2} separator="" end={1580} />
          )}
          <p className='uppercase footerFont text-[14px]'>Outlets in Country</p>
        </div>
        <img className='h-16 my-auto' src={BWave} alt="" />
        <div data-aos='fade-up' data-aos-delay='400' className='text-center'>
          {startCounting && (
            <>
              <CountUp className='text-[50px] heading font-bold text-sky-500' delay={.8} duration={3} end={12} /><span className='text-[50px] heading font-bold text-sky-500'>k</span>
            </>
          )}
          <p className='uppercase footerFont text-[14px]'>Satisfied Customers</p>
        </div>
        <img className='h-16 my-auto' src={BWave} alt="" />
        <div data-aos='fade-up' data-aos-delay='600' className='text-center'>
          {startCounting && (
            <>
              <CountUp className='text-[50px] heading font-bold text-sky-500' delay={1} duration={4} end={5} /><span className='text-[50px] heading font-bold text-sky-500'>Steps</span>
            </>
          )}
          <p className='uppercase footerFont text-[14px]'>Filteration Plant</p>
        </div>
      </div>
    </>
  );
}

export default Progress;
