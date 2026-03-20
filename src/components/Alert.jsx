import { Dialog, Portal, Button } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const isSuccess = type === "success";

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            py={4}
            backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
          >
            <Dialog.Header fontSize="lg" fontWeight="bold">
              {isSuccess ? "All good!" : "Oops!"}
            </Dialog.Header>
            <Dialog.Body>{message}</Dialog.Body>
            <Dialog.Footer>
              <Button onClick={onClose}>Close</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default Alert;