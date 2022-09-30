import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function CounterValue() {
  const { value: count } = useSelector((state) => state.counter);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component="div" variant="h1">
        {count}
      </Typography>
    </Box>
  );
}
