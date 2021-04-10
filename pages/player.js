import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";

function Player(props) {
    const [mUrl, setmUrl] = useState("");
    const [playerInstance, setPlayerInstance] = useState();

    useEffect(() => {
        let ls = JSON.parse(localStorage.getItem("channel"));

        setmUrl(ls.url);
    }, []);

    function setQuality(level) {
        if(playerInstance!=null && playerInstance!=undefined){
            playerInstance.currentLevel=level;
        }
    }

    function getPalyerInstance(player) {
        let hlsPlayer = player.getInternalPlayer("hls");
        setPlayerInstance(hlsPlayer);
        let hlsLevels = hlsPlayer.levels;
        console.log(hlsLevels)
        hlsPlayer.currentLevel = 0;
    }

    function showPlaybackError(){
        $(".error").css("display","block")
    }

    return (
        <div>
            <Header />
            <Navbar />
            <div className="row text-center">
                <div className="col-md-2"></div>
                <div className="col-md-8 p-1">
                    <ReactPlayer
                    width={'98%'}
                        onReady={(player) => getPalyerInstance(player)}
                        onError={()=>showPlaybackError()}
                        playing={true}
                        controls={true}
                        url={mUrl}
                    />
                    <div className="quality p-1">
                        <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                        >
                            <button
                                type="button"
                                onClick={()=>setQuality(0)}
                                class="btn btn-secondary"
                            >
                                180p
                            </button>
                            <button
                                type="button"
                                onClick={()=>setQuality(1)}
                                class="btn btn-secondary"
                            >
                                240p
                            </button>
                            <button
                                type="button"
                                onClick={()=>setQuality(2)}
                                class="btn btn-secondary"
                            >
                                360p
                            </button>
                            <button
                                type="button"
                                onClick={()=>setQuality(3)}
                                class="btn btn-secondary"
                            >
                                480p
                            </button>
                            <button
                                type="button"
                                onClick={()=>setQuality(4)}
                                class="btn btn-secondary"
                            >
                                720p
                            </button>
                        </div>
                    </div>
                    <h3 className="text-danger error" style={{display:"none"}}>Error occoured!</h3>
                    <div className="nextPrev">
                    <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                        >
                            <button
                                type="button"
                                // onClick={()=>setQuality(0)}
                                class="btn btn-secondary"
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                // onClick={()=>setQuality(1)}
                                class="btn btn-secondary"
                            >
                                Next
                            </button>
                           
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}

export default Player;
