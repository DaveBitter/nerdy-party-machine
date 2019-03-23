/* eslint-disable */

/**
 * Animation module by Peeke Kuepers
 * https://gist.github.com/peeke/67cd617a206b36c0d0dff70681f53d8d
 */
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const animate = async function (options = { from: 0, to: 1, duration: 1000, cb: () => { }, ease: t => t }) {
    const { from, to, duration, cb, ease } = options;

    const delta = to - from;

    let time;

    if (options.delay) {
        await timeout(options.delay);
    }

    return new Promise(resolve => {

        const tick = d => {
            if (!time) {
                time = d;
            }

            const f = (d - time) / duration;

            if (f >= 1) {
                cb(to);
                resolve();

                return;
            }

            cb(from + (ease(f) * delta));

            window.requestAnimationFrame(tick);

        };

        window.requestAnimationFrame ? window.requestAnimationFrame(tick) : cb(to);
    });
};

export default animate;
