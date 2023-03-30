import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { ListItemSize } from "../types.js"
import { convertStringToListItemSize } from "../utils.js"
import { globalStyles } from "../styles.js"
import { listItemStyles } from "./list-item.styles.js"

export const listItemTagName = "dav-list-item"

@customElement(listItemTagName)
export class ListItem extends LitElement {
	static styles = [globalStyles, listItemStyles]

	@state() private listItemContainerClasses = {
		"list-item-container": true,
		small: false
	}

	@property({ type: String }) imageSrc: string = ""
	@property({ type: String }) imageFallbackSrc: string = ""
	@property({ type: String })
	headline: string = ""
	@property({ type: String }) subhead: string = ""
	@property({
		type: String,
		converter: (value: string) => convertStringToListItemSize(value)
	})
	size: ListItemSize = ListItemSize.normal

	getImage() {
		if (this.imageSrc.length > 0) {
			return html`
				<div class="list-item-image-container">
					<dav-blurhash-image
						class="list-item-image"
						src=${this.imageSrc}
						fallbackSrc=${this.imageFallbackSrc}
						height=${this.listItemContainerClasses.small ? 56 : 84}
					></dav-blurhash-image>
				</div>
			`
		}
	}

	getHeadline() {
		if (this.headline.length > 0) {
			return html`
				<p class="list-item-headline">${this.headline}</p>
			`
		}
	}

	getSubhead() {
		if (this.subhead.length > 0) {
			return html`
				<p class="list-item-subhead">${this.subhead}</p>
			`
		}
	}

	render() {
		this.listItemContainerClasses.small = this.size == ListItemSize.small

		return html`
			<div class=${classMap(this.listItemContainerClasses)} tabindex="0">
				${this.getImage()}

				<div class="list-item-body">
					${this.getHeadline()} ${this.getSubhead()}
				</div>
			</div>
		`
	}
}
