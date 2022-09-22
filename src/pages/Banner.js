import React from "react";

const Banner = () => {
    return (
        <div className="Banner">
            <div className="container">
                <figure>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/assets/images/banner.jpg"
                        }
                        alt=""
                    />
                    <button className="xi-close"></button>
                </figure>
            </div>
        </div>
    );
};

export default Banner;
