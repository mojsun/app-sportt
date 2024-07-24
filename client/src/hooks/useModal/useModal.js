import { useState } from "react";

const useModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return [show, handleClose, handleShow];

  // const [isShowing, setIsShowing] = useState(false);

  // function toggle() {
  //   setIsShowing(!isShowing);
  // }

  // return {
  //   isShowing,
  //   toggle,
  // };
};

export default useModal;
