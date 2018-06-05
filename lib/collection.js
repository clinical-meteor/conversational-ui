
  
  // create the object using our BaseModel
  Conversation = BaseModel.extend();
  
  //Assign a collection so the object knows how to perform CRUD operations
  Conversation.prototype._collection = Conversations;
  
  // Create a persistent data store for addresses to be stored.
  // HL7.Resources.Patients = new Mongo.Collection('HL7.Resources.Patients');
  Conversations = new Mongo.Collection('Conversations');
  
  //Add the transform to the collection since Meteor.users is pre-defined by the accounts package
  Conversations._transform = function (document) {
    return new Conversation(document);
  };
  
  
  
  ConversationSchema = new SimpleSchema([
    {
    "resourceType" : {
      type: String,
      defaultValue: "Conversation"
    },
    "tags" : {
      optional: true,
      type: [ String ]
    }, 
    "note" : {
      optional: true,
      type: String
    }
  }]);
  Conversations.attachSchema(ConversationSchema);
  
  

