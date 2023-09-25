import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner/Banner";
import Phones from "../Components/Phones/Phones";
const Home = () => {
    const phones = useLoaderData();
    console.log("phones: ",phones);
    return (
        <div className="px-10">
            <Banner></Banner>
            <Phones phones = {phones}></Phones>

            
        </div>
    );
};

export default Home;