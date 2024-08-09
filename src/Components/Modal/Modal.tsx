import React, { useEffect, useState } from 'react'
import RenderGroups from "../FramerMotio/RenderGroups";
import { RootState } from '../../Store/Store';
import { useSelector } from 'react-redux';
import { db,getDocs, collection,query, where } from '../../Firebase/Firebase'; // Adjust the path as needed
import { PasswordDataInterface } from '../../Interface/Password';


const Modal = () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo)
  const [savedPasswords,setSavedPasswords] = useState<PasswordDataInterface[]>([]) 
  useEffect(()=>{
    fetch()
  },[])
  const fetch = async()=>{
    console.log("fetch worked")
    const passwordsCollection = collection(db, "passwords");
    console.log("passwordsCollection: ", passwordsCollection);
console.log('userinfo',userInfo)
    const userPasswordsQuery = query(passwordsCollection, where("userId", "==", userInfo.uid));

    const passwordsSnapshot = await getDocs(userPasswordsQuery);


            const passwordsList = passwordsSnapshot.docs.map(doc => ({
              id: doc.id, 
              password:doc.data().password ,
              userId:doc.data().userId ,
              timestamp : doc.data().timestamp,
              
          }));
          setSavedPasswords(passwordsList)
            // console.log("Passwords: ", passwordsSnapshot.docs[0].getData());
            console.log("Passwords: ", passwordsList);
  }
  return (
    <div className="w-full bg-base-300 h-full no-scrollbar">
    <div className="h-2/6 w-full  top-0 flex flex-col justify-center gap-1 items-center ">
        <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-2">
                <img src={userInfo?.profilePicture || "https://via.placeholder.com/150"} alt="User Avatar" />
            </div>
        </div>
        <span className="dark:text-green-100 text-black text-3xl font-bold">{userInfo?.name || "Guest User"}</span>
    </div>
    <div className="h-4/6 w-full  overflow-scroll no-scrollbarr ">
        {/* Replace with actual content */}
     {savedPasswords.length > 0 ? <RenderGroups savedPasswords={savedPasswords}/> :<span className='w-full font-extrabold h-full flex justify-center items-center  '>No  password's availble</span>}
    </div>
</div>
  )
}

export default Modal
