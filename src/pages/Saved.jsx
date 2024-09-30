
import React from 'react'

export default function Saved() {
  return (
    <div>Saved</div>
  )
}


// import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectSavedArticles } from '../store/newsSlice';
// import NewsList from '../components/NewsList';

// const Saved = () => {
//   const savedArticles = useSelector(selectSavedArticles);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Berita Tersimpan</h1>
//       {savedArticles.length > 0 ? (
//         <NewsList articles={savedArticles} />
//       ) : (
//         <p>Tidak ada berita yang disimpan.</p>
//       )}
//     </div>
//   );
// };

//export default Saved;
