module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
               @import "src/core/styles/main.scss";
          `,
            },
        },
    },
};