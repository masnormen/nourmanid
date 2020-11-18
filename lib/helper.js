import { NotionAPI } from 'notion-client';
import { normalizeTitle, uuidToId } from 'notion-utils';

//Articles

const FetchArticle = async (slug) => {
  const api = new NotionAPI();
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${process.env.COLLECTION_ID}`)
    .then((raw) => raw.json());
  const article = res.find((item) => (item.Show && normalizeTitle(item.Title) === slug)) || null;
  article.recordMap = await api.getPage(uuidToId(article.id));
  return article;
};

const FetchAllArticles = async (max = 0) => {
  const api = new NotionAPI();
  let res = await fetch(`https://notion-api.splitbee.io/v1/table/${process.env.COLLECTION_ID}`)
    .then((raw) => raw.json());
  res.sort((a, b) => new Date(b.Date) - new Date(a.Date));
  res = res.slice(0, (max > res.length || max === 0 ? res.length : max));
  return Promise.all(res.map(async (item) => {
    const recordMap = await api.getPage(uuidToId(item.id));
    const pageInfo = recordMap?.block[item.id]?.value;
    //Extracting article info
    const { Title: title, Summary: summary, Category: category } = item;
    const slug = normalizeTitle(title);
    const pageIcon = pageInfo?.format?.page_icon;
    const imageId = pageInfo?.content?.find((x) => (recordMap?.block[x]?.value?.type === 'image'));
    const imageRaw = recordMap?.block[imageId]?.value?.format?.display_source; //403 Forbidden
    const image = `https://www.notion.so/image/${encodeURIComponent(imageRaw)}?table=block&id=${imageId}&cache=v2`;
    return {
      title: title || null,
      category: category || null,
      slug: slug || null,
      pageIcon: pageIcon || null,
      summary: summary || null,
      image: image || null,
    };
  }));
};

const FetchArticlePaths = async () => {
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${process.env.COLLECTION_ID}`);
  const articleList = await res.json();
  return articleList.map((article) => ({
    params: {
      slug: normalizeTitle(article.Title),
    },
  }));
};

//Works

const FetchWorks = async (slug) => {
  const api = new NotionAPI();
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${process.env.WORKS_ID}`)
    .then((raw) => raw.json());
  const article = res.find((item) => (item.Show && normalizeTitle(item.Title) === slug)) || null;
  article.recordMap = await api.getPage(uuidToId(article.id));
  return article;
};

const FetchAllWorks = async (max = 0) => {
  const api = new NotionAPI();
  let res = await fetch(`https://notion-api.splitbee.io/v1/table/${process.env.WORKS_ID}`)
    .then((raw) => raw.json());
  res.sort((a, b) => new Date(b.Date) - new Date(a.Date));
  res = res.slice(0, (max > res.length || max === 0 ? res.length : max));
  return Promise.all(res.map(async (item) => {
    const recordMap = await api.getPage(uuidToId(item.id));
    const pageInfo = recordMap?.block[item.id]?.value;
    //Extracting article info
    const { Title: title, Summary: summary, Category: category } = item;
    const slug = normalizeTitle(title);
    const pageIcon = pageInfo?.format?.page_icon;
    const imageId = pageInfo?.content?.find((x) => (recordMap?.block[x]?.value?.type === 'image'));
    const imageRaw = recordMap?.block[imageId]?.value?.format?.display_source; //403 Forbidden
    const image = `https://www.notion.so/image/${encodeURIComponent(imageRaw)}?table=block&id=${imageId}&cache=v2`;
    return {
      title: title || null,
      category: category || null,
      slug: slug || null,
      pageIcon: pageIcon || null,
      summary: summary || null,
      image: image || null,
    };
  }));
};

const FetchWorksPaths = async () => {
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${process.env.WORKS_ID}`);
  const articleList = await res.json();
  return articleList.map((article) => ({
    params: {
      slug: normalizeTitle(article.Title),
    },
  }));
};

export {
  FetchArticle, FetchAllArticles, FetchArticlePaths,
  FetchWorks, FetchAllWorks, FetchWorksPaths,
};
