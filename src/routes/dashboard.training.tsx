// routes/dashboard/training.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { GraduationCap } from "lucide-react";
import { Stub } from "@/components/stub";
import { trainingQueryOptions } from "@/lib/queries/training"; // apna queryOptions

export const Route = createFileRoute("/dashboard/training")({
  component: TrainingPage,
});

function TrainingPage() {
  const { data, isLoading, isError, error } = useQuery(trainingQueryOptions);

  // Jab data aa jaye — apna real UI render karo
  if (data) return <TrainingUI data={data} />;

  return (
    <Stub
      title="Training Modules"
      icon={GraduationCap}
      desc="Course cards, progress, locked/unlocked modules, lesson completion."
      state={isLoading ? "loading" : isError ? "error" : "idle"}
      errorMessage={error?.message}
      action={
        isError
          ? { label: "Retry", onClick: () => window.location.reload() }
          : { label: "Get started" }
      }
    />
  );
}
