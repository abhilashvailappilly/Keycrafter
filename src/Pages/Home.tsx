import { useEffect, useState } from "react";
import AnimatedCard from "../Components/Card/Card"
import Test2 from "../Components/FramerMotio/Test2"
import Modal from "../Components/Modal";
import { AnimatePresence } from "framer-motion";
import { FetchJobs, FetchJobs2 } from "../Api/Api/JobApiMethod";
import { loadedJobsInterface } from "../Interface/Job";



const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading,setLoading] = useState(true)
  const [loadedJobs,setLoadedJobs] = useState<loadedJobsInterface[] |[] >([])
  const hanldeViewDetails = () => {console.log("view details worked")
    setShowModal(true);
  };
  useEffect(()=>{
    fetchJobs()
  },[])

  const fetchJobs = async ()=>{
    try {
    const response = await FetchJobs2()
    // console.log("response h",response)
    //   if(response.success){
    //     setLoadedJobs(response?.data)
    //   }
      
    } catch (error) {
      console.log(error)
    }  finally {
      setLoading(false)
    }   
  }

  // if(loading){
  //   return (
  //     <div>loading</div>
  //   )
  // }

  return (
    <div className="bg-red-300 flex items-center justify-center min-h-screen max-w-screen min-w-screen ">
      <div className="grid mt-10 items-center grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 xl-grid-cols-5 w-full">
        
    
    {/* {  loadedJobs.length > 0 && loadedJobs.map((job)=>{
      return (
        <AnimatedCard 
          jobData={job}
          viewDetails={hanldeViewDetails}
          />
      )
      })
    } */}
   
    

      {/* <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2>  */}
     </div>
      <AnimatePresence initial={false} onExitComplete={()=>null} mode={'wait'}>
      {/* {showModal && (

           <Modal text={"showModal"} handleClose={()=>setShowModal(false)}>
           
           </Modal>
       )} */}
   </AnimatePresence>
      
    </div>
  )
}

export default Home
