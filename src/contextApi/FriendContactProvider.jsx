import React, { useState } from 'react';
import { FriendContactContext } from './FriendContactContext';

const FriendContactProvider = ({ children }) => {
    
    const [timeline, setTimeline] = useState([])

    // const [call, setCall] = useState([])
    // const [message, setMessage] = useState([])
    // const [video, setVideo] = useState([])

    const data = {
        //  call, setCall, message, setMessage, video, setVideo
        timeline, setTimeline
    }

    return <FriendContactContext.Provider value={data}>{children}</FriendContactContext.Provider>;
};

export default FriendContactProvider;