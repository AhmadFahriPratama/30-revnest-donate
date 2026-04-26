import { CTASection } from "@/components/CTASection";
import { DataTable } from "@/components/DataTable";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { StatsCard } from "@/components/StatsCard";
import { getProjectData } from "@/lib/data-source";

export default async function HomePage() {
  const data = await getProjectData();

  return (
    <>
      <Navbar appName={data.appName} domain={data.domain} theme={data.theme} />

      <main className="pb-16">
        <HeroSection data={data} />

        <section id="overview" className="section-shell section-space">
          <div className="section-heading">
            <p className="section-eyebrow" style={{ color: data.theme.primary }}>
              Overview
            </p>
            <h2 className="section-title">Key numbers for {data.appName}</h2>
            <p className="section-copy">
              This first release runs on local dummy data, but the structure is already prepared for
              a Supabase-backed version later.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {data.stats.map((stat) => (
              <StatsCard key={stat.label} stat={stat} theme={data.theme} />
            ))}
          </div>
        </section>

        <section id="features" className="section-shell section-space pt-0">
          <div className="section-heading">
            <p className="section-eyebrow" style={{ color: data.theme.primary }}>
              Features
            </p>
            <h2 className="section-title">Built around the work this product needs to handle</h2>
            <p className="section-copy">
              Each feature block is driven by the project brief and uses content specific to this domain.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {data.features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} theme={data.theme} />
            ))}
          </div>
        </section>

        <section className="section-shell section-space pt-0">
          <DataTable
            title={`${data.domain} records`}
            subtitle={`Recent entries and status labels for ${data.appName}. These records are stored in local dummy data today and can be replaced with Supabase queries later.`}
            columns={data.tableColumns}
            rows={data.tableRows}
            statuses={data.statuses}
            theme={data.theme}
          />
        </section>

        <section className="section-shell section-space pt-0">
          <CTASection
            headline={data.ctaHeadline}
            subtitle={data.ctaSubtitle}
            buttonText={data.ctaButtonText}
            theme={data.theme}
          />
        </section>
      </main>

      <Footer appName={data.appName} />
    </>
  );
}
