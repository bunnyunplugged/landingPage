import vid1 from '/videos/vid1.mp4';
import vid2 from '/videos/vid2.mp4';
import vid3 from '/videos/vid3.mp4';
import vid4 from '/videos/vid4.mp4';
import vid5 from '/videos/vid5.mp4';
import vid6 from '/videos/vid6.mp4';
import vid7 from '/videos/vid7.mp4';
import { useEffect, useRef, useState } from 'react';
import '../styles/VideoGrid.css';
import TextSection from './TextSection';

const videos = [
  { src: vid1, title: 'Video 1' },
  { src: vid2, title: 'Video 2' },
  { src: vid3, title: 'Video 3' },
  { src: vid4, title: 'Video 4' },
  { src: vid5, title: 'Video 5' },
  { src: vid6, title: 'Video 6' },
  { src: vid7, title: 'Video 7' },
];

const VideoGrid = () => {
  const [videoStates, setVideoStates] = useState(
    videos.map(() => ({ isPlaying: false, isMuted: true }))
  );
  
  const videoRefs = useRef([]);
  
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
    
    const observers = videoRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Video is in view, play it
              if (ref && !videoStates[index].isPlaying) {
                ref.play().catch(error => {
                  console.error("Error playing video:", error);
                });
                setVideoStates(prev => {
                  const newStates = [...prev];
                  newStates[index] = { ...newStates[index], isPlaying: true };
                  return newStates;
                });
              }
            } else {
              // Video is out of view, pause it
              if (ref && videoStates[index].isPlaying) {
                ref.pause();
                setVideoStates(prev => {
                  const newStates = [...prev];
                  newStates[index] = { ...newStates[index], isPlaying: false };
                  return newStates;
                });
              }
            }
          });
        },
        { threshold: 0.4 } // Trigger when 40% of the video is visible
      );
      
      if (ref) {
        observer.observe(ref);
      }
      
      return observer;
    });
    
    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer, index) => {
        if (videoRefs.current[index]) {
          observer.unobserve(videoRefs.current[index]);
        }
      });
    };
  }, [videoStates]);
  
  const handleVideoClick = (index) => {
    setVideoStates(prev => {
      const newStates = [...prev];
      newStates[index] = { 
        ...newStates[index], 
        isMuted: !newStates[index].isMuted 
      };
      
      if (videoRefs.current[index]) {
        videoRefs.current[index].muted = newStates[index].isMuted;
      }
      
      return newStates;
    });
  };
  
  return (<>
    <TextSection
    title="From soulful solo acts to 
energetic 4-piece band gigs"
  
    bgColor="var(--secondary-bg)"
     />
     <p style={{ backgroundColor: 'var(--secondary-bg)', color: 'white', fontSize: '1rem', fontWeight: '100', margin: '0'}}>Tap to play sound</p>
    <div className="video-grid">
      {videos.map((video, index) => (
        <div className="video-item" key={index}>
          <video
            ref={el => videoRefs.current[index] = el}
            src={video.src}
            loop
            muted={videoStates[index].isMuted}
            playsInline
            onClick={() => handleVideoClick(index)}
            className="video-element"
          />
          <div className="video-overlay">
            <div className="audio-indicator">
              {videoStates[index].isMuted ? '🔇' : '🔊'}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default VideoGrid; 