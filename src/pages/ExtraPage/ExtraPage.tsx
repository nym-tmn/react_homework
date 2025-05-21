import { Button, ContentTitle, CustomnInput, Flex } from "@components"
import { useCallback, useMemo, useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
border: 2px solid #4fb342;
border-radius: 15px;
padding: 20px;
margin-bottom: 30px;
`;

export const ExtraPage = () => {

	const [form, setForm] = useState(() => ({
		name: '',
		character: 'Rick',
		hasError: false,
	}))

	const [isShow, setIsShow] = useState(false);
	const titleInputRef = useRef<HTMLInputElement>(null);

	const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setForm(prev => ({
			...prev,
			name: event.target.value,
			hasError: event.target.value.trim().length === 0,
		}));
	}, [])

	const handleToggleError = useCallback(() => {
		setForm(prev => ({
			...prev,
			hasError: !prev.hasError,
		}));
	}, [])

	const handleSetTitleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setIsShow(true);
		}
	}, [])

	const handleResetTitleClick = useCallback(() => {
		if (titleInputRef.current) {
			titleInputRef.current.value = '';
		}
		setIsShow(false);
	}, [])

	const titleProps = useMemo(() => ({
		as: 'h2' as const,
		$fontSize: "28px",
		$marginBottom: "40px"
	}), []);

	return (
		<>
			{!isShow
				? <ContentTitle {...titleProps}>Extra Page</ContentTitle>
				: <ContentTitle {...titleProps}>{titleInputRef.current?.value}</ContentTitle>}
			<StyledForm>
				<Flex
					$direction="column"
					$gap="10px">
					<CustomnInput
						$hasError={form.hasError}
						$height="30px"
						$minWidthInput="300px">
						<Flex $gap="10px">
							<label htmlFor="name">Enter your name:</label>
							<input
								id="name"
								type="text"
								value={form.name}
								onChange={handleNameChange}
							/>
						</Flex>
					</CustomnInput>
					<CustomnInput>
						<Flex $gap="10px">
							<label htmlFor="character">Select character:</label>
							<select
								name="character"
								id="character"
								value={form.character}
								onChange={(event: ChangeEvent<HTMLSelectElement>) => setForm(prev => ({ ...prev, character: event.target.value, }))}>
								<option value="Rick">Rick</option>
								<option value="Morty">Morty</option>
								<option value="Jerry">Jerry</option>
							</select>
						</Flex>
					</CustomnInput>
					<pre>
						My name is {form.name}.
						<br />
						My favorite character is {form.character}.
					</pre>
					<Button
						disabled={form.hasError}
						$maxWidth="max-content"
						type="button">
						Send
					</Button>
					<Button
						onClick={handleToggleError}
						$maxWidth="max-content"
						type="button">
						Toggle Error
					</Button>
				</Flex>
			</StyledForm>
			<CustomnInput
				$margin="0 auto 0 auto"
				$minWidthInput="380px"
				$border="2px solid #4fb342"
				$borderRadius="15px"
				$padding="15px 50.71px 15px 50.71px"
				$height="30px">
				<Flex
					$direction="column"
					$gap="5px"
					$align="center">
					<label htmlFor="title">Set page title and press Enter:</label>
					<input
						ref={titleInputRef}
						id="title"
						type="text"
						onKeyDown={handleSetTitleKeyDown} />
					<Button onClick={handleResetTitleClick}>
						Reset title
					</Button>
				</Flex>
			</CustomnInput>
		</>
	)
}