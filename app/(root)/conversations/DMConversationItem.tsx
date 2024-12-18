import React from "react";
import { Id } from "@/convex/_generated/dataModel";
import DMConversationItem from "@/path/to/DMConversationItem"; // Update this to the actual path

function Layout({ conversations }: { conversations: any[] }) {
    return (
        <div>
            {conversations.map((conversation, index) => {
                // Debugging logs for the conversation object
                console.log(`Conversation ${index}:`, conversation);

                const id = conversation.conversation._id;
                const username = conversation.otherMember?.username || "Unknown User";
                const imageUrl = conversation.otherMember?.imageUrl || "placeholder-image-url";
                const lastMessageSender = conversation.lastMessage?.sender || "Unknown";
                const lastMessageContent = conversation.lastMessage?.content || "No content";
                const unseenCount = conversation.unseenCount || 0;

                // Logging props for DMConversationItem
                console.log("DMConversationItem Props:", {
                    id,
                    username,
                    imageUrl,
                    lastMessageSender,
                    lastMessageContent,
                    unseenCount,
                });

                return (
                    <DMConversationItem
                        key={id || `fallback-key-${index}`}
                        id={id || `fallback-id-${index}`} // Add fallback for undefined ID
                        username={username}
                        imageUrl={imageUrl}
                        lastMessageSender={lastMessageSender}
                        lastMessageContent={lastMessageContent}
                        unseenCount={unseenCount}
                    />
                );
            })}
        </div>
    );
}

export default Layout;
