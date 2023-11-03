import { useTranslation } from 'react-i18next'
import Select, { ActionMeta, SingleValue } from 'react-select'

const LanguageToggle = () => {
  const { i18n } = useTranslation()

  interface CustomStyles {
    control: (styles: any, state: { isFocused: boolean }) => any
  }
  const customStyles: CustomStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      border: 'none',
      borderRadius: '10px',
      boxShadow: isFocused ? 'none' : styles.boxShadow,
    }),
  }

  const languageOptions = [
    { value: 'ar', label: 'AR' },
    { value: 'en', label: 'EN' },
  ]

  const currentLanguage = i18n.language

  const changeLanguage = (
    selectedOption: SingleValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value)
      localStorage.setItem('selectedLanguage', selectedOption.value)
    }
  }

  const selectedOption = languageOptions.find(
    (option) => option.value === currentLanguage
  )

  return (
    <Select
      options={languageOptions}
      value={selectedOption}
      onChange={changeLanguage}
      isSearchable={false}
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          primary25: '#D9D9D9',
          primary: '#313131',
        },
      })}
    />
  )
}

export default LanguageToggle
