import { styled } from "styled-components"
import { Flex } from "@components"
import { Clock, Logo, Title } from "@layouts"
import React from "react";

const StyledHeader = styled.header`
border-bottom: 1px solid #bdbfbb;
margin-bottom: 25px;
`;

interface HeaderState {
	time: Date,
}

export class Header extends React.Component<object, HeaderState> {
	private timeId: NodeJS.Timeout | null = null;

	constructor(props: object) {
		super(props);
		this.state = {
			time: new Date()
		};
	}

	componentDidMount() {
		this.timeId = setInterval(() => {
			this.setState({ time: new Date() });
		}, 1000);
	}

	componentWillUnmount() {
		if (this.timeId) {
			clearInterval(this.timeId);
		}
	}

	render() {
		return (
			<StyledHeader>
				<Flex $justify="space-between" $align="center" $margin="0 20px" $height="100px">
					<Logo />
					<Title />
					<Clock time={this.state.time} />
				</Flex>
			</StyledHeader>
		)
	}
}