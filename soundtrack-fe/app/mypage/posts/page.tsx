import Card from "@/app/components/shared/Card";
import { Post } from "@/app/lib/types/Post";
import Link from "next/link";
import { dummyPosts } from "./dummy";

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <section className="w-full h-auto p-8 flex justify-start items-center">
      <ul className="w-full flex flex-wrap justify-center items-center gap-8">
        {dummyPosts.map((post: Post) => (
          <Link key={post.id} href={`/mypage/posts/${post.id}`}>
            <Card size="md" title={post.title}>
              <p className="w-full text-ellipsis overflow-hidden">
                {post.content}
              </p>
              <div className="w-full flex flex-col justify-end items-end">
                <small>created at {post.createdAt}</small>
                <small>updated at {post.updatedAt}</small>
              </div>
            </Card>
          </Link>
        ))}
      </ul>
    </section>
  );
}
