import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CompanyOS — a company operating-system concept",
  description:
    "CompanyOS is a concept for turning meetings, tickets, goals, and customer notes into priorities, owners, and a weekly brief. It is not a finished customer product.",
};

export default function Home() {
  return (
    <div className="-mx-4 -mt-8 min-h-screen bg-[#10141c] px-0 text-zinc-100 sm:-mx-6 sm:-mt-10">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" className="font-mono text-sm tracking-[0.24em] uppercase">
          CompanyOS
        </Link>
        <a
          href="mailto:?subject=CompanyOS%20concept%20briefing&body=I%20want%20a%20briefing%20on%20the%20CompanyOS%20operating-system%20concept."
          className="rounded-md border border-zinc-400 px-4 py-2 text-sm"
        >
          Request a concept briefing
        </a>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <section className="pt-8 lg:pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-400">
            Operating-system concept
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Paste the week&apos;s chaos. Get a brief the company can run against.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            CompanyOS is a concept for a company operating system: ingest
            meetings, tickets, customer notes, goals, and blockers, then
            surface a priority stack, owners, risks, and a weekly brief. The
            repo has a demo command center and local synthesis. It is not a
            finished customer product and it is not a live company OS.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-zinc-100 px-6 text-sm font-semibold text-zinc-950"
            >
              Open the concept dashboard
            </Link>
            <a
              href="mailto:?subject=CompanyOS%20concept%20briefing&body=I%20want%20a%20briefing%20on%20the%20CompanyOS%20operating-system%20concept."
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-500 px-6 text-sm"
            >
              Request a founder briefing
            </a>
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-2">
          {[
            ["Ingest", "Meetings, feedback, tickets, goals — paste the messy truth once."],
            ["Priorities", "A P0–P2 stack with tradeoffs, not a vanity backlog."],
            ["Owners", "Named DRIs and load. No shared-accountability theater."],
            ["Rhythm", "A weekly brief artifact the demo can generate from typed inputs."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-xl border border-zinc-700 p-5">
              <h2 className="font-mono text-sm uppercase tracking-[0.18em] text-zinc-400">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{body}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-xl border border-dashed border-zinc-600 p-6 text-sm leading-6 text-zinc-400">
          This page describes a concept and a demo. It does not claim paying
          customers, production integrations, or an enterprise-ready OS.
        </section>
      </main>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center font-mono text-xs text-zinc-500">
        CompanyOS · company operating-system concept · not a finished product
      </footer>
    </div>
  );
}
