import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function Pagination({items, itemsCount, pathname, setShowLogError}) {

    const [pageCount, setPageCount] = useState(null)
    const {page} = useParams()

    useEffect(()=>{
        let endIndex = itemsCount * page;
        let startIndex = endIndex - itemsCount;
        let paginatedItems = items.slice(startIndex, endIndex);
        setShowLogError(paginatedItems);

        let pageNumber = Math.ceil(items.length/itemsCount)
        setPageCount(pageNumber)
    },[page, items])

  return (
    <div className='pagination'>
        <ul>
            <li>
                <Link>
                {/* <i className='fas fa-long-arrow-alt-right' ></i> */}
                <FaAngleRight />
                </Link>
            </li>
            <li>
                <Link>
                1
                </Link>
            </li>
            <li>
                <Link>
                2
                </Link>
            </li>
            <li>
                <Link>
                3
                </Link>
            </li>
            <li>
                <Link>
                {/* <i className='fas fa-long-arrow-alt-left' ></i> */}
                <FaAngleLeft />
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Pagination