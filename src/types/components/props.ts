import type { CharacterType } from "@types";

export interface ButtonProps {
	prefix?: string;
	children?: React.ReactNode;
	$isActive?: boolean;
	$maxWidth?: string;
	$isAnimate?: boolean;
	$backgroundColor?: string;
	$backgroundColorHover?: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: string;
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
	$minWidth?: string;
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

export interface CustomnInputProps {
	$alignSelf?: string;
	$margin?: string;
	children?: React.ReactNode;
	$hasError?: boolean;
	$height?: string;
	$minWidthInput?: string;
	$border?: string;
	$borderRadius?: string;
	$padding?: string;
	$minWidth?: string;
}