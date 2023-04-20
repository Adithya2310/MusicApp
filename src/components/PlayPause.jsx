import {FaPlayCircle,FaPauseCircle} from "react-icons/fa";

const PlayPause = ({ song, isPlaying, activeSong, handlePause, handlePlay }) => (isPlaying&&activeSong?.title===song.title?
  <FaPlayCircle 
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />:
  <FaPauseCircle 
    size={35}
    className="text-gray-300"
    onClick={handlePause}
  />
);

export default PlayPause;
