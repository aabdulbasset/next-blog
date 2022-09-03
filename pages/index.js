import { MainBody } from "../components/mainbody";
import { apolloClient } from "../utils/apolloclient";
import { gql } from "@apollo/client";
export default function Home({ posts, tags }) {
  return <MainBody posts={posts} tags={tags} />;
}
export async function getStaticProps(context) {
  const { data } = await apolloClient.query({
    query: gql`
      query Posts {
        posts {
          title
          content {
            text
          }
          excerpt
          publishedAt
          author {
            name
            picture {
              url
            }
          }
          coverImage {
            url
          }
          slug
        }
      }
    `,
  });

  const tagsData = await apolloClient.query({
    query: gql`
      query MyQuery {
        tags {
          name
        }
      }
    `,
  });
  return {
    props: {
      posts: data.posts,
      tags: tagsData.data.tags,
    }, // will be passed to the page component as props
  };
}
