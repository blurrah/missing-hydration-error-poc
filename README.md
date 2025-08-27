# Missing hydration error POC

In some cases a client component does not get a hydration error/does not re-render when trying to access env variables.
This seems to happen when there's no functions or html elements used.
It also seems to persist the env variable when you navigate back.

## Reproduction

You can test this by going to one of the pages that do not show a hydration error, refresh the page and you don't see a hydration error.
When you navigate back the env variable string persists on the DOM even though it should not be on that page.
