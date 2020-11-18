import { FetchArticlePaths, FetchArticle } from '../../lib/helper';
import NotionArticle from '../../components/NotionArticle';

export const getStaticPaths = async () => {
  const paths = await FetchArticlePaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const article = await FetchArticle(slug);
  return {
    props: {
      article,
    },
  };
};

const Article = (props) => <NotionArticle {...props} />;

export default Article;
