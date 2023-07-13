import { memo } from "react";
import './style.scss';
const ProfilePage = () => {
    return (
        <div>
            <div className="intro">
                <h1 >Xin chào các bạn, Tôi là <span>Tòng Văn Hoàn,</span> tôi sinh ra và lớn lên trên mảnh đất <span>Điện Biên.</span></h1>

                <h1 >  Không chỉ vang danh thế giới với chiến thắng lịch sử <span>Điện Biên Phủ</span> “lừng lẫy năm châu chấn động địa cầu” mà Điện Biên còn là nơi có rất nhiều đặc sản mang đậm nét văn hóa của 19 dân tộc anh em.</h1>

                <h1 >   Các món ăn ở <span>Điện Biên</span> cực kì độc đáo, có một không hai khiến du khách đến từ đâu cũng sẽ hài lòng. Các món ăn của người dân tộc ở Điện Biên được chế biến rất cầu kỳ, nhất là nghệ thuật sử dụng các loại gia vị độc đáo của núi rừng Tây Bắc. Xôi nếp nương, thịt trâu gác bếp hay hoa ban là những món ăn đặc sắc khi đặt chân đến vùng đất <span>Điện Biên Phủ</span> lịch sử. Đừng mải vui chơi với những di tích lịch sử, danh lam thắng cảnh ở <span>Điện Biên</span> mà bỏ quên đi rất nhiều món ăn ngon ở <span>Điện Biên</span> các bạn nhé.</h1>

                <h1 >  Các đặc sản ở <span>Điện Biên:</span> Gạo Điện Biên, Thịt khô gác bếp, Gà đen Tủa Chùa, Trà Tuyết Tủa Chùa, cà phê Mường Ẳng, Xôi nếp nương, ẩm thực người Thái Tây Bắc…còn rất rất nhiều các đặc sản khác nữa đang chờ đợi bạn khám phá.</h1>
            </div>
            <div className="goal">
           <h1> Với mong muốn mang đến cho các thực khách miền xuôi sự trải nghiệm và có cơ hội được thưởng thức các đặc sản Điện Biên. Mình xin được góp 1 phần gia vị ẩm thực trong mỗi bếp ăn của gia đình người Việt. Phương châm của tôi là” Mang sản phẩm Tây Bắc ngon, an toàn nhất đến với mọi gia đình Việt “</h1>
            </div>
        </div>
    );


};

export default memo(ProfilePage);