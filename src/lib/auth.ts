// src/lib/auth.ts
import { queryOptions } from "@tanstack/react-query";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export const authQueryOptions = queryOptions({
  queryKey: ["auth", "me"],
  queryFn: async (): Promise<AuthUser> => {
    const res = await fetch("/api/auth/me", { credentials: "include" });
    if (!res.ok) throw new Error("Unauthorized");
    return res.json();
  },
  staleTime: 1000 * 60 * 5,
  retry: false,
});
