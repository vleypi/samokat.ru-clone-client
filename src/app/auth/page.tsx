'use client'

import { login } from "@/services/profile.service"

const page = () => {

    

    return (
      <div onClick={()=>login('+79991099479')}>auth</div>
    )
}

export default page