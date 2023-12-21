import Link from 'next/link';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import type Author from '../interfaces/author';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
};

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5 hover:opacity-80 hover:-translate-x-2 hover:-translate-y-2 transition-all ease-in-out duration-200">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className="pointer-events-none hover:underline"
        onMouseOver={((event) => {
          console.log(event.currentTarget.previousElementSibling);
          event.currentTarget.previousElementSibling.classList.add('hovered');
        })}
      >
        <h3 className="text-1xl md:text-3xl mb-3 leading-snug pointer-events-auto ">
          {title}
        </h3>
        <div className="text-sm md:text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-sm md:text-lg leading-relaxed mb-4 pointer-events-auto">{excerpt}</p>
      </Link>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}

export default PostPreview;
