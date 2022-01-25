import { FocusScope } from "@react-aria/focus";
import { DismissButton, useOverlay } from "@react-aria/overlays";
import React, { FC, useRef } from "react";
import { OverlayProps } from "../types";

export const Overlay: FC<OverlayProps> = ({ isOpen, onClose, children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { overlayProps } = useOverlay(
        {
            isOpen,
            onClose,
            shouldCloseOnBlur: true,
            isDismissable: true,
        },
        ref,
    );

    return (
        <FocusScope restoreFocus>
            <div
                {...overlayProps}
                ref={ref}
                className="absolute left-0 shadow-md rounded-lg mt-2 w-full animate-growDown"
                role="dialog"
            >
                <DismissButton onDismiss={onClose} />
                {children}
                <DismissButton onDismiss={onClose} />
            </div>
        </FocusScope>
    );
};
