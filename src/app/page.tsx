import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-4 lg:p-12">
      <div className="z-10 flex flex-col items-center justify-between w-full max-w-5xl font-normal text-sm lg:flex-row">
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-24 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          By fbrz.sf, FreeAoi & MARCROCK22
        </div>
      </div>

      <Image
        className="relative border rounded-full dark:drop-shadow-[0_0_0.5rem_#ffffff70]"
        src="/logo.svg"
        alt="Luxanna Logo"
        width={280}
        height={280}
        priority
      />
      <Image
        className="relative dark:drop-shadow-[0_0_0.5rem_#ffffff70]"
        src="/luxanna.svg"
        alt="Luxanna"
        width={300}
        height={300}
        priority
      />

      <div className="relative flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 lg:text-center">
        <a
          href="https://discord.com/oauth2/authorize?client_id=949565943275720736&permissions=2147796992&scope=bot%20applications.commands"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Invite me{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Invite me to your server to get vital information to play
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_parent"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Dashboard{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            View, add or remove your League of Legends account in the bot
          </p>
        </a>
      </div>
    </main>
  );
}
