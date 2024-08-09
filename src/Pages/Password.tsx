import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout"
import { HashLoader } from 'react-spinners';

const PasswordForm = lazy(() => import('../Components/Home/Home'));
const Password = () => {
  return (
  <Layout>
      <div className="no-scrollbar">
      <Suspense fallback={<div className="w-screen h-screen flex justify-center items-center"><HashLoader color="#36d7b7"/></div>}>
         <PasswordForm/>
      </Suspense>
    </div>
  </Layout>
  )
}

export default Password


