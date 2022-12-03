import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/util.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const Post = ({ postData }: any) => {
  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </Layout>
  );
};

export default Post;
