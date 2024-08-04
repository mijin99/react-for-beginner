
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Moviecp from "../components/Moviecp";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const { id } = useParams(); //id 받아오기 가능 ! 
    const getMovie = async () => {
        const json = await (
            await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101&movieCd=${id}`)
        ).json();
        setMovies(json.boxOfficeResult.dailyBoxOfficeList);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
        {loading ? (<h1>Loading...</h1>) : (
            <div>
                {movies.map((movie2) => (
                    <Moviecp
                        id ={movie2.movieCd} 
                        key={movie2.movieCd}
                        mvName={movie2.movieNm}
                        openDt={movie2.openDt} />
                ))}
            </div>)
        }
        </div>
    );
}
export default Detail;