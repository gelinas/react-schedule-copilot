import { Box } from "@mui/material";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { createShift, selectAllShiftsByEngineerId } from "../api/shiftSlice";
import { daysOfTheWeek } from "./ScheduleCanvas";

/**
 * Hover to schedule row is a row that shows up when the user hovers over a developer row
 * it represents the intersection of the developer and the day
 * the row appears gray when the user is hovering over a developer row
 *
 * each day shows whether or not the developer is scheduled for that day
 *
 * if the user is not scheduled for that day,
 * the specific day the user is hovering over is highlighted in blue with a white "+" icon in the middle
 *
 */

export const HoverToScheduleRow = ({
  developer,
}: {
  developer: { name: string; id: number; color: string };
}) => {
  const dispatch = useDispatch<any>();
  const shifts = useSelector(selectAllShiftsByEngineerId(developer.id));
  console.log(shifts);

  // dispatches an action to add a shift for the developer on the day the user clicked
  const onClickDay = (day: number) => {
    dispatch(
      createShift({
        engineerId: developer.id,
        startDate: dayjs().day(day).hour(8).toDate(),
        endDate: dayjs().day(day).hour(17).toDate(),
      })
    );
  };

  return (
    <Box
      sx={{
        flex: 1,
        height: "50px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "grey",
          opacity: 0.5,
        },
      }}
    >
      {daysOfTheWeek.map((day) => {
        if (
          shifts.some((shift) =>
            dayjs(shift.startDate).isSame(dayjs().day(day), "day")
          )
        ) {
          return (
            <Box // Scheduled Day Cell
              key={day}
              sx={{
                flex: 1,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                backgroundColor: developer.color,
              }}
            >
              {developer.name}
            </Box>
          );
        } else {
          return (
            <Box //  Open Day Cell
              key={day}
              onClick={() => onClickDay(day)}
              sx={{
                flex: 1,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                opacity: 0,
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "blue",
                  opacity: 0.5,
                },
              }}
            >
              +
            </Box>
          );
        }
      })}
    </Box>
  );
};
