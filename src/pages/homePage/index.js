import { memo } from "react";
import './style.scss';
import { fomatter } from "utils/fomatter";
import Counter from "./test";

import img1 from './Image/1.jpg';
import thitraugacbep from './Image/thit-trau-gac-bep.jpg';
import sauchit from './Image/2.jpg';
import img2 from './Image/Hat-doi-rung.jpg';
import img3 from './Image/gao-nep-cam-1.jpg';
import img4 from './Image/gao-seng-cu-2.jpg';
const HomePage = () => {
    return (
        <div>
            <div className="categories">
                <div className="categories-top">
                    Danh mục sản phẩm
                </div>
                <div className="categories-bottom">
                    <div className="categories-bottom_item">
                        Đồ ăn
                    </div>
                    <div className="categories-bottom_item">
                        Gia vị
                    </div>
                    <div className="categories-bottom_item">
                        Gạo Điện Biên
                    </div>
                </div>
            </div>
            <div className="main-product">
                <div className="main-product_top">
                    Sản phẩm của chúng tôi
                </div>
                <div className="main-product_bottom">
                    <div className="main-product_bottom_box">
                        <div className="main-product_bottom_box_1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="main-product_bottom_box-2">
                            Cá nướng
                        </div>
                        <div className="main-product_bottom_box_3">
                          {fomatter(5000)}
                        </div>
                        <div>
                        <Counter/>
                        </div>
                        <div >
                            <button className="main-product_button">
                                <div className="add-product">Thêm vào giỏ hàng</div>
                            </button>
                        </div>
                    </div>
                    <div className="main-product_bottom_box">
                        <div className="main-product_bottom_box_1">
                            <img src={sauchit} alt="" />
                        </div>
                        <div className="main-product_bottom_box-2">
                            Sâu chít
                        </div>
                        <div className="main-product_bottom_box_3">
                          {fomatter(5000)}
                        </div>
                        <div>
                        <Counter/>
                        </div>
                        <div >
                            <button className="main-product_button">
                                <div className="add-product">Thêm vào giỏ hàng</div>
                            </button>
                        </div>
                    </div>
                    <div className="main-product_bottom_box">
                        <div className="main-product_bottom_box_1">
                            <img src={thitraugacbep} alt="" />
                        </div>
                        <div className="main-product_bottom_box-2">
                            Thịt trâu gác bếp
                        </div>
                        <div className="main-product_bottom_box_3">
                          {fomatter(5000)}
                        </div>
                        <div>
                        <Counter/>
                        </div>
                        <div >
                            <button className="main-product_button">
                                <div className="add-product">Thêm vào giỏ hàng</div>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="main-product_bottom">
                    <div className="main-product_bottom_box">
                        <div className="main-product_bottom_box_1">
                            <img src={img2} alt="" />
                        </div>
                        <div className="main-product_bottom_box-2">
                            Hại dổi 
                        </div>
                        <div className="main-product_bottom_box_3">
                          {fomatter(5000)}
                        </div>
                        <div>
                        <Counter/>
                        </div>
                        <div >
                            <button className="main-product_button">
                                <div className="add-product">Thêm vào giỏ hàng</div>
                            </button>
                        </div>
                    </div>
                    <div className="main-product_bottom_box">
                        <div className="main-product_bottom_box_1">
                            <img src={img4} alt="" />
                        </div>
                        <div className="main-product_bottom_box-2">
                       Gạo séng cù
                        </div>
                        <div className="main-product_bottom_box_3">
                          {fomatter(5000)}
                        </div>
                        <div>
                        <Counter/>
                        </div>
                        <div >
                            <button className="main-product_button">
                                <div className="add-product">Thêm vào giỏ hàng</div>
                            </button>
                        </div>
                    </div>
                    <div className="main-product_bottom_box">
                        <div className="main-product_bottom_box_1">
                            <img src={img3} alt="" />
                        </div>
                        <div className="main-product_bottom_box-2">
                        Gạo nếp cẩm
                        </div>
                        <div className="main-product_bottom_box_3">
                        {fomatter(100000)}
                        </div>
                        <div>
                        <Counter/>
                        </div>
                        <div >
                            <button className="main-product_button">
                                <div className="add-product">Thêm vào giỏ hàng</div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default memo(HomePage);
