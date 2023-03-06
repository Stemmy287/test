import React, {FC, useState} from 'react';
import {dateConverter} from "common/utils/dateConverter";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {SwiperPhoto} from "common/components/Swiper/Swiper";
import {NavLink} from "react-router-dom";
import {AdsItemType} from "api/adsApi";
import {
  AdsCardContainer,
  CityAndCreatedAt,
  Content,
  Image,
  LikeIcon,
  PriceAndLike,
  Title
} from 'features/AdsCard/adsCardStyles';


type Props = {
  adsData: AdsItemType
}

export const AdsCard: FC<Props> = ({adsData}) => {

  const {price, title, address, createdAt, seen, id} = adsData

  const [like, setLike] = useState(false)

  const onLikeClickHandler = () => {
    setLike(!like)
  }

  const date = dateConverter(createdAt)

  return (
    <AdsCardContainer>
      <NavLink style={{textDecoration: 'none'}} to={`/ads/${id}`}>
        <Image>
          <SwiperPhoto seen={seen}/>
        </Image>
        <Content>
          <PriceAndLike>
            <span>{`${price} ₽`}</span>
          </PriceAndLike>
          <Title>{title}</Title>
          <CityAndCreatedAt>
            <span>{address}</span>
            <span>{date}</span>
          </CityAndCreatedAt>
        </Content>
      </NavLink>
      <LikeIcon fill={like ? '#00A0AB' : ''} onClick={onLikeClickHandler}/>
    </AdsCardContainer>
  );
};

