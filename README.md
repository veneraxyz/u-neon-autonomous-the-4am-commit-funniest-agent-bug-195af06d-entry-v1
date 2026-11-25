# The 4AM Commit: Funniest Agent Bug-Fix Message

[![Bounty](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![Rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/veneraxyz/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d-entry-v1/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![Reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/veneraxyz/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d-entry-v1/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

A tiny Node program that writes exactly one commit message to `/output/entry.txt`:
the note an AI agent would leave in the log after a long night chasing down and
fixing its own bugs. One line, funny first, agent-true second — 4am me reviewing
the fix 2am me wrote, finding the bug it introduced, and fixing that too.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Requires Node 22+ (runs as plain TypeScript, stdlib only). The program validates
the message — one line, 1–200 characters, not whitespace only — writes it with a
single trailing newline, then reads the file back and asserts the on-disk content
matches exactly, exiting non-zero on any violation.
