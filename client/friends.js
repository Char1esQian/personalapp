Template.friends.helpers({
  friendList(){return People.find()},

})

Template.friends.events({
  "click #js-submit"(event,instance){
   console.log("hey it worked");
    var name = $("#js-name").val();
    var age = $("#js-age").val();
    var favcolor = $("#js-favcolor").val();
    //var x People.remove({createdBy:Meteor.userId()})
    //People.remove(x._id)
    p = {name:name, age:age, favcolor:favcolor, createdAt: new Date(), CreatedBy:Meteor.userID()};
    console.dir(p);
    People.insert(p);
  },
})
