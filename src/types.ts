import { AriaListBoxOptions } from "@react-aria/listbox";
import { ListState } from "@react-stately/list";
import { Node } from "@react-types/shared";
import { PropsWithChildren } from "react";

export type MenuItemType = {
    id: string | number;
    title: string;
};

export type MenuBlock = {
    id: string;
    menuItems: MenuItemType[];
    ariaLabel?: string;
};

export type DropdownProps = {
    menuBlocks: MenuBlock[];
    onChange: (id?: string | number) => void;
    activeItemId?: string | number;
    ariaLabel?: string;
};

export type OverlayProps = PropsWithChildren<{
    isOpen?: boolean;
    onClose: () => void;
}>;

export type SelectMenuProps = {
    menuBlocks: MenuBlock[];
    ariaProps: AriaListBoxOptions<any>;
    state: ListState<any>;
    ariaLabel?: string;
};

export type MenuSectionProps = PropsWithChildren<{
    ariaLabel?: string;
}>;

export type MenuItemProps = {
    state: ListState<object>;
    node: Node<object>;
    item: MenuItemType;
};
