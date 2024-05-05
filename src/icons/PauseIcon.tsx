import React from "react";
import { IconProps } from "../props.interface";



const PauseIcon: React.FC<IconProps> = ({size})=> (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        id="pause"
    >
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
);

export default PauseIcon;