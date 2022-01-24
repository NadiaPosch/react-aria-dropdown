import { Item, Section } from "@react-stately/collections";
import { MenuBlock, MenuItemType } from "./types";

export const getActiveItem = (blocks: MenuBlock[], activeId: string | number): MenuItemType | null =>
    blocks
        .map(({ menuItems }) => menuItems)
        .flat()
        .find(({ id }) => id.toString() === activeId?.toString()) || null;

export const getKeyItemRecord = <T extends MenuItemType>(items: T[]): Record<string, T> =>
    items.reduce<Record<string, T>>((previous, item) => ({ ...previous, [item.id]: item }), {});

export const getMenuItems = <T extends MenuBlock>(menuBlocks: T[]): T["menuItems"] =>
    menuBlocks.flatMap(({ menuItems }) => menuItems);

export const mapToAriaProps = (ariaLabel: string, menuBlocks: MenuBlock[]) => ({
    "aria-label": ariaLabel,
    children: menuBlocks.map(({ id, ariaLabel, menuItems }) => (
        <Section title={id} key={id} aria-label={ariaLabel}>
            {menuItems.map((menuItem) => (
                <Item key={menuItem.id}>{menuItem.title}</Item>
            ))}
        </Section>
    )),
});
