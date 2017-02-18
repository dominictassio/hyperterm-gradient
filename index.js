const purple = "#ff00bf";
const orange = "#ffbf00";

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        borderColor: 'black',
        css: `
            ${config.css || ''}
            .hyper_main {
                border-top-color: ${purple} !important;
                border-bottom-color: ${orange} !important;
            }
            .hyper_main:before,
            .hyper_main:after {
                content: "";
                position: absolute;
                background-image: linear-gradient(${purple}, ${orage});
                top: -1px;
                bottom: -1px;
                width: 1px;
            }
            .hyper_main:before {
                left: -1px;
            }
            .hyper_main:after {
                right: -1px;
            }
        `,
	});
};