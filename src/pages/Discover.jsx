import { Error,Loader,SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/features/services/Shazamdojo";



const Discover = () => {

    const {data,isFetching,isError}=useGetTopChartsQuery();
    console.log(data,isFetching,isError);

    if(isFetching){
        return (
            <Loader title="LoadingSongs..."/>
        )
    }
    else if(isError){
        return <Error />
    }
  return (
    <div className="flex flex-col">
        <div className="w-full flex justify-between items-centre sm:flex-row flex-col mt-4 mb-10">
            <h2 className="font-bold text-3xl text-white text-left">Discover </h2>
            <select onChange={()=>{}} value="" className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                {genres.map((genre)=>{
                    return <option key={genre.value} value={genre.value}>{genre.title}</option>
                })} 
            </select>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data.tracks?.map((song,index)=>{
                return <SongCard 
                key={song.key}
                song={song}
                i={index} />
            })}
        </div>
    </div>
  )
}

export default Discover;