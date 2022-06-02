import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

type Props = { value: number };

function CircularRating({ value }: Props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={value} color="warning" />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default CircularRating;
