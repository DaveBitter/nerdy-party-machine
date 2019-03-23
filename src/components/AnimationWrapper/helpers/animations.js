const spacingBase = 8;

const spacings = {
    xxs: spacingBase / 2, // 4px
    xs: spacingBase, // 8px
    sml: spacingBase * 2, // 16px
    med: spacingBase * 3, // 24px
    lrg: spacingBase * 6, // 48px
    xl: spacingBase * 8, // 64px
    xxl: spacingBase * 12, // 96px
    xxxl: spacingBase * 16 // 128px
};

export default {
    // Fades
    'fade-up': {
        from: { opacity: 0, transform: `translateY(${spacings.med}px)` },
        to: { opacity: 1, transform: `translateY(0px)` }
    },
    'fade-down': {
        from: { opacity: 0, transform: `translateY(-${spacings.med}px)` },
        to: { opacity: 1, transform: `translateY(0px)` }
    },
    'fade-left': {
        from: { opacity: 0, transform: `translateX(${spacings.med}px)` },
        to: { opacity: 1, transform: `translateX(0px)` }
    },
    'fade-right': {
        from: { opacity: 0, transform: `translateX(-${spacings.med}px)` },
        to: { opacity: 1, transform: `translateX(0px)` }
    },
    // Enters
    'enter-up': {
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(0px)' }
    },
    'enter-down': {
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0px)' }
    },
    'enter-left': {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0px)' }
    },
    'enter-right': {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0px)' }
    },
    'enter-center': {
        from: { transform: 'scale(0.7)' },
        to: { transform: 'scale(1)' }
    }
};
