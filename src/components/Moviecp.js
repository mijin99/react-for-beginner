import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Moviecp({ id, mvName, openDt }) {
  return <div >
    {/* 이미지를 넣는 경우
     <img src={medinum_cover_image} alt=""></img> */}
    <h2> <Link to={`/movie/${id}`}>{mvName}</Link></h2>
    <p>{openDt.length >235 ? `${openDt.slice(0,235)}...`:openDt}</p>
    <ul>
      <li>
        {/* 배열 속 배열안의 장르를 가져옴
       moview.genres.map((g) => <li key ={g}>{g}</li> */}
      </li>
    </ul>
  </div>;
}
Moviecp.propTypes = {
  id: PropTypes.string.isRequired,
  //coerImg : PropTypes.string.isRequired,
  mvName: PropTypes.string.isRequired,
  openDt: PropTypes.string.isRequired,
  //genres :PropTypes.arrayOf([PropTypes.string]).isRequired
}
export default Moviecp;