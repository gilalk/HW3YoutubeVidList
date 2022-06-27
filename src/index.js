import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// function GetYoutubeVideos()
// {
//   return({"videosArr":[
//     {"title": "Relax with Mozart", "youtubeUrl": "https://www.youtube.com/watch?v=mB-QXgtoItA&ab_channel=HALIDONMUSIC", "width": 581 , "height": 327},
//     {"title": "Relax with Yanni", "youtubeUrl": "https://www.youtube.com/watch?v=Tv3O0uw4_V0&ab_channel=MusicLibrary", "width": 581 , "height": 327},
//     {"title": "Relax with Beethoven", "youtubeUrl": "https://www.youtube.com/watch?v=jGDtgOHLOZQ&ab_channel=HALIDONMUSIC", "width": 533 , "height": 300},
//   ]});
// }

function GetYoutubeVideos() {
  return ([
    { title: "Relax with Mozart", youtubeUrl: "https://www.youtube.com/embed/mB-QXgtoItA", width: 581, height: 327 },
    { title: "Relax with Yanni", youtubeUrl: "https://www.youtube.com/embed/Tv3O0uw4_V0", width: 581, height: 327 },
    { title: "Relax with Beethoven", youtubeUrl: "https://www.youtube.com/embed/jGDtgOHLOZQ", width: 533, height: 300 },
  ]);
}

function YoutubeVideoListComp() {
  let videos = GetYoutubeVideos();
  return (
    <div className='cards'>
      {videos.map(vid =>
        <YoutubeVideoComp title={vid.title} url={vid.youtubeUrl} width={vid.width} height={vid.height} />
      )}
    </div>);
}

function YoutubeVideoComp(props) {
  return (
    <>
      <div className='card'>
        <h1>{props.title}</h1>
        <iframe width={props.width} height={props.height} src={props.url} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='card_iframe'></iframe>
      </div>

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <YoutubeVideoListComp />
);
