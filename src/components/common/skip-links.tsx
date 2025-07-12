export function SkipLinks() {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <div className="fixed top-4 left-4 z-[100]">
        <a
          href="#main"
          className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>
      </div>
    </div>
  )
}