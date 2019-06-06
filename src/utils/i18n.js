import i18n from '@/lang'

export function generateTitle(title) {
  const hasKey = i18n.te('route.' + title)
  if (hasKey) {
    return i18n.t('route.' + title)
  }
  return title
}
