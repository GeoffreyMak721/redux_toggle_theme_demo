import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CounterValue({ count = 0 }) {
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
