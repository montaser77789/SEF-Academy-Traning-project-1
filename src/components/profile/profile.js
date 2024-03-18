import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
export default function Profile() {
    var [editMode,setEditMode]=useState(false)
    var [age,setAge]=useState("26yo")
    var [nationality,setNationality]=useState("Sudanese")
    var [country,setCountry]=useState("Egypt")
    var [city,setCity]=useState("Cairo")
    var [score,setScore]=useState(97)
    var [university,setUniversity]=useState("International Islamic University")
    var [major,setMajor]=useState("Computer Science")
    var [graduation,setGraduation]=useState(2019)
    var [email,setEmail]=useState("balqeessaber@gmail.com")
    var [mobile,setMobile]=useState("0020 1064569047")
    const [image,setImage]=useState(null)
    const imageInput=useRef()
    var [about,setAbout]=useState("At Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores")
    var [newData,setNewData]=useState([])
    function imageUpload(){
        imageInput.current.click()
      }
      function imageDisplay(e){
        let file=e.target.files[0]
        setImage(file)
        
      }
    const handleClick=()=>{
        setEditMode(!editMode)
        if(editMode){
            var x=[image,age,nationality,country,city,score,university,major,graduation,email,mobile,about]
            setNewData(x)
        }
    }
    useEffect(() => {
        console.log(newData);
      }, [newData]); 
    return(
        <><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"/>
    <div className='profilebody pt-5'>
    <div class="profileoverlay"></div>
    <div class="resume1 position-relative">
    
        <div class="row gx-0 p-5 gy-3">
            <span class="col-sm-1 col-md-1  position-relative">
                <img src={(image && URL.createObjectURL(image))}  class="rounded-circle bg-white"
                alt="" width="100" height="100" />
                <button className={editMode?"pen":"none"} onClick={imageUpload}>
                <FontAwesomeIcon icon={faPenToSquare} style={{color: "#bf9b30"}} />
                </button>
                <input onChange={imageDisplay} type='file' ref={imageInput}  style={{display:"none"}}/>
            </span>
            <span class="col-sm-12 ps-3 col-md-11">
                <h5 class="text-white" >Balqees Hamdi Sabir</h5>
                <span class="text-white"  >Computer science,international islamic university</span>
            </span>
                <button class=" btn " style={{top:'25px !important'}} type="button">
                <a href="#" class="text-white btn fs-5 bg-warning text-uppercase edit" onClick={handleClick}>{editMode?"Save Changes":"Edit Profile"}</a></button>
            
        </div>  
    </div>
    <div className='profiledata mt-5 position-relative'>
    <div class="row gy-2 gx-5 gy-md-0 p-5">
            <div class="col-sm-12 col-md-3 profilefirst">
                <form>
                    <h4>Personal Info</h4>
                    <p class="text-white inputlabel">Student ID</p>
                    <span class="text-white ms-3">1420572</span>
                    <p class="text-white inputlabel">Age</p>
                    <input type="text" id="Age" name="Age" defaultValue={age} onChange={(e) => setAge(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}/>
                    <p class="text-white inputlabel">Nationality</p>
                    <input type="text" id="Nationality" name="Nationality" defaultValue={nationality} onChange={(e) => setNationality(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}/>
                    <p class="text-white inputlabel">Country</p>
                    <input type="text" id="Country" name="Country" defaultValue={country} onChange={(e) => setCountry(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}/>
                    <p class="text-white inputlabel">City</p>
                    <input type="text" id="City" name="City" defaultValue={city} onChange={(e) => setCity(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}/>
                    <p class="text-white inputlabel">Score</p>
                    <input type="text" id="Score" name="Score" defaultValue={score} onChange={(e) => setScore(e.target.value)} class={editMode?" profileinput":" profileinput disabled"} disabled={!editMode}/>
                    <h4>Education</h4>
                    <p class="text-white inputlabel2">University</p>
                    <input type="text" id="University" name="University" defaultValue={university} onChange={(e) => setUniversity(e.target.value)} class={editMode?" profileinput":" profileinput2 disabled"} disabled={!editMode}/>
                    <p class="text-white inputlabel2">Major</p>
                    <input type="text" id="Major" name="Major" defaultValue={major} onChange={(e) => setMajor(e.target.value)} class={editMode?" profileinput2":" profileinput2 disabled"} disabled={!editMode}/>
                    <p class="text-white inputlabel2">Graduation Year</p>
                    <input type="text" id="Graduation Year" name="Graduation Year" defaultValue={graduation} onChange={(e) => setGraduation(e.target.value)} class={editMode?" profileinput2":" profileinput2 disabled"} disabled={!editMode}/>
                    <h4>Contact Info</h4>
                    <FontAwesomeIcon icon={faEnvelope} className="profileemail" style={{color: "#bf9b30"}} />
                    <p class="text-white inputlabel">Email</p>
                    <input type="text" id="Email" name="Email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} class={editMode?" profileinput2":" profileinput2 disabled"} disabled={!editMode}/>
                    <FontAwesomeIcon icon={faPhoneVolume}  className="profileemail" style={{color: "#bf9b30"}} />
                    <p class="text-white inputlabel">Mobile Number</p>
                    <input type="tel" id="Mobil Number" name="Mobil Number" defaultValue={mobile} onChange={(e) => setMobile(e.target.value)} class={editMode?" profileinput2":" profileinput2 disabled"} disabled={!editMode}/>
                </form>
            </div>
            <div class="col-sm-12 col-md-9">
            <div class="About profilefirst">
                <p class="text-white inputlabel">About</p>
                <textarea cols={10} class={editMode?" profileinput2":" profileinput2 disabled"} defaultValue={about} onChange={(e) => setAbout(e.target.value)} disabled={!editMode}/>
            </div>      
            <p class="text-white inputlabel4">In Progress</p>
            <div class="profilefirst" style={{position:"relative"}}>
            <h3>LEV.1</h3>
            <p class="text-white inputlabel2 largetext">Intoduction to Data Analysis</p>
            <span class="instructor">Instructor: </span>
            <span class="text-white">Mohammed Nour</span>
            </div>
            <p class="text-white inputlabel4">Previous</p>
            <div class="profilefirst" style={{position:"relative"}}>
            <h3>LEV.1</h3>
            <p class="text-white inputlabel2 largetext">System analysis and design</p>
            <span class="instructor">Instructor: </span>
            <span class="text-white">Sarah Ahmed</span>
            </div>
            </div>
        </div>        
    </div>
    </div>
    </>
    )
}