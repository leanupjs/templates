import { Bundesministerium } from '@kolibri/lib';
import { KolLogo } from '@kolibri/solid';
import { Component } from 'solid-js';

export const AppComponent: Component = () => {
	return (
		<div class="font-sans grid gap-2">
			<KolLogo _org={Bundesministerium['Bundesministerium der Finanzen']}></KolLogo>
		</div>
	);
};
