import styled from "styled-components";

export const AdsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 64%;
  margin: 0 auto;
`
export const NoItems = styled.div`
  margin: 200px auto 0 auto;
  max-width: 251px;
  text-align: center;

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #00A0AB;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #8F8F8F;
  }
`

export const AdsCards = styled.div`
  padding-top: 90px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
`