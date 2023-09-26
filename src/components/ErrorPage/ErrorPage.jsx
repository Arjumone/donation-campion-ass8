import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="  items-center justify-center my-20"> 
            <h1 className=' flex justify-center items-center text-2xl'><span className=" font-bold">404</span>. Oops!!! No data found</h1>
            <div className=" text-center mt-3">
            <Link to="/"><button className=" btn bg-slate-300">Go back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;