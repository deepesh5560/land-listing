'use client'
import React, { useState } from 'react'
import HotelDetail from './HotelDetail'
import ProfileBanner from './ProfileBanner'
import Quickinfo from './quickinfo'
import ProfileSlider from '../slider/profileSlider'

const ProfoleMain = ({data ,  params}:{data:any,params:any}) => {
    const [isBanner, setisBanner] = useState(false)
    const pics = data.data.business?.business?.images
  return (
   <>
{

   !isBanner? <>
    <ProfileBanner data={data.data} setisBanner={setisBanner} />
      <HotelDetail data={data.data} />
      <Quickinfo data={data.data} busId={params.id} />
   </>:<ProfileSlider data={pics} setisBanner={setisBanner}/>

}     
   </>
  )
}

export default ProfoleMain