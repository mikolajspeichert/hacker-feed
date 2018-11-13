import axios from 'axios'
import { urls } from '../constants'

export const parseResponse = response => response.data

export default axios.create({
  baseURL: urls.HACKER_NEWS_URL,
})
