import styles from './Bio.module.scss';

const Bio = ({ headshot, name, tagline, role }) => {
  return (
    <div className={styles.bio}>
      <div className={styles.bioImage}>
      <img src={headshot} alt={`Headshot of ${name}`} />
      </div>
      <div className={styles.bioContent}>
        <p className={styles.bioContentName}>
          { name }
        </p>
        <p className={styles.bioContentTagline}>
          { tagline }
        </p>
        <p className={styles.bioContentRole}>
          { role }
        </p>
      </div>
    </div>
  );
}

export default Bio;