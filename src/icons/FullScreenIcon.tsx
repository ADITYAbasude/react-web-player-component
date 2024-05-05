import React from "react";
import { IconProps } from "../props.interface";

const FullScreenIcon: React.FC<IconProps> = ({size}) => {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z" />
      </g>
    </svg>
  );
};
export default FullScreenIcon;
