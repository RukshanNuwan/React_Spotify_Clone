import useSpotify from "../hooks/useSpotify";
import {millisToMinutesAndSeconds} from "../lib/time";

const Song = ({order, item}) => {
  const spotifyApi = useSpotify();

  return (
    <div className='grid grid-cols-2'>
      <div className='flex items-center space-x-4'>
        <p>{order + 1}</p>
        <img src={item.track.album.images[0].url} alt="track-image" className='h-10 w-10'/>

        <div>
          <p>{item.track.name}</p>
          <p>{item.track.artists[0].name}</p>
        </div>
      </div>

      <div className='flex items-center justify-between ml-auto md:ml-0'>
        <p className='hidden md:inline'>{item.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(item.track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
