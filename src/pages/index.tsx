import { useState } from "react";
import { Switch } from "../components/Switch";
import { IconEnum, MenuBlock } from "../types";

const menuBlocks: MenuBlock[] = [
    {
        id: "block-1",
        ariaLabel: "First Block",
        menuItems: [
            {
                id: 1,
                title: "First item",
                icon: IconEnum.Music,
            },
            {
                id: 2,
                title: "Second item",
                icon: IconEnum.Film,
            },
        ],
    },
    {
        id: "block-2",
        ariaLabel: "Second Block",
        menuItems: [
            {
                id: 3,
                title: "Third item",
                icon: IconEnum.Image,
            },
            {
                id: 4,
                title: "Fourth item",
                icon: IconEnum.File,
            },
        ],
    },
];

export default function Home() {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <main>
                <h1 className="text-4xl mb-8">React Aria Switch</h1>
                <div className="w-56 mx-auto">
                    <Switch isSelected={isSelected} onChange={() => setIsSelected(!isSelected)}>
                        {isSelected ? "turn me off..." : "turn me on!"}
                    </Switch>
                </div>
            </main>
        </div>
    );
}
