import { useEffect, useState } from "react";
import { getGgifs } from '../helpers/getGifs';
;


export const useFetchGifs = ( category ) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(()=>{
    getGgifs(category)
    .then((res)=>{
        setstate({ data: res, loading: false });
    })
  },[ category ]);

  return state;
};
