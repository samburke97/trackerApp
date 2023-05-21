import ApiResponse from "../models/api";
import styles from "./Info.module.css";

const Info: React.FC<{
  data: ApiResponse;
}> = ({ data }) => {
  return (
    <div className={styles.content}>
      <div>
        <h2>IP ADDRESS</h2>
        <p>{data?.ip}</p>
      </div>
      <div>
        <h2>LOCATION</h2>
        <p>{data?.location?.country}</p>
      </div>
      <div>
        <h2>TIMEZONE</h2>
        <p>UTC: {data?.location?.timezone}</p>
      </div>
      <div>
        <h2>ISP</h2>
        <p>{data?.isp}</p>
      </div>
    </div>
  );
};

export default Info;
