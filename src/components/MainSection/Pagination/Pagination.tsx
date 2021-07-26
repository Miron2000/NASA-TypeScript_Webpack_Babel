import React, { FC, useState } from 'react';

interface PropsForPagination {
  photosPerPage: number;
  totalPhotos: number;
  paginate: (number: number) => void;
  currentPage: number;
  setCurrentPage: (number: number) => void;
}

const Pagination: FC<PropsForPagination> = ({
  photosPerPage, totalPhotos, paginate, currentPage, setCurrentPage,
}) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);
  const pageNumbers = [];
  const pageNumberLimit = 5;

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number: number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button type="button" className={currentPage === number ? 'activeBtn' : ''} id="btn__number" key={number} onClick={() => paginate(number)}>{number}</button>
      );
    }
    return null;
  });

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage + 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      {totalPhotos !== 0 && (
        <ul className="pagination">
          {totalPhotos > 5 && (<button type="button" className="btn__prev" onClick={handlePrevBtn}>Prev</button>)}
          {renderPageNumbers}
          {totalPhotos > 5 && (<button type="button" className="btn__next" onClick={handleNextBtn}>Next</button>)}
        </ul>
      ) }

    </div>
  );
};

export default Pagination;
