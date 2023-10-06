import React from 'react';
import "./Frames.css";
import Frame from '../frame/Frame';
import photoSaveIcon from '../../images/photoSaveIcon.svg';
import savedTagIcon from '../../images/savedTagIcon.svg';
import usersIcon from '../../images/usersIcon.svg';
import likeIcon from '../../images/likeIcon.svg';

export default function Frames() {
    const frameData = [
        {
            icon: photoSaveIcon,
            name: "Total Revenues",
            text: "Frame 1",
            amount: "$2,129,430",
            percentage: "+2.5%",
            background: "#7FCD93"

        },
        {
            icon: savedTagIcon,
            name: "Total Transactions",
            text: "Frame 2",
            amount: "5678",
            percentage: "-1.5%",
            background: "#DEBF85"
        },
        {
            icon: likeIcon,
            name: "Total Likes",
            text: "Frame 3",
            amount: "9876",
            percentage: "+3.0%",
            background: "#ECA4A4"

        },
        {
            icon: usersIcon,
            name: "Total Users",
            text: "Frame 4",
            amount: "4321",
            percentage: "+0.5%",
            background: "#A9B0E5"
        }
    ];

    return (
        <div className='frames'>
            {
                frameData.map((frame, index) => (
                    <Frame key={index} {...frame} />
                ))
            }
        </div>
    )
}
