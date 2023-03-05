import styled from "styled-components";

export const AdsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  row-gap: 20px;
`

export const Img = styled.img`
  width: 270px;
  height: 270px;
  margin: 0 auto;
  border-radius: 25px;
`

export const Title = styled.h1`
  margin: 0 auto;
  font-weight: 700;
  font-size: 45px;
  line-height: 47px;
`

export const Price = styled.span`
  margin: 0 auto;
  font-weight: 700;
  font-size: 35px;
  line-height: 37px;
`

export const AddressAndDate = styled.div`
  display: flex;
  margin: 0 auto;
  column-gap: 30px;
  font-weight: 500;
  font-size: 30px;
  line-height: 32px;
  color: #8F8F8F;
  @media screen and (max-width: 475px){
    flex-direction: column;
    text-align: center;
    row-gap: 5px;
  }
`