import Link from 'next/link';

export default function TelegramIcon({
  width = 32,
  height = 32,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Link
      className="icon"
      href="https://t.me/"
      target="_blank"
      rel="nofollow"
      aria-label="Телеграм"
    >
      <svg
        version="1.0"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 128.000000 128.000000"
      >
        <g
          transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M625 950 c-314 -120 -582 -226 -597 -235 -62 -36 -30 -61 147 -115
        77 -23 145 -45 150 -47 6 -2 166 93 355 212 299 186 380 231 380 211 0 -3
        -126 -118 -280 -256 -233 -209 -280 -256 -280 -278 0 -15 -5 -81 -10 -146 -6
        -66 -8 -121 -5 -124 8 -8 52 25 124 93 38 36 72 65 76 65 4 0 75 -49 157 -110
        162 -119 194 -131 223 -87 14 23 215 938 215 982 0 28 -30 55 -61 54 -13 0
        -280 -99 -594 -219z"
          ></path>
        </g>
      </svg>
    </Link>
  );
}
