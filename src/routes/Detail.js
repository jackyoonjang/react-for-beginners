import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import loders from "./Home.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const getMovie = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        setDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <div className={loders.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    <h1 className={styles.movie__title}>{detail.title}</h1>
                    <img src={detail.medium_cover_image} alt={detail.title} className={styles.movie__img} />
                    <p className={styles.movie}>{detail.description_full}</p>
                    <ul className={styles.movie__genres}>
                        {detail.genres?.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Detail;
