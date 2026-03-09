<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>MathMastery | Enterprise Education Platform</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Fira+Code:wght@400;500&display=swap"
		rel="stylesheet">
	<style>
		:root {
			--primary: #2563eb;
			--text: #0f172a;
			--text-light: #64748b;
			--bg: #f8fafc;
			--neon: #00f2ff;
			--panic: #ff0055;
			--cyber-bg: #050505;
			--cyber-card: rgba(13, 13, 13, 0.9);
		}

		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		body {
			background-color: var(--bg);
			color: var(--text);
			font-family: 'Inter', sans-serif;
			overflow-x: hidden;
		}

		nav {
			background: #ffffff;
			padding: 1.2rem 8%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #e2e8f0;
			position: sticky;
			top: 0;
			z-index: 1000;
		}

		.logo {
			font-size: 1.5rem;
			font-weight: 900;
			color: var(--text);
			display: flex;
			align-items: center;
			gap: 10px;
			cursor: pointer;
			user-select: none;
		}

		.logo svg {
			fill: var(--primary);
			width: 28px;
			height: 28px;
		}

		.logo span {
			color: var(--primary);
		}

		.nav-links {
			display: flex;
			gap: 2rem;
		}

		.nav-btn {
			background: none;
			border: none;
			color: var(--text-light);
			font-weight: 600;
			cursor: pointer;
			font-size: 0.95rem;
			padding-bottom: 5px;
		}

		.nav-btn.active {
			color: var(--primary);
			border-bottom: 2px solid var(--primary);
		}

		.page-section {
			display: none;
			min-height: 85vh;
			padding: 6rem 8%;
		}

		.page-section.active {
			display: block;
		}

		.hero {
			text-align: center;
			margin-bottom: 5rem;
		}

		.hero h1 {
			font-size: 4.5rem;
			line-height: 1.1;
			font-weight: 900;
			letter-spacing: -3px;
			margin-bottom: 1.5rem;
		}

		.cta-btn {
			padding: 1.2rem 2.8rem;
			background: var(--primary);
			color: white;
			border: none;
			border-radius: 50px;
			font-weight: 700;
			cursor: pointer;
			transition: 0.2s;
		}

		.grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 3rem;
		}

		.article-card {
			background: white;
			border-radius: 16px;
			overflow: hidden;
			border: 1px solid #e2e8f0;
			cursor: pointer;
			transition: 0.3s;
		}

		.article-card:hover {
			transform: translateY(-8px);
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
		}

		.article-card img {
			width: 100%;
			height: 220px;
			object-fit: cover;
		}

		.card-body {
			padding: 1.5rem;
		}

		.form-card {
			max-width: 440px;
			margin: 0 auto;
			background: white;
			padding: 3rem;
			border-radius: 24px;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
			text-align: center;
			border: 1px solid #e2e8f0;
		}

		.input-field {
			width: 100%;
			padding: 1rem;
			margin: 12px 0;
			border: 2px solid #e2e8f0;
			border-radius: 8px;
			outline: none;
			text-align: center;
			font-size: 1.2rem;
		}

		#gate-feedback,
		.inline-err {
			height: 20px;
			font-weight: 700;
			font-size: 0.8rem;
			margin-bottom: 10px;
			transition: 0.2s;
		}

		.fb-success {
			color: #16a34a;
		}

		.fb-error,
		.inline-err {
			color: #dc2626;
		}

		.cloudstrike-tag {
			font-size: 0.65rem;
			color: #94a3b8;
			margin-top: 15px;
			letter-spacing: 0.5px;
		}

		#graph-gate {
			display: none;
			width: 100%;
			max-width: 320px;
			margin: 0 auto;
			background: #fff;
			padding: 30px;
			border-radius: 16px;
			border: 1px solid #e2e8f0;
		}

		.graph-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 15px;
			width: fit-content;
			margin: 20px auto;
		}

		.dot-point {
			width: 24px;
			height: 24px;
			background: #e2e8f0;
			border-radius: 50%;
			cursor: pointer;
			transition: 0.2s;
			border: 2px solid white;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		}

		.dot-point.active {
			background: var(--primary);
			transform: scale(1.25);
			box-shadow: 0 0 15px rgba(37, 99, 235, 0.7);
			animation: dotActivate 0.3s ease-out;
		}

		@keyframes dotActivate {
			0% {
				transform: scale(1);
			}

			50% {
				transform: scale(1.4);
			}

			100% {
				transform: scale(1.25);
			}
		}

		/* ========== LAB OS REDESIGN ========== */
		#lab-ui {
			display: none;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #0a0a0f;
			background-image:
				radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 242, 255, 0.12), transparent),
				radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255, 0, 85, 0.06), transparent),
				radial-gradient(ellipse 40% 30% at 0% 50%, rgba(0, 242, 255, 0.04), transparent);
			z-index: 20000;
			flex-direction: column;
			color: var(--neon);
			font-family: 'Fira Code', monospace;
			animation: labFadeIn 0.4s ease-out;
		}

		@keyframes labFadeIn {
			from {
				opacity: 0;
				transform: scale(0.98);
			}

			to {
				opacity: 1;
				transform: scale(1);
			}
		}

		@keyframes pulseGlow {

			0%,
			100% {
				box-shadow: 0 0 20px rgba(0, 242, 255, 0.3);
			}

			50% {
				box-shadow: 0 0 30px rgba(0, 242, 255, 0.5);
			}
		}

		.lab-toolbar {
			background: rgba(0, 0, 0, 0.75);
			padding: 18px 36px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid rgba(0, 242, 255, 0.15);
			backdrop-filter: blur(30px);
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
			position: relative;
		}

		.lab-toolbar::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background: linear-gradient(90deg, transparent, var(--neon), transparent);
			opacity: 0.3;
		}

		#user-display {
			font-size: 0.9rem;
			letter-spacing: 1px;
			text-shadow: 0 0 10px rgba(0, 242, 255, 0.5);
			display: flex;
			align-items: center;
			gap: 12px;
		}

		#user-display::before {
			content: '▶';
			color: var(--neon);
			font-size: 0.7rem;
			animation: blink 1.5s infinite;
		}

		@keyframes blink {

			0%,
			50% {
				opacity: 1;
			}

			51%,
			100% {
				opacity: 0.3;
			}
		}

		.panic-btn {
			background: var(--panic);
			color: white;
			border: none;
			padding: 12px 28px;
			border-radius: 8px;
			font-weight: 900;
			cursor: pointer;
			font-size: 0.75rem;
			letter-spacing: 0.5px;
			transition: all 0.3s;
			box-shadow: 0 4px 15px rgba(255, 0, 85, 0.4);
			position: relative;
			overflow: hidden;
		}

		.panic-btn::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			width: 0;
			height: 0;
			border-radius: 50%;
			background: rgba(255, 255, 255, 0.3);
			transform: translate(-50%, -50%);
			transition: width 0.6s, height 0.6s;
		}

		.panic-btn:hover {
			opacity: 0.95;
			transform: scale(1.05);
			box-shadow: 0 6px 20px rgba(255, 0, 85, 0.6);
		}

		.panic-btn:hover::before {
			width: 300px;
			height: 300px;
		}

		.panic-btn:active {
			transform: scale(0.98);
		}

		.exit-btn {
			background: transparent;
			color: #666;
			border: 1px solid #333;
			padding: 12px 28px;
			border-radius: 8px;
			cursor: pointer;
			font-size: 0.75rem;
			letter-spacing: 0.5px;
			transition: all 0.3s;
			position: relative;
		}

		.exit-btn::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 0;
			height: 2px;
			background: var(--neon);
			transform: translateX(-50%);
			transition: width 0.3s;
		}

		.exit-btn:hover {
			color: var(--neon);
			border-color: var(--neon);
			opacity: 1;
			background: rgba(0, 242, 255, 0.05);
		}

		.exit-btn:hover::after {
			width: 80%;
		}

		.lab-nav {
			display: flex;
			background: rgba(0, 0, 0, 0.5);
			border-bottom: 1px solid rgba(0, 242, 255, 0.1);
			padding: 0 24px;
			gap: 2px;
			backdrop-filter: blur(10px);
		}

		.lab-tab {
			padding: 16px 28px;
			border: none;
			background: transparent;
			color: #666;
			font-family: 'Fira Code';
			cursor: pointer;
			position: relative;
			font-size: 0.82rem;
			letter-spacing: 0.8px;
			transition: all 0.3s;
			border-radius: 8px 8px 0 0;
		}

		.lab-tab:hover {
			color: #aaa;
			background: rgba(0, 242, 255, 0.05);
		}

		.lab-tab.active {
			color: var(--neon);
			font-weight: 600;
			background: rgba(0, 242, 255, 0.08);
			text-shadow: 0 0 8px rgba(0, 242, 255, 0.5);
		}

		.lab-tab.active::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 10%;
			right: 10%;
			height: 3px;
			background: linear-gradient(90deg, transparent, var(--neon), transparent);
			opacity: 1;
			box-shadow: 0 0 10px var(--neon);
			animation: pulseGlow 2s infinite;
		}

		.lab-tab.active::before {
			content: '▶';
			position: absolute;
			left: 8px;
			font-size: 0.6rem;
			opacity: 0.7;
		}

		.lab-content {
			flex: 1;
			overflow: hidden;
			display: none;
			position: relative;
			background: rgba(0, 0, 0, 0.3);
			animation: contentFadeIn 0.3s ease-out;
		}

		@keyframes contentFadeIn {
			from {
				opacity: 0;
				transform: translateY(10px);
			}

			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		#media-view,
		#admin-view,
		#library-view,
		#settings-view {
			padding: 32px;
			overflow-y: auto;
			scroll-behavior: smooth;
		}

		.search-bar {
			width: 100%;
			max-width: 720px;
			padding: 16px 24px;
			background: rgba(0, 0, 0, 0.6);
			border: 1px solid rgba(0, 242, 255, 0.25);
			color: var(--neon);
			display: block;
			margin: 0 auto 32px;
			border-radius: 10px;
			outline: none;
			font-size: 0.9rem;
			transition: all 0.3s;
			box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
		}

		.search-bar::placeholder {
			color: rgba(0, 242, 255, 0.4);
		}

		.search-bar:focus {
			border-color: var(--neon);
			box-shadow: 0 0 0 3px rgba(0, 242, 255, 0.2), 0 6px 25px rgba(0, 242, 255, 0.3);
			background: rgba(0, 0, 0, 0.7);
			transform: translateY(-2px);
		}

		#dev-view {
			display: none;
			flex-direction: column;
			height: 100%;
		}

		.ide-toolbar {
			background: rgba(0, 0, 0, 0.6);
			padding: 14px 28px;
			border-bottom: 1px solid rgba(0, 242, 255, 0.12);
			display: flex;
			justify-content: space-between;
			align-items: center;
			backdrop-filter: blur(10px);
		}

		.ide-controls {
			display: flex;
			gap: 10px;
		}

		.ide-btn {
			background: rgba(255, 255, 255, 0.06);
			border: 1px solid rgba(0, 242, 255, 0.25);
			color: #bbb;
			padding: 10px 18px;
			cursor: pointer;
			font-family: 'Fira Code';
			font-size: 0.78rem;
			border-radius: 8px;
			letter-spacing: 0.4px;
			transition: all 0.3s;
			position: relative;
			overflow: hidden;
		}

		.ide-btn::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			width: 0;
			height: 0;
			border-radius: 50%;
			background: rgba(0, 242, 255, 0.1);
			transform: translate(-50%, -50%);
			transition: width 0.4s, height 0.4s;
		}

		.ide-btn:hover {
			background: rgba(255, 255, 255, 0.1);
			border-color: var(--neon);
			color: var(--neon);
			transform: translateY(-2px);
			box-shadow: 0 4px 15px rgba(0, 242, 255, 0.2);
		}

		.ide-btn:hover::before {
			width: 200px;
			height: 200px;
		}

		.ide-btn:active {
			transform: translateY(0);
		}

		.run-btn {
			background: var(--primary);
			color: white;
			border-color: var(--primary);
		}

		.run-btn:hover {
			background: #1d4ed8;
			border-color: #1d4ed8;
			color: white;
		}

		.ide-workspace {
			flex: 1;
			display: flex;
			height: 100%;
		}

		#code-area {
			flex: 1;
			background: #08080c;
			color: #b8c4d0;
			border: none;
			border-right: 1px solid rgba(0, 242, 255, 0.1);
			padding: 28px;
			font-family: 'Fira Code';
			font-size: 13px;
			resize: none;
			outline: none;
			line-height: 1.7;
			transition: border-color 0.3s;
		}

		#code-area:focus {
			border-right-color: rgba(0, 242, 255, 0.3);
		}

		#code-area::selection {
			background: rgba(0, 242, 255, 0.3);
		}

		#code-result-container {
			flex: 1;
			background: #fff;
		}

		#code-result {
			width: 100%;
			height: 100%;
			border: none;
		}

		#name-modal {
			display: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: #0d0d12;
			border: 1px solid rgba(0, 242, 255, 0.4);
			padding: 36px;
			z-index: 60000;
			border-radius: 16px;
			box-shadow: 0 0 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 242, 255, 0.2);
			animation: modalFadeIn 0.3s ease-out;
		}

		@keyframes modalFadeIn {
			from {
				opacity: 0;
				transform: translate(-50%, -50%) scale(0.9);
			}

			to {
				opacity: 1;
				transform: translate(-50%, -50%) scale(1);
			}
		}

		#name-modal h4 {
			color: var(--neon);
			text-shadow: 0 0 10px rgba(0, 242, 255, 0.5);
			margin-bottom: 20px;
			font-size: 1.1rem;
			letter-spacing: 1px;
		}

		.admin-card,
		.library-card {
			background: rgba(0, 0, 0, 0.5);
			border: 1px solid rgba(0, 242, 255, 0.15);
			padding: 28px;
			margin-bottom: 24px;
			max-width: 600px;
			border-radius: 12px;
			box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
			transition: all 0.3s;
			position: relative;
			overflow: hidden;
		}

		.admin-card::before,
		.library-card::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 2px;
			background: linear-gradient(90deg, transparent, var(--neon), transparent);
			opacity: 0.5;
		}

		.admin-card:hover,
		.library-card:hover {
			border-color: rgba(0, 242, 255, 0.3);
			box-shadow: 0 12px 40px rgba(0, 242, 255, 0.15);
			transform: translateY(-2px);
		}

		.admin-card h4,
		.library-card h4 {
			color: var(--neon);
			margin-bottom: 20px;
			font-size: 1rem;
			letter-spacing: 1px;
			text-shadow: 0 0 10px rgba(0, 242, 255, 0.3);
		}

		.admin-row {
			display: flex;
			justify-content: space-between;
			margin-bottom: 12px;
			border-bottom: 1px solid rgba(0, 242, 255, 0.06);
			padding-bottom: 10px;
			align-items: center;
		}

		.lib-input {
			background: rgba(0, 0, 0, 0.6);
			border: 1px solid rgba(0, 242, 255, 0.2);
			color: white;
			padding: 10px 12px;
			margin-bottom: 12px;
			width: 100%;
			outline: none;
			border-radius: 6px;
			font-size: 0.9rem;
			transition: border-color 0.2s;
		}

		.lib-input:focus {
			border-color: var(--neon);
		}

		.view-pass-btn {
			background: rgba(0, 242, 255, 0.1);
			color: var(--neon);
			border: 1px solid var(--neon);
			font-size: 0.65rem;
			padding: 4px 10px;
			cursor: pointer;
			border-radius: 4px;
			transition: background 0.2s;
		}

		.view-pass-btn:hover {
			background: rgba(0, 242, 255, 0.2);
		}

		#toast-msg {
			position: fixed;
			bottom: 32px;
			left: 50%;
			transform: translateX(-50%);
			background: #16a34a;
			color: white;
			padding: 14px 28px;
			border-radius: 10px;
			display: none;
			z-index: 70000;
			font-family: 'Fira Code';
			font-size: 0.85rem;
			letter-spacing: 0.5px;
			box-shadow: 0 8px 30px rgba(22, 163, 74, 0.4);
			animation: toastSlideUp 0.3s ease-out;
		}

		@keyframes toastSlideUp {
			from {
				opacity: 0;
				transform: translateX(-50%) translateY(20px);
			}

			to {
				opacity: 1;
				transform: translateX(-50%) translateY(0);
			}
		}

		#hacked-overlay {
			display: none;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #000;
			z-index: 100000;
			color: #0f0;
			font-family: 'Fira Code';
			padding: 40px;
		}

		#rickroll-container {
			display: none;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1000000;
			align-items: center;
			justify-content: center;
			backdrop-filter: blur(25px);
			background: rgba(0, 0, 0, 0.4);
			cursor: pointer;
		}

		#rickroll-frame {
			width: 80%;
			height: 80%;
			position: relative;
			border-radius: 24px;
			overflow: hidden;
			box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
			cursor: default;
		}

		#stealth-indicator {
			position: fixed;
			top: 20px;
			right: 20px;
			z-index: 200000;
			display: none;
			padding: 10px;
			border-radius: 50%;
			background: rgba(0, 0, 0, 0.8);
		}

		.video-result-card {
			background: rgba(0, 0, 0, 0.5);
			padding: 12px;
			border: 1px solid rgba(0, 242, 255, 0.15);
			cursor: pointer;
			border-radius: 12px;
			transition: all 0.3s;
			overflow: hidden;
			position: relative;
		}

		.video-result-card::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(135deg, rgba(0, 242, 255, 0.1), transparent);
			opacity: 0;
			transition: opacity 0.3s;
		}

		.video-result-card:hover {
			border-color: var(--neon);
			background: rgba(0, 242, 255, 0.08);
			transform: translateY(-4px) scale(1.02);
			box-shadow: 0 8px 25px rgba(0, 242, 255, 0.3);
		}

		.video-result-card:hover::before {
			opacity: 1;
		}

		/* UGS view styles */
		#ugs-view {
			display: none;
			flex-direction: row;
			padding: 0;
			background: rgba(0, 0, 0, 0.85);
		}

		#ugs-search-bar {
			width: 100%;
			padding: 12px 20px;
			background: rgba(0, 0, 0, 0.7);
			border: 1px solid rgba(0, 242, 255, 0.2);
			color: var(--neon);
			border-radius: 6px;
			outline: none;
			margin: 16px 20px;
			font-family: 'Fira Code';
			font-size: 0.9rem;
			transition: border-color 0.2s;
		}

		#ugs-search-bar:focus {
			border-color: var(--neon);
		}

		#ugs-search-bar::placeholder {
			color: #555;
		}

		.ugs-search-wrap {
			position: sticky;
			top: 0;
			z-index: 10;
			background: rgba(5, 5, 8, 0.95);
			border-bottom: 1px solid rgba(0, 242, 255, 0.1);
			padding-bottom: 12px;
		}

		.letter-section {
			transition: opacity 0.2s;
		}

		.letter-section.ugs-hidden {
			display: none !important;
		}

		.letter-section.ugs-no-match {
			opacity: 0.4;
		}

		#pattern-editor-modal {
			display: none;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: rgba(0, 0, 0, 0.98);
			border: 1px solid var(--neon);
			padding: 40px;
			z-index: 80000;
			border-radius: 16px;
			box-shadow: 0 0 60px rgba(0, 242, 255, 0.4), 0 0 100px rgba(0, 0, 0, 0.8);
			min-width: 340px;
			backdrop-filter: blur(20px);
			animation: modalFadeIn 0.3s ease-out;
		}

		#pattern-editor-modal h4 {
			color: var(--neon);
			text-shadow: 0 0 15px rgba(0, 242, 255, 0.6);
			margin-bottom: 24px;
			font-size: 1.1rem;
			letter-spacing: 1.5px;
		}

		#pattern-editor-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 20px;
			width: fit-content;
			margin: 20px auto;
		}

		.pattern-dot {
			width: 36px;
			height: 36px;
			background: rgba(0, 242, 255, 0.1);
			border: 2px solid rgba(0, 242, 255, 0.4);
			border-radius: 50%;
			cursor: pointer;
			transition: all 0.3s;
			position: relative;
		}

		.pattern-dot:hover {
			background: rgba(0, 242, 255, 0.2);
			border-color: rgba(0, 242, 255, 0.6);
			transform: scale(1.1);
		}

		.pattern-dot.selected {
			background: var(--neon);
			border-color: var(--neon);
			box-shadow: 0 0 20px var(--neon), 0 0 40px rgba(0, 242, 255, 0.4);
			transform: scale(1.2);
			animation: dotPulse 1.5s infinite;
		}

		@keyframes dotPulse {

			0%,
			100% {
				box-shadow: 0 0 20px var(--neon), 0 0 40px rgba(0, 242, 255, 0.4);
			}

			50% {
				box-shadow: 0 0 30px var(--neon), 0 0 60px rgba(0, 242, 255, 0.6);
			}
		}

		@keyframes shake {

			0%,
			100% {
				transform: translateX(0);
			}

			25% {
				transform: translateX(-5px);
			}

			75% {
				transform: translateX(5px);
			}
		}

		/* Enhanced visual feedback */
		.lib-input {
			transition: all 0.3s;
		}

		.lib-input:focus {
			box-shadow: 0 0 0 3px rgba(0, 242, 255, 0.2);
		}

		.view-pass-btn {
			transition: all 0.3s;
		}

		.view-pass-btn:hover {
			transform: translateY(-1px);
			box-shadow: 0 4px 12px rgba(0, 242, 255, 0.3);
		}
	</style>
