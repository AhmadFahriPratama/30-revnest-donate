import { projectData } from "@/data/dummy";
import type { ProjectData } from "@/types";
import { supabase } from "@/lib/supabase";

// This project starts with local dummy data.
// When Supabase environment variables are available, replace this fallback
// with domain-specific queries for RevNest Donate.
export async function getProjectData(): Promise<ProjectData> {
  if (supabase) {
    return projectData;
  }

  return projectData;
}
