import * as ko from 'knockout';
import $ from 'jquery';
import littlefoot from 'littlefoot';
import mermaid from 'mermaid';

$(() => {
	littlefoot();
	mermaid.initialize({
		startOnLoad: true,
	});
});

export class MainMenuViewModel {

	mainMenuOpen: ko.Observable<boolean>;
	sidebarOpen: ko.Observable<boolean>;

	constructor() {
		this.mainMenuOpen = ko.observable<boolean>(false);
		this.sidebarOpen = ko.observable<boolean>(false);
	}

	toggleMainMenu(): void {
		this.mainMenuOpen(!this.mainMenuOpen());
		if (this.mainMenuOpen()) {
			this.sidebarOpen(false);
		}
	}

	openSidebar(): void {
		this.mainMenuOpen(false);
		this.sidebarOpen(true);
	}

	closeSidebar(): void {
		this.sidebarOpen(false);
	}

	handleSidebarClick(viewModel: MainMenuViewModel, event: any): boolean {
		const target: HTMLElement = event.target;
		if (target.tagName !== 'A') {
			return true;
		}

		this.sidebarOpen(false);
		return true;
	}

}
