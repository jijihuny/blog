import classNames from 'classnames';

type Props = {
  pageNumber: number;
  isSelected?: boolean
};

function PageButton({ pageNumber, isSelected }: Props) {
  return (
    <p className={classNames('size-6 font-bold rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-100 ease-linear', {
      ' bg-black text-white': isSelected,
    })}
    >
      {pageNumber}
    </p>
  );
}

export default PageButton;
