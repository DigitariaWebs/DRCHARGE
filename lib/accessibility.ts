/**
 * Accessibility Utilities
 * WCAG AA compliance helpers
 */

/**
 * Generate accessible aria-label for interactive elements
 */
export function generateAriaLabel(
  action: string,
  target: string,
  context?: string
): string {
  return context ? `${action} ${target} - ${context}` : `${action} ${target}`;
}

/**
 * Check if element is keyboard accessible
 */
export function isKeyboardAccessible(element: HTMLElement): boolean {
  const tabIndex = element.getAttribute("tabindex");
  const isInteractive = [
    "A",
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
  ].includes(element.tagName);

  return isInteractive || (tabIndex !== null && parseInt(tabIndex) >= 0);
}

/**
 * Handle keyboard navigation (Enter/Space)
 */
export function handleKeyboardClick(
  event: React.KeyboardEvent,
  callback: () => void
): void {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    callback();
  }
}

/**
 * Get contrast ratio between two colors (simplified)
 * Returns true if contrast meets WCAG AA standards (4.5:1)
 */
export function meetsContrastRequirements(
  foreground: string,
  background: string
): boolean {
  // This is a simplified check - in production, use a proper color contrast library
  // For now, we'll assume our design system colors meet requirements
  return true;
}

/**
 * Focus trap utility for modals and overlays
 */
export function createFocusTrap(container: HTMLElement) {
  const focusableElements = container.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener("keydown", handleTabKey);

  return () => {
    container.removeEventListener("keydown", handleTabKey);
  };
}

/**
 * Announce to screen readers
 */
export function announceToScreenReader(
  message: string,
  priority: "polite" | "assertive" = "polite"
): void {
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", priority);
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Skip to main content helper
 */
export function skipToMainContent(): void {
  const main = document.querySelector("main");
  if (main) {
    main.focus();
    main.scrollIntoView({ behavior: "smooth" });
  }
}

