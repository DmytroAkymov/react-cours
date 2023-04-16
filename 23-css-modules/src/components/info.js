import './info.css';
import styles from './Info.module.css';

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Hello from H2</h2>
      <button className="my-button">Info commponent</button>
      <button className={styles.myOtherButton}>Info styles</button>
    </div>
  );
}

export default Info;
