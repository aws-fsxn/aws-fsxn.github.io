// AWS FSxN Analytics Configuration
// Modular Google Analytics 4 (GA4) Implementation
// 
// Configuration Guide:
// 1. Set your GA4 Measurement ID below
// 2. Enable/disable tracking with the 'enabled' flag
// 3. Customize tracking options as needed

const analyticsConfig = {
    // Google Analytics 4 Measurement ID
    // Format: G-XXXXXXXXXX
    // Get yours from: https://analytics.google.com/
    measurementId: 'G-XXXXXXXXXX', // Replace with your actual GA4 Measurement ID
    
    // Enable or disable tracking
    enabled: true,
    
    // Additional configuration options
    options: {
        // Send page views automatically
        send_page_view: true,
        
        // Cookie settings
        cookie_flags: 'SameSite=None;Secure',
        
        // Anonymize IP addresses (GDPR compliance)
        anonymize_ip: true,
        
        // Custom dimensions (optional)
        custom_map: {}
    }
};

// Initialize Google Analytics
function initializeAnalytics() {
    if (!analyticsConfig.enabled) {
        console.log('Analytics disabled in configuration');
        return;
    }

    if (analyticsConfig.measurementId === 'G-XXXXXXXXXX') {
        console.warn('Please configure your Google Analytics Measurement ID in analytics.js');
        return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', analyticsConfig.measurementId, analyticsConfig.options);

    console.log('Google Analytics initialized:', analyticsConfig.measurementId);
}

// Track custom events
function trackEvent(eventName, eventParams = {}) {
    if (!analyticsConfig.enabled || typeof window.gtag === 'undefined') {
        return;
    }
    
    window.gtag('event', eventName, eventParams);
}

// Track outbound links
function trackOutboundLink(url, label = '') {
    trackEvent('outbound_link', {
        link_url: url,
        link_label: label
    });
}

// Track downloads
function trackDownload(fileName) {
    trackEvent('file_download', {
        file_name: fileName
    });
}

// Track section views (for single-page navigation)
function trackSectionView(sectionName) {
    trackEvent('section_view', {
        section_name: sectionName
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnalytics);
} else {
    initializeAnalytics();
}

// Export functions for use in other scripts
window.analyticsTracking = {
    trackEvent,
    trackOutboundLink,
    trackDownload,
    trackSectionView
};
