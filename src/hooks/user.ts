import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

import { useUserStore } from '@/store';

export default function useUser() {
  const router = useRouter();
  const userStore = useUserStore();
  const logout = async (logoutTo?: string) => {
    await userStore.logout();
    const currentRoute = router.currentRoute.value;
    ElMessage.success('登出成功');
    router.push({
      name: logoutTo && typeof logoutTo === 'string' ? logoutTo : 'login',
      query: {
        ...currentRoute.query,
        redirect: currentRoute.name as string,
      },
    });
  };
  return {
    logout,
  };
}
