import { ReactElement, useState } from 'react';
import classNames from 'classnames';
import PostPreview from './post-preview';
import type Post from '../interfaces/post';
import PageButton from './page-button';

type Props = {
  posts: Post[]
};

function MoreStories({ posts }: Props) {
  const [page, setPage] = useState(0);
  const postPreviewPages = posts.map((post) => (
    <PostPreview
      key={post.slug}
      title={post.title}
      coverImage={post.coverImage}
      date={post.date}
      author={post.author}
      slug={post.slug}
      excerpt={post.excerpt}
    />
  )).reduce((postPreviewPageGroups, post) => {
    if (postPreviewPageGroups[postPreviewPageGroups.length - 1].length >= 8) {
      postPreviewPageGroups.push([post]);
      return postPreviewPageGroups;
    }
    postPreviewPageGroups[postPreviewPageGroups.length - 1].push(post);
    return postPreviewPageGroups;
  }, [[] as unknown as ReactElement[]]);
  return (
    <section>
      {/* <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2> */}
      {postPreviewPages.map((postPreviewPage, pageNumber) => (
        <div className={classNames(
          'grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32',
          {
            hidden: pageNumber !== page,
          },
        )}
        >
          {postPreviewPage}
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32" />
      <ol className="list-none flex container justify-center h-16">
        {Array.from({ length: postPreviewPages.length })
          .map((_, index) => index)
          .map((pageNumber) => (
            <li key={`PostPageNumber#${pageNumber}`} onClick={() => setPage(pageNumber)} className="">
              <PageButton pageNumber={pageNumber + 1} isSelected={pageNumber === page} />
            </li>
          ))}
      </ol>
    </section>
  );
}

export default MoreStories;
