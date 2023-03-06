import React from 'react';
import {Skeleton} from "@mui/material";
import {AdsCardContainer, Content, Image, PriceAndLike, SkeletonSwiper, Title} from "features/AdsCard/adsCardStyles";

export const AdsCardSkeleton = () => {
  return (
    <AdsCardContainer>
      <Image>
        <SkeletonSwiper></SkeletonSwiper>
        <Skeleton variant="rectangular" height={260} sx={{borderRadius: '20px 20px 0 0'}}/>
      </Image>
      <Content>
        <PriceAndLike>
          <Skeleton variant="rectangular"
                    sx={{width: '165px', height: '25px', marginTop: '10px', borderRadius: '7px'}}/>
          <Skeleton variant="rectangular" sx={{width: '25px', height: '25px', marginTop: '10px', borderRadius: '7px'}}/>
        </PriceAndLike>
        <Title><Skeleton variant="rectangular" sx={{height: '15px', borderRadius: '4px'}}/></Title>
        <Skeleton variant="rectangular" sx={{width: '205px', height: '15px', borderRadius: '4px'}}/>
      </Content>
    </AdsCardContainer>
  );
};

