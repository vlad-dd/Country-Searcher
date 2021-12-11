import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";

const GET_COUNTRY = gql`
query Country($code: ID!) {
  country(code: $code) {
    name
    emoji
    capital
  } 
}
`;

const Search = () => {
   

const updateParam = (e) => {
    setInputParam(e.currentTarget.value);
  };

  const [inputParam, setInputParam] = useState("");
  const [sub,{ data }] = useLazyQuery(GET_COUNTRY);

 

  console.log(data)


  return (
    <div>
      <Link to="/">To all countries</Link>
      <input onChange={(e) => updateParam(e)} />
      {inputParam}
      <button onClick={() => sub(
          {variables: {code: inputParam.toUpperCase()}}
      )}>Search</button>
      <div>
      {data && data.country.name}
      {data && data.country.emoji}
      </div>
    </div>
  );
};

export default Search;
