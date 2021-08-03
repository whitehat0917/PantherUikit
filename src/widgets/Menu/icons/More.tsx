import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        d="M501 3185c-177-39-347-171-429-335-127-254-82-540 118-740 251-252 650-252 900-1 253 254 253 648 0 902-155 155-374 220-589 174zM2421 3185c-177-39-347-171-429-335-127-254-82-540 118-740 251-252 650-252 900-1 253 254 253 648 0 902-155 155-374 220-589 174zM4341 3185c-177-39-347-171-429-335-127-254-82-540 118-740 251-252 650-252 900-1 253 254 253 648 0 902-155 155-374 220-589 174z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  );
};

export default Icon;
