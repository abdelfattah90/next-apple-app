'use client'
import { useTranslation } from 'react-i18next'
const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <section
        className='bg-cover bg-center h-screen'
        style={{
          backgroundImage: 'url("iphone15pro.jpg")',
        }}
      >
        <div className='h-24'></div>
        <div className='text-center text-white'>
          <p className='pb-4 text-5xl font-bold'>{t('homePage.w1')}</p>
          <p className='text-3xl text-gray-300'>{t('homePage.w2')}</p>
        </div>
      </section>
      <section
        className='bg-cover bg-center h-screen'
        style={{
          backgroundImage: 'url("hero_iphone15_announce.jpg")',
        }}
      >
        <div className='h-24'></div>
        <div className='text-center text-gray-800'>
          <p className='pb-4 text-5xl font-bold'> {t('homePage.w3')}</p>
          <p className='text-3xl text-sky-600'>{t('homePage.w4')}</p>
        </div>
      </section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2'>
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
      </div>
      <section
        className='bg-cover bg-center h-screen'
        style={{
          backgroundImage: 'url("iMac.jpg")',
        }}
      >
        <div className='h-24'></div>
        <div className='text-center text-black'>
          <p className='text-5xl pb-4 font-bold'>{t('homePage.w15')}</p>
          <p className='text-3xl text-gray-800'>{t('homePage.w16')}</p>
          <p className='text-2xl text-gray-500'>{t('homePage.w17')}</p>
        </div>
      </section>
    </>
  )
}

export default Home
