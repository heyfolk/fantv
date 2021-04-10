import React, { useEffect } from "react";

function Channel(props) {

    return (
        <div className="col-md-3 text-center" style={{cursor:"pointer"}} onClick={()=>props.sendUrl(props.data,props.key)}>
            <img width="100px" height="100px" src="./images/channelPlaceholder.png" alt=""/>
            <h4>{props.data.name}</h4> 
             <p>{props.data.category}</p>

            {/* <button
                
                type="button"
                class="btn btn-primary"
            >
                Play
            </button> */}
        </div>
    );
}

export default Channel;
