import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        d="M2230 4474c-294-31-517-69-695-119-137-39-192-56-210-64-11-5-47-19-80-32-211-80-395-214-467-339-43-74-50-140-46-435l3-270 28-55c62-119 219-245 421-339 69-32 289-106 401-134 369-94 852-137 1292-117 450 20 779 77 1118 192 274 93 493 246 572 398l28 55 4 265c4 315-3 373-58 457-21 32-53 73-72 91-80 79-247 179-384 231-33 13-69 27-80 32-29 13-239 73-320 92-179 41-355 68-605 92-194 19-660 18-850-1z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
      <path
        d="M736 2828c-4-9-6-144-4-300l3-283 33-60c18-33 43-71 55-85 35-40 138-124 192-158 68-42 282-142 305-142 7 0 26-6 43-13 53-23 210-68 317-90 641-137 1352-134 2000 7 90 19 249 65 287 82 17 8 36 14 43 14 13 0 22 4 165 70 194 89 319 191 387 315l33 60 3 289c3 199 0 292-7 299-8 8-11 6-11-5 0-52-124-192-230-262-106-69-113-73-226-121-259-111-534-176-949-225-248-29-777-29-1020 1-275 33-447 64-610 109-44 12-93 26-110 30-53 13-228 81-306 120-190 92-346 234-380 345-6 18-7 18-13 3z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
      <path
        d="M736 1863c-13-13-6-516 8-576 31-132 153-254 364-364 48-25 112-54 142-65s69-26 87-34c17-8 37-14 44-14s31-6 54-14c289-100 791-169 1230-169 391 0 838 55 1135 139 466 133 737 313 786 522 14 59 20 534 8 567-5 11-13 1-30-35-49-106-207-236-384-318-254-116-507-182-940-244-140-20-195-22-575-22-382 0-434 2-575 22-446 65-709 134-950 250-185 90-325 206-374 311-13 28-26 48-30 44z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  );
};

export default Icon;
