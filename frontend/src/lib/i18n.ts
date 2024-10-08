import { register, init, getLocaleFromNavigator, locale, waitLocale } from 'svelte-i18n';
import { getCookie, setCookie } from './cookie';
import { isLoading } from '$lib/stores/loadingStore';

register('en', () => import('./locales/en.json').then(module => module.default));
register('ja', () => import('./locales/ja.json').then(module => module.default));

const initialLocale = getCookie('lang') || getLocaleFromNavigator();

init({
	fallbackLocale: 'ja',
	initialLocale: initialLocale,
	loadingDelay: 200,
});

export async function initLocale(): Promise<void> {
	await waitLocale();
	isLoading.set(false);
}

export async function changeLocale(lang: string): Promise<void> {
	await locale.set(lang);
	setCookie('lang', lang, 365);
	isLoading.set(false);
}
