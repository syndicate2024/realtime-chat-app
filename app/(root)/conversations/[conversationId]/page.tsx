import React from 'react';

const ConversationPage = ({ params }: { params: { conversationId: string } }) => {
  return (
    <div>
      <h1>Conversation {params.conversationId}</h1>
      {/* Add your conversation component logic here */}
    </div>
  );
};

export default ConversationPage;
