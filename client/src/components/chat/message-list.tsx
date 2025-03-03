import { useQuery } from "@tanstack/react-query";
import MessageBubble from "./message-bubble";
import { type Message } from "@shared/schema";
import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MessageList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: messages = [], isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  if (isLoading) {
    return (
      <div className="flex-1 p-4">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-12 bg-muted rounded w-2/3 last:w-1/2"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1 p-4" ref={scrollRef}>
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </ScrollArea>
  );
}
