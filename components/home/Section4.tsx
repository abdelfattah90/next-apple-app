import { useTranslation } from 'react-i18next'

const Section4 = () => {
  const { t } = useTranslation()
  return (
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
  )
}

export default Section4
