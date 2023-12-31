import Link from "next/link";

export default function YoutubeIcon ({width=36, height=36}) {
  return (
    <Link className="icon" href="https://youtube.com/" target="_blank" rel="nofollow" aria-label="Ютуб">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height={width} width={height} viewBox="-6 -42 256.000000 256.000000">
        <path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85"/>
        <path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#000"/>
      </svg>
    </Link>
  );
}
