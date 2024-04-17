"use client";
import { multiPartInstance } from "@/lib/multiPart";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfileUpload = ({images}:{images:any[]}) => {
  console.log(images)
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const [selectedImagesUp, setSelectedImagesUp] = useState<any>([]);

  useEffect(()=>{

    if(images.length){
      setSelectedImages(images)
    setSelectedImagesUp(images)}
  },[images])
 // Function to handle file selection
const handleImageChange = (e:any) => {
 
  const file = [...e.target.files];

  setSelectedImagesUp((prev:any)=>[...prev,...file])
  if (file) {
    file?.forEach((myFile:any) =>{
      const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImages((prev:any)=>[...prev,reader.result]);
    };
    reader.readAsDataURL(myFile);
    })
    
  }


};



const hnadleUpload = async () => {

  if (!selectedImages.length) {
    toast.error('Image bucket is empty');
    return;
  }
  const formData = new FormData();
  selectedImagesUp.forEach((image:any,ind:number) => {
    const myImg = image;
    formData.append(`images`, myImg)
  });

  const { data, error, success }:any = await multiPartInstance(
    "post",
    "businesses/photos",
    formData
  );
  if (!success) {
    console.error(error, "error");
    toast.error(error);
    return;
  }else{
    toast.success(data.message);
  }
}

const handleDel = (ind:number)=>{
  setSelectedImagesUp((prev:any)=>{
    return prev.filter((_:any,i:number)=>{
      return i!==ind
    })
  })

  setSelectedImages((prev:any)=>{
    return prev.filter((_:any,i:number)=>{
      return i!==ind
    })
  })

}

  return (
    <>
      <section className="mult-step_section py-5">
        <div className="container">
          <div className="multi_step_wrapper" style={{display:'flex',justifyContent:"center"}}>
            <div className="steps step_3 pb-3">
              <img className="step_img" src="images/step3.png" alt="" />
              <h3 className="h3_title text-center">Upload your Business Photo</h3>
              <div className="custom_form">
                <div className="custom_upload_file mx-auto my-5">
                 
                  <label htmlFor="file">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M8.66732 12.9999H4.33398V43.3332C4.33398 45.7166 6.28398 47.6666 8.66732 47.6666H39.0006V43.3332H8.66732V12.9999ZM43.334 4.33325H17.334C14.9507 4.33325 13.0007 6.28325 13.0007 8.66658V34.6666C13.0007 37.0499 14.9507 38.9999 17.334 38.9999H43.334C45.7173 38.9999 47.6673 37.0499 47.6673 34.6666V8.66658C47.6673 6.28325 45.7173 4.33325 43.334 4.33325ZM41.1673 23.8333H32.5006V32.4999H28.1673V23.8333H19.5007V19.4999H28.1673V10.8333H32.5006V19.4999H41.1673V23.8333Z"
                        fill="#23094E"
                      />
                    </svg>
                  </label>
  
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
               <input type="file" accept="image/*" id="file"  onChange={handleImageChange} multiple />
      {selectedImages && (
        <div>
          {selectedImages.map((image:any, index:number) => {
                 const pic =
                 process.env.NEXT_PUBLIC_BASE_API_URL?.split("/api/v1/")[0] +
                 "/" +
                 image;
                 const isUrl= image.split("/")[0] === 'uploads'
                 
          
          return  <div style={{position:"relative"}}> <img key={index} src={isUrl?pic: image} alt={`Selected ${index + 1}`} height={200} width={355} style={{ maxWidth: '100%', maxHeight: '200px', margin: '5px' }} />
            <img src="/images/deleteIcon.png" width={20} height={20} className="trashIMG" alt="" onClick={()=>handleDel(index)} />
            </div>
            }
           

          )}
        </div>
      )}
    </div>
                <div className="btn_form">
                  <button onClick={hnadleUpload} >Save & Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileUpload;
