import { Id } from "@/convex/_generated/dataModel";
import React from 'react';

export interface DMConversationItemProps {
    id: Id<"conversations">;
    username: string;
    imageUrl: string;
    lastMessageSender?: string;
    lastMessageContent?: string;
    unseenCount: number;
}

export function DMConversationItem(props: DMConversationItemProps) {
    const {
        id,
        username,
        imageUrl,
        lastMessageSender,
        lastMessageContent,
        unseenCount,
    } = props;
    
    return (
        <div>
            {/* Component content */}
            <p>{username}</p>
        </div>
    );
} 