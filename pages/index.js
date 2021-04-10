import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar";
import Channel from "../components/Channel";

import iptv from "../iptv.json";

function Home() {
    const [sChannels, setSChannels] = useState([]);
    const [mUrl, setMUrl] = useState("");
    let mRouter = useRouter();

    useEffect(() => {
        getCountryChannels("in");
    }, []);

    function checkCountry(cn, cnList) {
        let found = false;
        cnList.forEach((country) => {
            if (cn == country.code) found = true;
        });
        return found;
    }

    function getCountryChannels(code) {
        let thisChannels = [];

        for (let i = 0; i < iptv.length; i++) {
            if (checkCountry(code, iptv[i].countries)) {
                thisChannels.push(iptv[i]);
            }
        }

        setSChannels(thisChannels);
    }

    function getPlayerUrl(data,index) {
        localStorage.setItem("channel", JSON.stringify(data));
        mRouter.push("/player");
    }

    return (
        <>
            <Header />
            <Navbar />
            <div className="row p-1" style={{margin:0}}>
                {sChannels.map((channel, i) => (
                    <Channel sendUrl={getPlayerUrl} key={i} data={channel} />
                ))}
            </div>
        </>
    );
}

export default Home;
