import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import Moviecp from "../components/Moviecp";


function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMoives = async () => {
        const json = await (await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101`
        )).json();

        // const json = await response.json();
        setMovies(json.boxOfficeResult.dailyBoxOfficeList);
        setLoading(false);
    };

    useEffect(() => {
        getMoives();
    }, []);

    console.log(movies);

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

export default Home;