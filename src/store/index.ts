import { getAllCategories } from '@/services/categories.service';
import { getProfile } from '@/services/profile.service';
import {create} from 'zustand'
import { devtools } from 'zustand/middleware';

type UseProfile = {
    id: number;
    name: string;
    phone: ''
    acc: string;
    ref: string;
    loading: boolean;
    getProfile: () => Promise<void>;
}

export const useProfile = create<UseProfile>()(devtools(
    (set)=>({
        id: 0,
        name: '',
        phone: '',
        acc: '',
        ref: '',
        loading: true,

        getProfile: async () => {
            const profile = await getProfile()
            set({
                id: profile.user.id, 
                name: profile.user.name,
                phone: profile.user.phone,
                acc: profile.acc, 
                ref: profile.ref, 
                loading: false
            })
        },
    })
))


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

