
const user = mongoose.model('user', {
  _id : String,
  password : String,
  following : [{type:String, unique: true}],
  followers : [{type:String, unique: true}]
});

const tweet = mongoose.model('tweet', {
  text : String,
  token: String,
  timestamp : Date,
  username : String
});

//world tweet
tweet.find().limit(20)
.then(function(twt){
  console.log(twt.text);
  console.log(twt.timestamp);
  console.log(twt.username);
});

//profile page
Promise.all([
  tweet.find({username : Theuname}).limit(20),
  user.find({username : Theuname})
])
.spread(function(twt,usr){
  twt.forEach(function(t){
    console.log(t);
  });
  //number of people you are following
  console.log(usr.following.length());
  //number of people following you
  console.log(usr.followers.length());
});

//followers //following
user.find({_id : Theuname}).then(function(usr){
  user.find({_id : Theuname}).then(function(usr){
    usr.following.forEach(function(u){
      console.log(u);
    });
  });
});


//user timeline
user.findById(Theuserid)
.then(function(usr){
  return tweet.find({
    username : {
      $in : usr.following.concat([usr._id])
    }
  });
}).then(function(tweets){
  console.log(tweets);
});




// var jess = {
//   _id : 'jess',
//   password : 'jess12',
//   followers : [],
//   following : ['trista']
// }
//
// var keyur = {
//   _id : 'keyur',
//   password : 'keyur12',
//   followers : ['trista'],
//   following : []
// }
//
// var ttweet = {
//   text : 'Good Evening',
//   timestamp : new Date(),
//   username : 'trista'
// }

// var autumn = {
//   _id : 'autumn',
//   password : 'autumn12',
//   followers : ['keyur', 'trista', 'dom'],
//   following : ['jess', 'trista', 'lyn']
// }
// var lyn = {
//   _id : 'lyn',
//   password : 'lyn12',
//   followers : ['dom', 'trista'],
//   following : ['trista', 'dom', 'jess']
// }
// var dom = {
//   _id : 'dom',
//   password : 'dom12',
//   followers : ['lyn', 'keyur', 'trista'],
//   following : ['keyur', 'lyn', 'trista', 'autumn']
// }


// var tweet = {
//   text : 'sushi rocks',
//   timestamp : new Date('2016-12-15'),
//   username : 'trista'
// };
// db.tweets.insert(tweet)

// var tweet = {
//   text : 'lunch time',
//   timestamp : new Date('2016-12-15'),
//   username : 'autumn'
// };

// var tweet = {
//   text : 'twitter rocks!',
//   timestamp : new Date('2016-12-15'),
//   username : 'jess'
// };

// var tweet = {
//   text : 'where is my quinoa?',
//   timestamp : new Date('2016-12-15'),
//   username : 'dom'
// };

// var tweet = {
//   text : 'Rocket Raccoon is here!',
//   timestamp : new Date('2016-12-15'),
//   username : 'keyur'
// };
