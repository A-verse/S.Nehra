// routes/dashboard.tsx
import { createFileRoute, redirect } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { authQueryOptions } from "@/lib/auth";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — S.Nehra" }] }),

  beforeLoad: async ({ context }) => {
    try {
      // Cache hit hone par network call nahi hogi
      await context.queryClient.ensureQueryData(authQueryOptions);
    } catch {
      throw redirect({ to: "/login", search: { redirect: "/dashboard" } });
    }
  },

  // Auth data component me directly available — dobara fetch nahi
  loader: ({ context }) => context.queryClient.ensureQueryData(authQueryOptions),

  component: DashboardLayout,
});
