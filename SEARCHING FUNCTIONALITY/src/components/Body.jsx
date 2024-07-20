import React, { useState } from "react";
import { restaurantList } from "../../contansts";
import Cards from "./Cards";

const Body = () => {
  const [search, setSearch] = useState("");
  const [rest, setRest] = useState(restaurantList);
  const [filter, setFilter] = useState(restaurantList);

  const handleClick = (e) => {
    setFilter(restaurantList);
    window.location.reload();
  };

  function filterData(search, rest1) {
    //console.log(search);
    let filterData = rest1.filter((reslist) =>
      reslist?.data?.name?.toLowerCase().includes(search.toLowerCase())
    
  );
    return filterData;
  }

//   function filterData(search, rest1) {
//     return  rest1.filter((reslist) =>
//       reslist?.data?.name?.toLowerCase().includes(search.toLowerCase())
//   );
//   }

  return (
    <>
      <div className="p-1 text-white">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="mx-4 p-1 bg-red-600 text-white"
          onClick={() => {
            let data = filterData(search, rest);
            //console.log(rest);
            //console.log(data);
            setFilter(data);
          }}
        >
          Search
        </button>
        <button className="p-1 bg-red-600 text-white" onClick={handleClick}>
          Reset
        </button>
      </div>
      <div className="flex flex-wrap mx-20 ">
        {filter.map((resturant) => {
          return <Cards {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
