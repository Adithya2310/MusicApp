import { loader } from "../assets";

const Loader = ({title}) => (
  <div className="w-full flex justify-center items-center flex-col object-contain">
    <img src={loader} alt="loading" />
    <h1 className="font-bold text-2xl text-white mt-2 " >{title||"isLoading"}</h1>
  </div>
);

export default Loader;
