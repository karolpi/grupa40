import { memo, SVGProps } from 'react';

const Rectangle4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1512 155' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1512V155H0V0Z' fill='#F9F9F9' />
  </svg>
);
const Memo = memo(Rectangle4Icon);
export { Memo as Rectangle4Icon };
