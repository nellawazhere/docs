---
title: Font Awesome Icons
sidebar_position: 99
---

# Using Font Awesome Icons

This page demonstrates how to use Font Awesome icons in your Docusaurus site.

<FontAwesomeExample />

## Using Font Awesome in Markdown

You can also use Font Awesome icons directly in your Markdown content by importing the FontAwesomeIcon component:

```jsx

<FontAwesomeIcon icon="search" /> Search
<FontAwesomeIcon icon={['far', 'calendar']} /> Calendar
<FontAwesomeIcon icon={['fab', 'github']} /> GitHub
```

## Icon Types

Font Awesome provides different icon styles:

1. **Solid Icons** - Use `icon="name"` or `icon={['fas', 'name']}`
2. **Regular Icons** - Use `icon={['far', 'name']}`
3. **Brand Icons** - Use `icon={['fab', 'name']}`

## Icon Properties

You can customize icons with various properties:

- **Size**: `size="xs"`, `size="sm"`, `size="lg"`, `size="2x"`, etc.
- **Color**: `color="#ff0000"` or any CSS color
- **Animation**: `spin`, `pulse`, `flip-horizontal`, `flip-vertical`
- **Rotation**: `rotation={90}`, `rotation={180}`, `rotation={270}`

For more information, visit the [Font Awesome React documentation](https://fontawesome.com/v6/docs/web/use-with/react/).
