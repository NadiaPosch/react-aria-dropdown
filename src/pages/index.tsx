import { useEffect, useState } from "react";
import { Dropdown } from "../components/Dropdown";
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
    const [activeItemId, setActiveItemId] = useState<string | number>("");
    useEffect(() => setActiveItemId(activeItemId), [activeItemId]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <main>
                <h1 className="text-4xl mb-8">React Aria Dropdown Example</h1>
                <div className="w-60 mx-auto">
                    <Dropdown
                        menuBlocks={menuBlocks}
                        activeItemId={activeItemId}
                        onChange={(id) => setActiveItemId(id as string)}
                    />
                </div>
            </main>
        </div>
    );
}
