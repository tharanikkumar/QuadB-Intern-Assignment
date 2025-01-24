import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleShow } from '../apis';
import styles from '../modules/Show.module.css';

const SingleShow = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        getSingleShow(id)
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>

            <div className={styles.container}>
                <h3>"{data.name}" summary</h3>
                <p>{data.summary}</p>
            </div>

        </div>
    )
}

export default SingleShow;