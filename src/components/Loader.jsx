import { motion } from "framer-motion";
import Logo from "./Logo";
import { company } from "../data/company";

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center" style={{background: 'linear-gradient(160deg, #060d1f 0%, #0e1f52 50%, #060d1f 100%)'}}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="relative w-20 h-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-sky-400/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-2 flex items-center justify-center">
          <Logo className="w-full h-full rounded-xl" alt={`Chargement ${company.name}`} />
        </div>
      </motion.div>

      <motion.p
        className="mt-6 text-sky-200 text-sm tracking-widest uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Chargement...
      </motion.p>

      <motion.div
        className="mt-4 w-48 h-1 bg-blue-900 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 to-sky-300 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
