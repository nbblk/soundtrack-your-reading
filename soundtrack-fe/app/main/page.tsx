"use client";
import { Button } from "../components/shared";
import useAuth from "../lib/hooks/useAuth";

export default function Main() {
  const { signup } = useAuth();

  return (
    <div className="w-full h-screen">
      <section className="w-full h-1/2 p-8 flex flex-col justify-center items-center border-black">
        <div className="w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-8">
          <h1 className="w-full md:w-1/2 text-[72px] md:text-[96px]">
            Soundtrack your reading.
          </h1>
          <Button type="button" size="sm" value={"Start"} onClick={signup} />
        </div>
      </section>
      <section className="w-full h-1/2 p-8 flex flex-col justify-center items-center border border-x-0 border-b-0 border-black">
        <div className="w-full flex flex-col justify-center itmes-center md:justify-end md:items-end gap-8">
          <h1 className="w-full md:w-1/2 text-[72px] md:text-[96px] text-right">
            Soundtrack your writing.
          </h1>
          <Button type="button" size="sm" value={"Start"} onClick={() => signup()} />
        </div>
      </section>
    </div>
  );
}
