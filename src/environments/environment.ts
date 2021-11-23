// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const newsApiurl = {
  production: false,
  title: 'newsApiurl',
  apiURL: "https://newsapi.org/v2/top-headlines?country=in&apiKey=de94ccfdc5614b9bb778c2080b0187aa"
  
};
export const techApiurl = {
  production: false,
  title: 'techApiurl',
  apiURL: "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=de94ccfdc5614b9bb778c2080b0187aa"
  
};
export const businessApiurl = {
  production: false,
  title: 'newsApiurl',
  businessApiurl: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=de94ccfdc5614b9bb778c2080b0187aa"
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
