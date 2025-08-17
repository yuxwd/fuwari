import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Fuwari",
	subtitle: "Demo Site",
	lang: "zh_CN", // 语言代码，例如 'en'（英语）、'zh_CN'（简体中文）、'ja'（日语）等。
	themeColor: {
		hue: 345, // 主题色的默认色调，取值范围为 0 到 360。例如：红色: 0，蓝绿色: 200，青色: 250，粉色: 345
		fixed: false, // 对访客隐藏主题色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
		position: "top", // 等同于 object-position，仅支持 'top'（顶部）、'center'（居中）、'bottom'（底部），默认为 'center'
		credit: {
			enable: false, // 显示横幅图片的署名文本
			text: "", // Credit text to be displayed
			url: "", // （可选）链接到原始作品或艺术家页面的 URL
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，取值范围为 1 到 3
	},
	favicon: [
		{
			src: "src/assets/images/demo-avatar.png",
			theme: "dark",
			sizes: "32x32",
		},

		// 将此数组留空以使用默认的网站图标
		// {
		//   src: '/favicon/icon.png',    // 网站图标的路径，相对于 /public 目录
		//   theme: 'light',              // （可选）值为 'light'（浅色）或 'dark'（深色），仅在为浅色和深色模式提供不同网站图标时设置
		//   sizes: '32x32',              // （可选）网站图标的尺寸，仅在提供不同尺寸的网站图标时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/yuxwd/fuwari", // 内部链接不应包含基础路径，因为它会自动添加
			external: true, // 显示外部链接图标，并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
	name: "电灯地球",
	bio: "睡觉大赛冠军得主 --电灯地球 --2025.6.21",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // 访问 https://icones.js.org/ 获取图标代码
			// 如果尚未包含对应的图标集，则需要安装
			// 运行 `pnpm add @iconify-json/<图标集名称>` 安装
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/yuxwd",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（如背景色）会被覆盖，请参考 astro.config.mjs 文件。
	// 请选择深色主题，因为当前博客主题仅支持深色背景
	theme: "github-dark",
};
