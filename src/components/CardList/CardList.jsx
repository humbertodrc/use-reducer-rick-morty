import React, { useState, useEffect } from "react";
import ErrorComponent from "../Error/ErrorComponent";
import Loading from "../Loading/Loading";

const CardList = ({ data, setData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState();

  const getCharacters = async () => {
    const info = await fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .catch((e) => "error");

    if (info) {
      setData(info);
      setIsLoading(false);
      setHasError(false);
    }
  };

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
      getCharacters();
    }
  }, [data]);

  return (
    <>
      {hasError && <ErrorComponent />}
      {isLoading && <Loading />}

      <div className="grid-container">
        {data?.results &&
          !isLoading &&
          data.results.map((item) => (
            <div className="card" key={`${item.name}-´${item.id}`}>
              <img className="card-img" src={item?.image} alt={item?.name} />
              <span>{item?.name}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default CardList;