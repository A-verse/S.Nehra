import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { Stub } from "@/components/stub";
export const Route = createFileRoute("/dashboard/profile")({
  component: () => (
    <Stub
      title="Profile"
      icon={User}
      desc="Editable details, skills, social links and profile completion."
    />
  ),
});
