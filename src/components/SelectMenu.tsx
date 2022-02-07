import { useFocusRing } from "@react-aria/focus";
import { useListBox } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import React, { ReactElement, useRef } from "react";
import { getKeyItemRecord, getMenuItems } from "../helpers";
import { SelectMenuProps } from "../types";
import { MenuItem } from "./MenuItem";
import { MenuSection } from "./MenuSection";

export const SelectMenu = ({
    menuBlocks,
    ariaProps,
    state,
    ariaLabel = "Select Menu",
}: SelectMenuProps): ReactElement<SelectMenuProps> => {
    const items = getMenuItems(menuBlocks);
    const keyItemRecord = getKeyItemRecord(items);
    const ref = useRef<HTMLUListElement | null>(null);
    const { isFocusVisible, focusProps } = useFocusRing();
    const { listBoxProps } = useListBox(
        {
            ...ariaProps,
            "aria-label": ariaLabel,
        },
        state,
        ref,
    );

    return (
        <ul
            {...mergeProps(listBoxProps, focusProps)}
            ref={ref}
            className={`p-0 text-left ${isFocusVisible ? "outline-blue-500 outline-2" : "outline-none"}`}
        >
            {[...state.collection].map((section) => (
                <MenuSection key={section.key} ariaLabel={section["aria-label"]}>
                    {[...section.childNodes].map((item) => (
                        <MenuItem key={item.key} state={state} node={item} item={keyItemRecord[item.key]} />
                    ))}
                </MenuSection>
            ))}
        </ul>
    );
};