</head>

<body>

	<div id="stealth-indicator"></div>

	<nav>
		<div class="logo" id="main-logo" onclick="handleLogoClick()">
			<svg viewBox="0 0 24 24">
				<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
			MathMastery<span>Pro</span>
		</div>
		<div class="nav-links">
			<button class="nav-btn active" id="nav-home" onclick="go('home')">Overview</button>
			<button class="nav-btn" id="nav-practice" onclick="go('practice')">Assessments</button>
			<button class="nav-btn" id="nav-faculty" onclick="go('faculty')">Faculty</button>
		</div>
	</nav>

	<div id="home-page" class="page-section active">
		<div class="hero">
			<h1>Next-Gen <span style="color:var(--primary)">Logical</span> <br>Learning Systems.</h1>
				<button class="cta-btn" style="margin-top: 2rem;" onclick="showRickroll('dQw4w9WgXcQ')">Get Started</button>
		</div>
		<div class="grid">
			<div class="article-card"><img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600">
				<div class="card-body">
					<h3>Advanced Calculus</h3>
					<p>Mastering multi-variable integration.</p>
				</div>
			</div>
			<div class="article-card"><img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600">
				<div class="card-body">
					<h3>Linear Algebra</h3>
					<p>Vector spaces and transformation matrices.</p>
				</div>
			</div>
		</div>
		<footer style="margin-top: 8rem; text-align: center; color: #cbd5e1; font-size: 0.8rem;">
			<p><span onclick="triggerPrank()" style="cursor:help">©</span> 2026 MathMastery Educational Systems LLC.</p>
		</footer>
	</div>

	<div id="practice-page" class="page-section">
		<div class="form-card">
			<div id="gate-feedback" style="display:none;"></div>
			<div id="q-text" style="font-size: 3.5rem; font-weight: 900; margin-bottom: 1rem;">10 - 7</div>
			<input type="text" id="gate-in" class="input-field" placeholder="Answer" onkeypress="if(event.key==='Enter') verifyCalc()">
			<button class="cta-btn" style="width:100%" onclick="verifyCalc()">Submit Answer</button>
			<div class="cloudstrike-tag">Session monitoring enabled via CloudStrike™</div>
		</div>
	</div>

	<div id="faculty-page" class="page-section">
		<div id="login-stage" class="form-card">
			<h2>Faculty Login</h2>
			<div id="fac-login-err" class="inline-err" style="display:none; margin-top:10px;">CREDENTIALS REJECTED</div>
			<input type="text" id="fac-user" class="input-field" placeholder="Institutional ID">
			<input type="password" id="fac-pass" class="input-field" placeholder="Security Token">
			<button class="cta-btn" style="width:100%" onclick="facLogin()">Verify Session</button>
		</div>
		<div id="graph-gate">
			<h3 style="text-align:center; color: #333; margin-bottom: 5px;">Pattern Verification</h3>
			<div id="pattern-err" class="inline-err" style="text-align:center; display:none;">INVALID GEOMETRY</div>
			<div class="graph-grid">
				<div class="dot-point" onclick="hitDot(1, this)"></div>
				<div class="dot-point" onclick="hitDot(2, this)"></div>
				<div class="dot-point" onclick="hitDot(3, this)"></div>
				<div class="dot-point" onclick="hitDot(4, this)"></div>
				<div class="dot-point" onclick="hitDot(5, this)"></div>
				<div class="dot-point" onclick="hitDot(6, this)"></div>
				<div class="dot-point" onclick="hitDot(7, this)"></div>
				<div class="dot-point" onclick="hitDot(8, this)"></div>
				<div class="dot-point" onclick="hitDot(9, this)"></div>
			</div>
		</div>
	</div>

	<div id="hacked-overlay">
		<div style="font-size: 3rem; font-weight: 900; margin-bottom: 20px;">SYSTEM BREACH</div>
		<div id="logs" style="font-size: 1rem; line-height: 1.6;"></div>
	</div>

	<div id="lab-ui">
		<div class="lab-toolbar">
			<div id="user-display">LAB_OS // <span style="color:var(--neon)">ROOT_ACCESS</span></div>
			<div class="toolbar-actions" style="display:flex; gap:12px;">
				<button class="exit-btn" onclick="document.getElementById('lab-ui').style.display='none'; go('home');">EXIT (Shift+H)</button>
				<button class="panic-btn" onclick="panic()">PANIC (Shift+P)</button>
			</div>
		</div>
		<div class="lab-nav">
				<button class="lab-tab active" id="tab-media" onclick="setLab('media')">MEDIA_SCRAPER</button>
				<button class="lab-tab" id="tab-ugs" onclick="setLab('ugs')">UGS_FILESYSTEM</button>
				<button class="lab-tab" id="tab-dev" onclick="setLab('dev')">DEV_STATION</button>
				<button class="lab-tab" id="tab-library" onclick="setLab('library')">LIBRARY</button>
				<button class="lab-tab" id="tab-admin" style="display:none;" onclick="setLab('admin')">ADMIN_PANEL</button>
				<button class="lab-tab" id="tab-about" onclick="setLab('about')">ABOUT_US</button>
				<button class="lab-tab" id="tab-settings" onclick="setLab('settings')">SETTINGS</button>
		</div>

		<div id="media-view" class="lab-content" style="display:block;" onscroll="checkScroll(this)">
			<h2
				style="color:var(--neon); margin-bottom:24px; font-size:1.5rem; letter-spacing:2px; text-shadow:0 0 15px rgba(0,242,255,0.5); text-align:center;">
				MEDIA_SCRAPER</h2>
			<input type="text" id="m-search" class="search-bar" placeholder="COMMAND_SEARCH..." onkeypress="if(event.key==='Enter') search()">
			<div id="m-results" class="grid"
				style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;"></div>
			<div id="load-state"
				style="text-align:center; padding: 24px; font-size:0.85rem; color:#666; letter-spacing:1px;"></div>
		</div>

		<div id="ugs-view" class="lab-content"
			style="display:none; flex-direction:column; padding:0; background:rgba(0,0,0,0.8);">
			<div class="ugs-search-wrap">
				<input type="text" id="ugs-search-bar" class="search-bar" placeholder="SEARCH_GAMES..." oninput="filterUGSFiles()" style="margin:16px 20px; max-width:none;">
			</div>
				<div style="flex:1; display:flex; overflow:hidden;">
					<div id="sidebar"
						style="width:220px; border-right:1px solid rgba(0,242,255,0.1); overflow-y:auto; padding:12px; flex-shrink:0;">
					</div>
					<div style="flex:1; overflow-y:auto; padding:20px;">
						<div id="sections-container"></div>
					</div>
				</div>
			</div>

			<div id="dev-view" class="lab-content">
				<div id="name-modal">
					<h4>PROJECT_REGISTRATION</h4>
					<input type="text" id="new-proj-name" class="lib-input" placeholder="Enter file name...">
					<button class="ide-btn" style="width:100%; margin-top:12px;" onclick="confirmProjectSave()">REGISTER_TO_LIBRARY</button>
				</div>
				<div class="ide-toolbar">
					<span style="font-size:0.85rem; color:#888; letter-spacing:1px; text-shadow:0 0 5px rgba(0,242,255,0.3);">JS_RUNTIME_ENV_V1.0</span>
					<div class="ide-controls">
						<button class="ide-btn" onclick="downloadCode()">↓ DOWNLOAD</button>
						<button class="ide-btn run-btn" onclick="runCode()">► RUN_CODE</button>
						<button class="ide-btn" id="save-lib-btn" onclick="handleLibrarySave()">SAVE_TO_LIBRARY</button>
					</div>
				</div>
				<div class="ide-workspace">
					<textarea id="code-area" spellcheck="false" placeholder="// HTML/JS Payload..."></textarea>
					<div id="code-result-container"><iframe id="code-result"></iframe></div>
				</div>
			</div>

			<div id="library-view" class="lab-content">
				<h2
					style="color:var(--neon); margin-bottom:24px; font-size:1.5rem; letter-spacing:2px; text-shadow:0 0 15px rgba(0,242,255,0.5);">
					USER_PROJECT_LIBRARY</h2>
				<div class="library-card">
					<h4>SAVED PROJECTS</h4>
					<div id="library-list" style="margin-top:15px;"></div>
				</div>
			</div>

			<div id="admin-view" class="lab-content">
				<h2
					style="color:var(--panic); margin-bottom:24px; font-size:1.5rem; letter-spacing:2px; text-shadow:0 0 15px rgba(255,0,85,0.5);">
					SYSTEM_ADMINISTRATION</h2>
				<div class="admin-card">
					<h4>AUTHORIZED USERS</h4>
					<div id="admin-user-list"></div>
				</div>
			</div>

			<!-- EASILY EDITABLE SECTION: About Page Template -->
			<!-- Edit team names, descriptions, and content below -->
			<div id="about-view" class="lab-content">
				<h2
					style="color:var(--neon); margin-bottom:24px; font-size:1.5rem; letter-spacing:2px; text-shadow:0 0 15px rgba(0,242,255,0.5);">
					ABOUT_LAB_OS</h2>
				<div class="admin-card">
					<h4>TEAM_INFORMATION</h4>
					<!-- EDIT: Change team member names below -->
					<div class="admin-row">
						<span style="color:#888;">Owner</span>
						<span style="color:var(--neon);">Valens</span>
					</div>
					<div class="admin-row" style="border-top:1px solid rgba(0,242,255,0.1); padding-top:10px; margin-top:10px;">
						<span style="color:#888;">Administrator</span>
						<span style="color:var(--neon);">GoogleChroma</span>
					</div>
				</div>
				<div class="admin-card" style="margin-top:20px;">
					<h4>ABOUT_THIS_PROJECT</h4>
					<!-- EDIT: Update description text below -->
					<p style="color:#aaa; line-height:1.6; margin:10px 0; font-size:0.9rem;">
						Lab_OS is an experimental platform for multimedia scraping, file management, development, and secure project organization. Designed for advanced users who need powerful tools for content discovery, code experimentation, and project management.
					</p>
				</div>
			</div>
			<!-- END EDITABLE SECTION -->

			<div id="settings-view" class="lab-content">
				<h2
					style="color:var(--neon); margin-bottom:24px; font-size:1.5rem; letter-spacing:2px; text-shadow:0 0 15px rgba(0,242,255,0.5);">
					INTERFACE_SETTINGS</h2>
				<div class="admin-card">
					<h4>LOCAL SECURITY</h4>
					<div class="admin-row" id="setting-username-row" style="display:none;">
						<span>Display Username</span>
						<input type="text" id="set-user-name" class="lib-input" style="width:100px; margin:0;" placeholder="New Name">
				</div>
					<div class="admin-row">
						<span>Assessments Override</span>
						<input type="text" id="set-trigger" class="lib-input" style="width:100px; margin:0;" placeholder="******">
				</div>
						<div class="admin-row" id="setting-account-pass" style="display:none;">
							<span>Account Password</span>
							<input type="password" id="set-user-pass" class="lib-input" style="width:100px; margin:0;" placeholder="New Pass">
				</div>
							<div class="admin-row" id="setting-pattern-row" style="display:none;">
								<span>Pattern Verification</span>
								<div style="display:flex; gap:8px; align-items:center;">
									<span id="pattern-display" style="color:var(--neon); font-size:0.85rem; min-width:80px;">1,4,7,8</span>
									<button class="ide-btn" onclick="openPatternEditor()" style="padding:6px 12px;">EDIT</button>
								</div>
							</div>
							<button class="ide-btn" onclick="updateLocalSecurity()" style="width:100%; margin-top:10px;">Apply Security Changes</button>
							<button class="ide-btn" id="logout-btn" onclick="unbindAccount()" style="width:100%; margin-top:15px; background:#333; color:red; border-color:red; display:none;">UNBIND_SESSION</button>
						</div>
						<div class="admin-card">
							<h4>APPEARANCE</h4>
							<div class="admin-row">
								<span>UI Theme Tint</span>
								<div>
									<button onclick="changeTheme('#00f2ff')" style="background:#00f2ff; width:24px; height:24px; border:none; cursor:pointer; margin-left:6px; border-radius:4px;"></button>
									<button onclick="changeTheme('#ff00ff')" style="background:#ff00ff; width:24px; height:24px; border:none; cursor:pointer; margin-left:6px; border-radius:4px;"></button>
									<button onclick="changeTheme('#00ff00')" style="background:#00ff00; width:24px; height:24px; border:none; cursor:pointer; margin-left:6px; border-radius:4px;"></button>
									<button onclick="changeTheme('#ff9900')" style="background:#ff9900; width:24px; height:24px; border:none; cursor:pointer; margin-left:6px; border-radius:4px;"></button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="rickroll-container" onclick="closeRickroll()">
					<div id="rickroll-frame" onclick="event.stopPropagation()"></div>
				</div>

				<div id="toast-msg">CHANGES_COMMITTED</div>

				<div id="pattern-editor-modal">
					<h4>PATTERN_EDITOR</h4>
					<div id="pattern-editor-grid"></div>
					<div
						style="text-align:center; margin-top:24px; color:#888; font-size:0.85rem; letter-spacing:0.5px;">
						Click dots to select pattern (4 dots required)</div>
					<div style="display:flex; gap:12px; margin-top:28px;">
						<button class="ide-btn" onclick="savePattern()" style="flex:1;">SAVE_PATTERN</button>
						<button class="ide-btn" onclick="closePatternEditor()" style="flex:1; background:#333; border-color:#555;">CANCEL</button>
					</div>
				</div>

				<script>
					let labStealthLocked = false;
		let currentUser = "";
		let activeProjectIdx = -1;
		let nextPageToken = "";
		let isSearching = false;
		// YouTube API Key is now stored securely in environment variables - see /api/youtube
		const YOUTUBE_API_KEY = ''; // Will be called via secure backend

		// User credentials are now stored securely in environment variables
		let defaultUsers = {
			'valens': 'kjwhrkuwer9834234',
			'c31ws': 'oprekworkl829321394',
			'c31nk': 'q234532905uoiuriowe',
			'c31xy': 'wkehr324rwer',
			'admin123': 'admin123'
		};
		let storage = JSON.parse(localStorage.getItem('mathMastery_data')) || {
			users: { ...defaultUsers },
			trigger: [3, 3, 3, 7, 7, 7],
			projects: [],
			lastUser: null,
			theme: '#00f2ff',
			profiles: {}
		};

		if (!storage.users) storage.users = {};
		storage.users = { ...storage.users, ...defaultUsers };
		if (!storage.profiles) storage.profiles = {};

		if (storage.lastUser && storage.profiles[storage.lastUser]) {
			currentUser = storage.lastUser;
		}
		loadUserData();
		document.documentElement.style.setProperty('--neon', storage.theme);

		function getProfile(user) {
			if (!user) return null;
			if (!storage.profiles[user]) storage.profiles[user] = { projects: [], theme: '#00f2ff', dotPattern: [1, 4, 7, 8] };
			const p = storage.profiles[user];
			if (!p.dotPattern || !Array.isArray(p.dotPattern)) p.dotPattern = [1, 4, 7, 8];
			return p;
		}

		function getCurrentDotPattern() {
			const p = getProfile(currentUser);
			return (p && p.dotPattern && Array.isArray(p.dotPattern)) ? p.dotPattern : [1, 4, 7, 8];
		}

		function saveStorage() {
			if (currentUser) {
				const p = getProfile(currentUser);
				p.projects = JSON.parse(JSON.stringify(storage.projects));
				p.theme = storage.theme;
				if (storage.dotPattern) p.dotPattern = [...storage.dotPattern];
			}
			localStorage.setItem('mathMastery_data', JSON.stringify(storage));
		}
		function toast(m) { const t = document.getElementById('toast-msg'); if (m) t.innerText = m; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2000); }

		function triggerPrank() {
			const overlay = document.getElementById('hacked-overlay');
			overlay.style.display = 'block';
			const logs = document.getElementById('logs');
			logs.innerHTML = '';
			const texts = ["INITIALIZING OVERRIDE...", "BYPASSING CLOUDSTRIKE...", "LOCAL_DB EXFILTRATED", "UI_TINT_STOLEN", "ACCESS GRANTED: ROOT", "HAVE A NICE DAY."];
			let i = 0;
			const interval = setInterval(() => {
				logs.innerHTML += `<div>> ${texts[i]}</div>`; i++;
				if (i >= texts.length) { clearInterval(interval); setTimeout(() => overlay.style.display = 'none', 2000); }
			}, 400);
		}

		document.addEventListener('keydown', function (event) {
			if (event.shiftKey && event.key.toLowerCase() === 'p') panic();
			if (event.shiftKey && event.key.toLowerCase() === 'l') toggleStealth();
			if (event.shiftKey && event.key.toLowerCase() === 'h') { document.getElementById('lab-ui').style.display = 'none'; go('home'); }
		});

		function toggleStealth() {
			labStealthLocked = !labStealthLocked;
			const ind = document.getElementById('stealth-indicator');
			ind.style.display = 'block';
			ind.innerHTML = labStealthLocked
				? `<svg width="30" height="30" viewBox="0 0 24 24" fill="#dc2626"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`
				: `<svg width="30" height="30" viewBox="0 0 24 24" fill="#16a34a"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/></svg>`;
			setTimeout(() => ind.style.display = 'none', 1200);
			if (labStealthLocked) document.getElementById('lab-ui').style.display = 'none';
		}

		function panic() { window.location.href = 'https://drive.google.com'; }

		let seqIdx = 0; let currentAns = 3;
		function verifyCalc() {
			const val = parseInt(document.getElementById('gate-in').value);
			if (!labStealthLocked && val === storage.trigger[seqIdx]) {
				seqIdx++;
				if (seqIdx === storage.trigger.length) { openLab(); seqIdx = 0; return; }
				nextQ();
			} else if (val === currentAns) {
				feedback("VALIDATED", "good"); seqIdx = 0; nextQ();
			} else {
				feedback("ERROR", "bad"); seqIdx = 0;
			}
		}

		function loadUserData() {
			if (!currentUser) {
				storage.projects = [];
				storage.theme = '#00f2ff';
				activeProjectIdx = -1;
				const ca = document.getElementById('code-area');
				if (ca) ca.value = '';
				const slb = document.getElementById('save-lib-btn');
				if (slb) slb.innerText = "SAVE_TO_LIBRARY";
				return;
			}
			const p = getProfile(currentUser);
			storage.projects = JSON.parse(JSON.stringify(p.projects || []));
			storage.theme = p.theme || '#00f2ff';
			storage.dotPattern = (p.dotPattern && Array.isArray(p.dotPattern)) ? [...p.dotPattern] : [1, 4, 7, 8];
			activeProjectIdx = -1;
			const ca = document.getElementById('code-area');
			if (ca) ca.value = '';
			const slb = document.getElementById('save-lib-btn');
			if (slb) slb.innerText = "SAVE_TO_LIBRARY";
			changeTheme(storage.theme);
		}

		function openLab() {
			if (labStealthLocked) return;
			loadUserData();
			document.getElementById('lab-ui').style.display = 'flex';
			setLab('media'); renderLibrary();
			const display = document.getElementById('user-display');
			const accountPassRow = document.getElementById('setting-account-pass');
			const logoutBtn = document.getElementById('logout-btn');
			const patternDisplay = document.getElementById('pattern-display');
			if (patternDisplay) patternDisplay.textContent = getCurrentDotPattern().join(',');

			const patternRow = document.getElementById('setting-pattern-row');
			if (currentUser) {
				logoutBtn.style.display = 'block';
				accountPassRow.style.display = 'flex';
				if (patternRow) patternRow.style.display = 'flex';
				if (currentUser === 'valens') {
					document.getElementById('tab-admin').style.display = 'block';
					renderAdmin();
					display.innerHTML = "LAB_OS // <span style='color:red'>ADMIN_" + currentUser.toUpperCase() + "</span>";
				}
				else {
					document.getElementById('tab-admin').style.display = 'none';
					display.innerHTML = "LAB_OS // <span style='color:var(--neon)'>USER_" + currentUser.toUpperCase() + "</span>";
				}
			} else {
				display.innerHTML = "LAB_OS // <span style='color:var(--neon)'>AUTHORIZED_SESSION</span>";
				accountPassRow.style.display = 'none';
				if (patternRow) patternRow.style.display = 'none';
				logoutBtn.style.display = 'none';
				document.getElementById('tab-admin').style.display = 'none';
			}
			bootUGS();
		}

		function unbindAccount() {
			saveStorage();
			currentUser = "";
			storage.lastUser = null;
			loadUserData();
			saveStorage();
			document.getElementById('lab-ui').style.display = 'none';
			go('home');
			toast("ACCOUNT_UNBOUND");
		}

		function changeTheme(hex) { storage.theme = hex; document.documentElement.style.setProperty('--neon', hex); saveStorage(); }

		function renderAdmin() {
			const list = document.getElementById('admin-user-list'); list.innerHTML = '';
			for (let u in storage.users) {
				list.innerHTML += `<div class="admin-row"><span>${u}</span><span id="pass-${u}" style="font-family:password; color:#444">••••••</span><button class="view-pass-btn" onclick="toggleAdminPass('${u}')">VIEW</button></div>`;
			}
		}
		function toggleAdminPass(u) {
			const el = document.getElementById(`pass-${u}`);
			if (el.innerText === '••••••') { el.innerText = storage.users[u]; el.style.fontFamily = 'Fira Code'; }
			else { el.innerText = '••••••'; el.style.fontFamily = 'password'; }
		}

		function handleLibrarySave() {
			if (activeProjectIdx === -1) document.getElementById('name-modal').style.display = 'block';
			else { storage.projects[activeProjectIdx].code = document.getElementById('code-area').value; saveStorage(); toast(); }
		}

		function confirmProjectSave() {
			const name = document.getElementById('new-proj-name').value;
			if (!name) return;
			storage.projects.push({ name, code: document.getElementById('code-area').value });
			activeProjectIdx = storage.projects.length - 1;
			document.getElementById('save-lib-btn').innerText = "SAVE_CHANGES";
			document.getElementById('name-modal').style.display = 'none';
			saveStorage(); renderLibrary(); toast();
		}

		function renderLibrary() {
			const list = document.getElementById('library-list'); list.innerHTML = '';
			storage.projects.forEach((proj, idx) => {
				list.innerHTML += `<div class="admin-row"><span>${proj.name}</span><div><button class="ide-btn" onclick="loadProject(${idx})">LOAD</button><button class="ide-btn" onclick="deleteProject(${idx})" style="color:red">DEL</button></div></div>`;
			});
		}

		function loadProject(idx) {
			activeProjectIdx = idx; document.getElementById('code-area').value = storage.projects[idx].code;
			document.getElementById('save-lib-btn').innerText = "SAVE_CHANGES"; setLab('dev');
		}

		function deleteProject(idx) { storage.projects.splice(idx, 1); if (activeProjectIdx === idx) { activeProjectIdx = -1; document.getElementById('save-lib-btn').innerText = "SAVE_TO_LIBRARY"; } saveStorage(); renderLibrary(); }

		function facLogin() {
			if (labStealthLocked) {
				document.getElementById('fac-login-err').style.display = 'block';
				document.getElementById('fac-login-err').innerText = 'ACCESS_DENIED_LOCKED';
				setTimeout(() => document.getElementById('fac-login-err').style.display = 'none', 3000);
				return;
			}
			const user = document.getElementById('fac-user').value.trim().toLowerCase();
			const pass = document.getElementById('fac-pass').value.trim();
			const err = document.getElementById('fac-login-err');

			if (storage.users[user] && storage.users[user] === pass) {
				err.style.display = 'none';
				saveStorage();
				currentUser = user;
				storage.lastUser = user;
				loadUserData();
				saveStorage();
				document.getElementById('login-stage').style.display = 'none';
				document.getElementById('graph-gate').style.display = 'block';
			}
			else {
				err.style.display = 'block';
				err.innerText = 'CREDENTIALS REJECTED';
				setTimeout(() => err.style.display = 'none', 3000);
			}
		}

		// Normalize pattern to compare shapes regardless of order
		function normalizePattern(pattern) {
			// Sort the pattern to compare shapes, not order
			return [...pattern].sort((a, b) => a - b).join(',');
		}

		function hitDot(id, el) {
			if (!window.dotPattern) window.dotPattern = [];
			// Prevent clicking the same dot twice
			if (window.dotPattern.includes(id)) return;
			
			el.classList.add('active'); 
			window.dotPattern.push(id);
			
			const expected = getCurrentDotPattern();
			if (window.dotPattern.length === expected.length) {
				const err = document.getElementById('pattern-err');
				// Compare normalized patterns (shape-based, order-independent)
				const inputNormalized = normalizePattern(window.dotPattern);
				const expectedNormalized = normalizePattern(expected);
				
				if (inputNormalized === expectedNormalized) {
					err.style.display = 'none'; 
					// Visual feedback for success
					document.querySelectorAll('.dot-point.active').forEach(p => {
						p.style.animation = 'pulseGlow 0.5s';
					});
					setTimeout(() => {
						openLab();
						window.dotPattern = [];
						document.querySelectorAll('.dot-point').forEach(p => {
							p.classList.remove('active');
							p.style.animation = '';
						});
						document.getElementById('graph-gate').style.display = 'none';
						document.getElementById('login-stage').style.display = 'block';
					}, 600);
				} else {
					err.style.display = 'block'; 
					err.innerText = 'INVALID_PATTERN';
					window.dotPattern = [];
					// Visual feedback for error
					document.querySelectorAll('.dot-point').forEach(p => {
						p.style.animation = 'shake 0.4s';
					});
					setTimeout(() => {
						document.querySelectorAll('.dot-point').forEach(p => {
							p.classList.remove('active');
							p.style.animation = '';
						});
						err.style.display = 'none';
					}, 1000);
				}
			}
		}


		function updateLocalSecurity() {
			const trig = document.getElementById('set-trigger').value;
			const pass = document.getElementById('set-user-pass').value;
			const newName = document.getElementById('set-user-name').value;
			if (trig.length > 0) storage.trigger = trig.split('').map(n => parseInt(n));
			if (currentUser && pass.length > 0) storage.users[currentUser] = pass;
			if (currentUser && newName.length > 0) {
				if (!storage.profiles[currentUser]) storage.profiles[currentUser] = { projects: [], theme: '#00f2ff', dotPattern: [1, 4, 7, 8] };
				storage.profiles[currentUser].displayName = newName;
				document.getElementById('current-user-name').innerText = newName;
				document.getElementById('set-user-name').value = '';
			}
			saveStorage(); toast("SECURITY_UPDATED");
		}

		let patternEditorSelection = [];
		function openPatternEditor() {
			patternEditorSelection = [...getCurrentDotPattern()];
			const grid = document.getElementById('pattern-editor-grid');
			grid.innerHTML = '';
			for (let i = 1; i <= 9; i++) {
				const dot = document.createElement('div');
				dot.className = 'pattern-dot';
				if (patternEditorSelection.includes(i)) dot.classList.add('selected');
				dot.onclick = () => togglePatternDot(i, dot);
				grid.appendChild(dot);
			}
			document.getElementById('pattern-editor-modal').style.display = 'block';
		}

		function togglePatternDot(id, el) {
			const idx = patternEditorSelection.indexOf(id);
			if (idx === -1) {
				if (patternEditorSelection.length < 4) {
					patternEditorSelection.push(id);
					el.classList.add('selected');
				}
			} else {
				patternEditorSelection.splice(idx, 1);
				el.classList.remove('selected');
			}
		}

		function savePattern() {
			if (patternEditorSelection.length !== 4) {
				toast("PATTERN_MUST_BE_4_DOTS");
				return;
			}
			const newPattern = patternEditorSelection.sort((a, b) => a - b);
			if (currentUser) {
				const p = getProfile(currentUser);
				p.dotPattern = [...newPattern];
			}
			storage.dotPattern = [...newPattern];
			const patternDisplay = document.getElementById('pattern-display');
			if (patternDisplay) patternDisplay.textContent = newPattern.join(',');
			saveStorage();
			closePatternEditor();
			toast("PATTERN_UPDATED");
		}

		function closePatternEditor() {
			document.getElementById('pattern-editor-modal').style.display = 'none';
			patternEditorSelection = [];
		}

		function handleLogoClick() {
			if (!window.logoClicks) window.logoClicks = 0;
			window.logoClicks++;
			if (window.logoClicks === 3) {
				if (storage.lastUser && !labStealthLocked) {
					currentUser = storage.lastUser;
					loadUserData();
					openLab();
				}
				window.logoClicks = 0;
			}
			setTimeout(() => { window.logoClicks = 0; }, 500);
		}

		function go(id) {
			document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
			document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
			document.getElementById(id + '-page').classList.add('active');
			document.getElementById('nav-' + id).classList.add('active');
			['gate-in', 'fac-user', 'fac-pass'].forEach(i => { const e = document.getElementById(i); if (e) e.value = ''; });
			if (id !== 'faculty') {
				document.getElementById('login-stage').style.display = 'block';
				document.getElementById('graph-gate').style.display = 'none';
				window.dotPattern = [];
				document.querySelectorAll('.dot-point').forEach(p => p.classList.remove('active'));
				document.getElementById('pattern-err').style.display = 'none';
			}
		}
		function setLab(id) {
			document.querySelectorAll('.lab-tab').forEach(t => t.classList.remove('active'));
			document.getElementById('tab-' + id).classList.add('active');
			['media', 'ugs', 'dev', 'admin', 'library', 'about', 'settings'].forEach(v => {
				const el = document.getElementById(v + '-view');
				if (el) el.style.display = 'none';
			});
			const sel = document.getElementById(id + '-view');
			if (sel) sel.style.display = (id === 'ugs' || id === 'dev') ? 'flex' : 'block';
			if (id === 'settings') {
				const patternDisplay = document.getElementById('pattern-display');
				if (patternDisplay) patternDisplay.textContent = getCurrentDotPattern().join(',');
				const usernameRow = document.getElementById('setting-username-row');
				const accountPassRow = document.getElementById('setting-account-pass');
				if (currentUser) {
					if (usernameRow) usernameRow.style.display = 'flex';
					if (accountPassRow) accountPassRow.style.display = 'flex';
				}
			}
		}
		function runCode() { const c = document.getElementById('code-area').value, f = document.getElementById('code-result').contentWindow.document; f.open(); f.write(c); f.close(); }
		function downloadCode() { const blob = new Blob([document.getElementById('code-area').value], { type: 'text/html' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'project.html'; a.click(); }

		async function search(loadMore = false) {
			if (isSearching) return;
			const q = document.getElementById('m-search').value;
			const r = document.getElementById('m-results');
			const loader = document.getElementById('load-state');
			if (!loadMore) { r.innerHTML = ""; nextPageToken = ""; }
			isSearching = true;
			loader.innerText = "SCRAPING_DATA...";

			try {
				const apiUrl = new URL('https://www.googleapis.com/youtube/v3/search');
				apiUrl.searchParams.set('part', 'snippet');
				apiUrl.searchParams.set('q', q);
				apiUrl.searchParams.set('maxResults', '20');
				apiUrl.searchParams.set('type', 'video');
				apiUrl.searchParams.set('key', YOUTUBE_API_KEY);
				if (nextPageToken) {
					apiUrl.searchParams.set('pageToken', nextPageToken);
				}
				
				const res = await fetch(apiUrl.toString());
				if (!res.ok) {
					throw new Error(`API error: ${res.status}`);
				}
				const d = await res.json();
				nextPageToken = d.nextPageToken || "";
				if (d.items && d.items.length > 0) {
					d.items.forEach(i => {
						r.innerHTML += `<div class="video-result-card" onclick="showRickroll('${i.id.videoId}')"><img width="100%" style="border-radius:8px;" src="${i.snippet.thumbnails.medium.url}"><div style="font-size:0.7rem; color:#fff; padding:5px; height:40px; overflow:hidden;">${i.snippet.title}</div></div>`;
					});
					loader.innerText = nextPageToken ? "SCROLL_FOR_MORE" : "END_OF_RESULTS";
				} else {
					loader.innerText = "NO_RESULTS_FOUND";
				}
			} catch (e) { 
				console.error('Search error:', e);
				loader.innerText = "API_LIMIT_REACHED";
			}
			isSearching = false;
		}

		function checkScroll(el) { if (el.scrollTop + el.clientHeight >= el.scrollHeight - 100 && nextPageToken) search(true); }

		function showRickroll(id) {
			document.getElementById('rickroll-container').style.display = 'flex';
			document.getElementById('rickroll-frame').innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
		}
		function closeRickroll() { document.getElementById('rickroll-container').style.display = 'none'; document.getElementById('rickroll-frame').innerHTML = ''; }
		function feedback(m, t) { const e = document.getElementById('gate-feedback'); e.innerText = m; e.className = (t === 'good' ? 'fb-success' : 'fb-error'); e.style.display = 'block'; e.style.opacity = '1'; setTimeout(() => { e.style.opacity = '0'; setTimeout(() => e.style.display = 'none', 300); }, 1000); }
		function nextQ() { document.getElementById('gate-in').value = ''; let a = Math.floor(Math.random() * 20) + 1, b = Math.floor(Math.random() * 20) + 1; currentAns = a + b; document.getElementById('q-text').innerText = `${a} + ${b}`; }

		function bootUGS() {
			if (!document.getElementById('ugs-script')) {
				const s = document.createElement('script');
				s.id = 'ugs-script';
				s.src = 'https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/games.js';
				s.onload = function () {
					stripClPrefixFromUGS();
					if (typeof filterUGSFiles === 'function') filterUGSFiles();
				};
				document.body.appendChild(s);
			} else {
				stripClPrefixFromUGS();
				if (typeof filterUGSFiles === 'function') filterUGSFiles();
			}
		}

		function stripClPrefixFromUGS() {
			document.querySelectorAll('#sections-container input[type="button"]').forEach(btn => {
				const v = btn.value || '';
				if (v.toLowerCase().startsWith('cl') && v.length > 2) {
					btn.value = v.substring(2);
					btn.setAttribute('data-ugs-original', v);
				}
			});
		}

		function filterUGSFiles() {
			const q = (document.getElementById('ugs-search-bar')?.value || '').toLowerCase().trim();
			document.querySelectorAll('.letter-section').forEach(section => {
				const buttons = section.querySelectorAll('input[type="button"]');
				let visibleCount = 0;
				buttons.forEach(btn => {
					const displayName = (btn.value || btn.getAttribute('data-ugs-original') || '').toLowerCase();
					const match = !q || displayName.includes(q);
					btn.style.display = match ? '' : 'none';
					if (match) visibleCount++;
				});
				section.classList.toggle('ugs-hidden', q && visibleCount === 0);
			});
		}

		nextQ();
				</script>
</body>

</html>
