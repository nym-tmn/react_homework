import { useEffect, useRef } from "react";

export const usePortal = () => {

	const refPortalRoot = useRef(document.createElement('div'));
	const portalElement = refPortalRoot.current;

	useEffect(() => {
		portalElement.id = 'modal-root';
		document.body.appendChild(portalElement);

		return () => {
			document.body.removeChild(portalElement);
		};
	}, [portalElement]);

	return portalElement;
}