"use client"

import { useProfile } from "@/store"
import { useEffect } from "react"
import { shallow } from 'zustand/shallow'

type Props = {
    children: React.ReactNode
}

const AuthProvider = ({children}: Props) => {

  const [id,name,phone,getProfile] = useProfile(state => [
    state.id,state.name,state.phone,state.getProfile
  ], shallow)

  useEffect(()=>{
      getProfile()
  }, [getProfile])

  return (
    <>{children}</>
  )
}

export default AuthProvider