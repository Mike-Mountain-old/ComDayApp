// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCIjMjWS44ojljvwg0M2zf8JdLp7jlAJc8',
    authDomain: 'community-day.firebaseapp.com',
    databaseURL: 'https://community-day.firebaseio.com',
    projectId: 'community-day',
    storageBucket: 'community-day.appspot.com',
    messagingSenderId: '613420148774'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
