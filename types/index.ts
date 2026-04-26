export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  trend: string;
}

export interface TableRow {
  id: string;
  campaign: string;
  goal: string;
  raised: string;
  donors: string;
  days_left: string;
  status: string;
}

export type TableColumnKey = "campaign" | "goal" | "raised" | "donors" | "days_left" | "status";

export interface TableColumn {
  key: TableColumnKey;
  label: string;
}

export interface ThemeConfig {
  heroLayout: "centered" | "left" | "split";
  navStyle: "transparent" | "solid" | "dark" | "glass" | "gradient" | "solid-dark";
  cardStyle: "shadow" | "bordered" | "gradient" | "minimal" | "accent" | "lift";
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  heroGradient: string;
  heroGlow: string;
  heroEdge: string;
  surface: string;
  surfaceStrong: string;
  border: string;
  borderStrong: string;
  softText: string;
  primarySoft: string;
  secondarySoft: string;
  secondaryStrong: string;
  accentSoft: string;
}

export interface ProjectData {
  projectId: string;
  folder: string;
  appName: string;
  domain: string;
  heroHeadline: string;
  heroSubtitle: string;
  features: FeatureItem[];
  stats: StatItem[];
  tableColumns: TableColumn[];
  tableRows: TableRow[];
  statuses: string[];
  ctaHeadline: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  readmeDescription: string;
  readmeFeaturesList: string[];
  theme: ThemeConfig;
}
