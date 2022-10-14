import { apolloClient } from "../../utils/apolloclient";
import { gql } from "@apollo/client";
import moment from "moment";
import readingTime from "reading-time";
import parse from "html-react-parser";
import { Avatar } from "@mui/material";
import * as PropTypes from "prop-types";

function Tag({ tag }) {
  return (
    <div className={"bg-slate-200 rounded-md shadow-md w-fit p-2"}>{tag}</div>
  );
}

function AuthorComponent(props) {
  return (
    <div
      id={"author-info"}
      className={"bg-white rounded-md shadow-md p-6 md:w-10/12 flex gap-6 "}
    >
      <Avatar
        src={props.author.picture.url}
        sx={{ width: "100px", height: "100px" }}
      />
      <div className={"flex flex-col justify-between"}>
        <h1 className={"text-xl font-bold text-gray-700"}>
          {props.author.name}
        </h1>
        <h3 className={"font-bold text-gray-500"}>{props.author.biography}</h3>
      </div>
    </div>
  );
}

function PostTagsComponent(props) {
  return (
    <div id={"tags"}>
      <h1 className={"text-center font-bold text-xl p-4"}>Tags</h1>
      <div className={"flex gap-3 text-black  justify-center"}>
        {props.tags.map(props.callbackfn)}
      </div>
    </div>
  );
}

function PostHeader(props) {
  return (
    <div id={"post-details"} className={"flex flex-col gap-6"}>
      <div id={"post-header"} className={"text-center"}>
        <h1 className={"text-4xl font-bold text-slate-700 mb-6"}>
          {props.title}
        </h1>
        <h3 className={"font-bold text-lg text-gray-500"}>
          {moment(props.inp).format("Do of MMM, yyyy")} -{" "}
          {readingTime(props.content.html).text}
        </h3>
      </div>
      <div id={"post-content"}>{parse(props.content.html)}</div>
      <PostTagsComponent tags={props.tags} callbackfn={props.callbackfn} />
    </div>
  );
}

export default function PostDetails({ post }) {
  return (
    <div className={"flex flex-col items-center md:items-stretch"}>
      <div
        className={
          "flex flex-col bg-white shadow-md md:w-10/12 rounded-md p-4 justify-between gap-12"
        }
      >
        <img className={"rounded-md"} src={post.coverImage.url} />
        <PostHeader
          title={post.title}
          inp={post.publishedAt}
          content={post.content}
          tags={post.tags}
          callbackfn={(tag) => <Tag tag={tag.name} />}
        />
      </div>
      <h1
        className={"font-bold text-xl text-center text-slate-600 w-10/12 p-6"}
      >
        Author
      </h1>
      <AuthorComponent author={post.author} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  let { data } = await apolloClient.query({
    query: gql`
      query post {
        post(where: { slug: "${params.pid}" }) {
    author {
      name
      biography
      picture {
        url
      }
    }
    coverImage {
      url
    }
    excerpt
    publishedAt
    title
    tags {
      name
    }
    content {
      html
    }
  }
}

    `,
  });
  return {
    props: { post: data.post },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  let { data } = await apolloClient.query({
    query: gql`
      query MyQuery {
        posts {
          slug
        }
      }
    `,
  });

  const paths = data.posts.map((post) => ({
    params: {
      pid: post.slug,
    },
  }));
  return { paths, fallback: false };
}
