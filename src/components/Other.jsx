import React from "react";

// Komponen ArticleCard
const Others = ({ title, date, author, imageUrl, link }) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="flex flex-col-reverse md:flex-row md:justify-between w-full mb-8 border-2 border-black overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col justify-start w-full md:w-[58%] xl:px-6 xl:py-6 p-4">
        <div className="text-xs tracking-[0.5px]">
          <span className="font-light">{date}</span>
        </div>
        <h2 className="mt-3 text-sm lg:text-lg xl:text-2xl xl:leading-[1.85rem] tracking-[0.48px] line-clamp-3 md:h-[60px] xl:h-[88px] font-bold">
          {title}
        </h2>
        <div className="mt-3 text-xs md:text-[13px] tracking-[0.5px]">
          <span>{author}</span>
        </div>
      </div>
      <div className="w-full h-auto md:w-[50%] xl:w-[43%] overflow-hidden border-b md:border-b-0 border-l-0 md:border-l border-black">
        <div className="h-full max-h-[230px] w-full">
          <div className="aspect-w-16 aspect-h-9 h-full ">
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="object-cover object-center w-full h-full"
              title={title}
            />
          </div>
        </div>
      </div>
    </a>
  );
};
const ArticlesList = () => {
  return (
    <div>
      {newsItems.map((item, index) => (
        <Others
          key={index}
          title={item.title}
          date={item.date}
          author={item.author}
          imageUrl={item.imageUrl}
          link={item.link}
        />
      ))}
    </div>
  );
};
// Data dummy berita
const newsItems = [
  {
    title: "The Impact of Climate Change on Global Economies",
    date: "21/08/2024",
    author: "John Smith",
    imageUrl:
      "https://qph.cf2.quoracdn.net/main-qimg-cece5641b42ce7180f40862da8759093-lq",
    link: "/headline/world/101",
  },
  {
    title: "Tech Giants Face Scrutiny Over Data Privacy",
    date: "20/08/2024",
    author: "Alice Johnson",
    imageUrl:
      "https://images.unsplash.com/photo-1726682577615-728e4272a60c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/headline/technology/102",
  },
  {
    title: "Global Health Crisis: What We Learned from the Pandemic",
    date: "19/08/2024",
    author: "Michael Brown",
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/headline/health/103",
  },
  {
    title: "The Rise of Renewable Energy: A Global Perspective",
    date: "18/08/2024",
    author: "Sara Wilson",
    imageUrl:
      "https://images.unsplash.com/photo-1727799777485-4939c90326ad?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/headline/environment/104",
  },
];

// Komponen untuk menampilkan daftar artikel

// Ekspor komponen ArticlesList
export default ArticlesList;
