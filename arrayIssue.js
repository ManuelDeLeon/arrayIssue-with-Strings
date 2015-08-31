if (Meteor.isClient) {
  var arr = ["A","B","C"];
  var dep = new Tracker.Dependency();

  Template.body.helpers({
    people: function() {
      dep.depend();
      return arr;
    }
  })

  Template.body.events({
    'click button': function(){
      arr.splice(0, 1);
      console.log("Array is now: " + arr.map(function (e) { return e }));
      dep.changed();
    }
  })

  Template.person.onCreated(function(){
    this.name = this.data;
  })

  Template.person.helpers({
    name: function(){
      return Template.instance().name;
    }
  })
}