# Publishing Guide for pratikpathak npm package

## Prerequisites
1. Make sure you have an npm account at https://www.npmjs.com/
2. Install Node.js and npm on your system

## Publishing Steps

### 1. Test the package locally
```bash
npm test
```

### 2. Create a package tarball (optional - for local testing)
```bash
npm pack
```

### 3. Test the package installation locally
```bash
npm install -g ./pratikpathak-1.0.0.tgz
pratikpathak
npm uninstall -g pratikpathak
```

### 4. Login to npm
```bash
npm login
```

### 5. Publish the package
```bash
npm publish
```

## After Publishing

Once published, users can install your package with:
```bash
npm install -g pratikpathak
```

And run it with:
```bash
pratikpathak
```

Or run it directly without installation:
```bash
npx pratikpathak
```

## Package Features

- ✅ Zero dependencies
- ✅ Cross-platform compatible
- ✅ Colorful output with ANSI colors
- ✅ Beautiful bordered display
- ✅ Runs on postinstall automatically
- ✅ Can be executed as a global command
- ✅ Can be run with npx

## Updating the Package

1. Update the version in `package.json`
2. Run `npm test` to ensure everything works
3. Run `npm publish` to publish the update

## Version Management

Follow semantic versioning (semver):
- MAJOR version when you make incompatible API changes
- MINOR version when you add functionality in a backwards compatible manner  
- PATCH version when you make backwards compatible bug fixes
