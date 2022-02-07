import { useFocusRing } from "@react-aria/focus";
import { useOption } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import React, { FC, useRef } from "react";
import { MenuItemProps } from "../types";

export const MenuItem: FC<MenuItemProps> = ({ state, item, node }) => {
    const { title, icon } = item;
    const ref = useRef<HTMLLIElement | null>(null);
    const { isFocusVisible, focusProps } = useFocusRing();
    const { optionProps, isSelected } = useOption(
        {
            key: node.key,
        },
        state,
        ref,
    );

    return (
        <li
            {...mergeProps(optionProps, focusProps)}
            ref={ref}
            className={`flex gap-x-2 items-center px-4 py-2 cursor-pointer hover:text-blue-300 transition-colors ${
                isSelected ? "text-blue-500" : "text-black"
            } ${isFocusVisible ? "outline-blue-500" : "outline-none"}`}
        >
            <img src={`${icon}.svg`} alt={icon} width={16} height={16} />
            {title}
        </li>
    );
};
