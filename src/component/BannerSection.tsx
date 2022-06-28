import styles from './BannerSection.module.css';
import MainBanner from './MainBanner';

const BannerSection = () => {
    return (
        <>
            <div className={styles.section}>
                <MainBanner />
            </div>
        </>
    )
}

export default BannerSection;