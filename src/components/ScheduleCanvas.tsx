import { Box } from "@mui/system";
import { StyleConstants } from "../StyleConstants";
import dayjs from "dayjs";
import { DeveloperRows } from "./DeveloperRows";

export const daysOfTheWeek = [1, 2, 3, 4, 5, 6, 7];

export const ScheduleCanvas = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box // Subject Column
        sx={{
          width: "200px",
          height: "100%",
          borderRight: "2px solid grey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Box // Subject Header
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            borderBottom: "1px solid grey",
          }}
        >
          Developer
        </Box>
      </Box>
      {daysOfTheWeek.map((day) => (
        <Box // Day Column
          key={day}
          sx={{
            flex: 1,
            height: "100%",
            borderRight: "1px solid grey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor:
              day % 2 === 1 ? StyleConstants.hue.blue[50] : "white",
          }}
        >
          <Box // Day Header
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              borderBottom: "1px solid grey",
            }}
          >
            {dayjs().day(day).format("ddd M/D")}
          </Box>
        </Box>
      ))}
      <DeveloperRows />
    </Box>
  );
};
