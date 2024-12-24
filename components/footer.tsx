import Link from "next/link"
// import packageJSON from "next-auth/package.json"

export default function Footer() {
  return (
    <footer className="mx-0 my-4 flex w-full flex-col gap-4 px-4 text-sm sm:mx-auto sm:my-12 sm:h-5 sm:max-w-3xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="https://github.com/allan-lewis/no-geeks-brewing-nextjs">
          Source on GitHub
        </Link>
        <Link href="https://web.brewfather.app/">Brewfather</Link>
      </div>
      <div className="flex items-center justify-start gap-2">
        Hoboken, NJ.  Established 2018.
      </div>
    </footer>
  )
}