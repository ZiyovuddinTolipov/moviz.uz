import { useRef, useState } from 'react';

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRefs = Array.from({ length: 4 }, useRef(null));

    const handlePlay = (index) => {
        console.log(`Video ${index + 1} is playing`);
        setIsPlaying(true);
        // Boshqa videolarni pause qilish
        videoRefs.forEach((ref, i) => {
            if (i !== index && ref.current) {
                ref.current.pause();
            }
        });
    };

    const handlePause = () => {
        console.log('Video is paused');
        setIsPlaying(false);
    };

    const handleVideoEnd = (index) => {
        console.log(`Video ${index + 1} has ended`);
        setIsPlaying(false);

        // Boshqa videolarni avtomatik ravishda boshlash
        const nextIndex = (index + 1) % 4;
        videoRefs[nextIndex].current.play();
    };

    return (
        <div>
            {videoRefs.map((videoRef, index) => (
                <video
                    key={index}
                    ref={videoRef}
                    controls
                    onPlay={() => handlePlay(index)}
                    onPause={handlePause}
                    onEnded={() => handleVideoEnd(index)}
                >
                    <source src={`video-${index + 1}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ))}

            <p>{isPlaying ? 'Video is playing' : 'Video is paused'}</p>
        </div>
    );
};

export default VideoPlayer;
