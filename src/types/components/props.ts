export interface ButtonProps {
	prefix?: string;
	children?: React.ReactNode;
	$isActive?: boolean;
}

export interface ContentTitleProps {
	$fontSize?: string;
	$marginBottom?: string;
	$marginTop?: string;
	$maxWidth?: string;
	$textAlign?: string;
	children?: React.ReactNode;
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