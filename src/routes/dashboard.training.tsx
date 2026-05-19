import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { Stub } from "@/components/stub";

export const Route = createFileRoute("/dashboard/training")({
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <Stub
      title="Training Modules"
      icon={GraduationCap}
      desc="Course cards, progress, locked/unlocked modules, lesson completion. Connect your backend to wire real data."
      action={{ label: "Get started" }}
    />
  );
}
