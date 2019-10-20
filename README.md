# Unlock issue

This action is deprecated in favor of https://github.com/maxkomarychev/oction-unlock-issue

Unlock issue

This action is a wrapper for one of [octokit's](https://octokit.github.io/rest.js) methods.

Original docs can be found here: https://octokit.github.io/rest.js/#octokit-routes-issues-unlock

# Quick start

```yaml
- uses: maxkomarychev/unlock-issue@v0.5.2
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    issue_number: 100
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|A token to perform API calls
|issue_number|true|Issue number to unlock


