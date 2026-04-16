import React, { useEffect, useState } from 'react';

const usePeople = () => {

    const [friendsData, SetFriendsData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const peopleData = async () => {
            const res = await fetch('/data.json')
            const data = await res.json()
            setTimeout(() => {
                SetFriendsData(data)
                setLoading(false)
            }, 1000);
        }
        peopleData()
    }, [])

    return (
        {friendsData, loading}
    );
};

export default usePeople;