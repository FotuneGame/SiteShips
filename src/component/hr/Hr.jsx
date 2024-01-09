import React from 'react';
import style from "./Hr.module.css";

const Hr = (props) => {
    return (
        <div>
            {props.className ?
                    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" color="black" width="1295" height="627" viewBox="0 0 1295 627" fill="none">
                        <g clipPath="url(#clip0_2168_1347)">
                            <path d="M726.161 23.669C186.167 -13.4252 46.0345 -1.82557 -152 23.669V627H1533V23.6691C1369.11 43.4466 1266.16 60.7632 726.161 23.669Z" fill="white"/>
                            <path d="M726.161 23.669C186.167 -13.4252 46.0345 -1.82557 -152 23.669V627H1533V23.6691C1369.11 43.4466 1266.16 60.7632 726.161 23.669Z" fill="url(#paint0_linear_2168_1347)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_2168_1347" x1="751.106" y1="-2.75258" x2="752.113" y2="423.732" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#DDE5F4"/>
                                <stop offset="0.331597" stopColor="#E7F7F0" stopOpacity="0.720486"/>
                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_2168_1347">
                                <rect width="1295" height="627" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    :
                    <svg className={style.line} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" color="black" width="1295" height="627" viewBox="0 0 1295 627" fill="none">
                        <g clipPath="url(#clip0_2168_1347)">
                            <path d="M726.161 23.669C186.167 -13.4252 46.0345 -1.82557 -152 23.669V627H1533V23.6691C1369.11 43.4466 1266.16 60.7632 726.161 23.669Z" fill="white"/>
                            <path d="M726.161 23.669C186.167 -13.4252 46.0345 -1.82557 -152 23.669V627H1533V23.6691C1369.11 43.4466 1266.16 60.7632 726.161 23.669Z" fill="url(#paint0_linear_2168_1347)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_2168_1347" x1="751.106" y1="-2.75258" x2="752.113" y2="423.732" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#DDE5F4"/>
                                <stop offset="0.331597" stopColor="#E7F7F0" stopOpacity="0.720486"/>
                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_2168_1347">
                                <rect width="1295" height="627" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
            }
        </div>
    );
};

export default Hr;