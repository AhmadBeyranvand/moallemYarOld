import { Link } from "react-router-dom";

export default function NavLink(props) {
    let commonStyle = "my-3 flex w-11/12 mr-auto justify-between items-center rounded-r-lg py-3 px-8"
    if (!props.active) {
        commonStyle += " common hover:bg-indigo-700 border border-indigo-700 "
        return (
            <li>
                <Link to={props.to} className={commonStyle}>
                    <span className="mx-2 flex"> {props.icon} </span>
                    <span className="mx-2 text-white"> {props.children}  </span>
                </Link>
            </li>
        );
    }
    commonStyle += " active text-primary bg-white group-hover:text-black"
    return (
        <li>
            <Link to={props.to} className={commonStyle}>
                <span className="mx-2 flex text-indigo-800"> {props.icon} </span>
                <span className="mx-2 text-indigo-900"> {props.children}  </span>
            </Link>
        </li>
    );
}