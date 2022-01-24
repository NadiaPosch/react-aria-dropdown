import { useListBoxSection } from "@react-aria/listbox";
import React, { FC } from "react";
import { MenuSectionProps } from "../types";

export const MenuSection: FC<MenuSectionProps> = ({ ariaLabel, children }) => {
    const { itemProps, groupProps } = useListBoxSection({
        "aria-label": ariaLabel,
    });

    return (
        <li {...itemProps} className="border-b border-b-black-10 last:border-0">
            <ul {...groupProps} className="py-2 px-0 m-0 list-none">
                {children}
            </ul>
        </li>
    );
};
