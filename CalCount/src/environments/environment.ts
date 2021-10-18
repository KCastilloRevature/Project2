// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  findCredentials: "http://localhost:8080/users/login",
  createUser: "http://localhost:8080/users/new",
  findUser: "http://localhost:8080/users/{id}}",
  findUserFriends: "http://localhost:8080/users/{id}/friends",
  addFriend: "http://localhost:8080/users/{user_id}/add/{friend_id}",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
