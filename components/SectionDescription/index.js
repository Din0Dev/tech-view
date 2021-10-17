import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Image, Row } from "antd";
import SectionLikeShare from "./SectionLikeShare";
import CardItemWithReadMore from "components/CardItemWithReadMore";
import CommentCommon from "./CommentCommon";
import CardItem from "components/CardIem";
const propTypes = {};

const SectionDesCription = (props) => {
  //! State
  const dispatch = useDispatch();

  const listItem = [
    {
      id: 1,
      title:
        "Smartphone màn hình 'siêu phân giải 4K' của Xiaomi lộ diện, cả Apple và Samsung 'toát mồ hôi'",
      ImageSrc: "/static/assets/img/tin-tuc/section_attention_1.png",
    },
    {
      id: 2,
      title: "Samsung xóa mọi bằng chứng về sự tồn tại của Galaxy S21 FE",
      ImageSrc: "/static/assets/img/tin-tuc/section_attention_2.png",
    },

    {
      id: 3,
      title: "iPhone 13 giao hàng chậm trễ vì làn sóng COVID tại Việt Nam",
      ImageSrc: "/static/assets/img/tin-tuc/section_attention_3.png",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-description-view">
      <h3>
        So sánh iPhone 13 và iPhone 13 Pro: Những điều khác biệt cần biết về hai
        smartphone cao cấp mùa thu năm nay từ Apple
      </h3>
      <div className="section-description-view-credit">
        <p>By NamDo</p>
        <p>6:00 - 30/9/2021</p>
      </div>
      <h4>1. So sánh iPhone 13 và iPhone 13 Pro: Thiết kế và màu sắc</h4>
      <p>
        Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm iPhone bản
        tiêu chuẩn và iPhone (có Pro). Về kiểu dáng chung của iPhone 13 hay
        iPhone 13 Pro giống với iPhone 12 series năm ngoái. Bộ đôi mang kích
        thước tương đương nhau, lớp khung vỏ vuông vức bằng kim loại cùng chất
        liệu kính phủ lên cả mặt trước và sau, cạnh bên vát phẳng và các góc máy
        được thoải tròn tinh tế.
      </p>
      <Image
        width={"100%"}
        src="/static/assets/img/noi-dung/noi-dung_1.png"
        alt="abc"
      />
      <p>
        Sự khác biệt của bộ đôi iPhone 13 và iPhone 13 Pro đến từ cách sắp xếp
        ống kính trong cụm camera. Ở mặt sau iPhone 13, các ống kính không còn
        được sắp xếp theo chiều dọc như thế hệ trước mà được bố trí theo một
        đường chéo đặc biệt. Trong khi mô-đun máy ảnh của iPhone 13 Pro có thiết
        kế giữ nguyên so với dòng iPhone 12 Pro hiện tại. Dù có chút khác biệt
        nhưng nhìn chung thì cả hai đều sở hữu một ngoại hình sang trọng, đẳng
        cấp.
      </p>
      <Image
        width={"100%"}
        src="/static/assets/img/noi-dung/noi-dung_2.png"
        alt="abc"
      />
      <p>
        iPhone 13 năm nay có 5 màu gồm: Hồng, màu Trắng, màu Xanh Dương, màu Đỏ,
        Đen trong bộ khung bằng nhôm cực kỳ tinh xảo nên sẽ nhẹ hơn. Đối với
        iPhone 13 Pro sẽ có 4 màu gồm: Đen Graphite, Gold, Bạc và Xanh lam được
        khoác lên chất liệu thép không gỉ, mang đến cảm giác cao cấp, nặng hơn
        nên cầm sẽ đằm tay hơn.
      </p>
      <Image
        width={"100%"}
        src="/static/assets/img/noi-dung/noi-dung_3.png"
        alt="abc"
      />
      {/*  */}
      <h4>2. So sánh iPhone 13 và iPhone 13 Pro: Màn hình</h4>
      <Image
        width={"100%"}
        src="/static/assets/img/noi-dung/noi-dung_4.png"
        alt="abc"
      />
      <p>
        iPhone 13 năm nay có 5 màu gồm: Hồng, màu Trắng, màu Xanh Dương, màu Đỏ,
        Đen trong bộ khung bằng nhôm cực kỳ tinh xảo nên sẽ nhẹ hơn. Đối với
        iPhone 13 Pro sẽ có 4 màu gồm: Đen Graphite, Gold, Bạc và Xanh lam được
        khoác lên chất liệu thép không gỉ, mang đến cảm giác cao cấp, nặng hơn
        nên cầm sẽ đằm tay hơn.
      </p>
      <Image
        width={"100%"}
        src="/static/assets/img/noi-dung/noi-dung_5.png"
        alt="abc"
      />
      {/*  */}
      <h4>3. So sánh iPhone 13 và iPhone 13 Pro: Cấu hình</h4>
      <p>
        Về cấu hình, năm nay cấu hình iPhone 13 và iPhone 13 Pro cùng sử dụng
        một con chip là Apple A15 Bionic, so với Apple A14 năm ngoái thì thế hệ
        chip năm nay hứa hẹn sẽ tiếp tục tạo nên những sức mạnh mới, mang đến
        hiệu năng hàng đầu trên smartphone. Dung lượng RAM vẫn có sự khác biệt
        giữa 4 GB (trên iPhone 13) và 6 GB (trên iPhone 13 Pro).
      </p>
      <Image
        width={"100%"}
        src="/static/assets/img/noi-dung/noi-dung_6.png"
        alt="abc"
      />
      <p>
        Dung tích pin bộ đôi tăng lên hơn so với thế hệ iPhone năm ngoái, như
        Apple chia sẻ thì iPhone 12 và 12 Pro sẽ có thời lượng sử dụng lâu hơn
        phiên bản trước lần lượt là 2.5 và 1.5 tiếng. Để lưu trữ, iPhone 13 đem
        tới ba sự lựa chọn tương tự iPhone 12 năm ngoái là 64 GB, 128 GB và 256
        GB, còn iPhone 13 Pro sẽ nhỉnh hơn đôi chút là 128 GB, 256 GB và 512 GB.
        Lần đầu tiên, iPhone 13 Pro sẽ trang bị thêm bộ nhớ 1 TB lớn nhất từ
        trước tới nay. Điều này sẽ giúp bạn tha hồ lưu trữ ứng dụng, trò chơi
        hình ảnh thoải mái chẳng lo tốn dung lượng.{" "}
      </p>
      {/*  */}
      <h4>4. So sánh iPhone 13 và iPhone 13 Pro: Camera</h4>
      <p>
        Sự khác biệt lớn nhất đến từ cụm camera và đây cũng sẽ là yếu tố đáng
        chú ý nhất trong quá trình so sánh iPhone 13 và iPhone 13 Pro. Camera
        LiDAR tiếp tục là ưu thế độc quyền Apple mang lên dòng iPhone (có Pro)
        năm nay. Bộ đôi iPhone 13 và iPhone 13 Pro được trang bị công nghệ chống
        rung mới là dịch chuyển cảm biến nâng cao hiệu suất Sen-shift OIS giúp
        lấy nét tự động và khả năng chống rung mạnh mẽ hơn nhờ thuật toán AR.
      </p>
      <Image
        width={"100%"}
        src="/static/assets/img/noi-dung/noi-dung_7.png"
        alt="abc"
      />
      <p>
        Cụ thể, iPhone 13 mang 2 camera độ phân giải 12 MP. Còn iPhone 13 Pro có
        3 camera với độ phân giải tương tự iPhone 12 Pro tuy nhiên các cảm biến
        máy ảnh này lớn hơn, camera góc rộng được cải tiến với khẩu độ lớn cho
        chất lượng hình ảnh tốt hơn, ống kính tele vẫn chỉ xuất hiện trên bản
        Pro và có thể thu phóng lên 3x chứ không còn 2x như cũ.{" "}
      </p>
      <Image
        width={"100%"}
        src="/static/assets/img/noi-dung/noi-dung_8.png"
        alt="abc"
      />
      <p>
        Kế thừa sự ưu việt về khả năng nhiếp ảnh từ thế hệ iPhone trước, năm nay
        Apple mang đến bộ đôi iPhone 13 Pro và iPhone 13 Pro loạt tính năng mới
        như quay video cinema mode, tính năng này hỗ trợ nhận diện chủ thể thông
        minh hơn bằng AI, định dạng ProRes và nhiều bộ lọc mới, qua đó tiếp tục
        khẳng định vị thế dẫn đầu về nhiếp ảnh smartphone trên thị trường hiện
        nay.{" "}
      </p>
      <Image
        width={"100%"}
        src="/static/assets/img/noi-dung/noi-dung_9.png"
        alt="abc"
      />
      {/*  */}
      <h4>Nên mua iPhone 13 hay 13 Pro?</h4>
      <p>
        Nhìn chung, cả iPhone 13 và iPhone 13 Pro đều mang những ưu thế riêng
        nhất định. Nếu bạn là một người dùng tìm mua một chiếc iPhone với nhiều
        gam màu sắc, mức giá thấp mà vẫn hội tụ đầy đủ các yếu tố về thương
        hiệu, hiệu năng mạnh mẽ nhất trên thị trường thì mình đánh giá iPhone 13
        sẽ đáp ứng được nhu cầu trên đó! Còn nếu bạn thích 1 sản phẩm có cấu
        hình cao hơn một chút, như tần số quét màn hình cao 120 Hz để phục vụ
        các tựa game FPS, dung lượng bộ nhớ nhiều hơn hay hệ thống camera xịn sò
        để thỏa sức đam mê chụp ảnh thì mình nghĩ iPhone 13 Pro sẽ là lựa chọn
        đáng giá.
      </p>
      <SectionLikeShare />
      <CardItemWithReadMore
        title="Chủ đề tương tự"
        customComponent={
          <Row gutter={30}>
            {listItem.map((el) => (
              <Col span={8}>
                <CardItem
                  key={el.id}
                  title={el.title}
                  ImageSrc={el.ImageSrc}
                  author=""
                />
              </Col>
            ))}
          </Row>
        }
      />
      <CommentCommon />
    </div>
  );
};

SectionDesCription.propTypes = propTypes;
export default SectionDesCription;
