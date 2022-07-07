/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../slices/filtersSlice';

type PaginationProps = {
  pageCount:number;
};

const Pagination:React.FC<PaginationProps> = ({ pageCount }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: any) => state.filters.currentPage);
  const incHandler = () => {
    if (currentPage !== pageCount) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };
  const decHandler = () => {
    if (currentPage !== 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };
  return (
    <div>
      <ul className="pagination">
        <li className={currentPage === 1 ? 'inactive' : ''} onClick={decHandler}>{'<'}</li>
        {Array(pageCount).fill(1).map((page, i) => <li key={i} className={currentPage === i + 1 ? 'active' : ''} onClick={() => dispatch(setCurrentPage(i + 1))}>{i + 1}</li>)}
        <li className={currentPage === pageCount ? 'inactive' : ''} onClick={incHandler}>{'>'}</li>
      </ul>
    </div>
  );
};

export default Pagination;
