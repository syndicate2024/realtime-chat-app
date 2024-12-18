import { Id } from "@/convex/_generated/dataModel";

export interface DMConversationItemProps {
    id: Id<"conversations">;
    username: string;
    imageUrl: string;
    lastMessageSender?: string;
    lastMessageContent?: string;
    unseenCount: number;
}

export const DMConversationItem: React.FC<DMConversationItemProps> = ({
    id,
    username,
    imageUrl,
    lastMessageSender,
    lastMessageContent,
    unseenCount,
}: DMConversationItemProps) => {
    return (
        <div>
            {/* Add your component JSX here */}
        </div>
    );
}; 