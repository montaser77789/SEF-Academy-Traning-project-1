import { Link } from 'react-router-dom';
import './AdminSideBar.css'
import { useState } from 'react';
function AdminSideBar(){
  const [cirtificateBtn ,setCertifiCateeBtn] = useState(false)
    return(
        <div class="users-sec" style={{transform:'translateY(50px)'}}>
        <div className='parent-users'> 
          <h5 onClick={()=>setCertifiCateeBtn(false)}><Link to="users">Users</Link></h5>

            {/*  */}
          <div class="lg-ul">
            <ul>
            <li><Link to="#">Admins</Link></li>
            <li><Link to="#">Editors</Link></li>
            <li><Link to="#">Instructors</Link></li>
            <li onClick={()=>setCertifiCateeBtn(true)}><Link to="userstudents">Students</Link></li>
          </ul>
          </div>
          <div className='drop container'>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className='dropdown-menu'>
            <li ><Link className='dropdown-item text-dark' to="#">Admins</Link></li>
            <li><Link className='dropdown-item text-dark' to="#">Editors</Link></li>
            <li><Link className='dropdown-item text-dark' to="#">Editors</Link></li>
            <li><Link className='dropdown-item text-dark' to="#">Students</Link></li>
          </ul>
        </div>
          </div>
        </div>


        <div className='parent-users'>
          <h5 onClick={()=>setCertifiCateeBtn(false)}><Link to="articles">Articles</Link></h5>
            
          <div class="lg-ul">
            <ul>
            <li><Link to="">Published Articles</Link></li>
            <li><Link to="">Scheduled Articles</Link></li>
            <li><Link to="">Saved Drafts</Link></li>
          </ul>
          </div>
        </div>

        <div className='parent-users'>
          <h5 onClick={()=>setCertifiCateeBtn(false)}><Link to="Jobbs">Jops</Link></h5>
        
          <div class="lg-ul">
            <ul>
            <li><Link to="">Published Jops</Link></li>
            <li><Link to="">Saved Drafts</Link></li>
          </ul>
          </div>
        </div>

        <div className='parent-users '>
          <h5 onClick={()=>setCertifiCateeBtn(false)}><Link to="courses">Courses</Link></h5>
            
          <div class="lg-ul">
             <ul>
            <li><Link to="">Published Courses</Link></li>
            <li><Link to="">Scheduled Courses</Link></li>
            <li><Link to="">Saved Drafts</Link></li>
          </ul>
          </div>
        </div>
        {
          cirtificateBtn ?<Link to="addCertificate" > <button className='bg-warning btn text-light w-100'> Add Certificate</button></Link>:''
        }

      </div>
    )
}
export default AdminSideBar;