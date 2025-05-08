const VideoSection = () => {
    return ( 
        <div className="video__wrapper">
            <section className="video__section">
                <div>АЙДЕНТИКА</div>
                <video autoPlay muted loop preload="auto" playsInline>
                    <source src={process.env.PUBLIC_URL + "/video.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
        </div>
     );
}
 
export default VideoSection;