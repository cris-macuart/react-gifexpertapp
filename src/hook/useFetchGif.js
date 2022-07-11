import { useState, useEffect } from "react"
import {getGif} from '../helpers/getGifs'

export const useFetchGif = (categorias) => {

  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(()=>{
    getGif(categorias)
      .then(imgs =>{
        setState({
          data: imgs,
          loading: false,
        })
      })
  },[categorias])

  return state

}
