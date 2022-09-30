import React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import { useDispatch } from "react-redux";

import { setCount, increment, decrement } from "../redux/slices/counterSlice";

export default function CounterButton({ getCountNumber }) {
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleSetCount = () => {
    dispatch(setCount(getCountNumber()));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
      <IconButton
        aria-label="previous"
        color="primary"
        onClick={handleDecrement}
      >
        <RemoveIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
      <IconButton
        aria-label="play/pause"
        color="primary"
        onClick={handleSetCount}
      >
        <ArrowCircleDownIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
      <IconButton aria-label="next" color="primary" onClick={handleIncrement}>
        <AddIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
    </Box>
  );
}
