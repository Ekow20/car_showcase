"use client";

import { CustomBtnProps } from "@/types";
import Image from "next/image";

const CustomBtn = ({
  title,
  btnStyle,
  handleClick,
  rightIcon,
}: CustomBtnProps) => {
  return (
    <button className={`custom-btn ${btnStyle}`} onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="" fill />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
