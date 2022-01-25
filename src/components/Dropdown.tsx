import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { HiddenSelect, useSelect } from "@react-aria/select";
import { mergeProps } from "@react-aria/utils";
import { useSelectState } from "@react-stately/select";
import React, { FC, useEffect, useRef } from "react";
import { getActiveItem, mapToAriaProps } from "../helpers";
import { DropdownProps } from "../types";
import { Overlay } from "./Overlay";
import { SelectMenu } from "./SelectMenu";

export const Dropdown: FC<DropdownProps> = ({ menuBlocks, onChange, activeItemId, ariaLabel = "Dropdown" }) => {
    const activeItem = !!activeItemId ? getActiveItem(menuBlocks, activeItemId) : null;
    const propsWithChildren = mapToAriaProps(ariaLabel, menuBlocks);
    const state = useSelectState({
        ...propsWithChildren,
        defaultSelectedKey: activeItemId,
        onSelectionChange: (key) => onChange(key),
    });

    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const { triggerProps, valueProps, menuProps } = useSelect(propsWithChildren, state, triggerRef);
    const { buttonProps } = useButton(triggerProps, triggerRef);
    const { isOpen } = state;
    const { isFocusVisible, focusProps } = useFocusRing();

    useEffect(() => {
        state.setSelectedKey(activeItemId as string);
    }, [activeItemId]);

    return (
        <div className="relative w-full">
            <HiddenSelect state={state} triggerRef={triggerRef} />
            <button
                {...mergeProps(buttonProps, focusProps)}
                ref={triggerRef}
                className={`w-full px-4 py-2 border rounded-lg transition-colors bg-white hover:border-blue-500 text-left ${
                    isOpen ? "border-black" : "border-black-20"
                } ${isFocusVisible ? "outline-blue-500 outline-2" : "outline-none"} ${
                    activeItem ? "text-black" : "text-gray-400"
                }`}
            >
                <div {...valueProps}>{activeItem?.title || "Select..."}</div>
            </button>

            {isOpen && (
                <Overlay isOpen={isOpen} onClose={state.close}>
                    <SelectMenu ariaProps={menuProps} state={state} menuBlocks={menuBlocks} />
                </Overlay>
            )}
        </div>
    );
};
