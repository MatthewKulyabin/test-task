import React from 'react';

type PaginationTypes = {
  page: number;
  amountOfPages: number;
  onClick: (page: number) => void;
};

const Pagination = ({ page, amountOfPages, onClick }: PaginationTypes) => {
  const getClasses = (index: number): string => {
    let classes = 'page-link ';
    classes = page === index + 1 ? ' active ' : '';
    return classes;
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {Array.apply(null, Array(Math.ceil(amountOfPages))).map((_, index) => (
          <li
            key={index}
            className={getClasses(index)}
            onClick={() => onClick(index)}
          >
            <a className="page-link " href="#">
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
