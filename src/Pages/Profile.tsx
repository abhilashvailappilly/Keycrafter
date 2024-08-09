import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../Components/Modal';
import { useState } from 'react';

const Profile = () => {
    const [showModal, setShowModal] = useState(true);
const handle = ()=>{
//  e.stopPropogation()
setShowModal(false)
console.log("hello")
}
    return (
        <>
            <button onClick={() => setShowModal(!showModal)}>click</button>
            {/* <AnimatePresence initial={false} onExitComplete={()=>null} mode={'wait'}>
                {showModal && (
                    <Modal text={"showModal"} handleClose={handle}>
                    
                    </Modal>
                )}
            </AnimatePresence> */}
        </>
    );
};

export default Profile;
