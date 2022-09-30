import React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export default function CounterButton({ increment, decrement, setCount }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
      <IconButton aria-label="previous" color="primary" onClick={decrement}>
        <RemoveIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
      <IconButton aria-label="play/pause" color="primary" onClick={setCount}>
        <ArrowCircleDownIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
      <IconButton aria-label="next" color="primary" onClick={increment}>
        <AddIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
    </Box>
  );
}
