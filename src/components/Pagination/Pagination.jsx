import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageNumber, setPageNumber, info }) {
  // const next = () => {
  //   if (pageNumber >= info.pages) return;
  //   setPageNumber((x) => x + 1);

  // }

  // const prev = () => {
  //   if(pageNumber === 1) return;
  //   setPageNumber((x) => x -   1);

  // }

  return (
    <div className="pagination">
      <ReactPaginate
        pageCount={info?.pages}
        previousLabel={'Prev'}
        previousClassName='btn btn-primary paginationbtn'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        nextClassName='btn btn-primary paginationbtn'
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
      />
    </div>
  );
}
