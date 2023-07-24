import { getAllCategories } from '@/services/getCategories';
import {create} from 'zustand'
import { devtools } from 'zustand/middleware';

type UseCategories = {
    categories: any[];
    loading: boolean;
    getAllCategories: () => Promise<void>;
}

export const useCategories = create<UseCategories>()(devtools(
    (set)=>({
        categories: [],
        loading: true,
        getAllCategories: async () => {
            const categories = await getAllCategories()
            set({categories, loading: false})
        },
    })
))

