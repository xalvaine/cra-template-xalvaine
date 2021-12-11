import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

const motionProps = {
  animate: 'animate',
  exit: 'exit',
  initial: 'initial',
  transition: { duration: 0.15 },
  variants: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.15 } },
    exit: { opacity: 0 },
  },
}

export const Layout = () => {
  return (
    <motion.div {...motionProps}>
      <Outlet />
    </motion.div>
  )
}
