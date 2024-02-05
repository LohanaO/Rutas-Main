
import React from "react";
import ReactPaginate from "react-paginate";

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (selectedPage: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      previousLabel={
        <span className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            d="M8.5 7.25a1.25 1.25 0 1 0-2.5 0v33.5a1.25 1.25 0 1 0 2.5 0zM42 9.257c0-2.615-2.931-4.159-5.088-2.68L15.408 21.32c-1.883 1.291-1.883 4.07 0 5.361l21.504 14.743C39.07 42.904 42 41.36 42 38.744zm-3.674-.618a.75.75 0 0 1 1.174.618v29.487a.75.75 0 0 1-1.174.618L16.822 24.62a.75.75 0 0 1 0-1.237z"
          />
        </svg>
        </span>
      }
      nextLabel={
        <span className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M14 2.5a.5.5 0 1 0-1 0v11a.5.5 0 0 0 1 0zM2 3.002a1 1 0 0 1 1.579-.816l7 4.963a1 1 0 0 1 .006 1.628l-7 5.037A1 1 0 0 1 2 13.003zm8 4.963L3 3.002v10z"
          />
        </svg>
        </span>
      }
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={3}
      pageRangeDisplayed={5}
     onPageChange={({ selected }) => {onPageChange(selected + 1);
  }}
      containerClassName={"flex items-center  justify-center mt-4 mb-4 xl:mt-0"}
      pageClassName={"mx-2 px-2 py-1 border border-solid border-gray-300 rounded-md h-8 w-8 flex items-center justify-center hover:bg-[#ececec] cursor-pointer "}
      previousClassName={"mx-2 px-2 py-1 border rounded-md flex items-center justify-center h-8 w-8"}
      nextClassName={"mx-2 px-2 py-1 border  rounded-md flex items-center justify-center h-8 w-8"}
      activeClassName={"bg-blue-300 px-2 py-1 rounded-md  "}
    />
  );
};

export default Paginator;
