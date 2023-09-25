import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='flex flex-col my-10 justify-self-center items-center'>
            <h2>404 Not Found!</h2>
            <Link to="/"><button className='btn btn-neutral'>Home</button></Link>
        </div>
    );
};

export default Errorpage;