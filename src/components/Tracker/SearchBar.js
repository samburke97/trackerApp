import { ReactComponent as Icon } from "../../images/icon-arrow.svg";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onChange, value }) => {
  return (
    <div className={styles.control}>
      <label htmlFor="ip">
        <h1>TRACKER</h1>
      </label>
      <div className={styles.actions}>
        <input
          type="text"
          name="ip"
          id="ip"
          onChange={onChange}
          value={value}
          placeholder="🔎 IP OR DOMAIN"
        />
        <button>
          <Icon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
