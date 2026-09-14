/**
 * First focusable element on the page.
 *
 * `data-native-anchor` opts this link out of smooth scrolling so the browser's
 * own jump-and-focus behaviour is preserved, which is what keyboard and screen
 * reader users expect from a skip link.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      data-native-anchor
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-full focus:bg-navy-700 focus:px-5 focus:py-2.5 focus:font-semibold focus:text-sm focus:text-white"
    >
      Skip to content
    </a>
  );
}
