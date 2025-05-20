import { Link } from "next-view-transitions";

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto w-full px-4 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[65%] xl:max-w-[50%]">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link
            href="mailto:aditya@234892.xyz"
            target="_blank"
            className="text-sm text-muted-foreground"
          >
            aditya@234892.xyz
          </Link>
          <div className="flex gap-4">
            <Link
              href="https://t.me/xaydv"
              target="_blank"
              className="text-sm text-muted-foreground hover:underline"
            >
              telegram
            </Link>
            <Link
              href="https://x.com/iaydv"
              target="_blank"
              className="text-sm text-muted-foreground hover:underline"
            >
              x
            </Link>
            <Link
              href="https://github.com/xydv"
              target="_blank"
              className="text-sm text-muted-foreground hover:underline"
            >
              github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
