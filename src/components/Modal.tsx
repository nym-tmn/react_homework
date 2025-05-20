import { useEffect, useRef } from "react";
import { createPortal } from "react-dom"
import { styled } from "styled-components";
import { usePortal } from "@hooks";
import { ParagraphsStyles } from "./styles/Paragraphs.styles";
import type { ModalProps } from "@types";
import { Button, CustomImage, Flex } from "@components";

const StyledDialog = styled.dialog`
border: 2px solid #4fbaf0;
border-radius: 15px;

&::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const Modal: React.FC<ModalProps> = ({
	character,
	isOpenModal,
	onClick,
}) => {

	const refDialog = useRef<HTMLDialogElement>(null);

	const portalElement = usePortal();

	useEffect(() => {
		const dialogElement = refDialog.current;
		if (isOpenModal) {
		dialogElement?.showModal();
		} else {
			dialogElement?.close()
		}
	}, [isOpenModal])

	return createPortal(
		<StyledDialog ref={refDialog}>
			<Flex $direction="column" $gap="5px">
				<CustomImage $borderRadius="15px" ><img src={character?.image} alt='Character image'/></CustomImage>
				<ParagraphsStyles>Name: {character?.name}</ParagraphsStyles>
				<ParagraphsStyles>Species: {character?.species}</ParagraphsStyles>
				<ParagraphsStyles>Gender: {character?.gender}</ParagraphsStyles>
				<ParagraphsStyles>Status: {character?.status}</ParagraphsStyles>
				<ParagraphsStyles>Location: {character?.location.name}</ParagraphsStyles>
				<ParagraphsStyles>Origin: {character?.origin.name}</ParagraphsStyles>
				<Button $maxWidth="min-content" onClick={onClick}>Close</Button>
			</Flex>
		</StyledDialog>,
		portalElement
	)
}