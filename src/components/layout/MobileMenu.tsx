'use client';

import { useLenis } from 'lenis/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { PRIMARY_NAV, ROUTES, SITE } from '@/lib/site';

/**
 * Full-screen navigation sheet for small screens.
 *
 * Built on the native `<dialog>` element opened with `showModal()`, which
 * provides the focus trap, Escape handling, inert background and focus return
 * for free. Lenis is paused while it is open so the page behind cannot scroll.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const menuId = useId();
  const titleId = useId();
  const lenis = useLenis();

  const openMenu = useCallback(() => {
    dialogRef.current?.showModal();
    lenis?.stop();
    setOpen(true);
  }, [lenis]);

  const closeMenu = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // The dialog's own `close` event is the single place the sheet is torn down,
  // so Escape, the close button and a link tap all restore scrolling. It is
  // wired natively because `close` does not bubble and React's onClose does not
  // fire for it here.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      lenis?.start();
      setOpen(false);
      triggerRef.current?.querySelector('button')?.focus();
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [lenis]);

  return (
    <>
      <span ref={triggerRef} className="lg:hidden">
        <Button
          onClick={openMenu}
          variant="ghost"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label="Open menu"
          className="px-3"
        >
          <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
        </Button>
      </span>

      <dialog
        ref={dialogRef}
        id={menuId}
        aria-labelledby={titleId}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ground p-0 text-ink backdrop:bg-navy-900/40 open:flex open:flex-col"
      >
        <div className="flex h-nav shrink-0 items-center justify-between px-5">
          <h2 id={titleId} className="font-display text-base">
            {SITE.name}
          </h2>
          <Button onClick={closeMenu} variant="ghost" aria-label="Close menu" className="px-3">
            <X size={20} strokeWidth={1.75} aria-hidden="true" />
          </Button>
        </div>

        <nav
          aria-label="Primary"
          data-lenis-prevent
          className="flex-1 overflow-y-auto border-line border-t px-5 py-6"
        >
          <ul className="space-y-1">
            {PRIMARY_NAV.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-14 items-center font-display text-display-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 border-line border-t px-5 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <Button href={ROUTES.schedule} block>
            Find a class
          </Button>
          <Button href={`tel:${SITE.phone.e164}`} variant="secondary" block>
            Call {SITE.phone.display}
          </Button>
          <Button href={ROUTES.login} variant="ghost" block>
            Student login
          </Button>
        </div>
      </dialog>
    </>
  );
}
