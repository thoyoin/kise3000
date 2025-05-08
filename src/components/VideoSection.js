import video from '../images/video.mp4'

const VideoSection = () => {
    return ( 
        <div className="video__wrapper">
            <section className="video__section">
                <div>АЙДЕНТИКА</div>
                <video autoPlay muted loop preload="auto" playsinline src={video}></video>
                {/* <p>АЙДЕНТИКА</p> */}
            </section>
        </div>
     );
}
 
export default VideoSection;