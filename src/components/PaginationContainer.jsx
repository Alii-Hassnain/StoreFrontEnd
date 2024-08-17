import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const PaginationContainer = () => {
  
  // const request = "https://strapi-store-server.onrender.com/api/products?search=s&category=all&company=all&order=a-z&price=100000&shipping=true"
  const {meta} = useLoaderData();
  console.log(`this is meta data ${meta}`);
  console.log(meta);

  
  const {pageCount,page} = meta.pagination;
  const {search,pathname} = useLocation();
  console.log(search);
  console.log(pathname);
  const navigate = useNavigate();

  const pages = Array.from({length:pageCount},(_,index) =>{
    return index + 1;
  })

  const handlePageChange = (pageNumber)=>{
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);

  };

  if(pageCount < 2) return null;

  return (
    <div className='mt-16 flex justify-end'>
      <div className="join">
        <button className='btn btn-xs sm:btn-md join-item'
          onClick={()=>{
            let prevPage = page -1 ;
            if(prevPage < 1 ) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev  
        </button>
        {
          pages.map((pageNumber)=>{
            return (
              <button
                onClick={()=> handlePageChange(pageNumber)}
                key={pageNumber}
                className={`btn btn-xs sm:btn-md border-none join-item ${
                  pageNumber === page ? "bg-blue-500 text-white" : ""
                }`}
              >
                {pageNumber}
              </button>
            )
          })
        } 

        <button
          className='btn btn-xs sm:btn-md joint-item'
          onClick={()=>{
            let nextPage = page + 1 ;
            if(nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default PaginationContainer