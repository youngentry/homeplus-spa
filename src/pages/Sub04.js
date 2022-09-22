import React from "react";
import "../css/Sub04.scss";

const BESTLIST = [
    { id: 1, category: "전체", iconName: "xi-500px" },
    { id: 2, category: "신선식품", iconName: "xi-adobe" },
    { id: 3, category: "냉장/냉동", iconName: "xi-amazon" },
    { id: 4, category: "상온식품", iconName: "xi-android" },
    { id: 5, category: "생활/주방/뷰티", iconName: "xi-apple" },
    { id: 6, category: "유아동/완구", iconName: "xi-behance" },
    { id: 7, category: "문구/도서/반려동물", iconName: "xi-bitbucket" },
    { id: 8, category: "자동차/레저", iconName: "xi-blogger" },
    { id: 9, category: "가전", iconName: "xi-digg" },
    { id: 10, category: "인테리어/리빙", iconName: "xi-evernote" },
];

const Sub04 = () => {
    return (
        <div className="Sub04">
            <h2>베스트</h2>
            <div className="container">
                <ul>
                    {BESTLIST.map((el) => {
                        return (
                            <li key={el.id}>
                                <i className={el.iconName}></i>
                                <p>{el.category}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sub04;
