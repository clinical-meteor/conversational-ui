Meteor.methods({
    createNewConversation: function(text){
        check(text, String);        
        console.log('createNewConversation()', text);

        Conversations.insert({
            resourceType: 'Conversation',
            note: text
        });
    }
});