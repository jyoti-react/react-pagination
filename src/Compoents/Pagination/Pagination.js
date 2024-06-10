import React from 'react'
import style from './Pagination.module.css'

function Pagination({pages,click,records}) {
    console.log(pages);
  return (
    <div className={style.btnContainer}>
        <select onClick={records} className={style.dropDown}>
            <option>20</option>
            <option>50</option>
            <option>100</option>
            
           
        </select>
       
        {
            pages.map((item)=>(
                <div >
                    <button className={style.btn} onClick={()=>click(item)}>{item}</button>
                </div>
                
            ))
        }
    
    </div>
  )
}

export default Pagination