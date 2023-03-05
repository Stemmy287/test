import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {adsApi, AdsType} from "api/adsApi";
import {dateConverter} from "common/utils/dateConverter";
import {Preloader} from "common/components/Preloader/Preloader";
import BackLink from "common/components/BackLink/BackLink";
import {AdsPageContainer, Img, Price, Title, AddressAndDate} from 'features/AdsPage/adsPageStyle';

export const AdsPage = () => {

  const {id} = useParams()

  const [ads, setAds] = useState<AdsType>()
  const [isLoading, setIsLoading] = useState(true)

  const fetchAdsItem = async (id: string) => {
    try {
      const res = await adsApi.getAds(id)
      setAds(res)
    } catch (e) {
      return 'error'
    }
  }

  useEffect(() => {
    if (id) {
      fetchAdsItem(id)
        .finally(() => setIsLoading(false))
    }
  }, [])

  const date = dateConverter(ads?.createdAt || '')

  return (
    <AdsPageContainer>
      {isLoading ? <Preloader/> :
        <>
          <BackLink/>
          <Img src='https://source.unsplash.com/random' alt=""/>
          <Title>{ads?.title}</Title>
          <Price>{`${ads?.price} ₽`}</Price>
          <AddressAndDate>
            <span>{`${ads?.address} ₽`}</span>
            <span>{date}</span>
          </AddressAndDate>
        </>}
    </AdsPageContainer>
  );
};

