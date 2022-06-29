import React, { FC, useState, useEffect, JSXElementConstructor, useRef, MutableRefObject, createRef } from "react";
import "./Dropdown.css";
import {
    validationVariant,
    validationSize,
    validationColor,
} from "./validation";

export interface DropdownProps {
    image?: string | undefined;
    user?: string | undefined;
    occupation?: string | undefined;
    links?: JSX.Element[] | JSX.Element;
    size?: "medium" | "small" | "large";
    variant?: "contained" | "outlined"
    color?: 'primary' | 'secondary' |'dark'|'success'|'info'|'warning'|'danger'; 
}

const Dropdown: FC<DropdownProps> = ({
    image,
    user,
    occupation,
    links,
    size = "large",
    variant = "contained",
    color = "primary", 
    //onClick,
    ...props
}) => {
    //const [dropdown, setDropdown] = useState(false)

    /*const handleMouseEvent = ( event: React.MouseEvent<HTMLDivElement> ) => {
        event.preventDefault(); 
        const drop = document.querySelector<HTMLDivElement>( '.dropdown-content') 
        console.log(drop)
        drop?.classList.toggle( 'dropdown-toggle') 
    }; */

    const [dropdown, setDropdown] = useState(false)

    const dropRef = useRef() as MutableRefObject<HTMLDivElement>
    const f = () => {
        dropRef.current.classList.toggle('dropdownToggle')
    }
    return (
        <div>
            <div className="dropdownItem">
                <div className="imgBox" onClick={f}>
                    <img src={image} alt={user}></img>     
                </div>
            </div>
            <div className= {`dropdownContent dropdownToggle `} ref={dropRef}>
                <div className="content">
                    <div className="name">{user}</div>
                    <div className="occupation">{occupation}</div>
                    <hr className="divider" />
                </div>
                <ul className="links">
                    {links} 
                </ul>
            </div>
        </div>
    );
};

export default Dropdown