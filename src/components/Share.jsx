import React from "react";

const Share = ({ url }) => {
  const shareUrl = encodeURIComponent(url);

  return (
    <div className="flex-row items-center justify-center space-y-10">
      <div className="h-14 w-14 border-2 border-black shadow-lg shadow-black flex items-center justify-center">
        <a
          href={`http://www.facebook.com/sharer.php?u=${shareUrl}`}
          rel="noopener noreferrer"
          target="_blank"
          className="mesdos shadow-rtm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="icon"
            width="1.7em"
            height="1.7em"
            viewBox="0 0 896 1664"
          >
            <path
              fill="currentColor"
              d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12"
            ></path>
          </svg>
        </a>
      </div>
      <div className="h-14 w-14 border-2 border-black shadow-lg shadow-black flex items-center justify-center">
        <a
          href={`http://twitter.com/share?text=${shareUrl}`}
          rel="noopener noreferrer"
          target="_blank"
          className="mesdos shadow-rtm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="icon"
            width="1.7em"
            height="1.7em"
            viewBox="0 0 1600 1280"
          >
            <path
              fill="currentColor"
              d="M1588 152q-67 98-162 167q1 14 1 42q0 130-38 259.5T1273.5 869T1089 1079.5t-258 146t-323 54.5q-271 0-496-145q35 4 78 4q225 0 401-138q-105-2-188-64.5T189 777q33 5 61 5q43 0 85-11q-112-23-185.5-111.5T76 454v-4q68 38 146 41q-66-44-105-115T78 222q0-88 44-163q121 149 294.5 238.5T788 397q-8-38-8-74q0-134 94.5-228.5T1103 0q140 0 236 102q109-21 205-78q-37 115-142 178q93-10 186-50"
            ></path>
          </svg>
        </a>
      </div>
      <div className="h-14 w-14 border-2 border-black shadow-lg shadow-black flex items-center justify-center">
        <a
          href={`whatsapp://send/?text=${shareUrl}`}
          rel="noopener noreferrer"
          target="_blank"
          className="mesdos shadow-rtm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="icon"
            width="1.7em"
            height="1.7em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1m-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2q.3-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5s-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9s.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1"
            ></path>
          </svg>
        </a>
      </div>

      <div className="h-14 w-14 border-2 border-black shadow-lg shadow-black flex items-center justify-center">
        <a
          href={`mailto:?Subject=Check this out&Body=Check out this link: ${shareUrl}`}
          rel="noopener noreferrer"
          target="_blank"
          className="mesdos shadow-rtm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="icon"
            width="1.7em"
            height="1.7em"
            viewBox="0 0 2048 2048"
          >
            <path
              fill="currentColor"
              d="M2048 384v85L1024 981L0 469v-85zm-1024 811l1024-512v981H0V683z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Share;
