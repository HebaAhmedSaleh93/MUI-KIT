import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Alert, Button, Typography } from "@mui/material";
export default function Home() {
  return (
    <div className={styles.container}>
      <Alert variant="outlined" severity="success" sx={{ mt: 1, backgroundColor: "primary.50" }}>
        Helloo Succeded
      </Alert>



      <Button
          variant="contained"
        >
          <Typography variant="sm"> Submit </Typography>
        </Button>

    </div>
  );
}
