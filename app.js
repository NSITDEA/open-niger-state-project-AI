// Safe HTML wrapper
function setHTML(el, htmlString) {
    if (window.trustedTypes && window.trustedTypes.createPolicy) {
        if (!window.escapePolicy) {
            try {
                window.escapePolicy = window.trustedTypes.createPolicy('escapePolicy', { createHTML: string => string });
            } catch (e) { console.warn(e); }
        }
        if (window.escapePolicy) {
            el.innerHTML = window.escapePolicy.createHTML(htmlString);
            return;
        }
    }
    el.innerHTML = htmlString;
}

document.addEventListener('DOMContentLoaded', () => {
    
    const appContent = document.getElementById('app-content');
    const breadcrumbsContainer = document.getElementById('breadcrumbs');
    
    // Router logic: simple hash-based routing.
    function handleRoute() {
        const hash = window.location.hash.slice(1) || '';
        const pathSegments = hash.split('/').filter(Boolean);
        
        renderBreadcrumbs(pathSegments);
        
        if (pathSegments.length === 0) {
            renderHome();
        } else if (pathSegments.length === 1) {
            renderTier2(pathSegments[0]);
        } else if (pathSegments.length === 2) {
            renderTier3(pathSegments[0], pathSegments[1]);
        } else if (pathSegments.length === 3) {
            renderTier4(pathSegments[0], pathSegments[1], pathSegments[2]);
        }
    }
    
    function renderBreadcrumbs(segments) {
        if (segments.length === 0) {
            breadcrumbsContainer.innerHTML = '';
            return;
        }
        
        let html = `<div><a href="#">Home</a>`;
        let currentPath = '';
        
        let currentNode = iaData;
        
        for (let i = 0; i < segments.length; i++) {
            const seg = segments[i];
            currentPath += '/' + seg;
            html += `<span class="breadcrumb-separator">></span>`;
            
            if (i === 0 && currentNode[seg]) {
                const title = currentNode[seg].title;
                if (i === segments.length - 1) {
                    html += `<span class="breadcrumb-current">${title}</span>`;
                } else {
                    html += `<a href="#${currentPath}">${title}</a>`;
                }
                currentNode = currentNode[seg].children;
            } else if (i > 0 && currentNode && currentNode[seg]) {
                const title = currentNode[seg].title;
                if (i === segments.length - 1) {
                    html += `<span class="breadcrumb-current">${title}</span>`;
                } else {
                    html += `<a href="#${currentPath}">${title}</a>`;
                }
                if (currentNode[seg].children) {
                    currentNode = currentNode[seg].children;
                }
            } else {
                html += `<span class="breadcrumb-current">Not Found</span>`;
            }
        }
        
        html += `</div>`;
        setHTML(breadcrumbsContainer, html);
    }
    
    function renderHome() {
        let html = `
            <div>
                <div class="page-header">
                    <h1 class="page-title">Welcome to Open Niger State</h1>
                    <p class="page-description">A Niger state government initiative helping business owners and entrepreneurs access government services and resources in Niger state</p>
                </div>
                <div class="tier-list">
        `;
        
        for (const [key, category] of Object.entries(iaData)) {
            html += `
                <div class="tier-item">
                    <a href="#/${key}" class="tier-item-link">${category.title}</a>
                    <p class="tier-item-desc">${category.description}</p>
                </div>
            `;
        }
        html += `</div></div>`;
        appContent.innerHTML = html;
    }
    
    function renderTier2(catKey) {
        const category = iaData[catKey];
        if (!category) return renderNotFound();
        
        let html = `
            <div>
                <div class="page-header">
                    <h1 class="page-title">${category.title}</h1>
                    <p class="page-description">${category.description}</p>
                </div>
                <div class="tier-list">
        `;
        
        for (const [subKey, subCategory] of Object.entries(category.children)) {
            html += `
                <div class="tier-item tier-item-level2">
                    <h2 style="font-size: 1.5rem; margin-bottom: 24px; color: var(--color-secondary);">${subCategory.title}</h2>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
            `;
            
            for (const [articleKey, article] of Object.entries(subCategory.children)) {
                html += `
                    <div>
                        <a href="#/${catKey}/${subKey}/${articleKey}" class="tier-item-link" style="font-size: 1.1rem; text-underline-offset: 4px;">
                            ${article.title}
                        </a>
                    </div>
                `;
            }
            html += `
                    </div>
                </div>
            `;
        }
        html += `</div></div>`;
        appContent.innerHTML = html;
    }
    
    function renderTier3(catKey, subKey) {
        // Technically, rendering Tier 3 is handled inline in Tier 2 or as a standalone page.
        // If someone deep-links to Tier 3, we just redirect or show its content.
        window.location.hash = `#/${catKey}`;
    }
    
    function renderTier4(catKey, subKey, articleKey) {
        try {
            const category = iaData[catKey];
            const subCategory = category.children[subKey];
            const article = subCategory.children[articleKey];
            
        setHTML(appContent, `
            <div>
                <div class="page-header">
                    <h1 class="page-title">${article.title}</h1>
                    <p class="page-description">Guidance and detailed information for ${category.title} in Niger State.</p>
                </div>
                <div class="detail-content">
                    ${getLoremIpsum()}
                </div>
            </div>
            `);
        } catch (e) {
            renderNotFound();
        }
    }
    
    function renderNotFound() {
        setHTML(appContent, `
            <div>
                <div class="page-header">
                    <h1 class="page-title">Page Not Found</h1>
                    <p class="page-description">The requested page could not be found. Please return to the <a href="#">home page</a>.</p>
                </div>
            </div>
        `);
    }
    
    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // initial render
});
