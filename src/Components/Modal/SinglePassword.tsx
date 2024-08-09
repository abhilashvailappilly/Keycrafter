import {motion} from 'framer-motion'
import { PasswordDataInterface } from '../../Interface/Password'
import { FaCopy, FaTrash } from 'react-icons/fa'
import {  toast } from 'react-hot-toast';
import { deleteDoc,doc, db } from '../../Firebase/Firebase'; // Adjust the path as needed

const SinglePassword = ({password,action} : {password:PasswordDataInterface,action:(id:string)=>void}) => {

     const handleCopy = (password: string) => {
    navigator.clipboard.writeText(password);


 toast('Password copied successfully', {
    style: {
      background: 'black',
      color: 'white',}
    });

};

  const handleDelete = async(id: string) => {
    try {
     
        const passwordDocRef = doc(db, "passwords", id);
      
        // Delete the document 
        toast('Password deleted successfully', {
            style: {
              background: 'red',
              color: 'white',}
            });
        await deleteDoc(passwordDocRef);
    
        action(id)
      } catch (error) {
        console.error('Error removing document: ', error);
      }
  };
  return (
    <div className="card bg-base-100 shadow-xl p-4 flex justify-between items-center">
    <div>
      <p className="text-lg font-semibold">{password.password}</p>
      <p className="text-sm text-gray-500">
        {new Date(password.timestamp.seconds * 1000 + password.timestamp.nanoseconds / 1000000).toLocaleString()}
      </p>
    </div>
    <div className="flex space-x-2">
      <motion.button
        className="btn btn-sm btn-outline btn-primary"
        onClick={() => handleCopy(password.password)}
      >
        <FaCopy className="mr-2" />
        Copy
      </motion.button>
      <motion.button
        className="btn btn-sm btn-outline btn-error"
        onClick={() => handleDelete(password.id)}
      >
        <FaTrash className="mr-2" />
        Delete
      </motion.button>
    </div>

  </div>
  )
}

export default SinglePassword
