import { SVGProps, forwardRef } from "react";

const SecondsHand = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 105 105"
      ref={ref}
      {...props}
    >
      <path
        fill="#EB0000"
        d="M57.8 21.3c0-2.9-2.4-5.2-5.2-5.2-2.8 0-5.3 2.3-5.3 5.2 0 2.7 2 4.8 4.5 5.2V69h1.5V26.5c2.5-.3 4.5-2.5 4.5-5.2Z"
      />
    </svg>
  )
);
export default SecondsHand;
