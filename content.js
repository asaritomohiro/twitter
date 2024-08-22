const hideElements = () => {
    const labelsToHide = ["Grok", "プレミアム", "認証済み組織", "プレミアムにサブスクライブ"];
    const hrefToHide = [
        "https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb",
        "/jobs",
        "/settings/monetization"
    ];

    labelsToHide.forEach(label => {
        const elements = document.querySelectorAll(`[aria-label="${label}"]`);
        elements.forEach(el => {
            el.style.display = 'none';
        });
    });

    hrefToHide.forEach(href => {
        const hrefElements = document.querySelectorAll(`a[href="${href}"]`);
        hrefElements.forEach(el => {
            if (el.classList.contains('css-175oi2r')) {
                el.style.display = 'none';
            }
        });
    });

    const verifiedFollowersElements = document.querySelectorAll('a[href*="verified_followers"]');
    verifiedFollowersElements.forEach(el => {
        el.href = el.href.replace(/verified_followers/g, 'followers');
    });

    verifiedFollowersElements.forEach(el => {
        const parent = el.closest('[role="presentation"]');
        if (parent) {
            parent.style.display = 'none';
        }
    });
};

const redirectIfVerifiedFollowers = () => {
    if (window.location.href.includes('verified_followers')) {
        const newUrl = window.location.href.replace(/verified_followers/g, 'followers');
        window.location.href = newUrl;
    }
};

window.addEventListener('load', () => {
    hideElements();
    redirectIfVerifiedFollowers();
});

setInterval(hideElements, 1000);
