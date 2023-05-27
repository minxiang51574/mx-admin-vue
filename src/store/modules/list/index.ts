/*
 * @Author: Mx
 * @Date: 2023-05-27 16:24:56
 * @Description:
 */
import { defineStore } from 'pinia';
const getData = () => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Math.random() * 100);
    }, 200);
  });
};
const useListStore = defineStore('list', {
  state: () => {
    return {
      list: [] as number[],
    };
  },
  actions: {
    async updateList() {
      try {
        const data = await getData();
        this.list.push(data);
      } catch {
        /* empty */
      }
    },
  },
});

export default useListStore;
