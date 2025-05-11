import styled from "styled-components"
import pageNotFound from '@assets/images/page_not_found_image.webp'
import { ContentTitle } from "@components"

const StyledEmptyLayout = styled.div`
// img {
// max-width: 500px;
// }
align-content: center;
justify-items: center;
flex: 1 1 auto;
// height: 100%;
`;

export function EmptyLayout() {
	return (
		<StyledEmptyLayout>
			<ContentTitle>
				404
			</ContentTitle>
			<p>It seems that such a page does not exist</p>
			<img src={pageNotFound} alt="Picture that shows that the page is not found" />
		</StyledEmptyLayout>
	)
}