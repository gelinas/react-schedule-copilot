import { Box } from "@mui/system";
import { HoverToScheduleRow } from "./HoverToScheduleRow";
import { daysOfTheWeek } from "./ScheduleCanvas";

const developers = [
  {
    name: "Louis",
    id: 1,
    color: "red",
  },
  {
    name: "Andy",
    id: 2,
    color: "blue",
  },
  {
    name: "Scott",
    id: 3,
    color: "green",
  },
  { name: "James", id: 4, color: "black" },
  { name: "Nate", id: 5, color: "orange" },
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
          <HoverToScheduleRow developer={developer} />
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
  developer: { name: string; id: number; color: string };
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
