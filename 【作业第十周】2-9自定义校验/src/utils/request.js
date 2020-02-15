import HttpRequest from '@/utils/axios'
import { baseUrl } from '@/config'

const baseurl = process.env.NODE_ENV === 'development' ? baseUrl.dev : baseUrl.prod

const axios = new HttpRequest(baseurl)

export default axios
