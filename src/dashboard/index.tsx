import Head from "next/head";

import { Alert, Button, Typography, Input } from "@mui/material";
export default function Dashboard() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f5f5f5", width: "100% !important", height: "100vh", display: 'content' }} >
      <Alert variant="outlined" severity="success" sx={{ mt: 1, backgroundColor: "primary.50" }}>
        Helloo Succeded
      </Alert>


    <Alert variant="outlined" severity="warning" sx={{ mt: 1, }}>
        Helloo Succeded
      </Alert>


          <Alert variant="outlined" severity="error" sx={{ mt: 1,  }}>
        Helloo Succeded
      </Alert>

<Input type="text" placeholder="Enter your name" /> 

      <Button
          variant="contained"
        >
          <Typography variant="sm"> Submit </Typography>
        </Button>

    </div>
  );
}
