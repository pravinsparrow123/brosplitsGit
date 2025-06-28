'use client';

import { motion } from 'framer-motion';
const handleSubmit = () => {
    console.log()
}
export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden flex items-center justify-center p-6 mt-[35px]">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="../images/gallery1.jpg" // 🔁 Replace with your image in /public
          alt="Background"
          className="w-full h-full object-cover opacity-30 blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-md" />
      </div>

      {/* Form Container */}
      <motion.div
        className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Contact Us</h2>

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-lg font-semibold text-white text-lg shadow-lg"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
