import { Box } from "@mui/system";
import { daysOfTheWeek } from "./ScheduleCanvas";

const developers = [
  {
    name: "Louis",
    id: "1",
    color: "red",
  },
  {
    name: "Andy",
    id: "2",
    color: "blue",
  },
  {
    name: "Scott",
    id: "3",
    color: "green",
  },
  { name: "James", id: "4", color: "black" },
  { name: "Nate", id: "5", color: "orange" },
];

/**
 * Developer Rows is a component used within the ScheduleCanvas that contains a subject cell with each developer's card and daily cells with the weekly support schedule
 */
export const DeveloperRows = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50px",
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {developers.map((developer) => (
        <Box // Developer Row
          key={developer.id}
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box // Developer Cell
            sx={{
              width: "200px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DeveloperCard developer={developer} />
          </Box>
          <HoverToScheduleRow />
        </Box>
      ))}
    </Box>
  );
};

/**
 * A card that represents a developer
 */
const DeveloperCard = ({
  developer,
}: {
  developer: { name: string; id: string; color: string };
}) => {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: developer.color,
        border: "1px solid grey",
        borderRadius: 1,
        margin: 1,
        padding: 1,
      }}
    >
      {developer.name}
    </Box>
  );
};

/**
 * Hover to schedule row is a row that shows up when the user hovers over a developer row
 * it represents the intersection of the developer and the day
 * the row appears gray when the user is hovering over a developer row
 * the specific day the user is hovering over is highlighted in blue with a white "+" icon in the middle
 */

const HoverToScheduleRow = () => {
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
      {daysOfTheWeek.map((day) => (
        <Box // Day Cell
          key={day}
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            opacity: 0,
            "&:hover": {
              backgroundColor: "blue",
              opacity: 0.5,
            },
          }}
        >
          +
        </Box>
      ))}
    </Box>
  );
};
