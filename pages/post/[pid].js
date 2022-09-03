import { apolloClient } from "../../utils/apolloclient";
import { gql } from "@apollo/client";

export default function PostDetails({ post }) {
  console.log(post);
  return (
    <div
      className={
        "flex flex-col md:w-8/12 w-11/12 mx-auto bg-white shadow-md rounded-md p-4"
      }
    >
      <img src={post.coverImage.url} />
      <div id={"post-details"}></div>
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
    content {
      html
    }
  }
}

    `,
  });
  return {
    props: { post: data.post },
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
