import SearchBar from "./SearchBar";
import Info from "./Info";
import styles from "./Hero.module.css";
import ApiResponse from "../models/api";

const Hero: React.FC<{
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  data: ApiResponse;
}> = ({ data, onChange, value }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <SearchBar onChange={onChange} value={value} />
        <Info data={data} />
      </div>
    </header>
  );
};

export default Hero;
