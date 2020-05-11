import React, { useEffect, useState } from 'react';

const CircularIndicators = props => {
    const [offset, setOffset] = useState(0);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
        className,
    } = props;

    const center = size / 2;
    const radius = size/ 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [setOffset, progress, circumference, offset]);

    return (
        <svg 
            className={className}
            width={size}
            height={size}
            fill="transparent"
        >
            <circle
                className="circular-bg"
                stroke={circleOneStroke}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
            >
            </circle>
            <circle
                className="circle-bar"
                stroke={circleTwoStroke}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
            >
                
            </circle>
        </svg>
    );
}
export default CircularIndicators;