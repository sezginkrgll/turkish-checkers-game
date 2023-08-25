import React from "react";
// Chakra-UI
import { Box, Circle, Grid, useToast } from "@chakra-ui/react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { chooseStamp, moveStamp } from "../../redux/checkersSlice";

function CheckersBoard() {
  const cb = useSelector((state) => state.checkers.cb);
  const selectedStamp = useSelector((state) => state.checkers.selectedStamp);
  const capture = useSelector((state) => state.checkers.capture);
  const turn = useSelector((state) => state.checkers.turn);

  const dispatch = useDispatch();

  const isSelectedStamp = (row, col) => {
    return selectedStamp.row === row && selectedStamp.col === col;
  };

  const toast = useToast();

  const handleChoose = (stamp) => {
    if (!stamp.value.startsWith(turn)) {
      toast({
        title: `Hamle Sırası: ${turn === "white" ? "Beyaz" : "Siyah"}`,
        status: "info",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
    dispatch(chooseStamp(stamp));
  };

  return (
    <Grid
      templateColumns="repeat(8, 1fr)"
      gap={"2px"}
      width={"434px"}
      p={"10px"}
      bg={"blackAlpha.400"}
    >
      {cb.map((row, y) =>
        row.map((value, x) => (
          <Box
            key={y + x}
            w={"50px"}
            h={"50px"}
            bg={(y + x) % 2 === 0 ? "gray.300" : "gray.500"}
          >
            {value === "route" && !capture && (
              <Box
                w={"50px"}
                h={"50px"}
                bg={"green.100"}
                onClick={() =>
                  dispatch(moveStamp({ row: y, col: x, value: value }))
                }
              />
            )}
            {value === "capture" && (
              <Box
                w={"50px"}
                h={"50px"}
                bg={"green.100"}
                onClick={() =>
                  dispatch(moveStamp({ row: y, col: x, value: value }))
                }
              />
            )}
            {value !== null && value !== "route" && value !== "capture" && (
              <Circle
                w={"42px"}
                h={"42px"}
                m={"4px"}
                bg={value.startsWith("white") ? "gray.100" : "gray.700"}
                borderWidth={isSelectedStamp(y, x) ? "3px" : ""}
                borderColor={"green.300"}
                onClick={() => {
                  handleChoose({ row: y, col: x, value: value });
                }}
              >
                {value.includes("king") && (
                  <Circle
                    w={"30px"}
                    h={"30px"}
                    borderWidth={"3px"}
                    borderColor={
                      value.startsWith("white") ? "gray.700" : "gray.100"
                    }
                  />
                )}
              </Circle>
            )}
          </Box>
        ))
      )}
    </Grid>
  );
}

export default CheckersBoard;
