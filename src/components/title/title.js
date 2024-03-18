import moment from 'moment';

function Title({title}){
    const date = moment();
    const currentDate = date.format('Do MMMM YY')
    return(
        <div className='mt-3'>
            <h3 className="border-bottom border-6 border-warning text-uppercase pb-2 text-light"  style={{width:'fit-content'}}>{title}</h3>
            <p className='text-light p-0 m-0 '>{currentDate}</p>
        </div>
    )
}

export default Title;