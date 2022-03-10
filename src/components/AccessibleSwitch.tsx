import { useFocusRing } from "@react-aria/focus";
import { useSwitch } from "@react-aria/switch";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useToggleState } from "@react-stately/toggle";
import { FC, useRef } from "react";

type SwitchProps = {
    isSelected?: boolean;
    onChange: (isSelected: boolean) => void;
};

export const FOCUS_STYLES = "ring-4 ring-blue-400 ring-offset-4";

export const AwesomeAccessibleSwitch: FC<SwitchProps> = ({ children, onChange, isSelected = false }) => {
    const state = useToggleState({ isSelected, onChange });
    const ref = useRef();
    const { inputProps } = useSwitch({}, state, ref);
    const { isFocusVisible, focusProps } = useFocusRing();

    return (
        <label className="flex items-center gap-x-4 text-lg text-blue-900">
            <VisuallyHidden>
                <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <div
                className={`cursor-pointer border border-gray-400 rounded-full w-24 outline-none ${
                    isFocusVisible ? FOCUS_STYLES : ""
                }`}
            >
                <img
                    src={isSelected ? "/sweat.png" : "/heart.png"}
                    className={`block self-center w-12 h-12 rounded-full transition-transform duration-300 ${
                        isSelected ? "translate-x-full" : "translate-x-0"
                    }`}
                />
            </div>
            {children}
        </label>
    );
};

export const PlainAccessibleSwitch: FC<SwitchProps> = ({ children, isSelected = false, onChange }) => {
    const state = useToggleState({ isSelected, onChange });
    const ref = useRef();
    const { inputProps } = useSwitch({}, state, ref);
    const { isFocusVisible, focusProps } = useFocusRing();

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
                        isSelected ? "translate-x-full bg-blue-500" : "translate-x-0 bg-gray-400"
                    }`}
                />
            </div>
            {children}
        </label>
    );
};
