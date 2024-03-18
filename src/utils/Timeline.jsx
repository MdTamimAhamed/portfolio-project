import React from "react";

export default function Timeline({ when, what, where, status }) {
  return (
    <div>
      <main className="relative ml-6 w-full border-l-[1px] border-deepNaviBlue pt-6">
        <div className="absolute -left-[4.2px] top-8 h-2 w-2 rounded-full bg-deepNaviBlue"></div>
        <div className="absolute -left-6 top-[35px] h-[1px] w-12 bg-deepNaviBlue md:w-[78px]"></div>

        <div className="mx-8 md:mx-16">
          <p>{when}</p>
          <h1 className="text-md flex flex-wrap font-bold">{what}</h1>
          <p className="flex">{where}</p>
          <p>{status}</p>
        </div>
      </main>
    </div>
  );
}
