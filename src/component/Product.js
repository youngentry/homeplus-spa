import React from "react";
import "../css/Sub01.scss";

function Product() {
    return (
        <div>
            <div className="proLi">
                <div className="container">
                    <ul>
                        <li>
                            <figure></figure>
                            <strong>레드킹크랩</strong>
                            <div className="price">
                                250,000 <span>원</span>
                            </div>
                            <div className="star">월 51개 구매</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Product;
