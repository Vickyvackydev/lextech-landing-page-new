import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { hovercontents } from "../../constants";
import Section from "../sections";
import Partners from "../partners";
import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useMediaQuery } from "../../hooks";
import { Swiper as SwiperCore } from "swiper";
function Hero() {
  const [onHover, setOnHover] = useState(false);
  const [activeindex, setActiveIndex] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const mobilescreen = useMediaQuery("(max-width: 640px)");
  const [fullview, setFullView] = useState(1);
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = (id: number) => {
    setFullView(id);
    setShowText(false); // Hide text while expanding the image
    setTimeout(() => {
      setShowText(true);
      // Show text after expansion
    }, 500);
  };

  useEffect(() => {
    setShowContent(false);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeindex]);
  return (
    <main className="bg-white lg:px-10 px-4 py-14">
      <div className="flex flex-col items-start gap-y-7 mt-9">
        <button
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="bg-primary-100 hover:scale-95 transition-all duration-300 w-fit px-5 lg:h-[44px] h-[30px] rounded-3xl gap-x-4 flex items-center"
          type="button"
        >
          <span className="bg-clip-text lg:text-[15.5px] text-xs text-transparent transition-all duration-300 bg-gradient-to-l from-[#FFB1B1] to-[#E8E7FF]">
            Explore Lextech Ecosystem Limited
          </span>

          <Transition
            show={onHover}
            enter="transform transition-transform ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition-transform ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <img
              src="./icons/arrow.svg"
              alt=""
              className={`w-[20px] h-[27px] object-contain mt-2`}
            />
          </Transition>
        </button>
        <span className="text-[#002A7F] lg:text-[84.96px] text-2xl lg:leading-[90px] leading-[30px] ">
          Driving Innovation for <br /> sustainable growth
        </span>
        <span className="lg:text-[25.92px] text-[16px] font-normal text-[#002A7F]">
          Deploys cutting edge, user-friendly solutions to automate <br /> the
          critical touchpoints of the Justice sector.
        </span>
        <Button
          title="Contact sales"
          textStyle="text-white text-md"
          handleClick={() => navigate("/contact")}
          icon=""
          btnStyles={`bg-[#002A7F] rounded-lg mt-5`}
        />

       
      </div>
      <Section />
      <Partners />
    </main>
  );
}

export default Hero;
