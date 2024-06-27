import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import VideoPlayerControls from "./VideoPlayerControls";
import videoFile from "./sample.mp4"; // Adjust this path as per your project structure
import Overlay from "./Overlay";
import Quiz from "./Quiz"; // Import the Quiz component
import { intData, floatData, stringData, boolData } from "./overlaydata";

function MovingCircle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false); // State to control the Quiz component
  const [data, setData] = useState(intData);
  const videoRef = useRef(null);

  const startPlaying = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = videoRef.current.currentTime;

      if (currentTime >= 40 && currentTime <= 57) {
        setData(intData);
        setShowInput(true);
        setShowQuiz(false); // Ensure Quiz is not shown
      } else if (currentTime >= 60 && currentTime <= 75) {
        setData(floatData);
        setShowInput(true);
        setShowQuiz(false); // Ensure Quiz is not shown
      } else if (currentTime >= 87 && currentTime <= 100) {
        setData(stringData);
        setShowInput(true);
        setShowQuiz(false); // Ensure Quiz is not shown
      } else if (currentTime >= 113 && currentTime <= 126) {
        setData(boolData);
        setShowInput(true);
        setShowQuiz(false); // Ensure Quiz is not shown
      } else if (currentTime >= 132 && currentTime <= 147) {
        setShowQuiz(true); // Show Quiz
        setShowInput(false); // Ensure input overlay is not shown
      } else {
        setShowInput(false);
        setShowQuiz(false); // Hide both input overlay and Quiz
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []); // Run the effect only once when the component mounts

  const handleSubmit = () => {
    setShowInput(false);
  };

  return (
    <div className="container">
      <div className="overlay">
        <div className="header">
          <h2>DSA: Data Types</h2>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{ cursor: "pointer", fontSize: "40px", color: "gray" }}
          />
        </div>
        <div className="main">
          <div className="video-layer">
            <video ref={videoRef} src={videoFile} className="background-video" />
          </div>
          {showInput && (
            <div className="input-section">
              <Overlay obj={data} />
              <button onClick={handleSubmit} className="submit-button">
                Done
              </button>
            </div>
          )}
          {showQuiz && <Quiz />} {/* Render Quiz component if showQuiz is true */}
        </div>
      </div>
      <VideoPlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        videoRef={videoRef}
      />
    </div>
  );
}

export default MovingCircle;