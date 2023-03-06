import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {AdsItemType} from "api/adsApi";
import {dateConverter} from "common/utils/dateConverter";
import {Preloader} from "common/components/Preloader/Preloader";
import BackLink from "common/components/BackLink/BackLink";
import {AddressAndDate, AdsPageContainer, Img, Price, Title} from 'features/AdsPage/adsPageStyles';
import {fetchAdsItem} from "api/fetchUtils/fetchAdsItem";
import {ErrorLoadData} from "common/components/ErrorLoadData/ErrorLoadData";

export const AdsPage = () => {

  const {adsId} = useParams()

  const [adsItem, setAdsItem] = useState<AdsItemType>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (adsId) {
      fetchAdsItem(adsId, setAdsItem, setError, setIsLoading)
    }
  }, [])

  const date = dateConverter(adsItem?.createdAt || '')

  return (
    <AdsPageContainer>
      {isLoading ? <Preloader/> :
        <>
          <BackLink/>
          {error ? <ErrorLoadData/> :
            <>
              <Img src='https://source.unsplash.com/random' alt=""/>
              <Title>{adsItem?.title}</Title>
              <Price>{`${adsItem?.price} ₽`}</Price>
              <AddressAndDate>
                <span>{`${adsItem?.address} ₽`}</span>
                <span>{date}</span>
              </AddressAndDate>
            </>
          }
        </>
      }
    </AdsPageContainer>
  );
};

