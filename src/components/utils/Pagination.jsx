import React from "react";

const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };

  const handleNext = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrev = () => {
    setPage((prevState) => (prevState < 1 ? null : prevState - 1));
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center text-white gap-4 py-5">
      <button
        onClick={handlePrev}
        className={`text-sm border rounded-md px-4 py-2 ${
          page === 1 ? "hidden" : ""
        }`}
      >
        Prev
      </button>
      <span>
        {page} of {lastPage}
      </span>
      <button
        onClick={handleNext}
        className="text-sm border rounded-md px-4 py-2"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
