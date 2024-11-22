import { test as baseTest } from '@playwright/test'
//import { WickesChatBotBrowserApi } from './browser-api/wickesChatBotBrowserApi'

export const test = baseTest.extend({
  page: async ({ page, baseURL }, use) => {
    await page.goto(baseURL);
    await use(page);
  },
});

/*
test.afterEach(( async ({ page}) => {
  const wickesChatBotApi = new WickesChatBotBrowserApi(page)
  await wickesChatBotApi.terminateSession()
}))
*/