import { memo } from "react";
import "./style.scss";
import { AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import logo from '../img/logo.png'
const Footer = () => {
    return (
        /*<footer>
            <p>&copy; 2023 Tong Van Hoan</p>
            <p>Contact us at hoan@gmail.com</p>
        </footer>
        */
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="logo"> <img src={logo} alt="" /></div>
                    <div className="social-icons">
                        <a href="/"><AiFillTwitterCircle /></a>
                        <a href="/"><AiFillFacebook /></a>
                        <a href="/"><AiFillLinkedin /></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-links">
                        <a href="/">Trang chủ</a>
                        <a href="/">Cửa hàng</a>
                        <a href="/">Sản phẩm</a>
                        <a href="/">Bài viết</a>
                        <a href="/">Liên hệ</a>
                    </div>
                    <div className="copyright">
                        © 2023 TongVanHoan. Contact us at hoan@gmail.com
                    </div>
                </div>
            </div>
        </footer>

    );


};


export default memo(Footer);