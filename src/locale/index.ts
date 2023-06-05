/*
 * @Author       : Mx
 * @Date         : 2023-06-05 16:28:10
 * @Description  : 多语言配置
 */
import { createI18n } from 'vue-i18n';
import en from './en';
import cn from './zh';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh' },
  { label: 'English', value: 'en' },
];

const defaultLocale = localStorage.getItem('arco-locale') || 'zh';

const i18n = createI18n({
  locale: defaultLocale, // 默认显示的语言
  fallbackLocale: 'zh', // 预设语言环境
  allowComposition: true,
  messages: {
    en: en,
    zh: cn,
  },
});
export default i18n;
