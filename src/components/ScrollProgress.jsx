import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgress.jsx — Thin gradient bar at the very top of the viewport
 * that fills from left to right as the user scrolls down the page.
 * Uses Framer Motion for buttery smooth hardware-accelerated animations.
 */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
