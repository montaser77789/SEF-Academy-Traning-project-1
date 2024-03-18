import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCourse } from "../../redux/reducers/CourseSlice";
function Courses(){
  const courses = useSelector(state=>state.courses)
  const dispatch = useDispatch()
  // useEffect(()=>{
  //     dispatch(fetchCourses())
  // }
  //     ,[])
    return(
        <>
        <div class="article-sec  ">
          <Link to="/adminPanel/addCourses" >
          <button className="btn btn-outline-warning ps-4 m-2 d-block pe-4 p-2 ms-auto" style={{transform:'translateY(-50px)'}}> Create new course</button>
          </Link>
              <div class="article-search d-lg-flex justify-content-lg-between">
                <h4 className="text-light">Courses</h4>
                <div class="search-div">
                  <input type="text" placeholder="Search For Jops"/>
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <div class="article-content">
                <table class="  table table-borderless text-light mx-auto table-responsive-sm    ">
                  <thead className="m-3">
                    <tr>
                    <th class="col">Title</th>
                    <th class="col">status</th>
                    <th class="col">instructor</th>
                    <th class="col">level</th>
                    <th class="col">start date</th>
                    <th class="col">published on</th>
                    <th class="col"></th>
                </tr>
                  </thead>
                  {
                    courses?.map((course,index)=>(
                    <tr key={index}>
                      <td>{course.courseName}</td>
                      <td><button className={course.status?"":"bg-secondary text-light"}>
                        {course.status?'open':"ended"}
                        </button></td>
                      <td>{course.instructor}</td>
                      <td>{course.level}</td>
                      <td>{course.startDate}</td>
                      <td>{course.date} <br/>{course.time}</td>
                      <td>
                      <Link href="" >
                        <FontAwesomeIcon icon={faPenToSquare} className='text-warning' />
                      </Link> 
                      <Link href="" onClick={()=>dispatch(removeCourse(course))}>
                        <FontAwesomeIcon icon={faTrashCan} className='text-warning' />
                      </Link>
                      </td>
                    </tr>
                    ))
                  }
              
            </table>
              </div>
            </div>
        </>
    )
}
export default Courses;