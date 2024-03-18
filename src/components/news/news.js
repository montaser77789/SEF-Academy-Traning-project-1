import './news.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from '../../assest/oooo.jpg';
import { faChevronRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Routes } from 'react-router-dom';
import ShowNews from './showNew';
import Footer from '../footer/Footer';
function News(){

    return(
      <>
        <div class="contin mt-3">
        <div class="child-contin">
          <div class="container">
            <div class="col-xs-12  text-light mb-5 mt-5 ">
              <h1>SOFTWARE ENGINEERING<br/>FOR FUTURE</h1>
            </div>
            <div class="box p-2">
              <div class="row ">
                <div class="col-xs-12 col-md-6 d-flex flex-row">
                  <div class=" d-none d-md-block col-md-1   ">
                    <div class="FEATURED">FEATURED_NEWS</div>
                  </div>
                  <Link to='/showNews'>
                  <div class="col-xs-12 col-md-11 ">
                    <div class="EDUCATION">
                      <p>EDUCATION</p>
                      <div class="line"></div>
                      <div class="row">
                        <h3 class="col-9"> HERE'S THE TITLE OF THE ARTICLE</h3>
                        <span class=" col-3 text-center">
                        <FontAwesomeIcon className='text-warning' icon={faClock} /> 2 h ago
                        </span>
                      </div>
                      <small class="pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        exerci eius maiores molestiae ducimus minus quae illum! Magni eum doloribus iusto vel
                        exceptur et do
                      </small>
                    </div>
                    
                  </div>
                </Link>
                </div>

                <div class="col-xs-12 col-md-6 d-flex flex-column">
                <Link to='/ShowNews'>
                  <div class="EDUCATION">
                    <p>EDUCATION</p>
                    <div class="line"></div>
                    <div class="row">
                      <h3 class="col-9"> HERE'S THE TITLE OF THE ARTICLE</h3>
                      <span class=" col-3 text-center">
                        <FontAwesomeIcon className='text-warning' icon={faClock} /> 2 h ago
                      </span>
                    </div>
                    <small class="pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                      exerci eius maiores molestiae ducimus minus quae illum! Magni eum doloribus iusto vel
                      exceptur et do
                    </small>
                  </div>
                  </Link>
                  <Link to='/ShowNews'>
                  <div class="EDUCATION">
                    <p>EDUCATION</p>
                    <div class="line"></div>
                    <div class="row">
                      <h3 class="col-9"> HERE'S THE TITLE OF THE ARTICLE</h3>
                      <span class=" col-3 text-center">
                        <FontAwesomeIcon className='text-warning' icon={faClock} /> 2 h ago
                      </span>
                    </div>
                    <small class="pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                      exerci eius maiores molestiae ducimus minus quae illum! Magni eum doloribus iusto vel
                      exceptur et do
                    </small>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="margin_2"></div>
            <Link to='/ShowNews'>
            <div class="row text-light sec2">
              <div class="col-xs-12 col-md-4">
                <img class="sec2_img" src={img} />
              </div>
              <div class="col-xs-12 col-md-8 ">
                <p>EDUCATION</p>
                <div class="line"></div>
                <div class="row">
                  <h3 class="col-9"> HERE'S THE TITLE OF THE ARTICLE</h3>
                  <span class=" col-3 text-center">
                    <FontAwesomeIcon className='text-warning' icon={faClock} /> 2 h ago
                  </span>
                </div>
                <div class="row">
                  <small class="col-11 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    exerci eius maiores molestiae ducimus minus quae illum! Magni eum doloribus iusto molestiae ducimus minus quae ilquae illum! Magni eum doloribus iusto molestiae ducimus minus quae illum! Magni eum doloribus iusto molestiae ducimus minus quae illum! Magni eum doloribus iusto  vel
                    exceptur 
                  </small>
                  <span class="col-1 d-none d-md-block ">
                    <a class="sec2_igon" href="page2.html" target="_blank"><FontAwesomeIcon icon={faChevronRight} className='text-warning' /></a>
                  </span>
                </div>
              </div>
            </div>
            </Link>
            <Link to='/ShowNews'>
            <div class="row text-light sec2">
              <div class="col-xs-12 col-md-4">
                <img class="sec2_img" src={img} />
              </div>
              <div class="col-xs-12 col-md-8 ">
                <p>EDUCATION</p>
                <div class="line"></div>
                <div class="row">
                  <h3 class="col-9"> HERE'S THE TITLE OF THE ARTICLE</h3>
                  <span class=" col-3 text-center">
                    <FontAwesomeIcon className='text-warning' icon={faClock} /> 2 h ago
                  </span>
                </div>
                <div class="row">
                  <small class="col-11 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    exerci eius maiores molestiae ducimus minus quae illum! Magni eum doloribus iusto molestiae ducimus minus quae ilquae illum! Magni eum doloribus iusto molestiae ducimus minus quae illum! Magni eum doloribus iusto molestiae ducimus minus quae illum! Magni eum doloribus iusto  vel
                    exceptur 
                  </small>
                  <span class="col-1 d-none d-md-block ">
                    <a class="sec2_igon" href="page2.html" target="_blank"><FontAwesomeIcon icon={faChevronRight} className='text-warning' /></a>
                  </span>
                </div>
              </div>
            </div>
            </Link>
            <Link to='/ShowNews'>
            <div class="row text-light sec2">
              <div class="col-xs-12 col-md-4">
                <img class="sec2_img" src={img} />
              </div>
              <div class="col-xs-12 col-md-8 ">
                <p>EDUCATION</p>
                <div class="line"></div>
                <div class="row">
                  <h3 class="col-9"> HERE'S THE TITLE OF THE ARTICLE</h3>
                  <span class=" col-3 text-center">
                    <FontAwesomeIcon className='text-warning' icon={faClock} /> 2 h ago
                  </span>
                </div>
                
                <div class="row">
                  <small class="col-11 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    exerci eius maiores molestiae ducimus minus quae illum! Magni eum doloribus iusto molestiae ducimus minus quae ilquae illum! Magni eum doloribus iusto molestiae ducimus minus quae illum! Magni eum doloribus iusto molestiae ducimus minus quae illum! Magni eum doloribus iusto  vel
                    exceptur 
                  </small>
                  <span class="col-1 d-none d-md-block ">
                    <a class="sec2_igon" href="page2.html" target="_blank"><FontAwesomeIcon icon={faChevronRight} className='text-warning' /></a>
                  </span>
                </div>
              </div>
            </div>
            </Link>
            <Link to='/ShowNews'>
            <div class="row text-light sec2">
              <div class="col-xs-12 col-md-4">
                <img class="sec2_img" src={img} />
              </div>
              <div class="col-xs-12 col-md-8 ">
                <p>EDUCATION</p>
                <div class="line"></div>
                <div class="row">
                  <h3 class="col-9"> HERE'S THE TITLE OF THE ARTICLE</h3>
                  <span class=" col-3 text-center">
                    <FontAwesomeIcon className='text-warning' icon={faClock} /> 2 h ago
                  </span>
                </div>
                <div class="row">
                  <small class="col-11 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    exerci eius maiores molestiae ducimus minus quae illum! Magni eum doloribus iusto molestiae ducimus minus quae ilquae illum! Magni eum doloribus iusto molestiae ducimus minus quae illum! Magni eum doloribus iusto molestiae ducimus minus quae illum! Magni eum doloribus iusto  vel
                    exceptur 
                  </small>
                  <span class="col-1 d-none d-md-block ">
                    <a class="sec2_igon" href="page2.html" target="_blank"><FontAwesomeIcon icon={faChevronRight} className='text-warning' /></a>
                  </span>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
    )
}

export default News ;