import styles from "./Hero.module.css";
import SearchBar from "./SearchBar";
import Info from "./Info";

const Search = ({ data, onChange, value }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <SearchBar onChange={onChange} value={value} />
        <Info data={data} />
      </div>
    </header>
  );
};

export default Search;
