import { useState, useEffect } from "react";
import { getPotsAndPans } from "../../util/apiURL";
import PotsAndPansCard from "../../pages/PotsAndPansCard/PotsAndPansCard";
import Loader from "react-loaders";

import "./PotsAndPansCards.scss";

const PotsAndPansCards = () => {
  const [potsAndPans, setPotsAndPans] = useState([]);

  useEffect(() => {
    getPotsAndPans()
      .then((response) => {
        setPotsAndPans(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="PotsAndPansPage">
        {potsAndPans.map((potandpan, index) => {
          return <PotsAndPansCard potandpan={potandpan} key={index} />;
        })}
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default PotsAndPansCards;
