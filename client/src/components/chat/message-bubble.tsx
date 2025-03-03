import { cn } from "@/lib/utils";
import { Message } from "@shared/schema";
import { format } from "date-fns";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "flex items-end gap-2 mb-4",
        message.isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          message.isBot
            ? "bg-muted text-muted-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <p className="text-sm">{message.content}</p>
        <p className="text-[10px] mt-1 opacity-70">
          {format(new Date(message.timestamp), "HH:mm")}
        </p>
      </div>
    </div>
  );
}
