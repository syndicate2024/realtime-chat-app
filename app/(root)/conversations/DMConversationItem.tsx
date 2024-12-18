import React from "react";
import { Id } from "@/convex/_generated/dataModel";
import DMConversationItem from "@/path/to/DMConversationItem"; // Update this to the actual path

function Layout({ conversations }: { conversations: any[] }) {
    // Array to collect logs during the build step
    const buildLogs: string[] = [];

    const renderedConversations = conversations.map((conversation, index) => {
        try {
            const id = conversation.conversation._id;
            const username = conversation.otherMember?.username || "Unknown User";
            const imageUrl = conversation.otherMember?.imageUrl || "placeholder-image-url";
            const lastMessageSender = conversation.lastMessage?.sender || "Unknown";
            const lastMessageContent = conversation.lastMessage?.content || "No content";
            const unseenCount = conversation.unseenCount || 0;

            // Collecting debug info during build
            buildLogs.push(
                `Rendering DMConversationItem for index ${index}:
                - id: ${id}
                - username: ${username}
                - imageUrl: ${imageUrl}
                - lastMessageSender: ${lastMessageSender}
                - lastMessageContent: ${lastMessageContent}
                - unseenCount: ${unseenCount}`
            );

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
        } catch (error) {
            // Log errors for debugging
            buildLogs.push(`Error rendering DMConversationItem for index ${index}: ${error}`);
            throw error; // Rethrow so the build process fails and logs are visible
        }
    });

    // During build, output logs to help debug errors
    if (typeof window === "undefined") {
        console.error("Build Logs:\n", buildLogs.join("\n\n"));
    }

    return <div>{renderedConversations}</div>;
}

export default Layout;
