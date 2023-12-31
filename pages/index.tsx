import Head from 'next/head';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';

type Props = {
  allPosts: Post[]
};

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts;
  return (
    <Layout>
      <Head>
        <title>어디로 나아갈 것인가</title>
      </Head>
      <Container>
        {/* <NavigationBar menuList={['안녕', '굳']} />
        {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        )} */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
