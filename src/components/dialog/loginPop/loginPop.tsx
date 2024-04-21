"use client"

const LoginPop = ({toggle,setLimit}:{toggle:any,setLimit:any}) => {
  return (
    <>
       <div className="dialog-container">
          <dialog open={true} className="custom-dialog  modal_login ">
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel" style={{lineHeight:"1"}}>
                  Please Login to get unlimited Info
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={()=>setLimit(false)}
                  >
                    x
                  </button>
                </div>
                <div className="modal-body">
                
                  <div className="btn_otp" style={{padding:'0px'}}>
                    <button   onClick={()=>toggle()}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
    </>
  )
}

export default LoginPop;