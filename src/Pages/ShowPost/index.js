import React, { useEffect, useState } from "react";
import Pagination from "../../Compoents/Pagination/Pagination";
import style from './index.module.css'

function ShowPost({ data }) {
  const [totalPageArray, setTotalPageArray] = useState([]);
  const [dataLimit, setDataLimit] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const sibling=1
  const [postData,setPostData]=useState([])
  const dots="..."
  const numberOfPages=Math.ceil(data.length/dataLimit)
  const leftSibling=currentPage-1
  const rightSibling=currentPage+1
  const showDotsLeftSide=leftSibling>2
  const showDotsRightSide=rightSibling< numberOfPages-1
  
  useEffect(() => {
      
      if(numberOfPages<10){
        let pages=[]
        for(let i=1;i<=numberOfPages;i++){
            pages.push(i)
        }
        setTotalPageArray(pages)
      }else{
           if(!showDotsLeftSide && showDotsRightSide){
           const  leftItemCount=3+2*sibling
           const leftPagesCount=[]
            for(let i=1;i<=leftItemCount;i++){
                leftPagesCount.push(i)
            }
            leftPagesCount.push(dots)
            leftPagesCount.push(numberOfPages)
            setTotalPageArray(leftPagesCount)
           }
            if(showDotsLeftSide && !showDotsRightSide){
           const  rightItemCount=3+2*sibling
           const rightPagesCount=[]
            rightPagesCount.push(1)
            rightPagesCount.push(dots)
            for(let i=numberOfPages-rightItemCount;i<=numberOfPages;i++){
                rightPagesCount.push(i)
            }
            
            setTotalPageArray(rightPagesCount)
           } if(showDotsLeftSide && showDotsRightSide){
            const middleRange=[]
            for(let i=leftSibling;i<=rightSibling;i++){
                middleRange.push(i)
            }
            setTotalPageArray([1,dots,...middleRange,dots,numberOfPages])
           }
        }
        
      

    const startIndex = (currentPage - 1) * dataLimit;
    const endIndex = currentPage * dataLimit;
    const dataArray = data.slice(startIndex, endIndex);
    setPostData(dataArray);
  }, [data, dataLimit, currentPage]);

  function handlePageClick(pageNumber){
    if(pageNumber!==dots){
        setCurrentPage(pageNumber)
    }
      
  }
  function recordsPerPage(e){
    setDataLimit(e.target.value)
  }
  return (
     <div className={style.container}>
      
    <div className={style.tableContainer}>
      <table className={style.table}>
       <div className={style.tableHead}>
      
            <div className={style.idColumn}>Id</div>
            <div className={style.titleColumn}>Name</div>
            <div className={style.titleColumn}>Email</div>
            <div className={style.detailColumn}>details</div>
        
       </div>
       <div className={style.dataBody}>
      
          {postData.map((item, index) => (
            <tr  key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
       
       </div>
      </table>  
    </div>
    <Pagination
     pages={totalPageArray}
     click={handlePageClick}
     records={recordsPerPage}
    />
     </div>
  );
}

export default ShowPost;
