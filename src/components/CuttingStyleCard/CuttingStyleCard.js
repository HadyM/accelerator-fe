// import { Link } from "react-router-dom";

import "./CuttingStyleCard.scss";

const CuttingStyleCard = ({ cuttingstyle }) => {
  return (
    <>
      <div className="CuttingStyleCard">
        <div className="CuttingStyleLayout">
          {/* <Link
            to={`/cuttingstyles/${cuttingstyle?.id}`}
            state={{ cuttingstyle: cuttingstyle }}
          > */}
          <h2>{cuttingstyle.name}</h2>
          <img src={cuttingstyle.image} alt="cuttingstylepicture" />
          <h3>{cuttingstyle.description}</h3>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};
export default CuttingStyleCard;
