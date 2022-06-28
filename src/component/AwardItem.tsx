import styles from './AwardItem.module.css';

interface Item {
    text1 :string;
    text2 :string;
    name : string;
}

const AwardItem = ({text1, text2, name} :Item) => {
    return (
        <>
        <div className={name === 'google' ? styles.section_google : styles.section_apple}>
            {text1}
            <br/>
            {text2}
        </div>
        </>
    )
}

export default AwardItem;