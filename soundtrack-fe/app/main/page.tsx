"use client";
import { Button } from "../components/shared";
import useAuth from "../lib/hooks/useAuth";

export default function Main() {
  const { signup } = useAuth();

  return (
    <div className="w-full h-screen">
      {["Soundtrack your reading", "Soundtrack your writing"].map(
        (text, index) => (
          <div
            key={index}
            className="w-full h-1/2 p-8 flex flex-col justify-center items-center border first:border-b-1 border-t-0 first:bg-black first:text-white"
          >
            <div className={`w-full flex flex-col ${index ? "md:jutify-end" : "md:justify-start"} ${index ? "md:items-end" : "md:items-start"}  gap-8 md:gap-24`}>
              <h1 className={`w-full ${index ? "text-end" : "text-start"} text-[48px] md:text-[72px] xl:text-[96px]`}>
                {text}
              </h1>
              <Button
                type="button"
                size="sm"
                value="Start"
                onClick={signup}
                styles={`p-4 text-xl border ${index ? "border-black hover:text-white" : "border-white hover:bg-white hover:text-black"}`}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}
