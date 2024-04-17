'use client'
import { networkInstance } from '@/lib/network-instance'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ProfileUpload from './profileUpload'

const BusProfile = () => {
    const [detail,setDetails]=useState({
        businessName: '',
        address: '',
        buildingNo: '',
        area:'',
        postalCode: '',
        landmark: '',
        country: '',
        subDivision:'',
        island: '',
        images:[]
    })

    const [constDetail,setconstDetail]= useState({
      contactPerson: "",
      gender: "",
      mobileNumber: "",
      countryCode: "",
      email: "",
    })
    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = async()=>{
        const { data, error, success } = await networkInstance(
            "GET",
            `profile`
          );
          console.log(data)
          if(success){
            const value =data?.data?.business
            setDetails({  businessName: value.businessName,
            address: value.address,
            buildingNo: value.buildingNo,
            area:value.area,
            postalCode: value.postalCode,
            landmark: value.landmark,
            country: value.country,
            subDivision:value.subDivision,
            island: value.island,
            images:value.images || []
          
          })
         
            const contact =data?.data
            setconstDetail({
              countryCode:contact?.countryCode,
              mobileNumber:contact?.phoneNumber,
              email:value?.email,
              gender:value?.gender,
              contactPerson: value?.contactPersion
            })
          }else{
              toast.error('Something went wrong')
          }
    }
    const updateDetails = async()=>{
        const { data, error, success } = await networkInstance(
            "PUT",
            `profile`,
            detail
          );

          if(success){
            toast.success('Profile Updated Successfully')
          }else{
            toast.error('Unable to Update profile')
          }
    }


    const saveContact = async()=>{
      const payload = {
        contactPersion: constDetail.contactPerson,
        gender: constDetail.gender === "Mr." ? "Male" : "Female",
        contacts: {
          countryCode: constDetail.countryCode,
          contact: constDetail.mobileNumber,
        },
        email: constDetail.email,
      };
  
      const { data, error, success } = await networkInstance(
        "POST",
        "businesses/contactDetails",
        payload
      );
  
      if(success){
        toast.success('Contact Updated Successfully')
       
      }else{
        toast.error('Unable to Update Contact')
      }
    }
  return (
    <>

<ProfileUpload images={detail.images}/>


    <div className="business_profile_wrapper">
  
    <div className="container">
      <h3>Edit Business Profile</h3>
      <div className="edit_form_wrapper custom_form">
        <div className="row ">
         <div className="col-md-6">
            <div className="form-outline">
                <input type="text" value={detail.businessName || ''}  onChange={(e)=>setDetails({...detail,businessName:e.target.value})} className="form-control"/>
                <label className="form-label" style={{ marginLeft:" 0px"}}>Business Name</label>
              </div>
           </div>
         <div className="col-md-6">
            <div className="form-outline">
                <input type="text"  className="form-control" value={detail.postalCode || ''}  onChange={(e)=>setDetails({...detail,postalCode:e.target.value})} />
                <label className="form-label" style={{ marginLeft:" 0px"}}>Postal Code</label>
              </div>
         </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="form-outline">
                    <input type="text"  className="form-control" value={detail.buildingNo || ''}  onChange={(e)=>setDetails({...detail,buildingNo:e.target.value})}/>
                    <label className="form-label" style={{ marginLeft:" 0px"}}>Block Number / Building Number</label>
                  </div>
            </div>
            <div className="col-md-6">
                <div className="form-outline">
                    <input type="text"  className="form-control" value={detail.address || ''}  onChange={(e)=>setDetails({...detail,address:e.target.value})} />
                    <label className="form-label" style={{ marginLeft:" 0px"}}>Street / Colony Name</label>
                  </div>
            </div>
           </div>
           <div className="row">
            <div className="col-md-6">
                <div className="form-outline">
                    <input type="text"  className="form-control" value={detail.area || ''}  onChange={(e)=>setDetails({...detail,area:e.target.value})}  />
                    <label className="form-label" style={{ marginLeft:" 0px"}}>Area </label>
                  </div>
            </div>
            <div className="col-md-6">
                <div className="form-outline">
                    <input type="text"  className="form-control" value={detail.landmark || ''}  onChange={(e)=>setDetails({...detail,landmark:e.target.value})}  />
                    <label className="form-label" style={{ marginLeft:" 0px"}}>Land Mark</label>
                  </div>
            </div>
           </div>
           <div className="row">
            <div className="col-md-6">
                <div className="form-outline">
                    <input type="text"  className="form-control" value={detail.country || ''}  onChange={(e)=>setDetails({...detail,country:e.target.value})}  />
                    <label className="form-label" style={{ marginLeft:" 0px"}}>Country </label>
                  </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                 <div className="col-md-6">
                    <div className="form-outline">
                        <input type="text"  className="form-control" value={detail.subDivision || ''}  onChange={(e)=>setDetails({...detail,subDivision:e.target.value})}  />
                        <label className="form-label" style={{ marginLeft:" 0px"}}>Sub Division</label>
                      </div>
                 </div>
                 <div className="col-md-6">
                    <div className="form-outline">
                        <input type="text"  className="form-control" value={detail.island || ''}  onChange={(e)=>setDetails({...detail,island:e.target.value})}  />
                        <label className="form-label" style={{ marginLeft:" 0px"}}>Island</label>
                      </div>
                 </div>
                </div>

                
                
            </div>
           </div>
           <div className="btn_save_wrapper">
            <button className="btn_save" onClick={()=>updateDetails()}>Save</button>
           </div>
      </div>
    </div>

 </div>

 


<div className="business_profile_wrapper">
  
<div className="container edit_form">
  <h3>Edit Contact Number</h3>
  <div className="edit_form_wrapper block_contact custom_form">
    <div className="custom_form">
      <div className="row_form">
        {/* <div className="small_input select_custom">
          <label>Title</label>
          <select value={constDetail.gender} onChange={(e)=>setconstDetail({...constDetail,gender:e.target.value})}>
            <option value="Male">Mr</option>
            <option value="Female">Mrs</option>
          </select>
        </div> */}
      <div className="form-outline">
        <input type="text" value={constDetail.contactPerson} onChange={(e)=>setconstDetail({...constDetail,contactPerson:e.target.value})}  className="form-control"/>
        <label className="form-label" style={{marginLeft: "0px"}}>Contact Person</label>
      </div>
    </div>
    <div className="row_form custom_2">
      <div className="small_input select_custom" >
        <select disabled>
          <option value="">{constDetail.countryCode}</option>
        </select>
      </div>
    <div className="form-outline">
      <input type="text" value={constDetail.mobileNumber}  className="form-control" disabled/>
      <label className="form-label" style={{marginLeft: "0px"}}>Contact number</label>
    </div>
    </div>
    {/* <span className="add_number">+Add another number</span> */}
    <div className="form-outline">
      <input type="text" value={constDetail.email} onChange={(e)=>setconstDetail({...constDetail,email:e.target.value})}  className="form-control"/>
      <label className="form-label"  style={{marginLeft: "0px"}}>Email</label>
    </div>
    <div className="btn_save_wrapper">
      <button className="btn_save" onClick={()=>saveContact()}>Save</button>
     </div>
      </div>
  </div>
</div>

</div>
</>
  )
}

export default BusProfile;