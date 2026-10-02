# benwiz.github.io

## What

My personal website.

## Development

```sh
npx http-server
```

Push to master branch to publish.

## To Do

- dark mode

## Managed public pages

The Magic draft guide at `/mtg/` is maintained in
[ben-tools](https://github.com/benwiz/ben-tools), under
`apps/benwiz-site/public/mtg/index.html`. Its publishing copy here is synced with
`python3 scripts/websites.py sync` from ben-tools. Make guide changes there first;
see `apps/README.md` there for the publishing workflow. Other existing site pages
remain maintained in this repository.
