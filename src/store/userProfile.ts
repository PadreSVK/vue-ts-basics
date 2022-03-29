import { defineStore } from 'pinia'

interface MemeModel {
    postLink: string;
    subreddit: string;
    title: string;
    url: string;
    nsfw: boolean;
    spoiler: boolean;
    author: string;
    ups: number;
    preview: string[];
}

export interface UserProfile {
    photo: string
    name: string
}

interface UserProfileState {
    model?: UserProfile
}

const userProfileState: () => UserProfileState = () => ({ model: undefined})

export const useUserProfileStore = defineStore("userProfile", {
    state: userProfileState,
    actions: {
        async loadProfile() {
            const response = await fetch("https://meme-api.herokuapp.com/gimme")
            const result: MemeModel = await response.json()
            this.model = {
                name: result.author,
                photo: result.url
            }

        }
    }
})
