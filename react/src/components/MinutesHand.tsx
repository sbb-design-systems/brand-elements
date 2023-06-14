import { SVGProps, forwardRef } from "react";

const MinutesHand = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 105 105"
      ref={ref}
      {...props}
    >
      <path fill="#000" d="M55.1 64.5h-5.2l.8-58h3.6l.8 58Z" />
    </svg>
  )
);
export default MinutesHand;
