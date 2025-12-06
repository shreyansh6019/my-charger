"use client";

import styles from "./ChargerDetails.module.css"

type Props = {
  title?: string;
  subtitle?: string;
  onScan?: () => void;
};

export default function Diaganosis({ title = "Diagnose Charger", subtitle = "Scan to Start Diagnosis", onScan }: Props){
  return (
    <section
      aria-label={title}
      className="w-full rounded-lg bg-[#0d111d] p-4 shadow-sm"
    >
      <div className="flex flex-col gap-3">
        <div>
          <h3 className={`font-semibold text-slate-100 ${styles.diaganosis_title}`}>{title}</h3>
          <p className={`mt-1 text-slate-400 ${styles.diaganosis_subtitle}`}>{subtitle}</p>
        </div>

        <div className="mt-12 flex items-center">
          <button
            type="button"
            onClick={onScan}
            className="w-12 md:w-full rounded-md bg-[#87c445] px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:brightness-95"
            aria-label="Scan"
          >
            Scan
          </button>
        </div>
      </div>
    </section>
  );
}
