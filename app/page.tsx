import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image
        src={'/wulv.png'}
        width={1000}
        height={1000}
        alt="Wulv Logo"
        className="max-w-[400px] rounded-full mb-8"
      />
      <h1 className="text-6xl text-center font-bold">Wulv.io</h1>
      <p className="text-xl text-center mt-4">Coming soon...</p>
    </div>
  )
}
