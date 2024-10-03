import React from "react";

// Gambar dari Unsplash
const imageUrl =
  "https://images.unsplash.com/photo-1632368774280-19d4b5d476bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function NewsCover() {
  return (
    <>
      <img
        src={imageUrl}
        alt="News Cover"
        className="w-full h-[400px] object-cover"
      />

      <div className="flex flex-col justify-end py-4 gap-2">
        <p className="uppercase text-xs font-semibold">21/08/2024</p>
        <h1 className="text-2xl font-bold mb-2">
          Signs of Declining Digital Democracy in Indonesia
        </h1>
        <p className="text-base">
          If this continues, our digital space will forever be dominated by
          leadership that is anti-criticism and technologically inept. This
          trend raises significant concerns about freedom of expression and the
          ability of citizens to engage meaningfully in online discourse. As
          technology evolves, it is crucial for leaders to adapt and understand
          the implications of their policies on digital platforms. Moreover, the
          need for transparent governance becomes even more pronounced in the
          face of increasing digital surveillance. Ultimately, the future of our
          democracy hinges on our collective ability to advocate for a digital
          environment that promotes inclusivity and accountability.
        </p>
      </div>
    </>
  );
}
