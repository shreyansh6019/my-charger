"use client";

export default function GlobalLoading() {
  return (
    <div className="min-h-[81vh] w-full bg-transparent">
      <div className="mx-auto flex min-h-[81vh] max-w-4xl items-center justify-center px-4 py-12">
        <div className="w-full rounded-2xl bg-[#0d111d] p-8 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-4">
              <svg
                className="h-12 w-12 animate-spin text-sky-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-100"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>

              <div className="text-left">
                <h2 className="text-lg font-semibold text-slate-100">Loading…</h2>
                <p className="mt-1 text-sm text-slate-400">Fetching charger data — this usually takes a few seconds.</p>
              </div>
            </div>

            {/* subtle skeleton placeholders */}
            <div className="w-full space-y-3 pt-2">
              <div className="h-4 w-3/4 animate-pulse rounded bg-slate-800/60" />
              <div className="h-56 animate-pulse rounded bg-slate-800/60" />
              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 animate-pulse rounded bg-slate-800/60" />
                <div className="h-20 animate-pulse rounded bg-slate-800/60" />
                <div className="h-20 animate-pulse rounded bg-slate-800/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
