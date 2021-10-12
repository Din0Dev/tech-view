import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardItemNews from "components/CardItemNews";

const propTypes = {};

const SectionGames = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const listItemLeft = [
    {
      id: 1,
      title:
        "Nhạc phim đầy đủ của Guardians of the Galaxy là một giấc mơ meme những năm 80",
      imgSrc: "/static/assets/img/tin-tuc/section_game_left_2.png",
    },
    {
      id: 2,
      title:
        "Nintendo cho biết Switch OLED có bộ điều khiển Joy-Con 'cải tiến'",
      imgSrc: "/static/assets/img/tin-tuc/section_game_left_3.png",
    },
    {
      id: 3,
      title: "Mua Nintendo Switch OLED ở đâu ngay hôm nay",
      imgSrc: "/static/assets/img/tin-tuc/section_game_left_4.png",
    },
  ];
  const listItemRight = [
    {
      id: 1,
      title: "Destiny 2 đang loại bỏ việc mở rộng chiến dịch Forsaken",
      imgSrc: "/static/assets/img/tin-tuc/section_game_right_3.png",
    },
    {
      id: 2,
      title: "Randy Pitchford không còn là chủ tịch của Gearbox Software",
      imgSrc: "/static/assets/img/tin-tuc/section_game_right_4.png",
    },
    {
      id: 3,
      title: "Xbox kỷ niệm 20 năm với việc phát hành bộ điều khiển trong suốt",
      imgSrc: "/static/assets/img/tin-tuc/section_game_right_5.png",
    },
  ];

  //! Render
  return (
    <div className="section-mobile">
      <CardItemNews
        href="#"
        label="Tin tức games"
        itemLeft1="Tất cả những gì chúng ta biết về Hollow Knight: Silksong"
        itemRight1="Tất cả những gì chúng ta biết về Triangle Strategy"
        itemRight2="Các trò chơi Nintendo Switch sắp tới hay nhất"
        imageSrcLeft1="/static/assets/img/tin-tuc/section_game_left_1.png"
        imageSrcRight1="/static/assets/img/tin-tuc/section_game_right_1.png"
        imageSrcRight2="/static/assets/img/tin-tuc/section_game_right_2.png"
        listItemLeft={listItemLeft}
        listItemRight={listItemRight}
      />
    </div>
  );
};

SectionGames.propTypes = propTypes;
export default SectionGames;
