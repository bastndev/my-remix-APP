export default function Hero() {
  return (
    <section className="flex">
      <div>
        <p className="uppercase text-xs underline decoration-blue-500 
        tracking-wider mb-2">
          Professional Record</p>
        <h1 className="font-bold text-3xl mb-4">We need record your podcast, you focus in,
          <span className="text-orange-500">Creative</span>
        </h1>
        <p className="text-gray-500 font-medium text-sm">
          More of 1000 client satisfied with our service, we have the best
        </p>
        <div>
          <img src="assets/people1.webp" alt="people" />
          <span className="flex">⭐⭐⭐⭐⭐ <span className="font-semibold"> 5.0</span></span>
          <span className="text-gray-500">+100 Reviews</span>
        </div>
        <Button>CALL USER NOW </Button>
        <img src="assets/payment.webp" alt="payment" />
      </div>
      <video className="aspect-video max-w-[400px] rounded-full" muted loop autoPlay src="assets/video.mp4"></video>
    </section>
  );
}

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="py-2 px-4 bg-orange-500 text-white rounded-full font-semibold my-3 hover:bg-blue-600 transition-all duration-300 ease-in-out active:scale-95"
  >{children}</button>
}