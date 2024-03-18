import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeArticle } from "../../redux/reducers/ArticlesSlice.";
import Pagination from "../../pagination/pagination";
import moment from "moment";
function Articles(){

  const articles = useSelector(state=>state.articles)
  console.log(articles)
  const dispatch = useDispatch()
  // useEffect(()=>{
  //     dispatch(fetchArticles())
  // }
  //     ,[])
  const date =moment()

    return(
        <>
        <div class="article-sec  ">
          <Link to="/adminPanel/addarticles" >
          <button className="btn btn-outline-warning ps-4 m-2 d-block pe-4 p-2 ms-auto" style={{transform:'translateY(-50px)'}}> Create new article</button>
          </Link>
              <div class="article-search d-lg-flex justify-content-lg-between">
                <h4 className="text-light">Articles</h4>
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
                    <th class="col">Category</th>
                    <th class="col">Status</th>
                    <th class="col">Date & Time</th>
                    <th class="col"></th>
                </tr>
                  </thead>
                {
                  articles?.map((article,index)=>(
                    <tr key={index}>
                      <td>{article.articleTitle}</td>
                      <td>{article.category}</td>
                      <td><button className={article.status?"":"bg-secondary text-light"}>
                        {article.status ? "published" : "draft"}
                        </button></td>
                      <td>{ 
                      moment(article.publishingDate, 'YYYY-MM-DD').format('D MMMM YYYY')
                      }<br/>{""}
                      </td>
                      <td>
                      <Link href="">
                        <FontAwesomeIcon icon={faPenToSquare} className='text-warning' />
                      </Link> 
                      <Link href="" onClick={()=>dispatch(removeArticle(article))}>
                        <FontAwesomeIcon icon={faTrashCan} className='text-warning' />
                      </Link>
                      </td>
                    </tr>

                  ))
                }


            </table>
            {/* <Pagination/> */}
              </div>
            </div>
        </>
    )
}
export default Articles;