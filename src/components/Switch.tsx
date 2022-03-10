import { FC } from "react";

type SwitchProps = {
    isSelected?: boolean;
    onChange?: (isSelected: boolean) => void;
};

export const Switch: FC<SwitchProps> = ({ children, onChange, isSelected = false }) => (
    <label className="flex items-center gap-x-4" onClick={() => onChange(!isSelected)}>
        <div className={`cursor-pointer border border-gray-400 rounded-full w-10 outline-none group`}>
            <div
                className={`block self-center w-5 h-5 rounded-full transition-all duration-300 ${
                    isSelected
                        ? "translate-x-full bg-blue-500 group-hover:bg-blue-600"
                        : "translate-x-0 bg-gray-400 group-hover:bg-gray-500"
                }`}
            />
        </div>
        {children}
    </label>
);
