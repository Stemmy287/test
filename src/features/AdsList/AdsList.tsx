import React, {useEffect, useState} from 'react';
import {AdsCard} from "features/AdsCard/AdsCard";
import {Button} from "common/components/Button/Button";
import {AdsDataResponseType} from "api/adsApi";
import {AdsCardSkeleton} from "features/AdsCard/AdsCardSkeleton";
import {Preloader} from "common/components/Preloader/Preloader";
import {generationArray} from "common/utils/generationArray";
import {AdsCards, AdsListContainer, NoItems} from 'features/AdsList/adsListStyles';
import {fetchAdsData} from "api/fetchUtils/fetchAdsData";
import {ErrorLoadData} from "common/components/ErrorLoadData/ErrorLoadData";

export const AdsList = () => {

  const [adsData, setAdsData] = useState<AdsDataResponseType>({
    items: [],
    page: 0,
    pages: 0,
    size: 0,
    total: 0
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isInitialized, setIsInitialized] = useState(true)
  const [error, setError] = useState(false)

  const skeletonData = generationArray(8)

  const onPageClickHandler = () => {
    setIsLoading(true)
    fetchAdsData(adsData.page + 1, adsData, setAdsData, setError)
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchAdsData(1, adsData, setAdsData, setError, setIsInitialized)
  }, [])

  const isDataEmpty = !adsData.items.length && !isInitialized && !error
  const isDisplayButton = adsData.total > adsData.items.length || error

  const demoDataMapped = skeletonData.map(el =>
    <AdsCardSkeleton key={el}/>)

  const adsDataMapped = adsData.items.map(ads =>
    <AdsCard key={ads.id} adsData={{...ads}}/>)

  return (
    <AdsListContainer>
      {isDataEmpty &&
          <NoItems>
              <h1>Объявлений не найдено</h1>
              <span>Простите, по вашему запросу товаров сейчас нет. Задайте запрос по-другому или измените характеристики</span>
          </NoItems>}
      <AdsCards>
        {isInitialized ? demoDataMapped : adsDataMapped}
      </AdsCards>
      {isLoading ? <Preloader/> :
        <>
          {error && <ErrorLoadData/>}
          {isDisplayButton &&
              <Button title={error ? 'повторить попытку' : 'показать еще'} callback={onPageClickHandler}/>}
        </>
      }
    </AdsListContainer>
  );
};


