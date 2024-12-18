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

export const DMConversationItem = (props: DMConversationItemProps): React.JSX.Element => {
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
            {/* Add your component JSX here */}
        </div>
    );
}; 