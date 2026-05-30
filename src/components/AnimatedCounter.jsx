import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", inView }) {
  const [display, setDisplay] = useState(0);
  const spring = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <motion.span className="tabular-nums">
      {display.toLocaleString("fr-FR")}
      {suffix}
    </motion.span>
  );
}
