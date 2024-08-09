// src/components/Modal.jsx
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.5 }
  }
};
interface ModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    children: ReactNode;
    
  }
  

  const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children }) => {
  return (
    <motion.div
      className="backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate={showModal ? "visible" : "hidden"}
      onClick={() => setShowModal(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <motion.div
        className="modal"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        style={{
          width: '400px',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
