import { Post } from "@/app/lib/types/Post";
import { dummyPosts } from "./dummy";
import Card from "@/app/components/shared/Card";

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <section className="w-full h-auto p-8 flex justify-start items-center">
      <ul className="w-full flex flex-wrap justify-center items-center gap-8">
        {dummyPosts.map((post: Post) => (
          <Card key={post.id} size="md" title={post.title}>
            <p className="w-full text-ellipsis overflow-hidden">
              {post.content}
            </p>
            <div className="w-full flex flex-col justify-end items-end">
              <small>created at {post.createdAt}</small>
              <small>updated at {post.updatedAt}</small>
            </div>
          </Card>
        ))}
      </ul>
    </section>
  );
}
