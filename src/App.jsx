import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/Remove";
import PlayArrowIcon from "@mui/icons-material/ConfirmationNumber";
import SkipNextIcon from "@mui/icons-material/Add";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import "./App.css";

function App() {
  const theme = useTheme();

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Card sx={{ display: "flex", width: 300 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous" color="primary">
              <SkipPreviousIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="play/pause" color="primary">
              <ArrowCircleDownIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next" color="primary">
              <SkipNextIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography component="div" variant="h1">
            0
          </Typography>
        </Box>
      </Card>
    </Stack>
  );
}

export default App;
