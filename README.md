## Github Pull Request Treeview Chrome Plugin

### To Use Locally

1. Clone this repo `git clone git@github.com:tstone/github-pr-treeview.git`
1. Navigate to [chrome://extensions/](chrome://extensions/)
1. Click 'Load unpacked extension...'
1. Choose the root folder of this repo

If making changes locally, "Update extensions now" will need to be clicked before Chrome sees the changes.

### Known Issues (feel free to fork and PR)

* Treeview causes unnecessary whitespace in header of file
* Plugin only loads if `/files` is the first page viewed or the PR is refreshed after going to the files tab

### TODO (feel free to fork and PR)

* All files should be hidden except the one selected in the treeview.
* When clicking a file in the treeview, the previous file should disappear and the clicked file should appear.
* Improve styling of treeview
* Move CSS changes into css file.  Use javascript to apply class instead of having CSS in the JS.
