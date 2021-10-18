export const environment = {
  production: true,
  findCredentials: "http://calcount-bucket.s3-website-us-west-1.amazonaws.com/users/login", //CHANGE
  createUser: "http://calcount-bucket.s3-website-us-west-1.amazonaws.com/users/new", //CHANGE
  findUser: "http://calcount-bucket.s3-website-us-west-1.amazonaws.com/users/{id}}", //CHANGE
  findUserFriends: "http://calcount-bucket.s3-website-us-west-1.amazonaws.com/users/{id}/friends", //CHANGE
  addFriend: "http://calcount-bucket.s3-website-us-west-1.amazonaws.com/users/{user_id}/add/{friend_id}", //CHANGE
};
