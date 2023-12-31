import { memo } from "react";
import "./style.scss"
import { AiOutlineFacebook, AiOutlineMail, AiOutlineInstagram, AiFillTwitterSquare, AiOutlineLogin, AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fomatter } from "utils/fomatter";
import logo from '../img/logo.png'

const Header = () => {
    return (
        <div>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    hoan@gmail.com

                                </li>
                                <li>
                                    miễn phí đơn {fomatter(100000)}
                                </li>

                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>

                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiFillTwitterSquare />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineGlobal />
                                    </Link>
                                </li>
                                <li>

                                    <Link to={""}>
                                        <AiOutlineLogin />
                                        <span>Đăng nhập</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav">
                <div className="row">
                    <div className="col-6 nav_left">
                        <div className="logo">
                            <img src={logo} alt="" />
                            {/* <h1>FooDB</h1> */}
                        </div>
                    </div>
                    <div className="col-6 nav_right" >
                        <ul>
                            <li> <Link className="Link" to="/">Trang chủ</Link></li>
                            <li> <Link className="Link" to="/cua-hang"> Cửa hàng</Link></li>
                            <li> <Link className="Link" to="/san-pham">Sản phẩm</Link></li>
                            <li> <Link className="Link" to="/gioi-thieu">Giới thiệu</Link></li>
                            <li> <Link className="Link" to="/lien-he">Liên hệ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );


};

export default memo(Header);