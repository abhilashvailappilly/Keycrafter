import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaSave } from 'react-icons/fa'; // Import Font Awesome icons
import ToastMessage from '../Toast/ToastMessage';
import { auth, db, GoogleAuthProvider, signInWithPopup, collection, addDoc } from '../../Firebase/Firebase'; // Adjust the path as needed
import { setCredentials } from '../../Store/Slice/AuthSlice';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button';

const PasswordForm: React.FC = () => {
    const [length, setLength] = useState<string>("16");
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const [toast, setToast] = useState<{ visible: boolean; message: string }>({ visible: false, message: '' });
    const dispatch = useDispatch()
    // firebase
    const [user, setUser] = useState<any>(null); // Replace `any` with a more specific type if possible
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe();
    }, []);

    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let allChars = '';
        if (includeUppercase) allChars += uppercaseChars;
        if (includeLowercase) allChars += lowercaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;

        if (allChars === '') {
            setToast({ visible: true, message: 'Please select at least one option to include in the password.' });
            return;
        }

        let generatedPassword = '';
        for (let i = 0; i < parseInt(length); i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }

        setPassword(generatedPassword);
        setToast({ visible: true, message: 'Password generated successfully' });
    };

    useEffect(() => {
        if (toast.visible) {
            const timer = setTimeout(() => {
                setToast({ visible: false, message: '' });
            }, 4000);
    
            return () => clearTimeout(timer);
        }
    }, [toast]);
    
    const handleChangePasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newLength = e.target.value;
        if (parseInt(newLength) < 8) {
            setToast({ visible: true, message: 'Password length should be at least 8 characters.' });
            setLength("8");
        } else {
            setLength(newLength);
        }
    };

    const handleCopyPassword = ()=>{
        if(password.length == 0) return  setToast({ visible: true, message: 'Please generate a password' });
        navigator.clipboard.writeText(password);
        setToast({ visible: true, message: 'Password copied to clipboard' });

    }

    const handleSavePassword = async () => {
        if (!user) {
            // If user is not logged in, prompt for login
            try {
              const sign=  await signInWithPopup(auth, new GoogleAuthProvider());
              if(sign?.user) {
                let userData = {
                    uid:sign.user.uid,
                    name:sign.user.displayName,
                    email:sign.user.email,
                    profilePicture:sign.user.photoURL
                }
                dispatch(setCredentials(userData))
              }
              console.log("soign",sign)
            } catch (error) {
                setToast({ visible: true, message: 'Error logging in with Google' });
                return;
            }
        }

        if (password.length === 0) {
            setToast({ visible: true, message: 'Please generate a password first' });
            return;
        }

        try {
            await addDoc(collection(db, 'passwords'), {
                password,
                userId: user?.uid,
                timestamp: new Date(),
            });
            setToast({ visible: true, message: 'Password saved successfully' });
        } catch (error) {
            setToast({ visible: true, message: 'Error saving password' });
        }
    };

    return (
        <>
            <div className='w-screen flex justify-center text-center'>
                <div className="bg-base-100 fixed top-35 w-full h-3/4 md:w-3/4 lg:w-1/2 max-w-screen-lg">
                    <div className="h-1/6 bg-base-300 flex items-center justify-center">
                        <h1 className="btn btn-ghost dark:text-green-100 text-black text-3xl font-medium">Generate a password</h1>
                    </div>
                    <div className="h-1/6 bg-base-300 mt-2 flex  justify-center items-center px-2">
                        <div className='border mr-1 w-3/4 h-1/2 rounded-xl flex justify-center items-center'>
                            {password}
                        </div>
                        <div className='w-1/4 h-1/2 flex flex-col  md:flex-row justify-center items-center gap-2'>
                            <motion.button
                                className='border w-full md:w-1/2 h-3/4 rounded-lg flex justify-center items-center gap-2 bg-base-100 text-white hover:bg-black'
                                onClick={handleCopyPassword}
                            >
                                <FaCopy /> Copy
                            </motion.button>
                            <motion.button
                                className='border w-full md:w-1/2 h-3/4 rounded-lg flex justify-center items-center gap-2 bg-base-100 text-white hover:bg-black'
                                onClick={handleSavePassword}
                            >
                                <FaSave /> Save
                            </motion.button>
                        </div>
                    </div>

                    {/* Tool section */}
                    <div className="h-3/6 bg-base-300 flex gap-2 rounded-lg mt-2">
                        <div className="w-1/2">
                            <div className="dark:bg-black/10 flex m-3">
                                <label className="text-white">
                                    <input
                                        className="dark:border-white-400/20 mr-2 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4"
                                        type="checkbox"
                                        checked={includeUppercase}
                                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                                    />
                                    <span>Uppercase</span>
                                </label>
                            </div>
                            <div className="dark:bg-black/10 flex m-3 ">
                                <label className="text-white">
                                    <input
                                        className="dark:border-white-400/20 mr-2 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4"
                                        type="checkbox"
                                        checked={includeLowercase}
                                        onChange={(e) => setIncludeLowercase(e.target.checked)}
                                    />
                                    <span>Lowercase</span>
                                </label>
                            </div>
                            <div className="dark:bg-black/10 flex m-3">
                                <label className="text-white">
                                    <input
                                        className="dark:border-white-400/20 mr-2 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4"
                                        type="checkbox"
                                        checked={includeNumbers}
                                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                                    />
                                    <span>Numeric</span>
                                </label>
                            </div>
                            <div className="dark:bg-black/10 flex m-3">
                                <label className="text-white">
                                    <input
                                        className="dark:border-white-400/20 mr-2 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4"
                                        type="checkbox"
                                        checked={includeSymbols}
                                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                                    />
                                    <span>Symbol</span>
                                </label>
                            </div>
                        </div>
                        <div className="w-1/2 bg flex flex-col gap-2 justify-center items-center">
                            <div>
                                <span className='dark:text-green-100 text-black font-medium'>Password length: </span>
                                <span className='dark:text-green-100 text-black font-extrabold'>{length}</span>
                            </div>
                            <input type="range" min={0} max="25" value={length} onChange={handleChangePasswordLength} className="range " />
                        </div>
                    </div>
                    <div className="h-1/6 bg-base-300 flex gap-2 items-center justify-evenly mt-2">
                        {/* <motion.button onClick={generatePassword} className='w-44 rounded-lg h-12 bg-accent dark:text-green-100 font-extrabold'>
                            Generate
                        </motion.button> */}
                        <Button action={generatePassword} />
                    </div>
                </div>
                {toast.visible && <ToastMessage onClose={() => setToast({ visible: false, message: '' })} message={toast.message} />}
            </div>
        </>
    );
};

export default PasswordForm;
