import { useTranslation } from 'react-i18next'

const Section3 = () => {
  const { t } = useTranslation()
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2'>
      <div className='col-span-1'>
        <div
          className='bg-cover bg-center h-screen rounded-2xl'
          style={{
            backgroundImage: 'url("promo_apple_watch_series_9.jpg")',
          }}
        >
          <div className='text-center text-white p-5'>
            <p className='p-5 text-3xl font-bold'>{t('homePage.w5')}</p>
            <p className='text-1xl text-red-400'>{t('homePage.w6')}</p>
            <p className='text-2xl text-gray-300'>{t('homePage.w7')}</p>
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
            <p className='p-5 text-3xl font-bold'>{t('homePage.w8')}</p>
            <p className='text-2xl text-gray-500'>{t('homePage.w9')}</p>
          </div>
        </div>
      </div>

      <div className='col-span-1'>
        <div
          className='bg-cover bg-center h-screen rounded-2xl'
          style={{
            backgroundImage:
              'url("promo_macbook_air_15_midnight__3zojl1nanrme_small_2x.jpg")',
          }}
        >
          <div className='text-center p-5'>
            <p className='p-5 text-3xl font-bold'>{t('homePage.w10')}</p>

            <p className='text-2xl text-gray-500'>{t('homePage.w11')}</p>
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
            <h3 className='p-5 text-3xl font-bold'>{t('homePage.w12')}</h3>
            <p className='text-2xl'>
              <p className=' text-cyan-600 font-bold'>{t('homePage.w13')}</p>
              <p>{t('homePage.w14')}</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
