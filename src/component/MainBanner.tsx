import styles from './MainBanner.module.css';
import Left_section from "./Left_section";
import RightBottomSection from "./RightBottomSection";
import RightTopSection from './RightTopSection';

const MainBanner = () => {
    return (
        <>
        <div className={styles.section}>
            <Left_section/>
            <RightTopSection/>
            <RightBottomSection/>
        </div>
        </>
    )
}

export default MainBanner;
