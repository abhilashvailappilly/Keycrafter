import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import Backdrop from "../Backdrop";

interface ModalInterface {
    text?: string;
    handleClose: () => void;
    children:ReactNode
}

const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "0",
        opacity: 1,
        transition: { duration: 0.4, type: "spring", damping: 100, stiffness: 500 },
    },
    exit: { y: "-100vh", opacity: 0, transition: { duration: 0.3 } },
};

const ModalFramerMotion = ({ handleClose,children }: ModalInterface) => {
    useEffect(() => {
        console.log("Modal component mounted");
    }, []);

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => {
                    e.stopPropagation(); // Prevent backdrop from closing
                    console.log("Modal content clicked");
                }}
                className="modalkk  w-full h-3/4 md:w-3/4 lg:w-1/2 max-w-screen-lg p-4  border border-green-200 rounded-lg relative"
                variants={dropIn}
                animate="visible"
                exit="exit"
                style={{ zIndex: 100 }} 
            >
                <motion.button 
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent backdrop from closing
                        console.log("Close button clicked");
                        handleClose(); // Close modal when button is clicked
                    }}
                    className="absolute top-4 right-4 h-8 w-8 bg-black text-white rounded-full flex items-center justify-center"
                >
                    X
                </motion.button>
              <motion.div className="overflow-auto w-full h-full">

                    {children}
              </motion.div>
                {/* Additional content... */}
            </motion.div>
        </Backdrop>
    );
}

export default ModalFramerMotion;
