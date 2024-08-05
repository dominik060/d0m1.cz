"use client";

export default function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        id="body"
        d="M20.0004 29.3332V23.9998C20.1859 22.3296 19.7069 20.6533 18.667 19.3332C22.667 19.3332 26.667 16.6665 26.667 11.9998C26.7737 10.3332 26.307 8.69317 25.3337 7.33317C25.707 5.79984 25.707 4.19984 25.3337 2.6665C25.3337 2.6665 24.0004 2.6665 21.3337 4.6665C17.8137 3.99984 14.187 3.99984 10.667 4.6665C8.00037 2.6665 6.66704 2.6665 6.66704 2.6665C6.26704 4.19984 6.26704 5.79984 6.66704 7.33317C5.69621 8.68768 5.225 10.3369 5.33371 11.9998C5.33371 16.6665 9.33371 19.3332 13.3337 19.3332C12.8137 19.9865 12.427 20.7332 12.2004 21.5332C11.9737 22.3332 11.907 23.1732 12.0004 23.9998V29.3332"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="tail"
        d="M11.1 24.0002C5.98699 26.6668 5.33366 21.3335 2.66699 21.3335"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="group-hover/card:animate-waving-tail origin-bottom-right"
      />
    </svg>
  );
}
