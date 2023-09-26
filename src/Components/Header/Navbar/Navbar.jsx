import { NavLink } from "react-router-dom";
import Logo from "../Logo/logo";

const Navbar = () => {
    return (
        <div>
            <nav className="flex bg-blue-700 text-white justify-between items-center py-5 shadow-md px-10">
                <Logo></Logo>

                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " outline  font-bold" : "font-bold"
                            }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favourites" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " font-bold" : "font-bold"
                            }
                        >Favourites</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "  font-bold" : "font-bold"
                            }
                        >Login</NavLink>
                    </li>
                </ul>

            </nav>

        </div>
    );
};

export default Navbar;