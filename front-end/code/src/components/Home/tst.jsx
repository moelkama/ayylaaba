import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

const items = [...Array(100).keys()];

function PaginatedComponent() {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const startIndex = (activePage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul>
        {paginatedItems.map((item) => (
          <li key={item}>Item #{item}</li>
        ))}
      </ul>
      <Pagination
        itemClass=""
        linkClass="bg-black border-2 border-black hover:text-black hover:bg-slate-300 text-white font-bold border rounded-xl h-10 w-10 flex justify-center items-center"
        activeLinkClass="bg-white"
        activeClass="[&>*]:text-black"
        innerClass="flex gap-2"
        linkClassNext="hidden"
        hideFirstLastPages={true}
        hideDisabled={true}
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={items.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default PaginatedComponent;