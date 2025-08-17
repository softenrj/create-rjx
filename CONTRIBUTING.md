# 🤝 Contributing to create-rjx

Thank you for your interest in contributing to create-rjx! This document provides guidelines and information for contributors.

## 🌟 Code of Conduct

We are committed to providing a friendly, safe and welcoming environment for all. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Development Setup
```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/create-rjx.git
cd create-rjx

# 3. Install dependencies
npm install

# 4. Create a feature branch
git checkout -b feature/amazing-feature

# 5. Test your changes
npm link  # Makes create-rjx available globally for testing
create-rjx test-project
```

## 🎯 Types of Contributions

### 🐛 Bug Reports
Found a bug? Help us fix it!

**Before reporting:**
- Check existing [issues](https://github.com/softenrj/create-rjx/issues)
- Test with the latest version

**Bug report template:**
```markdown
**Bug Description:**
A clear description of the bug

**Steps to Reproduce:**
1. Run `create-rjx ...`
2. Select ...
3. See error

**Expected Behavior:**
What should happen

**Environment:**
- OS: [e.g., Windows 11]
- Node.js version: [e.g., 18.17.0]
- create-rjx version: [e.g., 1.0.2]

**Screenshots:**
If applicable, add screenshots
```

### 💡 Feature Requests
Have an idea? We'd love to hear it!

**Feature request template:**
```markdown
**Feature Description:**
A clear description of the feature

**Use Case:**
Why is this feature needed?

**Proposed Solution:**
How should this work?

**Alternatives:**
Other solutions you considered

**Additional Context:**
Any other relevant information
```

### 📝 Documentation
Help improve our docs!

**Areas for contribution:**
- README improvements
- Code comments
- Wiki pages
- Tutorial videos/blogs

### 🎨 UI/UX Improvements
- CLI animations and colors
- ASCII art and banners
- User experience flow
- Error messages and hints

## 🛠️ Development Guidelines

### Code Style
- Use **ES6+ features**
- Follow **camelCase** naming
- Add **JSDoc comments** for functions
- Use **async/await** over callbacks

### Commit Messages
Follow [Conventional Commits](https://conventionalcommits.org/):
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance

Examples:
```bash
git commit -m "feat: add TypeScript template support"
git commit -m "fix: resolve path issues on Windows"
git commit -m "docs: update installation instructions"
```

### Test Checklist
- [ ] CLI starts without errors
- [ ] All prompts work correctly
- [ ] Project generates successfully
- [ ] All files are created
- [ ] Scripts work as expected
- [ ] No console warnings

## 🔄 Pull Request Process

### Before Submitting
1. **Test thoroughly** using the checklist above
2. **Update documentation** if needed
3. **Add yourself** to contributors list
4. **Ensure clean commit history**

### PR Template
```markdown
## 📝 Description
Brief description of changes

## 🎯 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## ✅ Checklist
- [ ] I tested the changes locally
- [ ] I updated the documentation
- [ ] My code follows the style guidelines
- [ ] I added tests (if applicable)

## 📸 Screenshots (optional)
If UI changes, add screenshots
```

## 🏆 Recognition

### Contributors Wall
Thanks to all our amazing contributors!

<!-- Contributors will be added here automatically -->

### Hall of Fame
Special recognition for:
- **Bug Hunters** - Found critical issues
- **Feature Champions** - Implemented major features
- **Documentation Heroes** - Improved our docs
- **Community Helpers** - Helped other contributors

## 🆘 Getting Help

### Resources
- 📖 [Documentation](README.md)
- 🐛 [Issue Tracker](https://github.com/softenrj/create-rjx/issues)
- 💬 [Discussions](https://github.com/softenrj/create-rjx/discussions)

### Contact
- **Email**: rjsharmase@gmail.com

## 📋 Good First Issues

Looking to start contributing? Check out these beginner-friendly issues:

- [ ] Improve error messages
- [ ] Add more ASCII art options
- [ ] Enhance color schemes
- [ ] Add progress indicators
- [ ] Improve Windows compatibility

## 🎯 Roadmap

### Version 1.1 (Coming Soon)
- [ ] Custom templates support
- [ ] Configuration files
- [ ] Plugin system
- [ ] More language options

### Version 2.0 (Future)
- [ ] Web-based generator
- [ ] VS Code extension
- [ ] Docker integration
- [ ] Database templates

---

Thank you for making create-rjx better! 🚀
