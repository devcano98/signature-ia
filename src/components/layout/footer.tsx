export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-8 md:flex-row">
        <p className="text-balance text-center text-xs leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            DevCano
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
