import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        d="M975 4259c-144-21-288-98-385-207-61-68-134-212-150-297-7-40-10-192-8-452l3-391 30-44c41-57 96-86 186-97 133-17 204-96 197-222-6-117-73-184-198-200-89-11-144-40-185-97l-30-44-3-386c-2-249 1-410 8-452 6-38 30-104 56-159 77-159 214-275 387-330l82-26 1530-3c1045-2 1560 0 1624 8 262 30 459 192 547 450 17 50 19 91 19 477v421l-30 44c-41 57-96 86-185 97-127 16-200 94-200 211 0 118 72 195 199 211 90 11 145 40 186 97l30 44v421c0 386-2 427-19 477-85 251-277 413-531 450-87 12-3074 11-3160-1zm2017-563c3-142 3-145 33-188 88-124 262-124 350 0 30 43 30 46 33 188l3 144h687l53-28c39-20 62-41 84-77l30-48 3-261 3-261-83-40c-205-98-348-330-348-565s143-467 348-565l83-40-3-261-3-261-30-48c-22-36-45-57-84-77l-53-28h-687l-3 144c-3 142-3 145-33 188-88 124-262 124-350 0-30-43-30-46-33-188l-3-144H1022l-53 28c-39 20-62 41-84 77l-30 48-2 261-3 261 82 39c204 98 348 331 348 566s-144 468-348 566l-82 39 3 261 2 261 30 48c22 36 45 57 84 77l53 28h1967l3-144z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
      <path
        d="M3138 2976c-57-21-85-42-116-88l-27-42v-574l30-44c17-23 51-54 75-68 94-51 211-22 275 68l30 44v576l-30 44c-55 77-158 114-237 84z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  );
};

export default Icon;