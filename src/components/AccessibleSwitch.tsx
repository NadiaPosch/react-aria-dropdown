import { useFocusRing } from "@react-aria/focus";
import { useSwitch } from "@react-aria/switch";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useToggleState } from "@react-stately/toggle";
import { FC, useRef } from "react";

type AccessibleSwitchProps = {
    isSelected?: boolean;
    onChange?: (isSelected: boolean) => void;
};

export const AccessibleSwitch: FC<AccessibleSwitchProps> = ({ children, isSelected = false, onChange }) => {
    const state = useToggleState({ isSelected, onChange });
    const ref = useRef();
    const { inputProps } = useSwitch({}, state, ref);
    const { isFocusVisible, focusProps } = useFocusRing();

    console.log(state.isSelected);

    return (
        <label className="flex items-center gap-x-4">
            <VisuallyHidden>
                <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <div
                className={`cursor-pointer border border-gray-400 rounded-full w-10 outline-none ${
                    isFocusVisible ? "ring-4 ring-blue ring-offset-2" : ""
                }`}
            >
                <div
                    className={`block self-center w-5 h-5 rounded-full transition-transform duration-300 ${
                        state.isSelected ? "translate-x-full bg-blue-500" : "translate-x-0 bg-gray-400"
                    }`}
                />
            </div>
            {children}
        </label>
    );
};
