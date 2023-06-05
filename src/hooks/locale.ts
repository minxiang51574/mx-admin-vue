/*
 * @Author       : Mx
 * @Date         : 2023-06-05 16:19:17
 * @Description  :
 */
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';

export default function useLocale() {
  const i18 = useI18n();
  const currentLocale = computed(() => {
    return i18.locale.value;
  });
  const changeLocale = (value: string) => {
    i18.locale.value = value;
    localStorage.setItem('arco-locale', value);
    ElMessage.success(i18.t('navbar.action.locale'));
  };
  return {
    currentLocale,
    changeLocale,
  };
}
