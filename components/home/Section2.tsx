import { useTranslation } from 'react-i18next'

const Section2 = () => {
  const { t } = useTranslation()
  return (
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
  )
}

export default Section2
