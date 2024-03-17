"use client";
import React, { useState } from "react";
import "./style.css";
import { Carousel } from "react-responsive-carousel";

const CarouselDialog = ({ pics }: Props) => {
  const condition = typeof window !== "undefined";
  const [open, setOpen] = useState(false);

  const toggle = (e: any) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <>
      <div className="btn_toggle_container">
        <button onClick={toggle} className="btn_toggle ">
          <span className="btn_toggle_text">See Photos</span>
        </button>
      </div>

      {open && (
        <div className="dialog-container">
          <dialog open={open} className="custom-dialog  modal_login ">
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Gallery
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={toggle}
                  >
                    x
                  </button>
                </div>
              </div>
              <div className="modal-body"></div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

interface Props {
  pics: string[];
}

export default CarouselDialog;
