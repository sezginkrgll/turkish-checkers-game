import React from "react";
// Chakra-UI
import { Box, Flex, Grid } from "@chakra-ui/react";
import Turn from "./Turn";
import CheckersBoard from "./CheckersBoard";
function Board() {
  return (
    <Box name="board" w={"454px"} ml={"auto"} mr={"auto"} mt={"20px"}>
      <Flex>
        <Grid
          templateRows="repeat(8, 1fr)"
          gap={"2px"}
          width={"20px"}
          pt={"10px"}
          pb={"10px"}
          pl={"2px"}
          textAlign={"center"}
          bg={"blackAlpha.400"}
        >
          <Box lineHeight={"50px"} bg={"gray.100"}>
            8
          </Box>
          <Box lineHeight={"50px"} bg={"gray.100"}>
            7
          </Box>
          <Box lineHeight={"50px"} bg={"gray.100"}>
            6
          </Box>
          <Box lineHeight={"50px"} bg={"gray.100"}>
            5
          </Box>
          <Box lineHeight={"50px"} bg={"gray.100"}>
            4
          </Box>
          <Box lineHeight={"50px"} bg={"gray.100"}>
            3
          </Box>
          <Box lineHeight={"50px"} bg={"gray.100"}>
            2
          </Box>
          <Box lineHeight={"50px"} bg={"gray.100"}>
            1
          </Box>
        </Grid>
        <CheckersBoard />
      </Flex>
      <Grid
        templateColumns="repeat(8, 1fr)"
        gap={"2px"}
        width={"auto"}
        pr={"10px"}
        pl={"30px"}
        pb={"2px"}
        textAlign={"center"}
        bg={"blackAlpha.400"}
      >
        <Box lineHeight={"20px"} bg={"gray.100"}>
          A
        </Box>
        <Box lineHeight={"20px"} bg={"gray.100"}>
          B
        </Box>
        <Box lineHeight={"20px"} bg={"gray.100"}>
          C
        </Box>
        <Box lineHeight={"20px"} bg={"gray.100"}>
          D
        </Box>
        <Box lineHeight={"20px"} bg={"gray.100"}>
          E
        </Box>
        <Box lineHeight={"20px"} bg={"gray.100"}>
          F
        </Box>
        <Box lineHeight={"20px"} bg={"gray.100"}>
          G
        </Box>
        <Box lineHeight={"20px"} bg={"gray.100"}>
          H
        </Box>
      </Grid>
      <Turn />
    </Box>
  );
}

export default Board;
