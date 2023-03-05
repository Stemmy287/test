import styled from "styled-components";
import {ReactComponent as LikeIconSVG} from "assets/icons/IconLike.svg";

export const AdsCardContainer = styled.div`
  width: 224px;
  border-radius: 20px;
  position: relative;
`

export const Image = styled.div`
  position: relative;
  width: 224px;
  height: 260px;
  background-color: #E8E8E8;
  border-radius: 15px 15px 0 0;
`

export const Content = styled.div`
  background-color: white;
  padding: 5px 10px 20px 10px;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, .4);
`

export const PriceAndLike = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    color: #2C2C2C;
    margin-top: 7px;
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #2C2C2C;
`

export const CityAndCreatedAt = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #8F8F8F;
  }
`

export const LikeIcon = styled(LikeIconSVG)`
  cursor: pointer;
  position: absolute;
  bottom: 70px;
  right: 10px;
  path {
    fill: ${props => props.fill};
  }

  &:hover {
    width: 23px;
    height: 22px;
  }

  &:hover {
    path {
      fill: ${props => props.fill || '#A4A4A4'};
    }
  }
`

export const SkeletonSwiper = styled.div`
  width: 56px;
  height: 8px;
  background-color: #F8F8F8;
  position: absolute;
  bottom: 10px;
  left: 37%;
  border-radius: 3px;
  z-index: 1;
`
