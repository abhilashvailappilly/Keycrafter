import { motion } from "framer-motion"
const Button = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <motion.button animate={{ y: 50 }} 
     
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="backdrop bg-red-500 text-white font-bold py-2 px-4 rounded shadow-lg focus:outline-none"
      onClick={() => { console.log("hello") }}
    >
      Click
    </motion.button>
  </div>
  )
}

export default Button
