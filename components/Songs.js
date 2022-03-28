import {useRecoilValue} from "recoil";
import {playlistState} from "../atoms/playlistAtom";
import Song from "./Song";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="px-8 pb-28 flex flex-col space-y-1 text-white">
      {playlist?.tracks.items.map((item, index) => (
        <Song order={index} item={item} key={index}/>
      ))}
    </div>
  );
};

export default Songs;
