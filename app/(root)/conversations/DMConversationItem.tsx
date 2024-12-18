import { Id } from "@/convex/_generated/dataModel";
import React from 'react';

type DMConversationItemProps = {
    id: Id<"conversations">;
    username: string;
    imageUrl: string;
    lastMessageSender?: string;
    lastMessageContent?: string;
    unseenCount: number;
}

function DMConversationItem({
    id,
    username,
    imageUrl,
    lastMessageSender,
    lastMessageContent,
    unseenCount,
}: DMConversationItemProps) {
    return (
        <div>
            <p>{username}</p>
            <p>{lastMessageContent}</p>
            {unseenCount > 0 && <span>{unseenCount}</span>}
        </div>
    );
}

export default DMConversationItem; 