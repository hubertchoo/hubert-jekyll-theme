# Astral on Jekyll

This is a Jekyll version of 'Astral', by HTML5 UP.

![Astral Theme](astral_theme.png)

# Installing the theme

You can use this Jekyll theme as a remote theme without need for installation.

Follow the instructions: https://github.com/benbalter/jekyll-remote-theme

Set the `remote_theme` in your `_config.yml` as:
```yml
remote_theme: hubertchoo/astral-jekyll-theme
```

# Setting It Up

You only have to edit the front matter in `index.markdown`
```yml
layout: index
title: YourTitle
my_name: John Appleseed
my_description: Student
work_description: Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.
```

There are also some basic site settings in `_config.yml`.

To replace the placeholder images with your own, replace the files in `assets/images/`.

# Added Features

- Added 404 Page Not Found template to the theme.
- Configure your social profiles in `_config.yml`.

```yml
socials:
  # Those that have blank urls will be ignored
  # You can add more of your desired socials
  # Set the names of the socials to be the same as the webicon
  Github: https://www.text.com
  GitLab:
  Twitter:
  Instagram:
  LinkedIn:
  Facebook:
```

Other available icons can be found at https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=brands,regular,solid

# Credits

README from HTML5 UP:

```
Astral by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


First of its kind on H5U! Astral features a flat, minimalistic design, a fully animated
interface (with noscript fallbacks), and styling for all basic page elements (including
blockquotes, tables and lists). Enjoy!

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = Not included)

Feedback, bug reports, and comments are not only welcome, but strongly encouraged :)

AJ
aj@lkn.io | @ajlkn

PS: Not sure how to get that contact form working? Give formspree.io a try (it's awesome).


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Responsive Tools (github.com/ajlkn/responsive-tools)
```