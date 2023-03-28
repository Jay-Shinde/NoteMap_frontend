import React, { useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react'
export const About = () => {
  
  const a = useContext(noteContext);

  useEffect(() => {
    
    a.update();
    // eslint-disable-next-line
  },[]);
  
  return (
    <>
    <h1>This is About {a.s.name} of age {a.s.age}</h1>
    </>
  )
}
