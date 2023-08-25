import React from "react";
// Chakra-UI
import { Box, Flex } from "@chakra-ui/react";
// Redux
import { useSelector } from "react-redux";
function Turn() {
  const turn = useSelector((state) => state.checkers.turn);
  return (
    <Flex
      h={"20px"}
      w={"200px"}
      mt={"10px"}
      bg={"blackAlpha.400"}
      p={"3px"}
      ml={"auto"}
      mr={"auto"}
    >
      <Box w={turn === "white" ? "90%" : "10%"} h={"14px"} bg={"gray.100"} />
      <Box w={turn === "white" ? "10%" : "90%"} h={"14px"} bg={"gray.700"} />
    </Flex>
  );
}

export default Turn;
