# benwiz.github.io

## Run locally

either

```bash
open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
```

or

```bash
http-server -c-1 .
```

## To Do

- multiple display options for types of posts (marg, ben, work, etc.)
- different color for countries that have a post vs those that do not
- song link in post
- D3 tutorial... maybe need to eventually switch over

- review the content of bubble object

- in getEntries() ~ I have verified that this is not yet done 7/29/17
  - preprocess all the json files into objects
  - then iterate through all entry objects and collect all bubbles. Overlapping bubbles by coordinate & bubble size OR by city/country/region should only have one bubble on the map. Each bubble on the map will be associated with a list of all entries relating to that bubble ~ or just the most recent bc that's all that really matters, but it may be useful later to keep all. While iterating, also create the blog entry, it probably needs to expose an anchor point.

## Brainstorm

- views (probably just general filter by tag?)
  - ben's travel blog
  - ben's coding blog
  - ben's portfolio
  - marg's blog
  - all travel locations

- entry writer
  - tool to make it easy to add a new entry

- mapping tools
  - https://carto.com/blog/odyssey-js-new-open-source-tool-to-weave-interactive !!!!!!!!!
  - ammap https://www.amcharts.com/javascript-maps/ ** small logo without paying $140
  - http://jvectormap.com/
  - http://kartograph.org/ * http://kartograph.org/showcase/italia/
  - http://polymaps.org/
  - https://onextrapixel.com/8-javascript-libraries-for-interactive-map-visualizations/
  - d3.js (http://mbostock.github.io/d3/talk/20111018/azimuthal.html)
  - google maps https://mapstyle.withgoogle.com/
