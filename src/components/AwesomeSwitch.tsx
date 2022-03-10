import { FC } from "react";

type AwesomeSwitchProps = {
    isSelected?: boolean;
    onChange?: (isSelected: boolean) => void;
};

export const AwesomeSwitch: FC<AwesomeSwitchProps> = ({ children, onChange, isSelected = false }) => {
    return (
        <label className="flex items-center gap-x-4 text-lg text-blue-900" onClick={() => onChange(!isSelected)}>
            <div className="cursor-pointer border border-gray-400 rounded-full w-24 outline-none">
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
