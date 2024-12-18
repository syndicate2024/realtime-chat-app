import { Id } from "@/convex/_generated/dataModel";
import React from 'react';

interface Props {
    id: Id<"conversations">;
    username: string;
    imageUrl: string;
    lastMessageSender?: string;
    lastMessageContent?: string;
    unseenCount: number;
}

export default function DMConversationItem(props: Props) {
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
            <p>{username}</p>
        </div>
    );
} 