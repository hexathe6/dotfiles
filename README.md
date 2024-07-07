# dotfiles

## userstyles

`haskell_hackage_docs.css`
- fullwidth layout
- larger table of contents sidebar
- adds support for browser dark mode (via css `prefers-color-scheme`)
- customisable widths and colors, at the top of the file in the `:root` selector

`youtube_quick_scale.ucss`
- not using theatre mode in a separate window, and don't want to zoom in/out?
  scale the video viewport to exactly the right width with this
- does not scale the progressbar due to issues of event alignment (see internal description)
- made for my friend Snowy!

## userscripts

`youtube_blacklist.js`
- blacklists channels / hides their videos
- edit the `list` variable to change the blacklist

## site-specific groups

### discord

> [!Warning]
> most of these require a browser supporting the `:has` selector

> [!Note]
> these are intended to be used together, are very opinionated, and some functionality may be misplaced

`color_channels_by_type.css` - hides channel type icons and colors the channels based on their respective types

`color_names_by_join_date.css` - removes new member flower in favour of greying out the name

`color_names_by_status.css` - extracts status from pfp decoration and sets a left-border with the appropriate colour

`custom_custom_theme.ucss` - truly custom theming (currently only supports 3-stop gradients)

`custom_theme_fixes.css` - makes the custom themeifier work without nitro

`fix_messages.css` - changes the compact mode message layout (several minor changes packed together)

`hide_nitro.css` - attempts to hide all references to nitro

`misc.css` - the junk heap. contains tens of tweaks, and was my original discord-focused userstyle

`profile_layout.css` - relayouts the profile popup (currently partially broken for the right-click menu profile popup)

`remove_pfps.css` - removes all profile pictures (pfps) (`misc.css` also does this to a lesser degree)

`title_fix.js` - relayouts the tab title

`allow_role_color_naming.js` - allows name coloration based on role colours (might not work without the "show role colours next to names" setting enabled)

`renamify.js` - renames and colors names based on those same names (requires a simple userstyle to be useful)

## license

GPLv3+: it doesn't matter for personal use though (and when are you going to use dots for anything else?), so don't worry about it
