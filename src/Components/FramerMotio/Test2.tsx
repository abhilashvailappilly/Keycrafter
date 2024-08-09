import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MotionProps {
    children:ReactNode
}
const Test2: React.FC<MotionProps>  = ({children} ) => {
  return (
   <motion.div className="flex items-center justify-center" animate={{ y: 100 }}   
   whileHover={{ scale: 1.1 }}
//    whileTap={{ scale: 1.1 }}
   drag="x"
   dragConstraints={{ left: -100, right: 100 }}>
    {children}
   </motion.div>
  )
}

export default Test2
