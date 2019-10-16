# Unlock issue

Unlock issue

This action is a wrapper for one of [octokit's](https://octokit.github.io/rest.js) methods.

Original docs can be found here: https://octokit.github.io/rest.js/#octokit-routes-issues-unlock

# Usage

```yaml
- uses: maxkomarychev/unlock-issue@v0.4.0
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    issue_number: 100
```
