import React from "react";
// Chakra-UI
import { Box } from "@chakra-ui/react";
// Components
import Board from "./Board";
import Header from "./Header";
import Alert from "./Alert";
import Footer from "./Footer";
function Container() {
  return (
    <Box>
      <Header />
      <Board />
      <Alert />
      <Footer />
    </Box>
  );
}

export default Container;
