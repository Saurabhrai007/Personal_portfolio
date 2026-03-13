import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(-20);
  const dotY = useMotionValue(-20);
  const ringX = useSpring(dotX, { stiffness: 180, damping: 22 });
  const ringY = useSpring(dotY, { stiffness: 180, damping: 22 });
  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e) => {
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const handleEnter = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        isHovering.current = true;
      }
    };

    const handleLeave = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        isHovering.current = false;
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleEnter);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleEnter);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot hidden lg:block"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="cursor-ring hidden lg:block"
        style={{
          x: useSpring(dotX, { stiffness: 140, damping: 20 }),
          y: useSpring(dotY, { stiffness: 140, damping: 20 }),
          translateX: "-50%",
          translateY: "-50%",
          left: 3,
          top: 3,
        }}
      />
    </>
  );
}
