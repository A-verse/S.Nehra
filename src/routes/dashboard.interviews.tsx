import { createFileRoute } from "@tanstack/react-router";
import { MessagesSquare } from "lucide-react";
import { Stub } from "@/components/stub";
export const Route = createFileRoute("/dashboard/interviews")({
  component: () => (
    <Stub
      title="Mock Interviews"
      icon={MessagesSquare}
      desc="Schedule, feedback history, ratings, and session details from your mentors."
    />
  ),
});
