import React from "react";
import "../css/Sub03.scss";

const Sub03 = () => {
    return (
        <div className="Sub03">
            <div className="container">
                <figure>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/images/specialprice01.gif"
                        }
                        alt=""
                    />
                </figure>
            </div>
        </div>
    );
};

export default Sub03;
