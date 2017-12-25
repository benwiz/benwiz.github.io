# benwiz.github.io

## Architecture

Currently I'm trying to keep this very, very simple and want to avoid brining in many tools.

### Main files

- **index.html** contains the main content (the map) and the dialog modal
- **index.js** performs all the functionality around the map and the dialog
- **index.css** contains all custom css
- **mobile.html** currently contains a disclaimer stating the the website will not work on mobile, in the future it will carry mobile optimized content (probably not a map)

### Asset files

- **assets/entries/\*.json** are the actual entries which contain the core content for the modals
- **assets/images/images/\*** are the image files that will be used by entries
- **assets/config.js** contains a list of names of entries, images, and countries visited

### Other files

- **CNAME** is necessary so that AWS Route 53 can create a CNAME, I think this is required by GitHub Pages
- **.gitignore** files to ignore for git
- **.editorconfig** tell the editor how to behave
- **README.md** this

## Ideas

- Size of bubble corresponds to amount of time spent
- Color of each country depends on number of days I have spent in that country

## To Do

- Make tooltip pretty
- Make bubbles pretty
- Make map pretty
- Make mobile friendly

- Later
  - Figure out a better html templating system than javascript with ES6 string templating
  - Script that generates an entry json template. Or maybe the json could be scratched in favor of markdown?
  - Make bubbles prettier
  - Make map prettier
  - Make background prettier
  - Add a title
  - Maybe get rid of Antarctica
  - Filter bubbles by tag (probably using fuzzy search and/or a multi select)
  - Make mobile disclaimer pretty
  - Draw connections to related cities

- Why do I not use ES6 when in the front end, I think it's pretty widely supported at this point.
