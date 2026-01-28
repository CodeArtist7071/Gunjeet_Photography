export const GOOGLE_API = `https://www.googleapis.com/drive/`
export const FOLDER_ID = '1ZFsgysK2U0_FhpNLlFZY3M8Ss-WIH5Qb'
export const API_KEY = 'AIzaSyA2Sfc5rp9wi_hBpgrs_YCot9_gyK5ERNY'
export const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE' // TODO: Replace with your actual Client ID
export const GOOGLE_DRIVE_URL =  `${GOOGLE_API}v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'+and+trashed=false&fields=files(id,name,mimeType)&key=${API_KEY}`