import { css } from "@lit/reactive-element"

export const globalStyles = css`
	:host {
		--hover-opacity: 0.08;
		--focus-opacity: 0.12;

		--black-rgb: 0, 0, 0; /* #000000 */
		--white-rgb: 255, 255, 255; /* #ffffff */

		/* Color palette */
		/* primary */
		--dav-color-palette-primary10-rgb: 0, 25, 68; /* #001944 */
		--dav-color-palette-primary20-rgb: 0, 45, 110; /* #002d6e */
		--dav-color-palette-primary25-rgb: 0, 55, 132; /* #003784 */
		--dav-color-palette-primary30-rgb: 0, 66, 154; /* #00429a */
		--dav-color-palette-primary35-rgb: 25, 78, 167; /* #194ea7 */
		--dav-color-palette-primary40-rgb: 43, 91, 180; /* #2b5bb4 */
		--dav-color-palette-primary50-rgb: 72, 116, 207; /* #4874cf */
		--dav-color-palette-primary60-rgb: 100, 142, 235; /* #648eeb */
		--dav-color-palette-primary70-rgb: 133, 170, 255; /* #85aaff */
		--dav-color-palette-primary80-rgb: 176, 198, 255; /* #b0c6ff */
		--dav-color-palette-primary85-rgb: 196, 212, 255; /* #c4d4ff */
		--dav-color-palette-primary90-rgb: 217, 226, 255; /* #d9e2ff */
		--dav-color-palette-primary95-rgb: 237, 240, 255; /* #edf0ff */
		--dav-color-palette-primary98-rgb: 250, 248, 255; /* #faf8ff */
		--dav-color-palette-primary99-rgb: 254, 251, 255; /* #fefbff */

		/* secondary */
		--dav-color-palette-secondary10-rgb: 65, 0, 3; /* #410003 */
		--dav-color-palette-secondary20-rgb: 104, 0, 8; /* #680008 */
		--dav-color-palette-secondary25-rgb: 125, 0, 12; /* #7d000c */
		--dav-color-palette-secondary30-rgb: 147, 0, 16; /* #930010 */
		--dav-color-palette-secondary35-rgb: 168, 6, 22; /* #a80616 */
		--dav-color-palette-secondary40-rgb: 186, 26, 32; /* #ba1a20 */
		--dav-color-palette-secondary50-rgb: 221, 55, 53; /* #dd3735 */
		--dav-color-palette-secondary60-rgb: 255, 84, 78; /* #ff544e */
		--dav-color-palette-secondary70-rgb: 255, 137, 128; /* #ff8980 */
		--dav-color-palette-secondary80-rgb: 255, 179, 172; /* #ffb3ac */
		--dav-color-palette-secondary85-rgb: 255, 199, 193; /* #ffc7c1 */
		--dav-color-palette-secondary90-rgb: 255, 218, 214; /* #ffdad6 */
		--dav-color-palette-secondary95-rgb: 255, 237, 235; /* #ffedeb */
		--dav-color-palette-secondary98-rgb: 255, 248, 247; /* #fff8f7 */
		--dav-color-palette-secondary99-rgb: 255, 251, 255; /* #fffbff */

		/* tertiary */
		--dav-color-palette-tertiary10-rgb: 0, 31, 42; /* #001f2a */
		--dav-color-palette-tertiary20-rgb: 0, 53, 70; /* #003546 */
		--dav-color-palette-tertiary25-rgb: 0, 65, 84; /* #004154 */
		--dav-color-palette-tertiary30-rgb: 0, 77, 100; /* #004d64 */
		--dav-color-palette-tertiary35-rgb: 0, 90, 115; /* #005a73 */
		--dav-color-palette-tertiary40-rgb: 0, 103, 131; /* #006783 */
		--dav-color-palette-tertiary50-rgb: 0, 129, 165; /* #0081a5 */
		--dav-color-palette-tertiary60-rgb: 6, 157, 199; /* #069dc7 */
		--dav-color-palette-tertiary70-rgb: 64, 184, 227; /* #40b8e3 */
		--dav-color-palette-tertiary80-rgb: 101, 211, 255; /* #65d3ff */
		--dav-color-palette-tertiary85-rgb: 145, 221, 255; /* #91ddff */
		--dav-color-palette-tertiary90-rgb: 189, 233, 255; /* #bde9ff */
		--dav-color-palette-tertiary95-rgb: 224, 244, 255; /* #e0f4ff */
		--dav-color-palette-tertiary98-rgb: 244, 250, 255; /* #f4faff */
		--dav-color-palette-tertiary99-rgb: 250, 252, 255; /* #fafcff */

		/* neutral */
		--dav-color-palette-neutral10-rgb: 27, 27, 31; /* #1b1b1f */
		--dav-color-palette-neutral20-rgb: 48, 48, 52; /* #303034 */
		--dav-color-palette-neutral25-rgb: 59, 59, 63; /* #3b3b3f */
		--dav-color-palette-neutral30-rgb: 70, 70, 74; /* #46464a */
		--dav-color-palette-neutral35-rgb: 82, 82, 86; /* #525256 */
		--dav-color-palette-neutral40-rgb: 94, 94, 98; /* #5e5e62 */
		--dav-color-palette-neutral50-rgb: 119, 119, 122; /* #77777a */
		--dav-color-palette-neutral60-rgb: 145, 144, 148; /* #919094 */
		--dav-color-palette-neutral70-rgb: 172, 171, 175; /* #acabaf */
		--dav-color-palette-neutral80-rgb: 199, 198, 202; /* #c7c6ca */
		--dav-color-palette-neutral90-rgb: 227, 226, 230; /* #e3e2e6 */
		--dav-color-palette-neutral95-rgb: 242, 240, 244; /* #f2f0f4 */
		--dav-color-palette-neutral98-rgb: 251, 248, 253; /* #fbf8fd */
		--dav-color-palette-neutral99-rgb: 254, 251, 255; /* #fefbff */

		/* neutral-variant */
		--dav-color-palette-neutral-variant10-rgb: 25, 27, 35; /* #191b23 */
		--dav-color-palette-neutral-variant20-rgb: 46, 48, 56; /* #2e3038 */
		--dav-color-palette-neutral-variant25-rgb: 57, 59, 67; /* #393b43 */
		--dav-color-palette-neutral-variant30-rgb: 68, 70, 79; /* #44464f */
		--dav-color-palette-neutral-variant35-rgb: 80, 82, 90; /* #50525a */
		--dav-color-palette-neutral-variant40-rgb: 92, 94, 103; /* #5c5e67 */
		--dav-color-palette-neutral-variant50-rgb: 117, 119, 128; /* #757780 */
		--dav-color-palette-neutral-variant60-rgb: 143, 144, 153; /* #8f9099 */
		--dav-color-palette-neutral-variant70-rgb: 169, 171, 180; /* #a9abb4 */
		--dav-color-palette-neutral-variant80-rgb: 197, 198, 208; /* #c5c6d0 */
		--dav-color-palette-neutral-variant90-rgb: 225, 226, 236; /* #e1e2ec */
		--dav-color-palette-neutral-variant95-rgb: 239, 240, 250; /* #eff0fa */
		--dav-color-palette-neutral-variant98-rgb: 250, 248, 255; /* #faf8ff */
		--dav-color-palette-neutral-variant99-rgb: 254, 251, 255; /* #fefbff */

		/* error */
		--dav-color-palette-error10-rgb: 65, 0, 2; /* #410002 */
		--dav-color-palette-error20-rgb: 105, 0, 5; /* #690005 */
		--dav-color-palette-error25-rgb: 126, 0, 7; /* #7e0007 */
		--dav-color-palette-error30-rgb: 147, 0, 10; /* #93000a */
		--dav-color-palette-error35-rgb: 168, 7, 16; /* #a80710 */
		--dav-color-palette-error40-rgb: 186, 26, 26; /* #ba1a1a */
		--dav-color-palette-error50-rgb: 222, 55, 48; /* #de3730 */
		--dav-color-palette-error60-rgb: 255, 84, 73; /* #ff5449 */
		--dav-color-palette-error70-rgb: 255, 137, 125; /* #ff897d */
		--dav-color-palette-error80-rgb: 255, 180, 171; /* #ffb4ab */
		--dav-color-palette-error85-rgb: 255, 199, 193; /* #ffc7c1 */
		--dav-color-palette-error90-rgb: 255, 218, 214; /* #ffdad6 */
		--dav-color-palette-error95-rgb: 255, 237, 234; /* #ffedea */
		--dav-color-palette-error98-rgb: 255, 248, 247; /* #fff8f7 */
		--dav-color-palette-error99-rgb: 255, 251, 255; /* #fffbff */

		/* RGB color variables */
		/* light */
		--dav-color-primary-light-rgb: var(--dav-color-palette-primary40-rgb);
		--dav-color-on-primary-light-rgb: var(--white-rgb);
		--dav-color-primary-container-light-rgb: var(
			--dav-color-palette-primary90-rgb
		);
		--dav-color-on-primary-container-light-rgb: var(
			--dav-color-palette-primary10-rgb
		);
		--dav-color-secondary-light-rgb: var(--dav-color-palette-secondary40-rgb);
		--dav-color-on-secondary-light-rgb: var(--white-rgb);
		--dav-color-secondary-container-light-rgb: var(
			--dav-color-palette-secondary90-rgb
		);
		--dav-color-on-secondary-container-light-rgb: var(
			--dav-color-palette-secondary10-rgb
		);
		--dav-color-tertiary-light-rgb: var(--dav-color-palette-tertiary40-rgb);
		--dav-color-on-tertiary-light-rgb: var(--white-rgb);
		--dav-color-tertiary-container-light-rgb: var(
			--dav-color-palette-tertiary90-rgb
		);
		--dav-color-on-tertiary-container-light-rgb: var(
			--dav-color-palette-tertiary10-rgb
		);
		--dav-color-error-light-rgb: var(--dav-color-palette-error40-rgb);
		--dav-color-error-container-light-rgb: var(
			--dav-color-palette-error90-rgb
		);
		--dav-color-on-error-light-rgb: var(--white-rgb);
		--dav-color-on-error-container-light-rgb: var(
			--dav-color-palette-error10-rgb
		);
		--dav-color-background-light-rgb: var(--dav-color-palette-primary99-rgb);
		--dav-color-on-background-light-rgb: var(
			--dav-color-palette-neutral10-rgb
		);
		--dav-color-surface-light-rgb: var(--dav-color-palette-neutral99-rgb);
		--dav-color-on-surface-light-rgb: var(--dav-color-palette-neutral10-rgb);
		--dav-color-surface-variant-light-rgb: var(
			--dav-color-palette-neutral-variant90-rgb
		);
		--dav-color-on-surface-variant-light-rgb: var(
			--dav-color-palette-neutral-variant30-rgb
		);
		--dav-color-outline-light-rgb: var(
			--dav-color-palette-neutral-variant50-rgb
		);
		--dav-color-inverse-on-surface-light-rgb: var(
			--dav-color-palette-neutral95-rgb
		);
		--dav-color-inverse-surface-light-rgb: var(
			--dav-color-palette-neutral20-rgb
		);
		--dav-color-inverse-primary-light-rgb: var(
			--dav-color-palette-primary80-rgb
		);
		--dav-color-shadow-light-rgb: var(--black-rgb);
		--dav-color-surface-tint-light-rgb: var(
			--dav-color-palette-primary40-rgb
		);
		--dav-color-outline-variant-light-rgb: var(
			--dav-color-palette-neutral-variant80-rgb
		);
		--dav-color-scrim-light-rgb: var(--black-rgb);

		/* dark */
		--dav-color-primary-dark-rgb: var(--dav-color-palette-primary80-rgb);
		--dav-color-on-primary-dark-rgb: var(--dav-color-palette-primary20-rgb);
		--dav-color-primary-container-dark-rgb: var(
			--dav-color-palette-primary30-rgb
		);
		--dav-color-on-primary-container-dark-rgb: var(
			--dav-color-palette-primary90-rgb
		);
		--dav-color-secondary-dark-rgb: var(--dav-color-palette-secondary80-rgb);
		--dav-color-on-secondary-dark-rgb: var(
			--dav-color-palette-secondary20-rgb
		);
		--dav-color-secondary-container-dark-rgb: var(
			--dav-color-palette-secondary30-rgb
		);
		--dav-color-on-secondary-container-dark-rgb: var(
			--dav-color-palette-secondary90-rgb
		);
		--dav-color-tertiary-dark-rgb: var(--dav-color-palette-tertiary80-rgb);
		--dav-color-on-tertiary-dark-rgb: var(--dav-color-palette-tertiary20-rgb);
		--dav-color-tertiary-container-dark-rgb: var(
			--dav-color-palette-tertiary30-rgb
		);
		--dav-color-on-tertiary-container-dark-rgb: var(
			--dav-color-palette-tertiary90-rgb
		);
		--dav-color-error-dark-rgb: var(--dav-color-palette-error80-rgb);
		--dav-color-error-container-dark-rgb: var(
			--dav-color-palette-error30-rgb
		);
		--dav-color-on-error-dark-rgb: var(--dav-color-palette-error20-rgb);
		--dav-color-on-error-container-dark-rgb: var(
			--dav-color-palette-error90-rgb
		);
		--dav-color-background-dark-rgb: var(--dav-color-palette-neutral10-rgb);
		--dav-color-on-background-dark-rgb: var(
			--dav-color-palette-neutral90-rgb
		);
		--dav-color-surface-dark-rgb: var(--dav-color-palette-neutral10-rgb);
		--dav-color-on-surface-dark-rgb: var(--dav-color-palette-neutral90-rgb);
		--dav-color-surface-variant-dark-rgb: var(
			--dav-color-palette-neutral-variant30-rgb
		);
		--dav-color-on-surface-variant-dark-rgb: var(
			--dav-color-palette-neutral-variant80-rgb
		);
		--dav-color-outline-dark-rgb: var(
			--dav-color-palette-neutral-variant60-rgb
		);
		--dav-color-inverse-on-surface-dark-rgb: var(
			--dav-color-palette-neutral10-rgb
		);
		--dav-color-inverse-surface-dark-rgb: var(
			--dav-color-palette-neutral90-rgb
		);
		--dav-color-inverse-primary-dark-rgb: var(
			--dav-color-palette-primary40-rgb
		);
		--dav-color-shadow-dark-rgb: var(--black-rgb);
		--dav-color-surface-tint-dark-rgb: var(--dav-color-palette-primary80-rgb);
		--dav-color-outline-variant-dark-rgb: var(
			--dav-color-palette-neutral-variant30-rgb
		);
		--dav-color-scrim-dark-rgb: var(--black-rgb);

		/* default */
		--dav-color-primary-rgb: var(--dav-color-primary-light-rgb);
		--dav-color-on-primary-rgb: var(--dav-color-on-primary-light-rgb);
		--dav-color-primary-container-rgb: var(
			--dav-color-primary-container-light-rgb
		);
		--dav-color-on-primary-container-rgb: var(
			--dav-color-on-primary-container-light-rgb
		);
		--dav-color-secondary-rgb: var(--dav-color-secondary-light-rgb);
		--dav-color-on-secondary-rgb: var(--dav-color-on-secondary-light-rgb);
		--dav-color-secondary-container-rgb: var(
			--dav-color-secondary-container-light-rgb
		);
		--dav-color-on-secondary-container-rgb: var(
			--dav-color-on-secondary-container-light-rgb
		);
		--dav-color-tertiary-rgb: var(--dav-color-tertiary-light-rgb);
		--dav-color-on-tertiary-rgb: var(--dav-color-on-tertiary-light-rgb);
		--dav-color-tertiary-container-rgb: var(
			--dav-color-tertiary-container-light-rgb
		);
		--dav-color-on-tertiary-container-rgb: var(
			--dav-color-on-tertiary-container-light-rgb
		);
		--dav-color-error-rgb: var(--dav-color-error-light-rgb);
		--dav-color-error-container-rgb: var(
			--dav-color-error-container-light-rgb
		);
		--dav-color-on-error-rgb: var(--dav-color-on-error-light-rgb);
		--dav-color-on-error-container-rgb: var(
			--dav-color-on-error-container-light-rgb
		);
		--dav-color-background-rgb: var(--dav-color-background-light-rgb);
		--dav-color-on-background-rgb: var(--dav-color-on-background-light-rgb);
		--dav-color-surface-rgb: var(--dav-color-surface-light-rgb);
		--dav-color-on-surface-rgb: var(--dav-color-on-surface-light-rgb);
		--dav-color-surface-variant-rgb: var(
			--dav-color-surface-variant-light-rgb
		);
		--dav-color-on-surface-variant-rgb: var(
			--dav-color-on-surface-variant-light-rgb
		);
		--dav-color-outline-rgb: var(--dav-color-outline-light-rgb);
		--dav-color-inverse-on-surface-rgb: var(
			--dav-color-inverse-on-surface-light-rgb
		);
		--dav-color-inverse-surface-rgb: var(
			--dav-color-inverse-surface-light-rgb
		);
		--dav-color-inverse-primary-rgb: var(
			--dav-color-inverse-primary-light-rgb
		);
		--dav-color-shadow-rgb: var(--dav-color-shadow-light-rgb);
		--dav-color-surface-tint-rgb: var(--dav-color-surface-tint-light-rgb);
		--dav-color-outline-variant-rgb: var(
			--dav-color-outline-variant-light-rgb
		);
		--dav-color-scrim-rgb: var(--dav-color-scrim-light-rgb);

		/* Non-RGB color variables */
		/* default */
		--dav-color-primary: rgb(var(--dav-color-primary-rgb));
		--dav-color-on-primary: rgb(var(--dav-color-on-primary-rgb));
		--dav-color-primary-container: rgb(
			var(--dav-color-primary-container-rgb)
		);
		--dav-color-on-primary-container: rgb(
			var(--dav-color-on-primary-container-rgb)
		);
		--dav-color-secondary: rgb(var(--dav-color-secondary-rgb));
		--dav-color-on-secondary: rgb(var(--dav-color-on-secondary-rgb));
		--dav-color-secondary-container: rgb(
			var(--dav-color-secondary-container-rgb)
		);
		--dav-color-on-secondary-container: rgb(
			var(--dav-color-on-secondary-container-rgb)
		);
		--dav-color-tertiary: rgb(var(--dav-color-tertiary-rgb));
		--dav-color-on-tertiary: rgb(var(--dav-color-on-tertiary-rgb));
		--dav-color-tertiary-container: rgb(
			var(--dav-color-tertiary-container-rgb)
		);
		--dav-color-on-tertiary-container: rgb(
			var(--dav-color-on-tertiary-container-rgb)
		);
		--dav-color-error: rgb(var(--dav-color-error-rgb));
		--dav-color-error-container: rgb(var(--dav-color-error-container-rgb));
		--dav-color-on-error: rgb(var(--dav-color-on-error-rgb));
		--dav-color-on-error-container: rgb(
			var(--dav-color-on-error-container-rgb)
		);
		--dav-color-background: rgb(var(--dav-color-background-rgb));
		--dav-color-on-background: rgb(var(--dav-color-on-background-rgb));
		--dav-color-surface: rgb(var(--dav-color-surface-rgb));
		--dav-color-on-surface: rgb(var(--dav-color-on-surface-rgb));
		--dav-color-surface-variant: rgb(var(--dav-color-surface-variant-rgb));
		--dav-color-on-surface-variant: rgb(
			var(--dav-color-on-surface-variant-rgb)
		);
		--dav-color-outline: rgb(var(--dav-color-outline-rgb));
		--dav-color-inverse-on-surface: rgb(
			var(--dav-color-inverse-on-surface-rgb)
		);
		--dav-color-inverse-surface: rgb(var(--dav-color-inverse-surface-rgb));
		--dav-color-inverse-primary: rgb(var(--dav-color-inverse-primary-rgb));
		--dav-color-shadow: rgb(var(--dav-color-shadow-rgb));
		--dav-color-surface-tint: rgb(var(--dav-color-surface-tint-rgb));
		--dav-color-outline-variant: rgb(var(--dav-color-outline-variant-rgb));
		--dav-color-scrim: rgb(var(--dav-color-scrim-rgb));
	}

	.modern-vertical-scrollbar::-webkit-scrollbar {
		background-color: var(
			--light-theme-color-primary,
			var(--default-light-theme-color-primary)
		);
		width: 5px;
	}

	.modern-vertical-scrollbar.darkTheme::-webkit-scrollbar {
		background-color: var(
			--dark-theme-color-primary,
			var(--default-dark-theme-color-primary)
		);
	}

	.modern-vertical-scrollbar::-webkit-scrollbar-thumb {
		background-color: var(
			--light-theme-scrollbar-color,
			var(--default-light-theme-scrollbar-color)
		);
		border-radius: 10px;
	}

	.modern-vertical-scrollbar.darkTheme::-webkit-scrollbar-thumb {
		background-color: var(
			--dark-theme-scrollbar-color,
			var(--default-dark-theme-scrollbar-color)
		);
	}

	.slide-down-in {
		animation-duration: 100ms;
		animation-name: animate-slide-down-in;
		animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
	}

	@keyframes animate-slide-down-in {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`
