import React from "react";

const SITEINFO = [
    { id: 1, content: "회사소개" },
    { id: 2, content: "공지사항" },
    { id: 3, content: "이용약관" },
    { id: 4, content: "개인정보처리방침", name: "privacy" },
    { id: 5, content: "청소년보호정책" },
    { id: 6, content: "입점 및 제휴문의" },
    { id: 7, content: "고객의견함" },
    { id: 8, content: "인재채용" },
];

const COMPANYINFO = [
    { id: 1, title: "대표이사", content: "이제훈" },
    { id: 2, title: "주소", content: "서울특별시 강서구 화곡로 398(등촌동)" },
    { id: 3, title: "사업자등록번호", content: "220-81-60348" },
];

const Footer = () => {
    return (
        <div className="Footer">
            <div className="siteInfo">
                <div className="container">
                    <ul>
                        {SITEINFO.map((el) => (
                            <li key={el.id} className={el.name}>
                                <span>{el.content}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="findMarket">
                        <i>위치아이콘</i>매장찾기
                    </div>

                    <div className="family">
                        Family Site<i>아래아이콘</i>
                    </div>
                </div>
            </div>
            <div className="companyInfo">
                <div className="container">
                    <h2>홈플러스 주식회사</h2>
                    <div className="content">
                        <div className="left">
                            <ul>
                                {COMPANYINFO.map((el) => {
                                    return (
                                        <li key={el.id}>
                                            {el.title}: {el.content}
                                        </li>
                                    );
                                })}
                            </ul>
                            <dl>
                                <dt>통신판매신고번호: </dt>
                                <dd>2016-서울강서-0451호</dd>
                                <dt>청소년보호책임자: </dt>
                                <dd>조혜영</dd>
                            </dl>
                            <p>
                                사이트 내에는 홈플러스㈜에 입점한 개별판매자가
                                판매하는 상품이 포함되어 있습니다. <br /> 해당
                                상품의 경우 홈플러스㈜는 통신판매중개자로서 판매
                                당사자가 아니며, 상품정보 및 거래 등에 대한
                                책임을 지지 않습니다.
                            </p>
                            <p>
                                고객님은 안전거래를 위해 현금 등으로 결제 시
                                저희 쇼핑몰에서 가입한 구매안전서비스 소비자
                                피해보상보험 서비스를 이용하실 수 있습니다.
                            </p>
                            <div className="copyright">
                                Copyright &copy; Homeplus Co., LTD. All Rights
                                Reserved.
                            </div>
                        </div>
                        <div className="right">
                            <div className="service">
                                <ul>
                                    <li>
                                        고객센터 <span>1577-3355</span>
                                    </li>
                                    <li>
                                        업무시간 : 09시 ~ 22시(명절당일 휴무)
                                    </li>
                                    <li>
                                        <a href="mailto:onlinemart@homeplus.co.kr">
                                            Email : onlinemart@homeplus.co.kr
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        분쟁처리 <span>1577-3355</span>
                                    </li>
                                    <li>
                                        <a href="mailto:onlinemart@homeplus.co.kr">
                                            Email : onlinemart@homeplus.co.kr
                                        </a>
                                    </li>
                                    <li>분쟁처리 절차</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
