import { Card } from "@/components/ui/card";
import MessageList from "@/components/chat/message-list";
import MessageInput from "@/components/chat/message-input";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <div className="mx-auto max-w-2xl">
        <Card className="h-[80vh] flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI Chat Assistant
            </h1>
            <p className="text-sm text-muted-foreground">
              Ask me anything! I'm here to help.
            </p>
          </div>
          <MessageList />
          <MessageInput />
        </Card>
      </div>
    </div>
  );
}
