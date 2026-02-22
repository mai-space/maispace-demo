# GitHub Profile README — Setup

Add the following block to your `mai-space/mai-space` README.md at the location where you want the articles to appear.
The GitHub Action in this repo will automatically update the content between the markers.

```markdown
## Aktuelle Artikel

<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->

→ [Alle Artikel auf maispace.de](https://maispace.de/artikel)
```

## Required secret

In the `maispace-demo` repository settings, add a secret named **`GH_TOKEN`**:

1. Go to **github.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens**
2. Create a token with **read/write access to the `mai-space/mai-space` repository** (Contents permission)
3. Add it as a repository secret named `GH_TOKEN` in `mai-space/maispace-demo`

The action runs:
- Daily at 08:00 UTC (schedule)
- On every push to `content/articles/**` (new article = immediate update)
- Manually via workflow_dispatch
