import { useState } from "react";
import ModalComponent from "./ModalComponent";
import Children from "./Children";

function Modal() {
  const [isOpen, setOpen] = useState(false);

  function onOpen() {
    setOpen((old) => !old);
  }

  function onClose() {
    setOpen(false);
  }

  return (
    <div>
      <button onClick={onOpen}>Open Modal</button>
      <ModalComponent isOpen={isOpen} onClose={onClose}>
        <Children />
      </ModalComponent>
    </div>
  );
}

export default Modal;
