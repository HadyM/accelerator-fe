import { Link } from "react-router-dom";

import "./CookingStyleCard.scss";

const CookingStyleCard = ({ cookingstyle }) => {
  return (
    <>
      <div className="CookingStyleCard">
        <div className="CookingStyleLayout">
          <Link
            to={`/cookingstyles/${cookingstyle?.id}`}
            state={{ cookingstyle: cookingstyle }}
          >
            <h2>{cookingstyle.name}</h2>
            <img src={cookingstyle.image} alt="cookingstylepicture" />
            <h3>{cookingstyle.description}</h3>
          </Link>
        </div>
      </div>
    </>
  );
};
export default CookingStyleCard;
