import styles from './RightTopSection.module.css';
import MetricItem from './MetricItem';

const RightTopSection = () => {
    return (
        <>
        <div className={styles.section}>
            <MetricItem num={350} text1={"만 명"} text2= {"의 사용자"}/>
            <MetricItem num={21} text1={"만 개"} text2= {"의 리뷰"}/>
            <MetricItem num={650} text1={"만 개"} text2= {"의 저장"}/>
        </div> 
        </>
    )
}

export default RightTopSection;