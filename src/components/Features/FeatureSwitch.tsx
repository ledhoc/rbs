"use client";

import SingleFeature from "@/components/Features/SingleFeature";
import featuresData from "@/components/Features/featuresData";
import { useState } from "react";

type ModeSwitch = "feature_summary" | "feature_detail";
export default function FeatureSwitch() {
  const [mode, setMode] = useState<ModeSwitch>("feature_summary");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onClickMode = (_mode: ModeSwitch) => {
    setMode(_mode);
  };
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const wrapClassName =
    mode === "feature_summary"
      ? `grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-2 ${mode === "feature_summary" ? "visible" : "invisible"}`
      : "overflow-hidden flex h-[300px] w-full flex-col rounded-2xl border-[1px] border-primary bg-white h-[500px] border-b-4";

  const onClickSwitchDetail = (index) => {
    setCurrentIndex(index);
    setMode("feature_detail");
    scrolltoHash("features");
  };
  return (
    <div className={wrapClassName}>
      {mode === "feature_summary" ? (
        featuresData.map((feature, index) => (
          <SingleFeature
            key={feature.id}
            feature={feature}
            onClickSwitch={onClickSwitchDetail}
            currentIndex={index}
          />
        ))
      ) : (
        <div className="flex flex-wrap">
          <div
            className="flex cursor-pointer flex-row items-center rounded-br-2xl rounded-tl-2xl bg-primary px-5 py-2"
            onClick={() => onClickMode("feature_summary")}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15L4.11612 14.1161L3.23223 15L4.11612 15.8839L5 15ZM23.75 16.25C24.4404 16.25 25 15.6904 25 15C25 14.3096 24.4404 13.75 23.75 13.75V16.25ZM11.6161 6.61612L4.11612 14.1161L5.88388 15.8839L13.3839 8.38388L11.6161 6.61612ZM4.11612 15.8839L11.6161 23.3839L13.3839 21.6161L5.88388 14.1161L4.11612 15.8839ZM5 16.25H23.75V13.75H5V16.25Z"
                fill="white"
              />
            </svg>
            <p className="text-xl font-medium text-white md:text-2xl">
              {featuresData[currentIndex].title}
            </p>
          </div>
          <div className="scrollbar-hide  ml-5 h-[440px] overflow-y-auto pb-5">
            {featuresData[currentIndex].paragraphDetail}
          </div>
        </div>
      )}
    </div>
  );
}
