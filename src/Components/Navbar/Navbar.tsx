import { lazy, Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../Store/Store";
import { AnimatePresence } from "framer-motion";

import { auth,signOut } from "../../Firebase/Firebase";

const ModalFramerMotion = lazy(() => import('../FramerMotio/Modal'));
const Modal = lazy(() => import('../Modal/Modal'));

import { logout } from "../../Store/Slice/AuthSlice";
import { HashLoader } from "react-spinners";

const Navbar = () => {
    const dispatch = useDispatch()
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const userInfo = useSelector((state: RootState) => state.auth.userInfo);
    const [modal,showModal] = useState<Boolean>(false)
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = async () => {
        try {
          await signOut(auth);
          console.log('User logged out');
          dispatch(logout())
          setDropdownVisible(false)
        } catch (error) {
          console.error('Error logging out: ', error);
        }
      };
      

    return (
        <>
            <div className="navbar dark:bg-base-300 bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                            onClick={toggleDropdown}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </div>
                        {dropdownVisible && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                               
                                <li>
                                    <Link to="/" className="text-green-100 font-medium" onClick={handleLogout}> Logout </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost dark:text-green-100 text-black text-3xl font-bold">
                    KeyCrafter
                    </a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle" 
                    onClick={()=>showModal(true)}
                    >
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M7 7h10V5h2v14H5V5h2v2m5 10v-2h5v2h-5m0-6V9h5v2h-5m-4 1V9H7V8h2v4H8m1.25 2c.41 0 .75.34.75.75 0 .2-.08.39-.21.52L8.12 17H10v1H7v-.92L9 15H7v-1h2.25" />
                            </svg>
                            {/* <span className="badge badge-xs badge-primary indicator-item">0</span> */}
                        </div>
                    </button>

                    <button className="btn btn-ghost btn-circle">
                        {userInfo ? (
                            <img
                                src={userInfo?.profilePicture}
                                alt="User"
                                className="h-8 w-8 rounded-full"
                            />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 2a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm9 11v-1a7 7 0 00-7-7h-4a7 7 0 00-7 7v1h2v-1a5 5 0 015-5h4a5 5 0 015 5v1z" />
                            </svg>
                        )}
                    </button>
                </div>
                
                <AnimatePresence initial={false} onExitComplete={() => null} mode={'wait'}>
                    {modal && (
                          <Suspense fallback={<div className="w-screen h-screen flex items-center justify-center"><HashLoader color="#36d7b7"/></div>}>
                         
                        <ModalFramerMotion text={"User Information"} handleClose={() => showModal(false)}>
                          <Suspense fallback={<div className="w-screen h-screen flex items-center justify-center"><HashLoader color="#36d7b7"/></div>}>
                          <Modal/>
                                
                            </Suspense>
                        </ModalFramerMotion>
                       </Suspense>
                    )}
                </AnimatePresence>
            </div>

        </>
    );
};

export default Navbar;
