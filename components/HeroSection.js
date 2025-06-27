'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSection = ({ brandName }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/videos/running-v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content with Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        
        className="relative z-10 flex items-center justify-center h-full px-4 text-center"
      >
        <div className="bg-black/60 backdrop-blur-sm p-10 rounded-xl max-w-2xl w-full">
          {/* Swiper Carousel */}
          <Swiper
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="mb-6"
          >
            <SwiperSlide>
              <div>
                <h1 className="text-5xl font-bold">Get Fit with {brandName}</h1>
                <p className="text-lg mt-4">
                  Personalized training plans, expert coaching, and real results.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h1 className="text-5xl font-bold">Track Your Progress</h1>
                <p className="text-lg mt-4">
                  Visualize your transformation over time with our smart tools.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h1 className="text-5xl font-bold">Join Our Community</h1>
                <p className="text-lg mt-4">
                  Stay motivated with support from fitness enthusiasts like you.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg"
          >
            Book Your Free Trial
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
