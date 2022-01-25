/* eslint-disable @typescript-eslint/no-use-before-define */
import { useOption } from "@react-aria/listbox";
import React, { FC, useRef } from "react";
import { MenuItemProps } from "../types";

export const MenuItem: FC<MenuItemProps> = ({ state, item, node }) => {
    const ref = useRef<HTMLLIElement | null>(null);
    const { optionProps, isSelected, isFocused } = useOption(
        {
            key: node.key,
        },
        state,
        ref,
    );

    return (
        <li
            {...optionProps}
            ref={ref}
            className={`px-4 py-2 cursor-pointer hover:text-blue-300 transition-colors ${
                isSelected ? "text-blue-500" : "text-black"
            } ${isFocused ? "outline-blue-500" : "outline-none"}`}
        >
            {item.title}
        </li>
    );
};
