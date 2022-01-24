import { useFocusRing } from "@react-aria/focus";
import { useOption } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import React, { FC, useRef } from "react";
import { MenuItemProps } from "../types";

export const MenuItem: FC<MenuItemProps> = ({ state, title, node }) => {
    const ref = useRef<HTMLLIElement | null>(null);
    const { optionProps, isSelected } = useOption(
        {
            key: node.key,
        },
        state,
        ref,
    );

    const { isFocusVisible, focusProps } = useFocusRing();

    return (
        <li
            {...mergeProps(optionProps, focusProps)}
            className={`px-4 py-2 cursor-pointer hover:text-blue-300 transition-colors ${
                isSelected ? "text-blue-500" : "text-black"
            } ${isFocusVisible ? "outline-blue-500" : "outline-none"}`}
            ref={ref}
        >
            {title}
        </li>
    );
};
