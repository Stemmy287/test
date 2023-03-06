import axios from "axios";

const instance = axios.create({
  baseURL: 'https://testguru.ru/frontend-test/api/v1/ads'
})

export const adsApi = {
  getAdsData(pageCount: number) {
    return instance.get<AdsDataResponseType>(`?page=${pageCount}&size=8`)
      .then(res => res.data)
  },
  getAdsItem(id: string) {
    return instance.get<AdsItemType>(`/${id}`)
      .then(res => res.data)
  }
}

export type AdsDataResponseType = {
  items: AdsItemType[]
  total: number
  page: number
  size: number
  pages: number
}

export type AdsItemType = {
  id: string
  seen: boolean
  price: number
  title: string
  address: string
  about: string
  createdAt: string
}