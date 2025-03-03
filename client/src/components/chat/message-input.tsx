import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send } from "lucide-react";

export default function MessageInput() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      content: "",
      isBot: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: { content: string; isBot: boolean }) => {
      await apiRequest("POST", "/api/messages", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
      reset();
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => mutation.mutate(data))}
      className="p-4 border-t flex gap-2"
    >
      <Input
        {...register("content")}
        placeholder="Type a message..."
        className="flex-1"
      />
      <Button type="submit" disabled={mutation.isPending}>
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
