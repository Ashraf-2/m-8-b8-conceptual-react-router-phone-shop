import { useEffect, useState } from "react";
import FavPhnCard from "./FavPhnCard";

const Favourites = () => {
    const [favourites, setFevourites] = useState([]);
    const [noFound, setNoFound] = useState("");
    const [isShow,setIsShow] = useState(false);
    const [totalPrice,setTotalPrice] =useState(0);


    useEffect(() => {
        const favItems = JSON.parse(localStorage.getItem('fovourites_phone'));
        if (favItems) {

            setFevourites(favItems);
            const total = favItems.reduce((preValue,currentItem) => preValue + currentItem.price, 0);
            setTotalPrice(total);
        }
        else {
            // console.log("no data found");
            setNoFound("No data found");
        }

    }, [])

    console.log("fav: ", favourites);
    const handleLocalClear = () => {
        localStorage.clear();
        setFevourites([]);
        setNoFound("No data found");
    }

    return (
        <div className="mx-10">
            {

                noFound ? <h1 className="h-[34vh] flex items-center justify-center text-3xl font-bold">{noFound}</h1>
                    :
                    <div>
                        <div className="text-center">
                            {favourites.length > 0 ? <button onClick={handleLocalClear} className="btn btn-error text-base mx-auto mb-5 text-white ">Delete All</button> : ""}
                            <h1 className="text-xl font-bold mb-5">Total Price: {totalPrice}</h1>
                        </div>
                        <div className="grid grid-cols-2 gap-5 ">
                            {
                                isShow ? favourites.map(phone => <FavPhnCard key={phone.id} phone={phone} ></FavPhnCard>) 
                                : favourites.slice(0,4).map(phone => <FavPhnCard key={phone.id} phone={phone} ></FavPhnCard>)

                                
                            }

                        </div>
                        <div className="mt-5 text-center flex items-center">
                            {favourites.length > 4 ? <button onClick={() => setIsShow(!isShow)} className="btn btn-accent mx-auto">{isShow ?"Show Less":"See More"}</button>:""}
                        </div>
                    </div>
            }
        </div>
    );
};

export default Favourites;