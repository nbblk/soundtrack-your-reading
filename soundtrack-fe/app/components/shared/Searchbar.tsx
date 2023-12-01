"use client";
import { useState } from "react";
import Input from "./Input";

export default function Searchbar() {
  const [keyword, setKeyword] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keyword.length) {
      search();
    }
  };

  const search = () => {
    // TODO: search logic
  };

  return (
    <Input
      type="text"
      label="keyword"
      placeholder="Search..."
      onChange={onChangeHandler}
      onKeyUp={onKeyUpHandler}
      size="lg"
    />
  );
}
