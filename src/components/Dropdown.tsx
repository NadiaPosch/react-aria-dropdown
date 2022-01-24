import { useButton } from "@react-aria/button";
import { FocusScope, useFocusRing } from "@react-aria/focus";
import { DismissButton, useOverlay } from "@react-aria/overlays";
import { useSelect } from "@react-aria/select";
import { mergeProps } from "@react-aria/utils";
import { useSelectState } from "@react-stately/select";
import React, { FC, useEffect, useRef } from "react";
import { getActiveItem, mapToAriaProps } from "../helpers";
import { DropdownProps } from "../types";
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
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const { triggerProps, valueProps, menuProps } = useSelect(propsWithChildren, state, triggerRef);
    const { buttonProps } = useButton(triggerProps, triggerRef);
    const { isOpen } = state;
    const { overlayProps } = useOverlay(
        { isOpen, onClose: () => state.close(), shouldCloseOnBlur: true, isDismissable: true },
        overlayRef,
    );
    const { isFocusVisible, focusProps } = useFocusRing();

    useEffect(() => {
        state.setSelectedKey(activeItemId as string);
    }, [state, activeItemId]);

    return (
        <div className="relative w-full">
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
                <div className="absolute left-0 shadow-md rounded-lg mt-2 w-full animate-growDown">
                    <FocusScope restoreFocus>
                        <div {...overlayProps} ref={overlayRef}>
                            <DismissButton onDismiss={state.close} />
                            <SelectMenu ariaProps={menuProps} state={state} menuBlocks={menuBlocks} />
                            <DismissButton onDismiss={state.close} />
                        </div>
                    </FocusScope>
                </div>
            )}
        </div>
    );
};
