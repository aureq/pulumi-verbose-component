## A Simple (verbose) Component

This is a simple Pulumi Component Resource.

This component demonstrates how to publish a component resource in Pulumi IDP.

The component itself does nothing other than being verbose depending on the stack name.

## Publishing the component

```
echo "do some work..."
git commit -m "🎉 commit message"

echo "update `version` in `package.json`"
git add package.json
git commit -m "⏩ upgrade package version"

git tag v1.0.5
git push --tag
pulumi package publish github.com/aureq/pulumi-verbose-component@v1.0.5
