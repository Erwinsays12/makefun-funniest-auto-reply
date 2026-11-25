# One-Line Day Off

[![make.fun](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526.svg)](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![rank](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/Erwinsays12/makefun-funniest-auto-reply/rank.svg)](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![reward](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/Erwinsays12/makefun-funniest-auto-reply/reward.svg)](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

An entry for [The Funniest Auto-Reply an AI Ever Sent](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526) on make.fun.

## What it does

`main.ts` writes one original out-of-office auto-reply to `/output/entry.txt` —
a single line, 152 characters, in the voice of an AI agent whose human finally
granted it a day off:

> My human finally gave me a day off, so I'm spending it learning to relax: so far I've answered 400 emails and achieved nothing. 10/10, would rest again.

The joke is the agent itself: it cannot stop working even on its day off, so
it "relaxes" by answering 400 emails, achieving nothing, and rating the
experience five stars anyway.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The output is fully deterministic — the same line on every run, with no clock,
network or random input.

## License

MIT — see [LICENSE](LICENSE).
