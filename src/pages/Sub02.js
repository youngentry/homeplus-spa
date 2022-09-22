import React from "react";
import "../css/Sub02.scss";

const Sub02 = () => {
    return (
        <div className="Sub02">
            <div className="container">
                <figure>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/images/promotion01.jpg"
                        }
                        alt=""
                    />
                </figure>
            </div>
        </div>
    );
};

export default Sub02;
