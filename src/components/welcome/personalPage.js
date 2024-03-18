import'./personalPage.css'
import img from '../../assest/oooo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCheckCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer/Footer'
import Title from '../title/title'
function PersonalPage(){

    return(
        <>
        
    <div class="exams m-3 ">
        <div className='container mx-auto '>
            <Title title={'student Panel'}/>
        </div>
        
    <div class="exams-container position-relative mt-5">
        <div className='d-flex justify-content-between container'>
        <div className='fs-1'>
        <span class=" text-uppercase text-white">welcome back </span>
        <span class="text-warning text-uppercase"> tariq ali</span>
        </div>
        <button class="navbar-toggler" type="button"
            data-bs-toggle = "collapse" data-bs-target = "#main" aria-controls="main" aria-expanded ="false"
            aria-label="Toggle navigation">
        <a href="#" class="text-white  fs-3btn btn-warning main-bt btn 
             text-uppercase ps-4 pe-4" 
             >view Profile</a></button>
        </div>
        
        
        <div class="course container p-3 flex-wrap  justify-content-between  align-items-center  d-flex">
            <h5 class="text-white  fs-2  col-xs-12 mb-3 "> <span class="badge p-4 me-2  text-white text-uppercase"
                style={{border:' 1px solid gold', fontSize: "25px;"}} >1</span>upcoming exams</h5>

            <h5 class="text-white  fs-2  col-xs-12 mb-3  "> <span class="badge p-4 me-2  text-white text-uppercase "
            style={{border:' 1px solid gold', fontSize:' 25px' }}>4</span>ongoing exams</h5>

            <h5 class="text-white  fs-2  col-xs-12 mb-2  "> <span class="badge p-4 me-2  text-white text-uppercase "
            style={{border:' 1px solid gold', fontSize:' 25px' }}>2</span>completed courses</h5>

        </div> 
    </div> 
    </div>

        <div>
            <h3 className='  p-3 container m-2 done text-light fw-bold mx-auto rounded' >
                <FontAwesomeIcon icon={faCheckCircle} className='text-light' /> 
                All clear , you don't have exams toDay
            </h3>
        </div>

        <div class="row text-light mt-5 justify-content-center   gap-3 ">
            <div class="col-xs-12 col-md-5">
                <h2>Ongoing Courses</h2>
                <div class="d-flex flex-column">
                <div class="course mt-3 p-3">
                    <h4>Introdution to Date Analysis</h4>
                    <div class="row px-3 pt-3">
                    <div class="col-4  p-1 font-weight-bold">LEV.1</div>
                    <div class="col-4  p-1">
                        <i class="far fa-user course_coler "></i> 20 Students
                    </div>
                    <button class="rounded border-0 col-4  course_button text-light p-1 font-weight-bold">VIEW DETAILS</button>
                    </div>
                </div>
                <div class="course mt-3 p-3">
                    <h4>Introduction to Date Analysis</h4>
                    <div class="row px-3 pt-3">
                    <div class="col-4  p-1 font-weight-bold">LEV.1</div>
                    <div class="col-4  p-1">
                        <i class="far fa-user course_coler "></i> 20 Students
                    </div>
                    <button class="rounded border-0 col-4 course_button text-light p-1 font-weight-bold ">VIEW DETAILS</button>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-xs-12 col-md-5 ">
                <div class="row">
                <h3 class="col-8 ">Upcoming Exams</h3>
                <button class="col-4 d-none d-md-block  rounded border-0  course_button text-light font-weight-bold">CREATE NEW</button>
                </div>
                <div class="row mt-3 course p-2">
                <div class="col-3 text-center font-weight-bold ">
                    <div class="d-flex flex-column justify-content-center mt-2  ">
                    <span class=" rounded-top color_black ">7TH</span>
                    <span class=" color_black">JUN</span>
                    <span class=" rounded-bottom color_orange ">WED</span>
                    </div>
                </div>
                <div class="col-9 ">
                    <div class="d-flex flex-row justify-content-between">
                    <h4>Introduction to React js</h4>
                    <i class="far fa-edit edit"></i>
                    </div>
                    <div>
                    <span class="course_coler">Instructor </span>
                    <span class="text-light"> : Tariq Ali</span>
                    </div>
                    <div class="d-flex flex-row justify-content-between pt-1">
                    <h6>Lev. 1 Exam</h6>
                    <i class="far fa-clock  font-weight-bold"> 12:30 PM</i>
                    </div>
                </div>
                </div>
            </div>

        </div>
        <div class="mb-3 mt-3 container  text-light">
          <h1>Upcoming Courses</h1>
        </div>
        <div class="row justify-content-center gap-3 z">
            
        <div class="col-xs-12 col-md-5 text-light">
            <div class="row parent_top_courses  course  ">
              <div class="col-xs-12 col-md-4 img_rel p-0 ">
                <img class="sec3_img " src={img}/>
                <p class="left_courses font-weight-bold d-none d-md-block  ">LEV.1</p>
              </div>
              <div class="col-xs-12 col-md-8 py-3 d-inline-flex flex-column ">
                <h4>Python for Beginners</h4>
                <div className=' d-flex flex-column'>   
                    <div >
                    <FontAwesomeIcon icon={faCalendarAlt} className='text-warning'/><small> Wednesday,June 7th</small> 
                    </div>
                    <div >
                    <FontAwesomeIcon icon={faFileAlt}  className='text-warning'/><small> 12 lessons</small> 
                    </div>
                    <button class="ms-auto  rounded border-0 course_button mt-2 p-2  
                fw-bold text-light w-100">VIEW DETAILS</button>
              </div>
              </div>
              <div class="left_courses2 font-weight-bold d-md-none d-lg-none  d-xs-block d-sm-block
              my-3 ml-2 ">LEV.1</div>
              </div>
          </div>
          <div class="col-xs-12 col-md-5 text-light">
            <div class="row parent_top_courses  course  ">
              <div class="col-xs-12 col-md-4 img_rel p-0 ">
                <img class="sec3_img " src={img}/>
                <p class="left_courses font-weight-bold d-none d-md-block  ">LEV.1</p>
              </div>
              <div class="col-xs-12 col-md-8 py-3 d-inline-flex flex-column ">
                <h4>Python for Beginners</h4>
                <div className=' d-flex flex-column'>   
                    <div >
                    <FontAwesomeIcon icon={faCalendarAlt} className='text-warning'/><small> Wednesday,June 7th</small> 
                    </div>
                    <div >
                    <FontAwesomeIcon icon={faFileAlt}  className='text-warning'/><small> 12 lessons</small> 
                    </div>
                    <button class="ms-auto  rounded border-0 course_button mt-2 p-2  
                fw-bold text-light   w-100">VIEW DETAILS</button>
              </div>
              </div>
              <div class="left_courses2 font-weight-bold d-md-none d-lg-none  d-xs-block d-sm-block
              my-3 ml-2 ">LEV.1</div>
              </div>
          </div>
        </div>
        <Footer/>
        </>
    )
}
export default PersonalPage