import { useTranslation } from 'react-i18next'

const Section1 = () => {
  const { t } = useTranslation()
  return (
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
  )
}

export default Section1
