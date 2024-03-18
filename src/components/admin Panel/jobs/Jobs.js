import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeJob } from "../../redux/reducers/JobSlice.";
function Jobs(){

  const jobs = useSelector(state=>state.jobs)
  const dispatch = useDispatch()
  // useEffect(()=>{
  //     dispatch(fetchCourses())
  // }
  //     ,[])
    return(
        <>
        <div class="article-sec  ">
          <Link to="/adminPanel/addJobs">
          <button className="btn btn-outline-warning ps-4 m-2 d-block pe-4 p-2 ms-auto" style={{transform:'translateY(-50px)'}}> Create new job</button>
          </Link>
              <div class="article-search d-lg-flex justify-content-lg-between">
                <h4 className="text-light">Jobs</h4>
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
                    <th class="col">position</th>
                    <th class="col">Status</th>
                    <th class="col">Posted at</th>
                    <th class="col">#Apllications</th>
                    <th class="col"></th>
                </tr>
                  </thead>
                  <tbody>
                    {
                      jobs?.map((job,index)=>(
                        <tr key={index} className="text-light">
                          <td>{job.companyName}</td>
                          <td>{job.position}</td>
                          <td><button className="bg-secondary text-light">
                            {job.status ? "opened":"closed"}
                            </button></td>
                          <td>{job.date} <br/>{job.time}</td>
                          <td>{job.application}</td>
                          <td>
                          <Link href="">
                            <FontAwesomeIcon icon={faPenToSquare} className='text-warning' />
                          </Link> 
                          <Link href="" onClick={()=>dispatch(removeJob(job))}>
                            <FontAwesomeIcon icon={faTrashCan} className='text-warning' />
                          </Link>
                          </td>
                    </tr>
                      ))
                    }
                  </tbody>

            </table>
              </div>
            </div>
        </>
    )
}
export default Jobs;