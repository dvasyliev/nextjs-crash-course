import styles from "./page.module.css";

const COUNT = 12;

export default function BirthdaysLoading() {
  return (
    <main className={styles.SkeletonMain}>
      <div className={styles.SkeletonTitle} />
      <div className={styles.SkeletonButtons}>
        <div className={styles.SkeletonButton} />
        <div className={styles.SkeletonButton} />
      </div>

      <div className={styles.SkeletonList}>
        {[...Array(COUNT)].map((_, index) => (
          <div key={index} className={styles.SkeletonItem}>
            <div className={styles.SkeletonImage} />
            <div className={styles.SkeletonFullName} />
            <div className={styles.SkeletonDateOfBirth} />
          </div>
        ))}
      </div>
    </main>
  );
}
