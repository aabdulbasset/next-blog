import { HomePostComponent } from "./post/homePostComponent";
import Link from "next/link";

export function MainBody({ posts }) {
  return (
    <div className={"flex md:flex-row flex-col gap-12 justify-between w-full"}>
      <div id={"posts-list"} className={"flex flex-col gap-4"}>
        {posts.map((post) => (
          <Link href={`/post/${post.slug}`} key={post.slug}>
            <a>
              <HomePostComponent post={post} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
