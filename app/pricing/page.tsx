import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

const tiers = [
  {
    name: "Founder",
    price: "$99/mo",
    blurb: "Solo operator cockpit",
    points: ["Weekly operating brief templates", "Command-center runs", "Execution score + risk radar", "Email support"],
    highlight: false,
  },
  {
    name: "Team",
    price: "$599/mo",
    blurb: "Shared execution layer",
    points: ["Unlimited brief generations", "Owner lanes + accountability", "Shared dashboard + history", "Slack-style notifications (roadmap)"],
    highlight: true,
  },
  {
    name: "Studio",
    price: "$1.9k/mo",
    blurb: "Portfolio operating rhythm",
    points: ["Multi-company workspaces", "Portfolio rollup brief", "Template library per thesis", "Priority onboarding"],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "Governance at scale",
    points: ["SSO / SCIM", "Audit trails + retention", "Custom integrations", "Dedicated operating partner"],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
    <SubpageVisual variant="pricing" />
      <div className="space-y-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300/90">Pricing</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Plans for founders, teams, studios, and enterprise</h1>
        <p className="text-zinc-400">
          Start with a weekly execution loop. Scale to portfolio ops and governed enterprise rollouts—all with local-friendly MVP paths and no mandatory paid APIs.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`panel flex flex-col ${tier.highlight ? "border-violet-400/40 bg-gradient-to-b from-violet-500/10 to-transparent ring-1 ring-violet-400/30" : "border-white/10"}`}
          >
            {tier.highlight ? (
              <p className="mb-2 inline-flex w-fit rounded-full border border-violet-400/30 bg-violet-500/15 px-2 py-0.5 text-xs font-medium text-violet-200">
                Most teams start here
              </p>
            ) : null}
            <h2 className="text-xl font-semibold text-white">{tier.name}</h2>
            <p className="text-sm text-zinc-500">{tier.blurb}</p>
            <p className="mt-3 text-3xl font-semibold text-violet-200">{tier.price}</p>
            <ul className="mt-4 flex-1 list-disc space-y-2 pl-5 text-sm text-zinc-400">
              {tier.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link
              href="/demo"
              className={`mt-6 block rounded-xl py-2.5 text-center text-sm font-semibold transition ${
                tier.highlight
                  ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white hover:brightness-110"
                  : "border border-white/15 bg-white/5 text-zinc-100 hover:bg-white/10"
              }`}
            >
              Try the demo
            </Link>
          </article>
        ))}
      </div>

      <p className="text-center text-sm text-zinc-500">
        Questions on enterprise security or studio rollouts? See the <Link href="/#faq" className="text-violet-300 hover:text-white">FAQ on the homepage</Link> or
        read <Link href="/about" className="text-violet-300 hover:text-white">About</Link>.
      </p>
    </div>
  </>
  )
}
