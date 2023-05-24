import { memo, SVGProps } from 'react';

const PhotoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.77792 70L50.5557 27.2222L70.0001 46.6667'
      stroke='black'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M62.2222 0H7.77778C3.48223 0 0 3.48223 0 7.77778V62.2222C0 66.5178 3.48223 70 7.77778 70H62.2222C66.5178 70 70 66.5178 70 62.2222V7.77778C70 3.48223 66.5178 0 62.2222 0Z'
      stroke='black'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.3888 27.2222C24.6105 27.2222 27.2222 24.6106 27.2222 21.3889C27.2222 18.1672 24.6105 15.5556 21.3888 15.5556C18.1672 15.5556 15.5555 18.1672 15.5555 21.3889C15.5555 24.6106 18.1672 27.2222 21.3888 27.2222Z'
      stroke='black'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(PhotoIcon);
export { Memo as PhotoIcon };
