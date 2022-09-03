import { HomePostComponent } from "./post/homePostComponent";
import Link from "next/link";
import { Button } from "@mui/material";
import { Sidebar } from "./sidebar/sidebar";

export function MainBody({ posts, tags }) {
  return (
    <div
      className={
        "flex md:flex-row flex-col gap-12 md:w-8/12 w-11/12 mx-auto justify-between"
      }
    >
      <div id={"posts-list"} className={"flex flex-col gap-4"}>
        {posts.map((post) => (
          <Link href={`/post/${post.slug}`}>
            <a>
              <HomePostComponent post={post} />
            </a>
          </Link>
        ))}
      </div>
      <Sidebar
        map={tags.map((tag) => (
          <Button
            variant={"contained"}
            sx={{
              backgroundColor: "black!important",
              color: "white",
              fontSize: "12px",
              textTransform: "none",
            }}
          >
            {" "}
            #{tag.name}
          </Button>
        ))}
      />
    </div>
  );
}
