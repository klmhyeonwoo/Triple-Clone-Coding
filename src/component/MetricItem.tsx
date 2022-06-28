import styles from './MetricItem.module.css';
import UseCountup from '../hooks/UseCountup';

interface Item {
    num :number;
    text1 :string;
    text2 : string;
}

const MetricItem = ({num, text1, text2} :Item) => {

    const end = num;
    const start :number = 0;
    const duration :number = 2000;

    return (
        <div className={styles.section}>
            <strong>
                <UseCountup start={start} end={end} duration={duration}/>
                {text1}
            </strong>
            {text2}
        </div>
    )
};

export default MetricItem;