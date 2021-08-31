import React, { useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { GiSplitCross } from "react-icons/gi";
import YouTube from "react-youtube";
import "../styles/VideoModal.css";
const VideoModal = (props) => {
  const { modalState, closeModal, videoId } = props;

  const playerConfig = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    console.log(videoId);
  }, [props]);

  return (
    <div>
      <Modal isOpen={modalState} toggle={closeModal}>
        <ModalBody className='videoModal_body'>
          <YouTube videoId={videoId} opts={playerConfig} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default VideoModal;
