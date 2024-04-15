"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoLink }: { videoLink: string }) => {
  return <ReactPlayer url={videoLink as string} />;
};

export default VideoPlayer;
