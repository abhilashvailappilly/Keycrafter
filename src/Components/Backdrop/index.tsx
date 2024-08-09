import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BackdropInterface {
    children: ReactNode;
    onClick: () => void;
}

const Backdrop = ({ children, onClick }: BackdropInterface) => {
    return (
        <motion.div
            className="backdrop fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick} // Only closes when clicking directly on the backdrop
        >
            {children}
        </motion.div>
    );
}

export default Backdrop;
