# Publishing to npm

This repo uses GitHub Actions to publish the package to npm with [provenance](https://docs.npmjs.com/generating-provenance-statements). The workflow runs on every GitHub Release (and can be triggered manually).

## One-time setup

### 1. Create an npm Automation token

1. Log in to [npmjs.com](https://www.npmjs.com/).
2. Click your avatar (top right) → **Access Tokens**.
3. Click **Generate New Token** → **Classic Token** → **Automation**.
   - Automation tokens bypass 2FA, which is required for CI publishing.
4. Copy the token value (starts with `npm_…`). You will not see it again.

### 2. Add `NPM_TOKEN` to GitHub repo Secrets

1. Open the repo on GitHub.
2. Go to **Settings → Secrets and variables → Actions**.
3. Click **New repository secret**.
4. Name: `NPM_TOKEN`
5. Value: paste the token from step 1.
6. Click **Add secret**.

## Publishing a new version

### Option A — Create a GitHub Release (recommended)

1. Bump the `version` field in `package.json` (follow [semver](https://semver.org/)).
2. Commit and push to `main`.
3. On GitHub, go to **Releases → Draft a new release**.
4. Create a new tag matching the version (e.g. `v1.0.1`).
5. Click **Publish release** — this triggers `publish.yml` automatically.

### Option B — Manual dispatch

1. Go to **Actions → Publish to npm**.
2. Click **Run workflow** → select branch → **Run workflow**.

## Verifying the publish

- Check the **Actions** tab for the workflow run.
- Once green, the package will be visible at:
  - https://www.npmjs.com/package/ibs-audio-catalog-mcp
- Provenance attestation will be visible on the npm package page (green checkmark).

## MCP Registry

After the first npm publish succeeds, submit the package to the [MCP Registry](https://github.com/modelcontextprotocol/registry). The `mcpName` field in `package.json` (`io.github.austhen-xcene/ibs-audio-catalog-mcp`) is the registry identifier.
