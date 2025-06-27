"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: Array.from({ length: 10 }, (_, i) => `Starter Feature ${i + 1}`),
    button: "Start Free",
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: Array.from({ length: 10 }, (_, i) => `Pro Service ${i + 1}`),
    button: "Upgrade Now",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: Array.from({ length: 10 }, (_, i) => `Enterprise Option ${i + 1}`),
    button: "Contact Sales",
  },
];

export default function PricingSection() {
  return (
    <section
      className="relative min-h-screen bg-fixed bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/gallery5.jpg')" }}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Pricing Plans</h2>
          <p className="text-gray-300 mt-2">Choose the plan that suits you best</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl text-white"
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 px-4 rounded-lg font-medium bg-white text-black hover:bg-gray-100 transition">
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
