import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string
  src: string
  slug?: string
};

function CoverImage({ title, src, slug }: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={2000}
      height={1000}
      style={{ objectFit: 'cover' }}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

export default CoverImage;
