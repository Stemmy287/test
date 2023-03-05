import React, {FC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {generationArray} from "common/utils/generationArray";
import {Img, Seen} from 'common/components/Swiper/swiperStyled';

type Props = {
  seen: boolean
}

export const SwiperPhoto: FC<Props> = ({seen}) => {

  const swiperPhoto = generationArray(4)

  return (
    <div>
      <Swiper
        effect={"cards"}
        slidesPerView={'auto'}
        modules={[Navigation, Pagination]}
        className={'swiper-container'}
        pagination={{el: '.swiper-pagination', clickable: true}}
      >
        {swiperPhoto.map(el =>
          <SwiperSlide key={el}>
            <Img src='https://source.unsplash.com/random' alt="cover"/>
          </SwiperSlide>
        )}
        <div className="swiper-pagination"></div>
      </Swiper>
      {seen && <Seen>Просмотрено</Seen>}
    </div>
  );
};

