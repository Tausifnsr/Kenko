import Slider from 'react-slick';
import { FaLinkedinIn } from 'react-icons/fa';
import YWave from '../assets/waveyellow.png';

function OurTeam() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-[80%] mx-auto mt-10'>
      <div className="flex px-24 pt-16 justify-between">
        <div>
          <h1 className="heading text-[50px] -mt-4 pr-5">
            Filteration Process
          </h1>
          <img
            className="w-[80px] float-end mt-3 pr-6"
            src={YWave}
            alt=""
          />
        </div>
        <div className="border-r-4 border-sky-500"></div>
        <p className="w-[50%] pl-5">
          Aliquaut enim mini veniam quis trud exercitation ullamco exa
          consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet
          consectetur adipisicing sed.
        </p>
      </div>

      <div className='team'>
        <section>
          <Slider {...settings}>
            <div className="card">
              <div className="card-img-wrapper">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Joss Anderson"
                />
              </div>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              <div className="card-content-wrapper">
                <a href="#" className="card-content">
                  <h3>Joss Anderson</h3>
                  <p>Art Director</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="James Newton"
                />
              </div>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              <div className="card-content-wrapper">
                <a href="#" className="card-content">
                  <h3>James Newton</h3>
                  <p>UX Designer</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-img-wrapper">
                <img
                  src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Oliver Jones"
                />
              </div>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              <div className="card-content-wrapper">
                <a href="#" className="card-content">
                  <h3>Oliver Jones</h3>
                  <p>Web Designer</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-img-wrapper">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Noah Wilson"
                />
              </div>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              <div className="card-content-wrapper">
                <a href="#" className="card-content">
                  <h3>Noah Wilson</h3>
                  <p>SEO Expert</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default OurTeam;
