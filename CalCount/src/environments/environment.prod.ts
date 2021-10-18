export const environment = {
  production: true,
  findCredentials: "http://54.176.153.181:8080/users/login", //CHANGE
  createUser: "http://54.176.153.181:8080/users/new", //CHANGE
  findUser: "http://54.176.153.181:8080/users/{id}}", //CHANGE
  findUserFriends: "http://54.176.153.181:8080/users/{id}/friends", //CHANGE
  addFriend: "http://54.176.153.181:8080/users/{user_id}/add/{friend_id}", //CHANGE
};
