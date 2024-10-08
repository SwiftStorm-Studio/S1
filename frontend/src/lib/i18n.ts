import { register, init, getLocaleFromNavigator, locale, waitLocale } from 'svelte-i18n';
import { getCookie } from './cookie';

register('en', () => import('./locales/en.json').then(module => module.default));
register('ja', () => import('./locales/ja.json').then(module => module.default));

const initialLocale = getCookie('lang') || getLocaleFromNavigator();

init({
	fallbackLocale: 'ja',
	initialLocale: initialLocale,
	loadingDelay: 200,
});

export const loading = waitLocale();

export async function changeLocale(lang: string) {
	await locale.set(lang);
}