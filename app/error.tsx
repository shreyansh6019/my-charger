"use client";

import Link from "next/link";

type Props = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  return (
    <div className="min-h-screen w-full bg-transparent">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4 py-12">
        <div className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl backdrop-blur-sm">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-rose-600/20 text-2xl font-bold text-rose-300">
                I1
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-semibold text-slate-100">Something went wrong</h1>
              <p className="mt-2 text-sm text-slate-400">
                An unexpected error occurred. You can try to retry the action, go back to the homepage, or report the issue.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => reset()}
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:brightness-95"
                >
                  Retry
                </button>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-transparent px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
                >
                  Home
                </Link>

                <a
                  href={`mailto:help@yourdomain.com?subject=App%20Error&body=${encodeURIComponent(
                    `${error?.message}\n\nStack:\n${(error?.stack ?? "").slice(0, 1000)}`
                  )}`}
                  className="ml-auto inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-400 hover:text-slate-200"
                >
                  Report
                </a>
              </div>
              <details className="mt-4 rounded-md border border-slate-800 bg-slate-800/30 p-3 text-xs text-slate-300">
                <summary className="cursor-pointer">Error details</summary>
                <pre className="mt-2 max-h-40 overflow-auto text-[12px] leading-tight text-rose-200">
{error?.message}
{error?.stack}
                </pre>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}