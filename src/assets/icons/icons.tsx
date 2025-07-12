import type { FC } from "react";

export const Arrow: FC<{ size?: "s" | "m" }> = ({ size = "s" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {size === "s" ? (
        <path
          d="M7.16315 15L12 10.206L16.8369 15L18.5 13.397L12 7L5.5 13.397L7.16315 15Z"
          fill="#333333"
        />
      ) : (
        <path
          d="M6.04695 17L12 11.0076L17.9531 17L20 14.9962L12 7L4 14.9962L6.04695 17Z"
          fill="#333333"
        />
      )}
    </svg>
  );
};
