"use client";

import Link from "next/link";
import sliderImg1 from "../assets/sliderimg1.png";
import sliderImg2 from "../assets/sliderimg2.jpg";
import sliderImg3 from "../assets/sliderimg3.jpg";
import NavigationFooter from "@/components/NavigationFooter";

export default function Home() {
  const images = [sliderImg1, sliderImg2, sliderImg3];
  return (
    <main className="min-h-screen relative overflow-hidden">
      <section className="!fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-12 z-[20]">
        <Link href="/" className="font-semibold cursor-pointer">
          Hukka Bukka
        </Link>

        <div className="flex flex-col items-center">
          <h2 className="text-[#FACE8D] font-dancing text-[80px] leading-none">
            The pure taste of
          </h2>
          <h1 className="font-medium text-[160px] leading-none">Bangladesh</h1>
          <p className="text-[23px] mt-[20px] max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div className="w-full flex-col justify-center max-w-[650px]">
            <div className="mt-[23px] max-w-[650px] w-full flex justify-end">
              <div className="bg-white w-[250px] h-[163px] rounded-[10px] text-black py-4 px-6">
                <h3 className="font-normal tracking-wide">Opening Hours</h3>
                <div className="mt-2 flex justify-between items-center">
                  <h2 className="">Mon</h2>
                  <p className="font-normal tracking-wide">closed</p>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <h2 className="">Tue - Fri</h2>
                  <p className="font-normal tracking-wide">4pm - 8pm</p>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <h2 className="">Sat - Sun</h2>
                  <p className="font-normal tracking-wide">4pm - 8pm</p>
                </div>
              </div>
            </div>
            <NavigationFooter />
          </div>
        </div>
      </section>

      {/* <Swiper navigation={true} loop={true} className="mySwiper z-10 h-screen">
        {images.map((value, index) => (
          <SwiperSlide key={index}>
            <Image src={value} alt="bg-image" fill />
          </SwiperSlide>
        ))}
      </Swiper> */}

      <div className="slider">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
      </div>
    </main>
  );
}