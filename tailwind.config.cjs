/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animations: {
				'slide-in': {
					from: {
						opacity: 0
					},
					to: {
						opacity: 1
					}
				},
				'open-modal': {
					from: {
						opacity: 0,
						transform: 'scale(0)'
					},
					to: {
						opacity: 1,
						transform: 'scale(1)'
					}
				},
				'slide-out': {
					from: {
						opacity: 1
					},
					to: {
						opacity: 0
					}
				},
				'close-modal': {
					from: {
						opacity: 1,
						transform: 'scale(1)'
					},
					to: {
						opacity: 0,
						transform: 'scale(0)'
					}
				}
			}
		}
	},
	plugins: []
};
