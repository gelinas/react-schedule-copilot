import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Rivet Support Schedule</Typography>
      <Box sx={{ flexGrow: 1 }}>Schedule</Box>
    </Box>
  );
}

export default App;
