import React from "react";
import { NavLink } from "react-router";
import classes from '@layouts/MainLayout/Header/Title/Title.module.css';

export const Title = React.memo(() => {

	return (
		<h1 className={classes.title}>
			<NavLink to="/">Rick and Morty API</NavLink>
		</h1>
	)
})