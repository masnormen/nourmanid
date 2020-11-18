import { FetchWorksPaths, FetchWorks } from '../../lib/helper';
import NotionArticle from '../../components/NotionArticle';

export const getStaticPaths = async () => {
  const paths = await FetchWorksPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const article = await FetchWorks(slug);
  return {
    props: {
      article,
    },
  };
};

const Work = (props) => <NotionArticle isWork {...props} />;

export default Work;
