import { ReactComponent as Icon } from "../../images/icon-arrow.svg";
import Info from "./Info";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onChange, value, data }) => {
  return (
    <div className={styles.image}>
      <div className={styles.control}>
        <label htmlFor="ip">IP ADDRESS TRACKER</label>
        <div className={styles.action}>
          <input
            type="text"
            name="ip"
            id="ip"
            onChange={onChange}
            value={value}
            placeholder="Search for an IP Address or Domain"
          />
          <button>
            <Icon />
          </button>
        </div>
        <Info data={data} />
      </div>
    </div>
  );
};

export default SearchBar;
