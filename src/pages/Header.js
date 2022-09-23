import React from "react";
import { Link } from "react-router-dom";

const NAV = [
    { id: 1, title: "카테고리", name: "category" },
    { id: 2, title: "전단행사", link: "/sub01" },
    { id: 3, title: "신상품", link: "/sub02" },
    { id: 4, title: "단독특가", link: "/sub03" },
    { id: 5, title: "베스트", link: "/sub04" },
    { id: 6, title: "기획전", link: "/sub05" },
    { id: 7, title: "브랜드관", link: "/sub06" },
    { id: 8, title: "자주구매", link: "/sub07" },
    { id: 9, title: "택배배송", link: "/sub08" },
];

const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <div className="top">
                    <h1>
                        <Link to="/">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/default_logo.png"
                                }
                                alt=""
                            />
                        </Link>
                    </h1>
                    {/* <form action="">
                        <input type="text" placeholder="검색어를 입력하세요" />
                        <button>
                            <i className="xi-search"></i>
                        </button>
                    </form>
                    <div className="user">
                        <i>아이콘1</i>
                        <i>아이콘2</i>
                        <i>아이콘3</i>
                    </div> */}
                </div>
                <nav className="GNB">
                    <ul>
                        {NAV.map((el) => (
                            <li key={el.id} className={el.name}>
                                <Link to={el.link}>{el.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
