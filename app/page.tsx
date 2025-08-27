import Link from "next/link";

export default function Home() {
  return <>
    <nav className="flex flex-col gap-2 justify-center items-center pt-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Missing hydration error on fragment with dot notation</h1>
      <p className="text-sm ">
        Expected: When a client component tries to read a server-only env (e.g. <code>process.env.SECRET</code>), React should trigger a hydration mismatch and the value should be removed on the client.<br />
        Actual: In some render patterns, no hydration error appears and the secret stays visible even after navigation.
      </p>
      <div className="text-sm w-full">
        <p className="font-semibold mb-2">How to reproduce:</p>
        <ol className="space-y-3">
          <li className="relative rounded-xl border p-4 shadow-sm hover:shadow-md transition bg-background/50">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">1</span>
              <div>
                <p className="font-medium">Open a page that does not show a hydration error</p>
                <p className="opacity-80">For example: <Link className="underline" href="/fragment-direct">fragment-direct</Link> or <Link className="underline" href="/env-export">env-export</Link>.</p>
              </div>
            </div>
          </li>
          <li className="relative rounded-xl border p-4 shadow-sm hover:shadow-md transition bg-background/50">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">2</span>
              <div>
                <p className="font-medium">Refresh the page</p>
                <p className="opacity-80">Notice the secret remains visible and no hydration mismatch error appears.</p>
              </div>
            </div>
          </li>
          <li className="relative rounded-xl border p-4 shadow-sm hover:shadow-md transition bg-background/50">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">3</span>
              <div>
                <p className="font-medium">Navigate back to the homepage</p>
                <p className="opacity-80">The fragment with the env variable remains visible at the top of the page.</p>
              </div>
            </div>
          </li>
        </ol>
        <p className="text-md mt-10 font-semibold">
          Links:
        </p>
      </div>
      <ul className="list-disc space-y-2">
        <li><Link href="/fragment-direct">Access env variable directly with dot notation within fragment <sup className="text-sm text-red-500">Does not show hydration error</sup></Link></li>
        <li><Link href="/fragment-bracket">Access env variable with bracket notation within fragment <sup className="text-sm text-green-500">Shows hydration error</sup></Link></li>
        <li><Link href="/div-dot">Access env variable with dot notation within div <sup className="text-sm text-green-500">Shows hydration error</sup></Link></li>
        <li><Link href="/client-page">Access env variable with dot notation within client component page <sup className="text-sm text-red-500">Shows hydration error</sup></Link></li>
        <li><Link href="/env-export">Access imported env variable from lib/env <sup className="text-sm text-red-500">Does not show hydration error</sup></Link></li>
      </ul>
    </nav>
  </>;
}