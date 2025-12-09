"use client";

import styles from "./ChargerDetails.module.css";

type Props = {
  title?: string;
  engaged?: boolean;
};

export default function Emergency({ title = "Emergency stop", engaged = false }: Props) {
  return (
    <section className="w-full rounded-lg bg-[#0d111d] lg:p-7 md:p-4 p-6 shadow-sm">
      <div className="flex flex-col lg:gap-[7.5rem] md:gap-[7.125rem] gap-[6.125rem]">
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
          <span className="text-xs text-slate-400">Emergency Stop Status</span>
        </div>

        <div className="mt-4 flex flex-col items-end justify-end">
          <div className="flex items-center gap-2">
            <div className={styles.black_circle}><div className={styles.white_circle}></div></div>
            <div className="text-sm font-medium text-slate-200">STOP BUTTON</div>
          </div>
          <div className="text-xs text-slate-400">{engaged ? "Engaged" : "Not Engaged"}</div>
        </div>
      </div>
    </section>
  );
}
