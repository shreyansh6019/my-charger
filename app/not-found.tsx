import Link from "next/link";
import Image from "next/image";
import Warning from "@/public/warning.png";

export default function NotFound() {
  return (
    <div className="min-h-[81vh] w-full bg-transparent">
      <div className="mx-auto flex min-h-[81vh] max-w-4xl items-center justify-center px-4 py-12">
        <div className="w-full rounded-2xl bg-[#0d111d] p-8 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-slate-800/60 text-3xl font-bold text-slate-200">
                <Image
                    src={Warning}
                    alt="Not Found"
                    width={40}
                    height={40}
                    className="opacity-80 group-hover:opacity-100 transition-all h-8 w-8"
                    priority={false}
                />
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-slate-100">Page not found</h1>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                We couldn’t find the page you were looking for. It might have been moved, renamed, or doesn’t exist.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-md bg-[#87c445] px-4 py-2 text-sm font-semibold text-slate-900 hover:brightness-95"
              >
                Return home
              </Link>

              <Link
                href="/"
                className="rounded-md border border-slate-700 bg-transparent px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
              >
                Browse dashboard
              </Link>
            </div>

            <div className="text-xs text-slate-500">If you think this is an error, contact support.</div>
          </div>
        </div>
      </div>
    </div>
  );
}