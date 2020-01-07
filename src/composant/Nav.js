import React from 'react'
import './Nav.css';

export default function Nav(props) {
    const navmen = props.dropen
    return (
        <div>
            <ul className="navmen">
                {navmen.map((element, i) => (

                    <li className="nn" key={i}>
                        <a  className="listee" href="#">{element.elem}</a>

                        {element.active && (
                            <ul className="list">
                                {element.drop.map((e, j) => (
                                    <li  key={j}><a href="#">{e}</a></li>
                                ))}

                            </ul>
                        )}
                    </li>


                ))}
            </ul>
        </div>
    )
}

