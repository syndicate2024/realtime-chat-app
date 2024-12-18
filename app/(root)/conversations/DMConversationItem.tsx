import { Id } from "@/convex/_generated/dataModel";
import React from 'react';

type Props = {
    id: Id<"conversations">;
    username: string;
    imageUrl: string;
    lastMessageSender?: string;
    lastMessageContent?: string;
    unseenCount: number;
}

const DMConversationItem = (props: Props) => {
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
            <p>{id}</p>
        </div>
    );
};

DMConversationItem.displayName = 'DMConversationItem';

export default DMConversationItem; 