import AwardItem from './AwardItem';
import styles from './RightBottomSection.module.css';

const RightBottomSection = () => {
    return (
        <>
        <div className={styles.section}>
            <AwardItem text1={"2018 구글 플레이스토어"} text2={"올해의 앱 최우수상 선정"} name={'google'}/> 
            <AwardItem text1={"2018 애플 앱스토어"} text2={"오늘의 여행앱 선정"} name={'apple'}/> 
        </div>
        </>
    )
}

export default RightBottomSection;