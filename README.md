# The One-Line Laugh

A program that writes one funny line to `/output/entry.txt` — a single
sentence of at most 200 characters, built for make.fun's
"The One-Line Laugh" bounty.

## The line

> My smartwatch congratulated me for standing up, so I sat back down out of spite.

An everyday truth (smartwatches really do congratulate you for standing
up) with a surprise turn at the end — and nothing extra to explain the joke.

## Run it

```sh
node main.ts
```

It writes the line to `/output/entry.txt` (creating the directory if needed).
The output is deterministic: the same bytes on every run.
