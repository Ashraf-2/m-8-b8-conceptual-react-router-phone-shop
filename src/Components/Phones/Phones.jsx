import Phone from "./Phone";

const Phones = ({ phones }) => {
    return (
        <div className="py-5">
            <h1 className="text-center text-xl">All categories phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">

                {
                    phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;