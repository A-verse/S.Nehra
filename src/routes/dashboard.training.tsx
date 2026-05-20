import { createFileRoute } from "@tanstack/react-router";
import { Headphones } from "lucide-react";
import { Stub } from "@/components/stub";
export const Route = createFileRoute("/dashboard/training")({
  component: () => (
    <Stub
      title="Training"
      icon={Headphones}
      desc="Track your sessions, assignments, and mentor guidance."
    />
  ),
});
