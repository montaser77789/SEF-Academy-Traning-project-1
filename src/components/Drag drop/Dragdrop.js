import React, { useEffect, useRef, useState } from "react";
import "./Dragdrop.css";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addCompanyLogo, addPersonalPhoto } from "../redux/reducers/cvDataSlice";
import uploadIcon from '../../assest/upload-img.png'
function Dragdrop({ size, useFor ,onFileDrop}) {
  const [h2text, setH2Text] = useState("Drag & Drop Files or");
  const [drop, setDrop] = useState(true);
  const [drop2, setDrop2] = useState(true);
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const dispatch = useDispatch()
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];

    const fileExtension = droppedFile.name.split(".").pop().toLowerCase();
    if (!["jpg", "jpeg", "png", "gif", "bmp"].includes(fileExtension)) {
      setDrop(true);
      setDrop2(false);
      setFile(droppedFile);
    } else if (["jpg", "jpeg", "png", "gif", "bmp"].includes(fileExtension)) {
      setFile(droppedFile);
      setDrop(false);
      setDrop2(false);
    }
    if(useFor == 'company'){
      dispatch(addCompanyLogo(file))
    }
    if(useFor == 'personal'){
      dispatch(addPersonalPhoto(file))
    }
    onFileDrop(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    e.preventDefault();
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!["jpg", "jpeg", "png", "gif", "bmp"].includes(fileExtension)) {
        setDrop(true);
        setDrop2(false);
        setFile(file);
      } else if (["jpg", "jpeg", "png", "gif", "bmp"].includes(fileExtension)) {
        setFile(file);
        setDrop(false);
        setDrop2(false);
      }
    }
    if(useFor == 'company'){
      dispatch(addCompanyLogo(file))
    }
    if(useFor == 'personal'){
      dispatch(addPersonalPhoto(file))
    }
    onFileDrop(file);
  };

  return (
    <>
    {drop && !drop2 && (
        <FontAwesomeIcon icon={faFile} className="icon2" />
    )
    
    }
      {!drop && !drop2 && (
         <img id="img" style={{width:'60px' , height:'60px'}} className="rounded ms-auto m-2" src={file && URL.createObjectURL(file)} alt="file" />
      ) }
    {(!drop && drop2)||(drop && drop2)&&
      <div
        className={` ${dragging ? "dragging" : ""}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div id="drop-container">
          <div className="drag-drop">
            <input onChange={handleFileChange} type="file" id="upload" />
            <div
              id="drop-area"
              // onDrop={handleFileChange}
              onDragLeave={(e) => {
                setH2Text("Drag & Drop Files or");
                e.preventDefault();
              }}
              onDragOver={(e) => {
                setH2Text("Relese To Upload File or");
                e.preventDefault();
              }}
            >
              {!drop && !drop2 && (
                <img id="img" src={file && URL.createObjectURL(file)} alt="file" />
              )}
              <label htmlFor="upload">
                {drop && drop2 && (
                  <div className="icon">
                    <img src={uploadIcon} />
                  </div>
                )}
                {drop && !drop2 && (
                  <FontAwesomeIcon icon={faFile} className="icon2" />
                )}
              </label>
              <h3 className="h3">This is the file</h3>
            </div>
            <div className="drag-desc">
              {
                size =='sm' ? '' :<h2 className="h2 text-center">{h2text} </h2>

              }
              <label className="browse" htmlFor="upload" onChange={handleFileChange}>
                Browse
              </label>
            </div>
            {
              size=='sm' ? '':<p>Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
            }
          </div>
        </div>
      </div>
}
    <button className={(!drop && drop2) || (drop && drop2 )? "d-none":"btn ps-4 pe-4 p-2 btn btn-outline-warning ms-3"} onClick={()=>{
      setDrop(!drop);
      setDrop2(!drop2)
    }} >change file</button>
    </>
  );
}

export default Dragdrop;