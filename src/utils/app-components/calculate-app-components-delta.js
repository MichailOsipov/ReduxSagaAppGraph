export const calculateAppComponentsDelta = (prevAppComponents, appComponents) =>
    appComponents.reduce((acc, curr, index) => {
        if (acc.areDifferent) {
            return {
                ...acc,
                delta: [...acc.delta, curr]
            };
        }
        if (curr !== prevAppComponents[index]) {
            return {
                areDifferent: true,
                delta: [curr]
            };
        }
        return acc;
    }, {areDifferent: false, delta: []}).delta;

