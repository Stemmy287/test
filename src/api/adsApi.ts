import axios from "axios";

const instance = axios.create({
  baseURL: 'https://testguru.ru/frontend-test/api/v1/ads'
})

export const adsApi = {
  getAdsArray(pageCount: number) {
    return instance.get<ResponseType>(`?page=${pageCount}&size=8`)
      .then(res => res.data)
  },
  getAds(id: string) {
    return instance.get<AdsType>(`/${id}`)
      .then(res => res.data)
  }
}

export type ResponseType = {
  items: AdsType[]
  total: number
  page: number
  size: number
  pages: number
}

export type AdsType = {
  id: string
  seen: boolean
  price: number
  title: string
  address: string
  about: string
  createdAt: string
}