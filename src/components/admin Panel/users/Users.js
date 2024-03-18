import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../redux/reducers/userSlice.";
function Users(){
  const users = useSelector(state=>state.users)
  const dispatch = useDispatch()
  // useEffect(()=>{
  //     dispatch(fetchCourses())
  // }
  //     ,[])
    return(
        <>
        <div class="article-sec  ">
          <Link to="/adminPanel/addUsers">
          <button className="btn btn-outline-warning ps-4 m-2 d-block pe-4 p-2 ms-auto" style={{transform:'translateY(-50px)'}}> Create new user</button>
          </Link>
              <div class="article-search d-lg-flex justify-content-lg-between">
                <h4 className="text-light">users</h4>
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
                    <th class="col">Status</th>
                    <th class="col">User id</th>
                    <th class="col">Role</th>
                    <th class="col"></th>
                </tr>
                  </thead>
                  <tbody>
                    {
                      users?.map((user,index)=>(
                        <tr key={index}>
                          <td>{user.fName} {user.lName}</td>
                          <td><button className={user.status ? "" :"bg-secondary text-light"}>
                          {user.status ? "Active" : "inActive"}</button></td>
                          <td>{user.userId}</td>
                          <td>{user.role}</td>
                          <td>
                          <Link href="">
                            <FontAwesomeIcon icon={faPenToSquare} className='text-warning' />
                          </Link> 
                          <Link href="" onClick={()=>dispatch(removeUser(user))}>
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
export default Users;