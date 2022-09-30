import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

import CounterValue from "./components/counter-value";
import CounterButton from "./components/counter-button";

import rdxImg from "./assets/redux.png";

import "./App.css";

function App() {
  const [countNumber, setCountNumber] = React.useState(0);

  const handleCountNumberChange = (e) => {
    setCountNumber(
      isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
    );
  };

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Box sx={{ width: 200 }} mb={4}>
        <img alt="" src={rdxImg} style={{ width: "100%", height: "auto" }} />
      </Box>
      <Card sx={{ display: "flex", minWidth: 300 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              value={countNumber}
              onChange={handleCountNumberChange}
            />
          </CardContent>
          <CounterButton countNumber={countNumber} />
        </Box>
        <CounterValue />
      </Card>
    </Stack>
  );
}

export default App;
