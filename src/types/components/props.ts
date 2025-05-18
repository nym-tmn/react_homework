import type { CharacterType } from "@types";

export interface ButtonProps {
	prefix?: string;
	children?: React.ReactNode;
	$isActive?: boolean;
	$maxWidth?: string;
	$isCharacter?: boolean;
	onClick?: () => void;
}

export interface ContentTitleProps {
	$fontSize?: string;
	$marginBottom?: string;
	$marginTop?: string;
	$maxWidth?: string;
	$textAlign?: string;
	$color?: string;
	children?: React.ReactNode;
	as?: React.ElementType;
}

export interface FlexProps {
	$direction?: string;
	$justify?: string;
	$align?: string;
	$margin?: string;
	$height?: string;
	$minHeight?: string;
	$wrap?: string;
	$gap?: string;
	className?: string;
	children?: React.ReactNode;
	as?: React.ElementType;
}

export interface CustomImageProps {
	children?: React.ReactNode;
	$borderRadius?: string;
	$maxWidth?: string;
}

export interface PaginationProps {
	pages: number;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export type CharacterProps = {
	name: string;
	image: string;
}

export interface ModalProps {
	character: CharacterType | null;
	isOpenModal: boolean;
	onClick: () => void;
}