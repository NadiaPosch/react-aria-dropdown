import { useListBox } from "@react-aria/listbox";
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
    const listRef = useRef<HTMLUListElement | null>(null);
    const { listBoxProps } = useListBox(
        {
            ...ariaProps,
            "aria-label": ariaLabel,
        },
        state,
        listRef,
    );

    return (
        <ul {...listBoxProps} ref={listRef} className="p-0 outline-none text-left">
            {[...state.collection].map((section) => (
                <MenuSection key={section.key} ariaLabel={section["aria-label"]}>
                    {[...section.childNodes].map((item) => (
                        <MenuItem key={item.key} state={state} node={item} title={keyItemRecord[item.key].title} />
                    ))}
                </MenuSection>
            ))}
        </ul>
    );
};
