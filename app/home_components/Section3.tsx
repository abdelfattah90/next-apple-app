const Section3 = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2'>
        {/* First Row */}
        <div className='col-span-1'>
          <div
            className='bg-cover bg-center h-screen rounded-2xl'
            style={{
              backgroundImage: 'url("promo_apple_watch_series_9.jpg")',
            }}
          >
            <div className='text-center text-white p-5'>
              <h3 className='p-5 text-3xl  font-bold tracking-wider font-sans'>
                WATCH
              </h3>
              <h3 className='text-1xl text-red-400 '>SERIES 9</h3>
              <h3 className='text-2xl'>Smarter. Brighter. Mightier</h3>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div
            className='bg-cover bg-center h-screen rounded-2xl'
            style={{
              backgroundImage: 'url("promo_ipad__fioegapg12qi_small_2x.jpg")',
            }}
          >
            <div className='text-center p-5'>
              <h3 className='p-5 text-3xl  font-bold tracking-wider font-sans'>
                iPad
              </h3>

              <h3 className='text-2xl'>Loveable. Drawable. Magical.</h3>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div className='col-span-1'>
          <div
            className='bg-cover bg-center h-screen rounded-2xl'
            style={{
              backgroundImage:
                'url("promo_macbook_air_15_midnight__3zojl1nanrme_small_2x.jpg")',
            }}
          >
            <div className='text-center p-5'>
              <h3 className='p-5 text-3xl  font-bold tracking-wider font-sans'>
                MacBook Air 15”
              </h3>

              <h3 className='text-2xl'>Impressively big. Impossibly thin.</h3>
            </div>
          </div>
        </div>

        <div className='col-span-1'>
          <div
            className='bg-cover bg-center h-screen rounded-2xl'
            style={{
              backgroundImage:
                'url("promo_iphone_tradein__bugw15ka691e_small_2x.jpg")',
            }}
          >
            <div className='text-center p-5'>
              <h3 className='p-5 text-3xl  font-bold tracking-wider font-sans'>
                Trade In
              </h3>

              <h3 className='text-2xl'>
                <p>Get $200-$650 in credit</p>
                <p>when you trade in iPhone 11 or higher.</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3
