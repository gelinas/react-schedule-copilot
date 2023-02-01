import { Box, Typography } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./api/store";
import { ScheduleCanvas } from "./components/ScheduleCanvas";
import { StyleConstants } from "./StyleConstants";

function App() {
  return (
    <Provider store={store}>
      <Box // Root Container
        sx={{
          flexGrow: 1,
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Rivet Support Schedule</Typography>
        <Box // Schedule Container
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box // Schedule Table
            sx={{
              flex: 1,
              margin: 1,
              border: "2px solid grey",
              backgroundColor: StyleConstants.hue.blue[25],
              borderRadius: 1,
              display: "flex",
              position: "relative",
            }}
          >
            <ScheduleCanvas />
          </Box>
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
