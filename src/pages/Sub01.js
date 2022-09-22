import React from "react";
import "../css/Sub01.scss";
import "../component/Product.js";
import Product from "../component/Product.js";

const PRODUCT = [
    { id: 1, list: "추천행사상품" },
    { id: 2, list: "과일" },
    { id: 3, list: "채소" },
    { id: 4, list: "쌀/잡곡" },
    { id: 5, list: "축산" },
    { id: 6, list: "수산/건어물" },
];

const Sub01 = () => {
    return (
        <div className="Sub01">
            <div className="title">
                <h2>이번 주 행사상품</h2>
                <p>행사기간 : 2022.09.22 ~ 2022.09.28</p>
                <p>점포별 가격 및 취급상품 상이</p>
            </div>
            <div className="proCate">
                <div className="container">
                    <ul>
                        {PRODUCT.map((el) => {
                            return <li key={el.id}>{el.list}</li>;
                        })}
                    </ul>
                </div>
            </div>
            <Product />
        </div>
    );
};

export default Sub01;
