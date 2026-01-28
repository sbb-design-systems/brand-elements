import { SVGProps, forwardRef } from "react";

const HoursHand = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 105 105"
      ref={ref}
      {...props}
    >
      <path fill="#000" d="M55.7 64.5h-6.4l.6-44h5.2l.6 44Z" />
    </svg>
  )
);
export default HoursHand;
