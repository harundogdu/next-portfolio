export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "My Personal Website",
      url: "https://harundogdu.com/",
      description:
        "With Laravel 8.* ,The construction of an advanced personal website website application that I have developed.",
    },
    {
      id: 2,
      title: "Quizzers",
      url: "https://quizzers.harundogdu.com/",
      description:
        "With Laravel 8.* ,The construction of an advanced quiz website application that I have developed.",
    },
    {
      id: 3,
      title: "Brand Colors w/ ReactJS + SCSS",
      url: "https://brand-colors-rouge.vercel.app/",
      description:
        "Using React.js and Tailwindcss the repo where I developed the 'brandcolors.net' page.",
    },
    {
      id: 4,
      title: "Spotify Clone w/ ReactJS + TailwindCSS",
      url: "https://react-tailwind-spotify-clone.vercel.app/",
      description:
        "Using React.js and Tailwindcss the repo where I developed the 'open.spotify.com' pages.",
    },
    {
      id: 5,
      title: "Getir Clone w/ ReactJS + TailwindCSS",
      url: "https://getir-clone-chi.vercel.app/",
      description:
        "Using React.js and Tailwindcss the repo where I developed the 'getir.com' homepage.",
    },
    {
      id: 6,
      title: "Prototurk Clone w/ TailwindCSS",
      url: "https://github.com/harundogdu/tailwind-prototurk-clone",
      description:
        "Using Tailwindcss the repo where I developed the 'prototurk.com' homepage.",
    },
  ]);
}
