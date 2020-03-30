const MAIN_URL = 'https://newsapi.org/v2/everything?';
const API_KEY = 'd8002f370a8a4f15b41532a60d2e58e2';
const TIME_FROM = 1000*60*60*24*7;
const DATE_TO = new Date().toISOString();
const DATE_FROM = new Date(Date.now() - TIME_FROM).toISOString();
const PAGE_SIZE = 100;
const LANGUAGE = 'ru';

export const newsApiUrl = q => `${MAIN_URL}q=${q}&apiKey=${API_KEY}&language=${LANGUAGE}&from=${DATE_FROM}&to=${DATE_TO}&pageSize=${PAGE_SIZE}`