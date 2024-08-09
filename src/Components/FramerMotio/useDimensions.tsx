// import { MutableRefObject, useEffect, useRef } from "react";

// // Define a type for the dimensions
// interface Dimensions {
//   width: number;
//   height: number;
// }

// // Update the ref type to include HTMLElement or null
// export const useDimensions = (ref: MutableRefObject<HTMLElement | null>): Dimensions => {
//   const dimensions = useRef<Dimensions>({ width: 0, height: 0 });

//   useEffect(() => {
//     if(ref?.current){
//     dimensions.current.width = ref?.current.offsetWidth;
//     dimensions.current.height = ref?.current.offsetHeight;
//     }
//   }, []);

//   return dimensions.current;
// };
