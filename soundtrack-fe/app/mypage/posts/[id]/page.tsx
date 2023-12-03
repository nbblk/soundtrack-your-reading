"use client";
import { useState } from "react";
import { Dropdown, Button } from "@/app/components/shared";
import { Post } from "@/app/lib/types/Post";
import { dummyPosts } from "../dummy";

export default function PostDetail({
  id,
  title,
  content,
  createdAt,
  updatedAt,
  user,
}: Post) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <section className="w-full h-screen p-[40px] md:px-[280px]">
      <h1 className="w-full text-[48px]">{dummyPosts[0].title}</h1>
      <div className="w-full flex flex-row justify-between items-center gap-4 text-sm">
        <div className="w-full flex flex-col md:justify-end md:items-end gap-1 py-4 md:py-0">
          <span className="md:self-start">
            written by {dummyPosts[0].user.name}
          </span>
          <span>created at {dummyPosts[0].createdAt}</span>
          <span>updated at {dummyPosts[0].updatedAt}</span>
          <Button
            type="button"
            size="md"
            value="More..."
            onClick={toggleMore}
            styles="relative md:w-auto my-1 transparent border md:border-none hover:underline hover:bg-transparent hover:text-black"
          >
            {isMoreOpen && (
              <Dropdown
                items={[
                  {
                    title: "modify",
                    link: `/mypage/posts/${dummyPosts[0].id}/modify`,
                  },
                  {
                    title: "delete",
                    link: `/mypage/posts/${dummyPosts[0].id}/delete`,
                  },
                ]}
              />
            )}
          </Button>
        </div>
      </div>
      <p className="my-4 h-2/3 border border-black">{dummyPosts[0].content}</p>
    </section>
  );
}
