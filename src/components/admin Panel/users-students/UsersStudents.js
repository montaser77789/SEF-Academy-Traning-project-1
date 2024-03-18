import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function UserStudents(){

    return(
        <>
        <div class="article-sec  ">
          <button className="btn btn-outline-warning ps-4 m-2 d-block pe-4 p-2 ms-auto" style={{transform:'translateY(-50px)'}}> Create new user</button>
              <div class="article-search d-lg-flex justify-content-lg-between">
                <h4 className="text-light">UserStudents</h4>
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
                    <th class="col">User Id</th>
                    <th class="col">Role</th>
                    <th class="col"></th>
                </tr>
                  </thead>
                
                  <tr>
                    <td>Here is the article title</td>
                    <td><button>Active</button></td>
                    <td>FE-2303</td>
                    <td>Admin</td>
                    <td>
                     <Link href="">
                    <FontAwesomeIcon icon={faPenToSquare} className='text-warning' />

                        </Link> 
                     <Link href="">
                        <FontAwesomeIcon icon={faTrashCan} className='text-warning' />
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>Here is the article title</td>
                    <td><button className="bg-secondary text-light">inActive</button></td>
                    <td>FE-2303</td>
                    <td>Admin</td>
                    <td>
                     <Link href="">
                    <FontAwesomeIcon icon={faPenToSquare} className='text-warning' />

                        </Link> 
                     <Link href="">
                        <FontAwesomeIcon icon={faTrashCan} className='text-warning' />
                        </Link>
                    </td>
                </tr>
                
                
                
                
                
                <tr>
                    <td>Here is the article title</td>
                    <td>tech</td>
                    <td><button>Published</button></td>
                    <td>monday June 5th <br/>12:30 PM</td>
                    <td>
                      <Link href="">
                    <FontAwesomeIcon icon={faPenToSquare} className='text-warning' />

                        </Link> 
                      <Link href="">
                        <FontAwesomeIcon icon={faTrashCan} className='text-warning' />
                        </Link>
                    </td>
                </tr>
            </table>
              </div>
            </div>
        </>
    )
}
export default UserStudents;