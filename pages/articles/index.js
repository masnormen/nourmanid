import Head from 'next/head';
import Hyperlink from '../../components/Hyperlink';
import { FetchAllArticles } from '../../lib/helper';
import ArticleSummary from '../../components/ArticleSummary';

export const getStaticProps = async () => {
  const articleList = await FetchAllArticles();
  return {
    props: {
      articleList,
    },
  };
};

const ArticleIndex = ({ articleList }) => {
  return (
    <>
      <Head>
        <title>Articles · Nourman Hajar</title>
      </Head>
      <main className="min-w-full">
        <section
          id="articles"
          className="relative flex flex-col content-center justify-center flex-grow h-full min-h-screen pb-24 overflow-y-hidden bg-coffeetint pattern-woody"
        >
          {/* SVG */}
          <div className="absolute opacity-75 bottom-0 right-0 z-0 w-3/4 -mb-10 transform flip-x md:w-5/12">
            <svg
              className="fill-current text-sunflower"
              version="1.1"
              viewBox="0 0 400 750"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(440.42 -382.8)">
                <path
                  d="m-180.43 416.7c-1.1828-0.0573-3.754 1.0394-7.3027 3.4922-5.6655 3.9158-13.583 7.5424-18.305 8.3867-2.6384 0.47177-2.8534 0.3313-2.0117-1.3106 2.4593-4.7972 1.9512-12.391-0.66602-9.959-0.97617 0.90706-7.7768 15.183-13.137 27.576-2.0497 4.7393-4.1887 7.5702-8.8789 11.756-10.13 9.0406-13.158 5.0263-5.9336-7.8672 2.2003-3.9269 4.5903-9.1282 5.3105-11.559 1.3379-4.5146 1.1422-8.8425-0.40429-8.9473-0.78083-0.0529-1.2336 1.0788-2.9297 7.3184-0.29427 1.0826-2.7425 5.1419-5.4414 9.0215-4.0794 5.8641-5.1038 8.2264-6.0703 14-0.63946 3.8197-1.6864 8.0916-2.3262 9.4941-1.8339 4.0201-7.5095 8.627-13.217 10.729-6.4037 2.3579-8.7323 4.4474-14.561 13.07-7.2866 10.781-9.6138 13.523-12.355 14.555-3.8828 1.4609-5.8478 1.0835-4.8945-0.93945 0.44051-0.93486 2.2086-6.4757 3.9277-12.314 1.7192-5.8388 3.931-12.055 4.916-13.812 0.98496-1.7579 5.629-6.9179 10.32-11.467 4.6913-4.5489 8.5668-8.8083 8.6113-9.4648 0.0445-0.65653 1.8563-3.4346 4.0274-6.1738s5.2098-8.0034 6.752-11.697c1.5422-3.6939 4.1587-8.8475 5.8145-11.453 3.3416-5.2587 3.2323-7.8418-0.3418-8.084-3.0468-0.20642-5.1707 2.031-7.1524 7.5352-1.9815 5.5038-5.603 11.647-6.8184 11.564-1.323-0.0896-2.2619-2.1034-3.0977-6.6504-0.88465-4.8129-2.6744-5.8216-4.4609-2.5137-1.0604 1.9634-1.0174 4.2404 0.21875 11.633 1.8754 11.215 1.1356 12.964-7.8106 18.496-6.4148 3.9665-8.1049 4.245-10.928 1.793-2.3978-2.0828-3.037-2.0663-5.5625 0.13868-1.75 1.5279-1.9658 2.3207-1.2598 4.6387 1.674 5.4959-6.4005 35.868-14.844 55.834-1.3386 3.1654-2.5158 6.9208-2.6152 8.3438-0.35509 5.079-2.8658 10.072-8.9238 17.748-3.381 4.2839-8.6665 12.375-11.746 17.98-8.5579 15.578-9.1808 16.559-13.123 20.652-2.0221 2.0994-5.935 7.8359-8.6953 12.748-2.7603 4.9121-5.3712 8.9062-5.8027 8.877s-2.4517-1.4212-4.4883-3.0938c-3.2255-2.649-11.669-7.4691-17.084-9.752-1.6054-0.67682-1.4809-1.0958 1.4414-4.7949 1.761-2.2292 4.6121-6.4382 6.334-9.3535 3.78-6.4 7.6607-10.907 16.309-18.939 3.5956-3.3396 9.6412-9.8109 13.434-14.379 4.382-5.2783 8.3612-9.0023 10.916-10.219 4.0525-1.9296 5.5003-4.4525 2.666-4.6445-0.84242-0.0571-2.7823 0.60127-4.3106 1.4609-2.6694 1.5015-2.7455 1.4913-1.9492-0.22656 2.09-4.5087 2.3552-6.5092 0.87696-6.6094-2.2002-0.14907-3.5903 1.7275-6.123 8.2695-1.3955 3.6045-4.622 8.6448-8.3184 12.994-6.6072 7.7743-15.348 14.665-16.641 13.119-0.44278-0.52959-0.85055-3.4467-0.90625-6.4824s-0.4699-7.7992-0.91992-10.586c-0.45002-2.7868-0.96223-6.0914-1.1387-7.3438-0.17645-1.2523-1.0491-2.3265-1.9375-2.3867-1.4166-0.096-1.5625 0.72683-1.1856 6.6855 0.23637 3.737 0.0965 11.733-0.3125 17.77-0.71801 10.598-0.87527 11.182-4.5742 17.023-4.2524 6.7152-11.566 14.457-13.531 14.324-2.23-0.15109-13.417-9.383-13.648-11.264-0.12258-0.9948 1.7714-4.4692 4.207-7.7207 6.7323-8.9874 10.555-15.747 9.9727-17.637-0.76428-2.4816-2.9028-0.62534-8.1055 7.041-4.883 7.1953-7.0873 9.2467-8.0274 7.4668-0.33375-0.63196-0.2658-2.1989 0.15039-3.4824 0.41621-1.2836 0.42968-4.5885 0.0312-7.3438-0.68534-4.7393-0.5699-5.1538 2.123-7.6875 3.7558-3.5336 4.8776-5.5224 10.271-18.211 5.2424-12.332 8.4205-15.743 16.057-17.229 2.6784-0.52099 7.0313-2.2281 9.6719-3.793 9.8887-5.8604 18.84-6.1632 32.371-1.0938 6.8072 2.5504 8.7625 2.9248 11.553 2.209 2.916-0.74807 4.9189-3.4734 2.8086-3.8223-0.40887-0.0676-3.2919-0.44196-6.4062-0.83203-5.3769-0.67349-13.628-3.6978-16.189-5.9336-1.9034-1.6615-1.2331-3.6213 2.8144-8.2383 4.3109-4.9174 4.6791-5.994 2.1113-6.168-2.0381-0.13809-7.7653 4.4221-10.426 8.3008-1.1069 1.6137-4.6924 3.7384-9.625 5.7031-4.3238 1.7222-10.106 4.4105-12.85 5.9746-7.5884 4.3262-7.8579 2.3968-1.2383-8.8516 4.828-8.204 7.045-10.782 15.725-18.281 5.9923-5.1775 9.9312-9.296 9.6777-10.119-0.63721-2.069-1.1998-1.8317-7.4805 3.1426-3.1719 2.5121-5.9254 4.3859-6.1191 4.1641-0.19371-0.22187 0.36201-1.6384 1.2344-3.1465s1.4573-3.5655 1.3008-4.5723c-0.50485-3.2466-3.3923-1.5659-5.0996 2.9688-2.1038 5.588-7.3857 13.764-9.1816 14.211-1.0637 0.26472-1.2369-0.97938-0.76172-5.4961 0.82297-7.8231 0.77159-8.334-0.87109-8.4453-1.6366-0.11089-2.415 2.413-3.9336 12.764-2.4129 16.446-2.3617 16.317-9.1699 23.41-4.7722 4.9722-6.948 8.2086-8.8633 13.188-2.8771 7.4793-7.0782 15.163-10.145 18.555l-2.0762 2.2969-2.3984-5.6055c-1.8758-4.3847-2.4212-7.6983-2.5059-15.201-0.0838-7.4174-0.65387-10.923-2.5078-15.455-2.4458-5.9785-4.2629-7.7909-3.7031-3.6934 0.91888 6.7268 2.1319 22.717 2.416 31.84 0.19304 6.1991 1.183 13.554 2.4512 18.207 1.575 5.7791 2.103 10.801 2.0312 19.328-0.13217 15.712 1.2254 18.842 10.4 23.988l6.7637 3.793-12.439 9.7734c-6.842 5.3758-15.414 11.911-19.049 14.521-4.6444 3.3365-7.9053 6.3856-10.15 9.582v62.498c1.2859 0.66217 2.9314 0.71001 6.623 0.66406 4.4648-0.0556 8.5465-0.91379 12.883-2.709 3.491-1.4452 6.452-2.508 6.5801-2.3613 0.36932 0.423-8.2314 21.342-9.9277 24.146-3.1237 5.1651-7.308 8.398-14.703 11.357-0.55685 0.22285-0.92668 0.35489-1.4551 0.5625v339.49c2.1351-9.2721 1.2765-13.524 3.1506-21.074 0.93932-3.7846 2.2793-12.689 3.6508-20.162 2.9573-16.113 0.52021-1.5999 3.595-19.762 0.75019-4.4312 0.86887-13.67 0.98723-15.416 0.11835-1.7469 1.0714-11.418 2.3541-14.461 2.0466-4.854 0.32875-12.949 2.7324-21.136 4.5818-15.606 22.52-8.9874 37.382-14.934 9.5126-3.8062 7.7271-9.5324 4.5791-7.9757-4.2811 2.117-18.4 4.3142-25.049 4.4911-9.0439 1.668-7.2536 2.1834-12.693 1.2057-8.0252-1.4426-4.8112-14.885-4.0213-16.935l0.52613-2.8248c0.68464-3.6759 1.3972-4.8126 8.634-6.9363 10.093-2.9618 11.887-2.3427 18.98 6.5451 4.6752 5.8583 6.3411 7.413 8.5105 7.9356 3.655 0.8804 4.1014-1.1276 1.1109-5.0011-2.8253-3.6595-3.6978-5.7014-2.8807-6.7457 0.75058-0.95935 7.7418 0.44873 13.161 2.6508 5.4197 2.2024 8.5023 2.1168 10.384-0.28832 2.2074-2.8214 0.35793-4.628-5.7876-5.6544-3.045-0.50849-8.6282-2.0046-12.407-3.3246-3.779-1.3201-9.7249-2.5754-13.214-2.7898-3.4886-0.21434-6.2489-1.0313-7.2853-1.1259-0.6553-0.0598-6.2765-0.3682-12.795 0.084-1.513 0.10495-3.042 0.18187-4.5331 0.23897 0.75229-3.2398 1.2262-6.2952 0.59945-9.1251-0.25736-1.1622-0.50354-3.1854-0.71889-5.6645 1.5808-0.47305 3.146-1.1756 4.9829-2.147 5.3764-2.8432 12.597-3.99 16.813-2.6691 1.4711 0.46084 5.3508 2.5367 8.6204 4.6125 4.942 3.1377 7.3824 3.9536 14.471 4.8354 4.6899 0.58334 9.3467 1.4725 10.349 1.9768 5.7761 2.9061 6.9212 3.3253 7.4034 2.7089 0.95511-1.2207-2.1354-4.2574-6.3886-6.2776-2.2897-1.0876-7.7557-2.7839-12.148-3.7699-14.421-3.2374-15.386-8.173-1.8909-9.672 6.248-0.69401 9.7828-0.39349 14.679 1.2472 12.802 4.2903 27.97 8.7673 29.297 8.6468 3.5581-0.32299-1.7532-5.7733-6.9658-7.1479-1.784-0.47044-1.7455-0.72597 0.36809-2.3741 3.7828-2.9498 11.77-6.4165 18.468-8.0165 9.5905-2.2908 10.5-5.5239 1.2352-4.3928-2.7023 0.32993-5.1815 0.39013-5.5104 0.13281-0.32891-0.25738 0.54115-2.5768 1.9346-5.1528 2.7563-5.0954 2.2438-6.4224-1.7406-4.5108-1.8429 0.88418-2.7982 1.9903-3.4037 3.9437-1.2816 4.1344-4.523 7.7586-9.8627 11.024-7.201 4.4038-12.244 5.0953-19.099 2.6188-3.2198-1.1632-5.8887-2.3958-5.9306-2.7391s2.6951-1.2054 6.0822-1.9145c8.9725-1.8782 12.763-4.337 19.574-12.701 5.7543-7.0663 5.9267-7.1909 10.923-7.9589 2.792-0.42916 6.4764-1.2951 8.1881-1.9242 1.7117-0.62905 5.5484-1.0223 8.527-0.87347 7.4831 0.37391 8.4453-1.1786 2.773-4.481l-4.3722-2.5458 1.0838-4.0337c0.7054-2.6242 2.9018-6.3835 6.2852-10.757 5.6336-7.2819 7.3905-8.4294 18.247-11.922 3.7764-1.2148 6.3198-2.6542 7.0617-3.9975 1.1054-2.0012 0.87686-2.0593-4.8742-1.2134l-6.0332 0.88797 2.875-3.6746c2.4105-3.0809 2.6351-3.8643 1.3853-4.8421-1.8025-1.4103-3.6008-0.43792-6.8298 3.6892-3.0061 3.8422-8.8917 7.2768-9.8991 5.7773-1.2231-1.8206 2.4908-9.0221 9.0406-17.532 6.8902-8.9525 8.7636-9.9846 16.575-9.1193 5.0344 0.55772 7.0752-1.3561 3.507-3.29-1.3486-0.73091-3.0569-1.5738-3.7962-1.8734-0.86613-0.35098-0.83999-1.7307 0.0757-3.8777 3.231-7.5756 0.20021-7.8006-6.4394-0.47728-5.9394 6.551-16.564 17.217-17.233 17.298-1.0406 0.12705-1.3886-2.523-1.4713-11.191-0.0515-5.3973-0.80224-10.16-1.9135-12.141-3.6047-6.4276-3.3031-13.988 1.0508-26.356 4.0931-11.627 4.7634-16.502 2.0465-14.871-0.76812 0.46095-2.6287 4.6332-4.135 9.2719-1.5063 4.6388-3.0293 8.4684-3.3846 8.5118-1.5395 0.18798-5.9564-11.301-7.2762-18.928-1.0471-6.0512-1.859-8.2614-2.9843-8.124-3.5123 0.42882-2.1534 12.068 3.0966 26.52 1.12 3.0829 2.1653 7.2248 2.3224 9.2039l0.28524 3.5984-7.6809-6.765c-4.2246-3.7207-8.0993-6.6098-8.6106-6.4212-1.572 0.57973-0.34388 3.2631 3.0256 6.6113 3.0779 3.0585 11.867 12.415 15.084 16.06 2.1999 2.4921 3.4253 10.99 2.9383 20.364-0.23175 4.4596-0.28515 9.7862-0.11866 11.837 0.45281 5.5776-1.008 3.4496-4.24-6.1746-3.1911-9.5023-4.3646-11.041-7.0331-9.2168-2.1933 1.4991-2.3537 0.43355 1.7872 11.911 6.858 19.008 7.0821 24.601 1.4095 35.198-3.6581 6.8336-10.326 13.289-15.082 14.599-4.9541 1.3647-5.5386-0.29713-2.1131-6.0164 3.4224-5.7142 3.721-8.0983 0.97254-7.7625-2.2668 0.27697-8.8342 8.8519-10.626 13.875-2.3015 6.4526-7.3459 11.844-14.021 14.982-7.8658 3.6974-26.35 7.8529-27.755 6.2401-1.0486-1.2038 0.68717-12.862 2.7167-18.252 0.78043-2.0725 3.1616-4.1587 10.089-8.832 6.0704-4.0949 11.473-8.6638 16.338-13.821 6.467-6.8548 7.4415-8.2618 8.8348-12.753 1.3093-4.2208 2.2793-5.7062 5.9172-9.0584 5.5958-5.1564 8.078-8.3501 9.1322-11.751 1.3833-4.4625-2.2816-3.549-6.2842 1.5669-1.8025 2.3039-3.79 4.1335-4.417 4.064-0.62703-0.0695-0.69823-2.7183-0.15855-5.8843 1.4738-8.6464 1.6803-12.771 0.7755-15.437-0.69735-2.055-1.0041-2.296-2.0937-1.6422-1.2807 0.76853-5.3619 19.465-5.7084 26.152-0.28543 5.5078-10.782 21.188-17.474 26.101-2.7095 1.9894-5.6706 4.5674-6.5804 5.7302-1.0294 1.3157-2.0832 1.7797-2.7895 1.2271-1.9478-1.5239-2.058-1.1877 8.6972-26.348 5.5464-12.975 6.4947-16.364 4.9229-17.594-0.90676-0.70947-1.5448-0.17596-2.9416 2.4596-4.1269 7.7874-7.3176 12.367-8.1579 11.71-0.46855-0.36662-1.4909-4.0228-2.2714-8.1251-1.4375-7.5553-2.8138-10.039-4.4221-7.9835-1.1928 1.5246-0.33337 16.276 1.2608 21.648 0.70444 2.3738 0.94254 4.7473 0.5298 5.2748-0.41272 0.52756-0.57947 1.7444-0.37055 2.7049 0.2089 0.96046-0.4465 3.239-1.4562 5.0641-1.0098 1.8251-2.647 6.1054-3.6392 9.5096-0.99219 3.4042-3.1762 8.4105-4.8511 11.125-1.6749 2.7149-4.5749 9.8053-6.4464 15.758s-3.927 11.493-4.567 12.311c-0.64004 0.81804-3.8145 2.3201-7.055 3.338-3.2405 1.0178-6.1243 2.1478-6.4074 2.5097-0.2346 0.29985-2.5684 0.59078-5.7536 0.83971-0.0503-1.778-0.0889-3.5669-0.0995-5.3219-0.0459-7.5953-0.18978-13.128-0.65608-19.673-0.0775-1.0874-0.38236-2.1612-0.3555-3.251 0.15093-6.1242 0.027-10.658 2.8952-18.149 1.3116-3.4254 9.099-11.258 9.8801-16.067 1.2966-7.983 1.8016-9.215 5.8047-14.146 2.4117-2.971 5.9837-8.0988 7.9375-11.395 1.9741-3.3299 7.2388-9.477 11.85-13.836 1.8306-1.7306 3.3846-3.2135 4.9316-4.6914 10.716 0.73589 14.485 0.0453 14.047-2.1875-0.1445-0.73578-3.1628-1.5384-9.2383-2.4629 10.502-10.282 13.217-14.155 17.404-22.619 5.0178-10.143 6.0926-13.558 4.3008-13.68-1.5396-0.10431-5.0418 3.6118-6.5273 6.9277-3.42 7.634-5.2007 9.8404-15.535 19.234-3.9271 3.5698-7.263 6.4414-10.082 8.7148-3.5285-0.48163-6.6072-0.95121-8.9961-1.3691 1.0664-3.2444 2.7611-7.7548 5.3008-14.158 0.4662-1.1754 0.91531-2.3605 1.3535-3.5391 1.3673-1.3758 2.78-2.7445 4.1797-4.0332 8.9952-8.2824 9.1873-8.3953 21.279-12.527 12.137-4.1473 21.112-8.4353 22.744-10.865 1.8669-2.7794-1.6241-2.4785-9.3301 0.80274-4.4528 1.896-9.1949 3.6057-10.539 3.8008-2.3261 0.3375-2.3538 0.16489-0.57227-3.5938 1.6803-3.545 5.4966-8.2073 13.375-16.338 2.1031-2.1704 2.3916-2.911 1.3984-3.5781-1.6184-1.0871-3.8462-0.40124-6.5176 2.0059-1.1745 1.0583-2.4165 1.5584-2.7617 1.1113-0.3452-0.44701-0.39199-5.7873-0.10351-11.867s0.17766-11.286-0.2461-11.57c-0.4238-0.28469-1.5863 0.43736-2.582 1.6055-1.2478 1.4639-1.748 3.9356-1.6133 7.9512 0.10754 3.2044-0.17486 9.8348-0.62695 14.734-0.73137 7.9263-1.1597 9.2971-3.8848 12.447-3.7714 4.3597-13.753 12.563-20.104 16.979 0.0976-0.47876 0.16379-0.88371 0.18554-1.1856 0.4215-5.864 2.4593-13.159 5.998-21.602 3.8985-5.8468 6.9658-11.032 6.9824-11.914 0.0153-0.81856-0.21185-1.293-0.61133-1.4688 1.3993-2.6603 2.9-5.3899 4.5234-8.2012 9.1138-15.782 15.749-24.466 20.76-27.168 2.2616-1.2195 5.5234-3.9751 7.248-6.123s6.4374-6.072 10.473-8.7207c4.0353-2.6487 8.5621-5.8536 10.059-7.1211 2.8476-2.4117 24.007-8.506 28.562-8.2266 2.938 0.18026 9.8358 3.734 13.277 6.8398 1.3346 1.2044 4.4395 4.8316 6.9004 8.0606l4.4746 5.8711-0.57227 8.6719c-0.63179 9.5752 0.1508 12.896 2.25 9.541 0.69307-1.1078 1.6862-4.1464 2.2051-6.752 0.51891-2.6056 1.6394-5.438 2.4902-6.2949 1.3494-1.3591 1.3676-1.9713 0.14258-4.793-0.7724-1.7791-3.462-5.8401-5.9766-9.0254-4.9691-6.2947-5.9538-10.62-2.0879-9.1699 4.6598 1.7479 19.583 4.5479 20.135 3.7773 1.2539-1.7519-0.74204-2.817-7.3535-3.9238-7.7226-1.2928-9.6028-2.7707-7.5996-5.9726 0.70872-1.1328 1.0886-2.7144 0.8418-3.5156-0.34761-1.1287-1.5367-0.79702-5.2754 1.4746-4.1285 2.5084-5.6391 2.8666-10.471 2.4727-3.1058-0.25322-8.4264-1.4709-11.822-2.7051l-6.1738-2.2441 4.6035-4.1426c5.098-4.5892 13.927-10.657 20.301-13.951 3.8633-1.9964 5.1345-2.0822 18.125-1.2305 14.829 0.97214 18.519 0.32576 18.764-3.2871 0.15465-2.2825 0.29236-2.2343-3.5254-1.2246-3.8953 1.0302-19.546-1.3715-19.982-3.0664-0.85631-3.3236 11.183-9.1753 26.568-12.912 9.5267-2.3138 29.222-3.9644 33.021-2.7676 3.4132 1.0752 7.5675 4.2279 11.34 8.6035 7.7046 8.9367 11.691 11.713 11.922 8.3047 0.0366-0.53986-1.8072-3.2787-4.0977-6.0859-5.0021-6.1306-5.185-8.8356-0.67773-10.072 2.6942-0.73922 3.877-0.49052 7.3476 1.5469 3.3705 1.9786 5.2184 2.3916 9.9785 2.2324 6.7136-0.22445 13.923-1.6297 13.113-2.5566-0.30293-0.34697-4.7474-1.2353-9.877-1.9746-5.1296-0.73929-9.7996-1.6824-10.377-2.0957-0.71925-0.51481-0.33017-1.9534 1.2363-4.5703 3.2188-5.3772 0.89153-6.2468-5.168-1.9316-7.4058 5.274-14.424 6.332-18.764 2.832-2.823-2.2766-2.5879-3.2737 1.1543-4.8984 1.7283-0.75033 7.0055-3.7412 11.727-6.6465 4.7211-2.9052 10.245-5.6142 12.273-6.0215 4.1881-0.84063 15.679 0.9643 25.654 4.0293 3.5101 1.0785 11.369 2.5831 17.465 3.3438l11.084 1.3828 4.2754 4.9062c2.3514 2.6986 5.5437 6.9802 7.0938 9.5156 2.4141 3.9488 2.969 4.3778 3.8789 2.9824 1.7566-2.6937 0.45063-6.9354-3.4844-11.309-2.0447-2.2724-3.5017-4.321-3.2363-4.5527 0.26539-0.2317 2.5843-0.41074 5.1523-0.39844 5.3011 0.0254 7.9798-1.4668 5.6914-3.1719-0.78277-0.58323-7.936-1.4561-15.896-1.9395-11.653-0.70743-15.504-1.3099-19.762-3.0898-2.9083-1.2159-5.398-2.6701-5.5332-3.2305-0.39072-1.6201 22.951-7.6196 31.428-8.0781 4.1592-0.225 5.5068 0.27664 12.221 4.5527 4.1501 2.6432 9.5639 6.4799 12.031 8.5273 3.0918 2.5657 5.3521 3.6817 7.2734 3.5918 1.5333-0.0717 2.8171-0.54534 2.8516-1.0547 0.0345-0.50935-4.0151-3.7878-8.998-7.2832-4.983-3.4954-9.1744-6.801-9.3164-7.3476-0.14197-0.54667 1.0144-1.2236 2.5703-1.5039 3.5389-0.6376 5.4444-1.9787 5.5762-3.9238 0.0809-1.1937-0.68173-1.4193-3.6856-1.0859-11.252 1.2487-17.274 1.4111-21.105 0.56836-4.0624-0.8935-4.1835-1.0202-2.4922-2.6523 0.97738-0.94316 5.235-3.645 9.4609-6.0039 7.3133-4.0823 9.6901-6.6604 6.3496-6.8867-2.9206-0.19788-11.808 4.2736-22.52 11.328-10.672 7.0285-10.879 7.1098-22.936 9.1484-7.0462 1.1914-15.109 1.8851-19.156 1.6465-6.4308-0.37919-6.9544-0.56946-6.5781-2.3887 0.2249-1.0873 3.9798-8.0111 8.3438-15.387 5.3978-9.123 7.6304-13.758 6.9844-14.498-2.1119-2.4188-6.7963 3.4007-19.395 24.096-4.3932 7.2167-5.9273 8.4882-19.789 16.406-8.5872 4.9052-10.698 5.7152-13.16 5.0469-2.2369-0.60716-3.1055-0.39647-3.6621 0.89063-1.5615 3.6106-3.9303 4.9781-8.1328 4.6934-2.2928-0.15534-4.4313-0.58197-4.752-0.94922-1.0594-1.2133 2.4091-5.6702 6.7949-8.7305 4.8312-3.3711 5.9825-6.8378 2.334-7.0274-3.3017-0.17152-5.9373 1.3346-14.068 8.0332-4.019 3.3109-11.227 7.983-16.018 10.383-9.0804 4.549-19.166 8.0107-20.129 6.9082-1.2256-1.4038 1.3521-6.033 5.6641-10.172 2.5018-2.4014 6.3217-6.7262 8.4883-9.6113 3.1825-4.238 5.611-6.0863 12.645-9.6191 9.0752-4.5583 19.783-12.55 19.941-14.881 0.18395-2.715-3.6685-1.4822-10.355 3.3125-8.6704 6.2169-11.429 7.5429-11.285 5.4258 0.22435-3.3113-3.7806-1.4802-9.9609 4.5527-3.5645 3.4795-7.1357 7.4086-7.9375 8.7324-0.80181 1.3238-4.4502 4.9109-8.1074 7.9707-6.1331 5.1312-6.731 5.9769-7.6816 10.893-1.7514 9.057-7.8592 17.638-16.029 22.518-8.4868 5.0684-12.454-0.71715-9.3906-13.693 2.1866-9.2609 4.9328-13.115 20.404-28.635 9.7133-9.7437 13.926-14.68 14.533-17.029 0.98862-3.8224 3.1487-5.7391 7.2344-6.4238 3.7219-0.62379 8.9362-3.9589 9.0606-5.7949 0.0682-1.0068-0.57449-1.2784-2.1914-0.92382-5.8616 1.2853-8.8552 1.2396-8.7402-0.13282 0.2133-2.5469 4.3233-9.2119 7.8301-12.699 2.1474-2.1355 3.288-4.0796 2.9805-5.0781-0.27405-0.88982-0.91336-1.4949-1.4219-1.3457-2.0083 0.58924-15.336 14.442-16.895 17.561-1.5079 3.0175-1.9322 3.24-4.7305 2.4805-1.691-0.45899-3.9164-0.89123-4.9453-0.96093s-1.8253-0.79994-1.7695-1.623c0.20228-2.9858-8.173-1.5274-14.047 2.4453-1.9351 1.3087-4.7619 3.0806-6.2812 3.9394-2.9713 1.6796-10.777 1.6654-11.668-0.0215-0.88757-1.6805 5.0106-7.4011 13.086-12.689 4.4706-2.9277 9.3213-7.1886 11.871-10.43 5.1038-6.4876 19.364-20.997 20.557-20.916 0.45836 0.0311 3.2243-1.3604 6.1465-3.0918 2.9222-1.7314 6.161-3.0897 7.1973-3.0195 1.0363 0.0702 6.5308 2.2401 12.211 4.8242s12.896 5.1632 16.035 5.7305c3.1391 0.56728 8.3216 2.2884 11.518 3.8242 3.196 1.5358 7.4752 3.1748 9.5078 3.6426 2.0327 0.46782 4.1651 1.5037 4.7402 2.3008 0.57515 0.79708 1.5934 1.486 2.2617 1.5312 0.66829 0.0453 2.2745 1.808 3.5703 3.918 2.9326 4.7751 13.336 15.268 15.268 15.398 2.604 0.17643 1.6756-2.5062-2.9863-8.623-2.5313-3.3213-4.5695-6.5256-4.5293-7.1191 0.0721-1.0645 5.6122-0.37929 14.164 1.752 2.8943 0.72131 3.7171 0.60378 3.7949-0.54492 0.1349-1.9912-3.0207-3.5495-16.381-8.0898-25.907-8.8044-25.583-8.6634-25.416-11.131 0.0606-0.89472 1.1086-1.3688 2.7754-1.2559 1.473 0.0998 5.3717-0.3811 8.6621-1.0684 8.126-1.6972 26.805 0.96662 31.094 4.4336 5.2068 4.2087 21.846 13.662 23.273 13.223 1.2143-0.37397 1.2411-0.7645 0.17774-2.6562-1.3798-2.4546-4.5891-5.055-12.008-9.7344-2.7164-1.7134-4.6387-3.5358-4.2715-4.0488 0.36718-0.51301 3.0561-0.77 5.9746-0.57227 6.4808 0.43909 9.61-1.6772 5.3652-3.6289-3.2348-1.4873-7.2705-1.774-14.846-1.0547-4.9248 0.46769-6.6779 0.19687-10.693-1.6484-4.2732-1.9637-5.9695-2.1784-15.391-1.9453-7.0874 0.17538-14.099 1.1421-21.201 2.9238-8.1056 2.0334-11.249 2.4131-13.312 1.6094-5.3662-2.0901-15.199-8.5874-15.395-10.172-0.26157-2.1228 15.178-13.101 23.184-16.484 6.7944-2.8713 14.177-3.0236 20.516-0.42578 4.9345 2.0223 15.701 2.8631 17.422 1.3613 2.086-1.8209 0.11457-3.1905-6.4238-4.4609-6.5442-1.2716-7.3933-2.8169-3.0684-5.5918 4.1524-2.6642 13.413-3.3136 20.941-1.4707 11.675 2.8578 15.687 6.7615 25.25 24.562 5.7742 10.748 5.0873 9.9158 7.668 9.2852 3.1398-0.76732 2.7811-2.6663-2.1582-11.389-5.0026-8.8343-5.6097-11.344-1.7617-7.2812 1.4148 1.4938 5.4134 5.0136 8.8867 7.8203 7.3006 5.8994 12.805 12.487 13.189 15.789 0.56285 4.8294 1.6552 17.62 1.875 21.953 0.24064 4.744 1.4169 7.4504 2.8984 6.668 0.48191-0.25453 0.91931-5.0681 0.97266-10.697l0.0977-10.234 2.4863 2.6152c1.3678 1.439 3.7529 4.9841 5.2988 7.877 7.2469 13.561 14.999 22.347 17.664 20.02 0.85403-0.74565-0.2474-2.825-4.0508-7.6465-4.7939-6.0772-10.393-17.039-9.2246-18.059 0.26969-0.23546 4.1376 1.19 8.5957 3.168 4.4581 1.978 8.806 3.3808 9.6621 3.1172 3.0282-0.93262-1.0471-3.6906-12.434-8.4121-12.112-5.0224-17.941-9.848-20.316-16.824-0.73214-2.1506-3.7739-5.8913-7.7559-9.5352-6.3946-5.8517-8.1335-7.8808-7.3438-8.5703 0.50706-0.4427 15.54-1.2242 24.383-1.2676 9.8851-0.0485 11.745-2.4549 3.9492-5.1113-2.2094-0.75284-3.2549-1.6542-2.9375-2.5332 0.27093-0.75029 0.78559-2.5844 1.1426-4.0762 0.94454-3.9471-1.8429-3.7087-4.791 0.41016-4.574 6.3905-6.5927 7.0975-17.857 6.2441-10.708-0.81114-18.548-2.86-19.086-4.9863-0.44288-1.7514 6.0448-3.8356 10.912-3.5059 5.2282 0.35423 7.1519-0.33572 7.3066-2.6191 0.10727-1.5833-0.62448-1.9387-4.5273-2.2031l-4.6562-0.3164 4.6914-3.8965c4.4714-3.7145 4.5811-3.9212 2.3535-4.4355-1.4952-0.34521-4.2666 0.58539-7.6934 2.584-9.8509 5.7454-11.876 6.2857-21.059 5.6133-5.5146-0.40386-9.7792-1.2816-12.203-2.5098l-3.7266-1.8867 1.0254-4.9531c1.3318-6.4271-0.46487-6.7498-5.1856-0.93164-1.8791 2.3159-4.7361 4.9082-6.3476 5.7617s-4.7159 3.0176-6.9004 4.8086c-3.9091 3.2049-4.1184 3.249-13.221 2.8106-10.774-0.51901-15.136 0.65799-22.527 6.0801-2.7903 2.0468-5.2588 3.5086-5.4863 3.248-0.2275-0.26057 0.63852-3.0692 1.9238-6.2422 2.7365-6.7554 6.6176-10.046 14.705-12.463 5.9971-1.792 10.862-1.7848 14.795 0.0234 1.8581 0.85436 3.3199 0.88424 5.209 0.10351 4.0842-1.688 3.4377-2.9558-2.1953-4.3086-2.8478-0.68393-5.1552-1.5853-5.127-2.002s1.7286-2.2232 3.7793-4.0137c3.9547-3.4528 4.7317-5.4322 3.2109-5.5059zm-87.285 113.46c0.82172-6e-3 1.6787 0.0246 2.584 0.0859 6.8653 0.46514 7.5454 1.8714 3.6602 7.5781-3.81 5.5962-15.76 18.417-20.654 22.16-5.8895 4.5041-7.0924 3.6265-7.877-5.7402-0.36442-4.3508-0.90262-8.1843-1.1953-8.5195-2.0603-2.3597-3.4918 6.1787-3.957 23.582-0.0515 1.9259-0.89587 9.9871-1.875 17.914-2.4268 19.647-3.9378 22.895-15.148 32.549-4.7477 4.0884-10.489 8.2023-12.758 9.1406-2.2686 0.9383-7.6639 3.9989-11.988 6.8027-4.3244 2.8038-8.8777 5.549-10.119 6.0996-5.9342 2.6321-6.8935-0.0403-5.0664-14.109 1.4885-11.462 3.3943-16.179 10.102-24.988 8.5997-11.295 12.07-13.625 22.549-15.141 6.235-0.90163 11.167-4.6114 11.438-8.6035 0.0982-1.4492 1.4552-4.9899 3.0156-7.8692 2.7969-5.1607 3.0411-8.2705 0.66211-8.4316-1.7357-0.1176-5.0477 3.4002-8.2422 8.7559-1.515 2.54-3.76 5.4499-4.9902 6.4668-2.6257 2.1704-9.6306 3.1736-9.5078 1.3613 0.18157-2.6799 11.505-21.312 16.293-26.811 5.7392-6.5904 6.5963-7.1076 15.568-9.3867 4.5097-1.1456 7.848-2.8866 11.842-6.1758 5.9405-4.8925 9.914-6.6794 15.666-6.7207zm-151.95 55.057c-1.3406-0.12224-3.1227 1.3707-5.3476 4.4824-1.505 2.1048-8.4043 8.2806-15.404 13.799v8.9453c3.0821-2.8862 6.4174-5.9936 10.174-9.4726 10.569-9.7883 13.911-14.643 11.771-17.094-0.34898-0.3997-0.74647-0.61941-1.1934-0.66015zm23.92 21.127 5.1602 0.88867c9.8828 1.7015 17.416 8.4553 19.602 17.574 4.0722 16.993 2.5025 33.368-4.2402 44.234-1.1752 1.8939-2.5086 5.038-2.9629 6.9863-0.45429 1.9483-1.9953 4.4992-3.4238 5.6699-2.4268 1.9888-2.7474 2.0169-4.8711 0.41015-4.6983-3.5546-9.0937-9.1346-8.9434-11.354 0.1881-2.7763 9.1483-16.019 14.465-21.379 6.0065-6.056 8.6911-9.7253 8.8516-12.094 0.26801-3.9556-3.2388-1.9997-6.7695 3.7754-1.8599 3.0422-3.7816 5.5057-4.2695 5.4746-0.48838-0.0315-0.489-2.623-2e-3 -5.7598 1.0056-6.4766 0.75604-8.2174-1.1953-8.3496-1.4656-0.0993-3.8327 5.5611-4.1348 9.8867-0.31902 4.5659-5.0178 15.553-6.6055 15.445-0.85628-0.058-1.3926-1.048-1.3008-2.4024 0.18295-2.7003-2.0567-6.6753-3.1992-5.6777-0.43337 0.37837-0.90809 3.5011-1.0547 6.9414-0.34511 8.0999-2.0403 13.408-5.1172 16.027-1.3571 1.1553-7.1395 4.2403-12.852 6.8555-13.176 6.0325-14.107 6.248-16.678 3.8613-1.7038-1.5819-2.0453-5.5272-1.8281-8.377 0.20447-2.6831 1.3508-5.3325 2.8965-7.5352 4.5648-6.5048 15.918-12.741 18.018-15.611 2.7205-3.719 0.47577-7.5078-3.0117-7.7441-1.3526-0.0916-2.4854 0.24484-2.5195 0.74805-0.0792 1.1688-12.976 13.396-14.073 13.321-0.45225-0.0306-0.95391-2.4328-1.1152-5.3379-0.25178-4.5338 0.18941-6.1877 3.1211-11.68 2.904-5.4402 1.6572-4.7223 9.1453-10.181 4.8437-3.5307 13.33-10.513 18.857-15.518zm-8.6621 85.857c2.4685 0.16725 6.257 7.1708 6.4707 11.961 0.29827 6.6845-8.665 39.932-15.609 60-2.4594 1.2992-5.8492 2.8223-9.1074 4.0488-1.8231 0.75611-3.3946 1.3263-4.7676 1.75-0.45514-3.7392-5.3151-8.7071-5.3132-11.454 2e-3 -2.8407 0.0646-5.5554 0.48047-8.293 0.82198-5.4108 1.2087-11.203 3.9609-15.934 2.1835-3.7529 7.4927-5.5406 9.4363-8.9792 2.851-5.0438 6.3978-12.923 7.8809-17.508 4.8516-15 5.1406-15.688 6.5684-15.592zm-13.258 82.74c-0.29758 0.66859-0.60129 1.3651-0.87109 1.9004-3.4948 6.9334-5.1549 9.0158-5.9648 7.4824-0.49839-0.94362-1.0564-3.1486-1.5879-5.8633 1.2131-0.53351 2.551-1.1088 4.1934-1.7891 1.5696-0.65012 2.9277-1.2037 4.2305-1.7305z"
                  strokeLinecap="round"
                  strokeWidth="7.5591"
                />
              </g>
            </svg>
          </div>
          <div
            id="works"
            className="relative z-10 flex flex-col content-center justify-center flex-grow max-w-5xl px-8 pt-16 m-auto"
          >
            <div>
              <h1
                className="text-6xl font-extrabold leading-tight tracking-tighter text-center md:text-6xl text-wood"
              >
                Articles 📔
              </h1>
              <p
                className="mt-3 text-xl font-semibold leading-tight tracking-tighter text-center text-gray-800 md:text-2xl"
              >
                My thoughts and stories (sometimes in Indonesian 🇮🇩)
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 mt-24 sm:grid-cols-2">
              {articleList.map(({ id, ...rest }) => (
                <ArticleSummary key={id} {...rest} />
              ))}
            </div>
          </div>
          <div className="z-10">
            <p
              className="mt-24 px-6 text-xl leading-tight tracking-tighter text-center text-gray-800 md:text-2xl"
            >
              ......that's all. Want more? Check out my
              {' '}
              <Hyperlink href="/#works">works!</Hyperlink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ArticleIndex;
