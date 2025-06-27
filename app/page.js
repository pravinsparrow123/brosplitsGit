"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import  HeroSection  from "../components/HeroSection";

export default function Home() {
   const brandName = process.env.NEXT_PUBLIC_BRAND_NAME;
   const images = JSON.parse(process.env.NEXT_PUBLIC_GALLERY_IMAGES || "[]");
  return (
    <section className="bg-gradient-to-br text-white">
      {/* HERO SECTION */}
      {/* <div className="min-h-screen flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-4">Get Fit with MyFitness</h1>
          <p className="text-lg mb-6">
            Personalized training plans, expert coaching, and real results.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg"
          >
            Book Your Free Trial
          </motion.a>
        </motion.div>
      </div> */}
     {/* <div
  className="relative bg-fixed bg-center bg-cover h-[90vh] flex items-center justify-center text-white text-center"
  style={{
    //backgroundImage: "url('/images/hero-1.jpg')",
    WebkitBackgroundClip: "url('/videos/running-v.mp4')",
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-2xl"
  >
    <div className="bg-black/60 backdrop-blur-md p-10 rounded-xl max-w-2xl shadow-lg">
      <h1 className="text-5xl font-bold mb-6">Get Fit with {brandName}</h1>
      <p className="text-lg mb-6">
        Personalized training plans, expert coaching, and real results.
      </p>
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
</div> */}


<HeroSection />





      {/* ABOUT / INTRO SECTION */}
      {/* <div className="py-20 bg-white text-black px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/running.jpg"
            alt="Trainer"
            width={500}
            height={500}
            className="rounded-2xl shadow-md object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet Your Trainer</h2>
            <p className="mb-4">
              Hi, I'm Alex — a certified personal trainer with 7+ years of experience in
              strength training, weight loss programs, and nutrition coaching. My mission
              is to help you unlock your best self.
            </p>
            <p className="text-indigo-700 font-semibold">
              Credentials: ACE Certified, Precision Nutrition L1, CPR Certified
            </p>
          </div>
        </div>
      </div> */}
      {/* <div
        className="py-20 bg-fixed bg-center bg-cover text-black px-6"
        style={{
          backgroundImage: "url('/images/running.jpg')", // 🔁 Your background image
        }}
      >
        
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-md p-10 rounded-xl shadow-lg"
      >
        <Image
          src="/images/running.jpg"
          alt="Trainer"
          width={500}
          height={500}
          className="rounded-2xl shadow-md object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Meet Your Trainer</h2>
          <p className="mb-4">
            Hi, I'm Alex — a certified personal trainer with 7+ years of experience in
            strength training, weight loss programs, and nutrition coaching. My mission
            is to help you unlock your best self.
          </p>
          <p className="text-indigo-700 font-semibold">
            Credentials: ACE Certified, Precision Nutrition L1, CPR Certified
          </p>
        </div>
      </motion.div>
      </div> */}
      <div
      className="py-20 bg-fixed bg-center bg-cover text-black px-6"
      style={{
        backgroundImage: "url('/images/running.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto mb-10 text-center backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-4">Transformations & Training</h2>
        <p className="text-lg text-gray-800">
          Real people. Real progress. See what our clients have achieved!
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 backdrop-blur-sm"
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold">
              {img.alt}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>


      {/* UNIQUE SELLING POINT SECTION */}
      <div className="py-20 bg-gray-100 px-6 text-gray-900">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Why Choose {brandName}?</h2>
    <p className="text-lg">
      I specialize in tailored fitness programs designed for real-life results — whether you want
      to shed fat, build muscle, or just get more active. No gimmicks. Just personal attention,
      smart training, and support every step of the way.
    </p>
  </div>
</div>

    </section>
  );
}
