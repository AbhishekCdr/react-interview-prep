import { createPortal } from "react-dom";

function ModalComponent(props) {
  const { isOpen, onClose, children } = props;
  //create portal used for modal
  return createPortal(
    <>
      {isOpen && (
        <div
          style={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              width: "600px",
              height: "50vh",
              border: "1px solid black",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "beige",
            }}
          >
            <button onClick={onClose}>X</button>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
    // create new div inside index.html
  );
}

export default ModalComponent;
