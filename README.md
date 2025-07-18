# TabClipper

<img src="assets/screenshot.png" title="TabClipper screenshot" alt="TabClipper screenshot" width="1280" />

Copy browser tabs to (or create them from) your clipboard.
TabClipper is a fork of Josh Dick's TabClip extension maintained by Sajid Ahamed.

Get the extension:

<a href="https://addons.mozilla.org/firefox/addon/tabclipper/">
        <img src="assets/firefox.png" title="Firefox logo" alt="Firefox logo" width="150" />
</a>
<a href="https://chrome.google.com/webstore/detail/tabclipper/kdmfphcdeckocjmkmkgffgehadjhmkmc">
        <img src="assets/chrome.png" title="Chrome logo" alt="Chrome logo" width="150" />
</a>

## About

TabClipper is a web browser extension for Mozilla Firefox and Google Chrome that allows you to copy browser tabs to (or create them from) your clipboard.

The "Copy" button, or keyboard shortcut CTRL+SHIFT+C by default, copies tab URLs to your clipboard.

The "Paste" button, or keyboard shortcut CTRL+SHIFT+V by default, attempts to find all URLs that appear in your clipboard, then opens each URL in a new browser tab.

That's it!

## Feedback

If you have suggestions or bug reports for TabClipper, I am much more likely to see your feedback if you leave it at [TabClipper's GitHub Issues page](https://github.com/crxssrazr93/tabclipper/issues) rather than on TabClipper's Firefox Add-Ons or Chrome Web Store pages.

I'd like to keep this extension as simple and minimal as possible, so most feature requests are not likely to be honored.

## Development

To build TabClipper for both Firefox and Chrome, install the latest versions of NodeJS and `npm`, then do the following:

```bash
git clone https://github.com/crxssrazr93/tabclipper.git
cd tabclipper
npm install
npx webpack
```

The build will create a `TabClipper.zip` extension archive in the `dist/` directory.

## Attribution

TabClipper is heavily inspired by Vincent Paré's ["Copy All Urls" Chrome extension](https://chrome.google.com/webstore/detail/copy-all-urls/djdmadneanknadilpjiknlnanaolmbfk). I created TabClipper because I wanted a similar extension that looked and worked the same in both Chrome and Firefox. TabClipper was written from scratch and shares no code with the "Copy All Urls" Chrome extension.

TabClipper's [icon](https://www.flaticon.com/free-icon/design-tab_68369) was made by [Freepik](https://www.flaticon.com/authors/freepik) from [flaticon.com](https://www.flaticon.com/).
