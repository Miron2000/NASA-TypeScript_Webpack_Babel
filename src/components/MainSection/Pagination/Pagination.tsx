import React, { FC } from 'react';

interface PropsForPagination {
  photosPerPage: number;
  totalPhotos: number;
  paginate: (number: number) => void;
}

const Pagination: FC<PropsForPagination> = ({ photosPerPage, totalPhotos, paginate }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    if (totalPhotos === 0) {
      pageNumbers = [];
    }
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <button type="button" className="page-link" key={number} onClick={() => paginate(number)}>{number}</button>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
