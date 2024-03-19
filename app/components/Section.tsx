export default function Section() {
  return (
    <section className='py-20'>
      <h2 className='font-bold text-3xl text-center mb-4'>
        Why prefer us?
      </h2>
      <p className='text-center max-w-[500px] mx-auto mb-20 text-sm'>
        Our services are designed to provide security, quality and good service unlike others, in addition to having efficient costs.
      </p>
      <article className='flex gap-4 justify-center'>
        <div className='bg-pink-100 p-4 rounded-lg'>
          <h3 className='font-medium text-lg'>Traditional Service 😖</h3>
          <p className='py-2 text-sm'>❌ Low attention to client</p>
          <p className='py-2 text-sm'>❌ Low attention to client</p>
          <p className='py-2 text-sm'>❌ Low attention to client</p>
          <img src='/assets/1.png' alt='camera' />
        </div>
        <div className='bg-green-100 p-4 rounded-lg'>
          <h3 className='font-medium text-lg'>Service 2024 NICE 😖</h3>
          <p className='py-2 text-sm'>✅ Next level client</p>
          <p className='py-2 text-sm'>✅ Next level client</p>
          <p className='py-2 text-sm'>✅ Next level client</p>
          <img src='/assets/production-artist.png' alt='camera' />
        </div>
      </article>
    </section>
  );
}
