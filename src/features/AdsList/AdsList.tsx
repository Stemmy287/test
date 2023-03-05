import React, {useEffect, useState} from 'react';
import {AdsCard} from "features/AdsCard/AdsCard";
import {Button} from "common/components/Button/Button";
import {adsApi, ResponseType} from "api/adsApi";
import {AdsCardSkeleton} from "features/AdsCard/AdsCardSkeleton";
import {Preloader} from "common/components/Preloader/Preloader";
import {generationArray} from "common/utils/generationArray";
import {AdsListContainer, AdsCards, NoItems, Error} from 'features/AdsList/adsListStyle';

export const AdsList = () => {

  const [adsData, setAdsArray] = useState<ResponseType>({
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

  const fetchAdsData = async (page: number) => {
    try {
      const res = await adsApi.getAdsArray(page)
      setAdsArray({
        ...res,
        items: [...adsData.items, ...res.items]
      })
    } catch (e) {
      return 'error'
    }
  }

  const onPageClickHandler = () => {
    setIsLoading(true)
    fetchAdsData(adsData.page + 1)
      .then(res => {
        res && setError(true)
      }).finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchAdsData(1)
      .then(res => {
        res && setError(true)
      })
      .finally(() => setIsInitialized(false))
  }, [])

  const demoDataMapped = skeletonData.map(el =>
    <AdsCardSkeleton key={el}/>)

  const adsDataMapped = adsData.items.map(ads =>
    <AdsCard key={ads.id} adsData={{...ads}}/>)

  const isDataEmpty = !adsData.items.length && !isInitialized && !error
  const isDisplayButton = adsData.total > adsData.items.length || error

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
          {error && <Error>Ошибка при загрузке</Error>}
          {isDisplayButton &&
              <Button title={error ? 'повторить попытку' : 'показать еще'} callback={onPageClickHandler}/>}
        </>
      }
    </AdsListContainer>
  );
};


