import type { ProjectData } from "@/types";

export const projectData: ProjectData = {
  "projectId": "30",
  "folder": "30-revnest-donate",
  "appName": "RevNest Donate",
  "domain": "Donation Platform",
  "heroHeadline": "Back the causes that matter",
  "heroSubtitle": "Launch campaigns, collect donations securely, and make a real impact in your community.",
  "features": [
    {
      "icon": "HeartHandshake",
      "title": "Secure Donations",
      "description": "Process payments safely via multiple gateways."
    },
    {
      "icon": "TrendingUp",
      "title": "Campaign Tracking",
      "description": "Watch your funding progress meter fill up in real-time."
    },
    {
      "icon": "Users",
      "title": "Donor Management",
      "description": "Keep track of supporters and send automated thank-you notes."
    },
    {
      "icon": "Megaphone",
      "title": "Easy Sharing",
      "description": "Built-in tools to spread your campaign across social media."
    }
  ],
  "stats": [
    {
      "label": "Total Raised",
      "value": "Rp 1.25B",
      "trend": "+15%"
    },
    {
      "label": "Active Campaigns",
      "value": "24",
      "trend": "+2"
    },
    {
      "label": "Total Donors",
      "value": "12.5K",
      "trend": "+450"
    },
    {
      "label": "Fully Funded",
      "value": "86",
      "trend": "+5"
    }
  ],
  "tableColumns": [
    {
      "key": "campaign",
      "label": "Campaign"
    },
    {
      "key": "goal",
      "label": "Goal"
    },
    {
      "key": "raised",
      "label": "Raised"
    },
    {
      "key": "donors",
      "label": "Donors"
    },
    {
      "key": "days_left",
      "label": "Days Left"
    },
    {
      "key": "status",
      "label": "Status"
    }
  ],
  "tableRows": [
    {
      "id": "CMP-001",
      "campaign": "Bantuan Bencana Banjir Demak",
      "goal": "Rp 500.000.000",
      "raised": "Rp 350.000.000",
      "donors": "2,450",
      "days_left": "12",
      "status": "Urgent"
    },
    {
      "id": "CMP-002",
      "campaign": "Beasiswa Anak Panti Asuhan",
      "goal": "Rp 100.000.000",
      "raised": "Rp 105.000.000",
      "donors": "850",
      "days_left": "0",
      "status": "Funded"
    },
    {
      "id": "CMP-003",
      "campaign": "Pembangunan Masjid Al-Ikhlas",
      "goal": "Rp 1.000.000.000",
      "raised": "Rp 450.000.000",
      "donors": "3,200",
      "days_left": "45",
      "status": "Active"
    },
    {
      "id": "CMP-004",
      "campaign": "Operasi Jantung Dek Ayu",
      "goal": "Rp 250.000.000",
      "raised": "Rp 210.000.000",
      "donors": "1,850",
      "days_left": "5",
      "status": "Urgent"
    },
    {
      "id": "CMP-005",
      "campaign": "Konservasi Penyu Bali",
      "goal": "Rp 50.000.000",
      "raised": "Rp 15.000.000",
      "donors": "120",
      "days_left": "30",
      "status": "Active"
    },
    {
      "id": "CMP-006",
      "campaign": "Renovasi Sekolah Pelosok",
      "goal": "Rp 150.000.000",
      "raised": "Rp 150.000.000",
      "donors": "940",
      "days_left": "0",
      "status": "Funded"
    },
    {
      "id": "CMP-007",
      "campaign": "Bantuan Pangan Lansia",
      "goal": "Rp 75.000.000",
      "raised": "Rp 80.000.000",
      "donors": "420",
      "days_left": "0",
      "status": "Expired"
    },
    {
      "id": "CMP-008",
      "campaign": "Perpustakaan Desa Keliling",
      "goal": "Rp 30.000.000",
      "raised": "Rp 12.000.000",
      "donors": "85",
      "days_left": "20",
      "status": "Active"
    }
  ],
  "statuses": [
    "Active",
    "Funded",
    "Expired",
    "Urgent"
  ],
  "ctaHeadline": "Ready to make a difference?",
  "ctaSubtitle": "Start your fundraising campaign today and reach thousands of supporters.",
  "ctaButtonText": "Start a Campaign",
  "readmeDescription": "A crowdfunding and donation platform to manage campaigns, track funding goals, and record donors.",
  "readmeFeaturesList": [
    "Campaign goal tracking",
    "Donor management",
    "Funding progress UI",
    "Warm, human-centric design"
  ],
  "theme": {
    "heroLayout": "split",
    "navStyle": "solid-dark",
    "cardStyle": "lift",
    "primary": "#f59e0b",
    "secondary": "#fbbf24",
    "accent": "#fffbeb",
    "background": "#ffffff",
    "text": "#78350f",
    "heroGradient": "linear-gradient(135deg, rgba(245, 158, 11, 0.98) 0%, rgba(251, 191, 36, 0.88) 100%)",
    "heroGlow": "radial-gradient(circle at 15% 15%, rgba(251, 191, 36, 0.36) 0%, transparent 42%)",
    "heroEdge": "radial-gradient(circle at 90% 10%, rgba(255, 251, 235, 0.14) 0%, transparent 28%)",
    "surface": "rgba(245, 158, 11, 0.05)",
    "surfaceStrong": "rgba(245, 158, 11, 0.08)",
    "border": "rgba(245, 158, 11, 0.12)",
    "borderStrong": "rgba(245, 158, 11, 0.22)",
    "softText": "rgba(120, 53, 15, 0.72)",
    "primarySoft": "rgba(245, 158, 11, 0.12)",
    "secondarySoft": "rgba(251, 191, 36, 0.12)",
    "secondaryStrong": "rgba(251, 191, 36, 0.18)",
    "accentSoft": "rgba(255, 251, 235, 0.8)"
  }
};
