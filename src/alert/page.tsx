import { ClassNames } from "@emotion/react";
import styles from "../../styles/Home.module.css";
import FilledAlerts from "./fillled-alerts";
import OutlinedAlert from "./outlined-alert";

export default function Home() {
  return (
    <div className={styles["alert-container"]}>
      <FilledAlerts />

      <OutlinedAlert />
    </div>
  );
}
