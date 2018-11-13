const HACKER_NEWS_URL = 'https://hacker-news.firebaseio.com/v0/' // should be in .env but who has time for that
const NEW_STORIES = '/newstories.json'
const TOP_STORIES = '/topstories.json'
const STORY = itemId => `/item/${itemId}.json`

export const urls = { HACKER_NEWS_URL, NEW_STORIES, TOP_STORIES, STORY }
