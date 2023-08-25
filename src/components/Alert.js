import React from "react";
// Chakra-UI
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../redux/checkersSlice";

function Alert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const end = useSelector((state) => state.checkers.end);
  const turn = useSelector((state) => state.checkers.turn);
  const dispatch = useDispatch();

  if (end && !isOpen) {
    onOpen();
  }

  const close = () => {
    dispatch(restartGame());
    onClose();
  };

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Game Over
          </AlertDialogHeader>
          <AlertDialogBody fontSize="lg" fontWeight="bold">
            {turn === "white" ? "Black" : "White"} Won
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="red" onClick={close} ml={3}>
              Restart
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
