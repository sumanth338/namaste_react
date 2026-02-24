import { useState, useEffect } from 'react';

import React from 'react'

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true)
        })
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false)
        })
    },[])
  return (
    onlineStatus
  )
}

export default useOnlineStatus