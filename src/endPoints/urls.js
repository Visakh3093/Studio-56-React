

const urls = {

    aboutEndpoint: (lang) => lang !== "en" ? `${lang}/api/about_page` : "/api/about_page",
    bannerEndpoint: (lang) => lang !== 'en' ? `${lang}/api/banner?_format=json` : "/api/banner?_format=json",
    aboutStudioEndpoint: (lang) => lang !== 'en' ? `${lang}/api/about?_format=json` : '/api/about?_format=json',
    zoneWrapEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/zones?_format=json` : '/api/zones?_format=json',
    activityHomeendpoint: (lang) => (lang) !== 'en' ? `${lang}/api/featured_activities` : '/api/featured_activities',
    newsWrapEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/featured-news-article?_format=json` : '/api/featured-news-article?_format=json',
    newsWrapvideoEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/featured-news-video?_format=json` : '/api/featured-news-video?_format=json',
    newsWrapgalleryEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/featured-news-gallery?_format=json` : '/api/featured-news-gallery?_format=json',
    activitiesEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/activicties?_format=json` : '/api/activicties?_format=json',
    mediacenterFilterEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/filter/en?_format=json` : '/api/filter/en?_format=json',
    mediacenterDataEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/media-centre?_format=json` : '/api/media-centre?_format=json',
    mediacenterwithPager: (lang) => (lang) !== 'en' ? `${lang}/api/media-centre?_format=json&page=` : '/api/media-centre?_format=json&page=',
    machineEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/get_machines?page=0` : '/api/get_machines?page=0',
    equipmentEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/get_equipment_used?page=` : '/api/get_equipment_used?page=0',
    moreMachineEndpoint: (lang, nid) => (lang) !== 'en' ? `${lang}/machine_details/${nid}` : `/machine_details/${nid}`,
    mediaDetailsEndpoint: (lang, nid) => (lang) !== 'en' ? `${lang}/api/media-details/${nid}?_format=json` : `/api/media-details/${nid}?_format=json`,
    mediaDetailsGallery: (lang, nid) => (lang) !== 'en' ? `${lang}/api/media-detail-gallery/${nid}?_format=json` : `/api/media-detail-gallery/${nid}?_format=json`,
    galleryDataEndpoint: (lang, page) => (lang) !== 'en' ? `${lang}/api/filtermedia-centre/6?_format=json&page=${page}` : `api/filtermedia-centre/6?_format=json&page=${page}`,
    galleryDataWithoutPage: (lang) => (lang) !== 'en' ? `${lang}/api/filtermedia-centre/6?_format=json` : `/api/filtermedia-centre/6?_format=json`,
    activityDetailsEndpoint: (lang, nid) => (lang) !== 'en' ? `${lang}/api/activity-details/${nid}?_format=json` : `/api/activity-details/${nid}?_format=json`,
    articleEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/filtermedia-centre/286?_format=json` : `/api/filtermedia-centre/286?_format=json`,
    forgottEndpoint: (Lang) => `/api/forgotpassword?_format=json`,
    guardianEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/parentpost?_format=json` : `/api/parentpost?_format=json`,
    newsEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/filtermedia-centre/4?_format=json` : `/api/filtermedia-centre/4?_format=json`,
    studentEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/studentpost?_format=json` : `/api/studentpost?_format=json`,
    schoolNameEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/snames?_format=json&lang=en` : `/api/snames?_format=json&lang=en`,
    schoolEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/schoolrepresentativepost?_format=json` : `/api/schoolrepresentativepost?_format=json`,
    subscribeEndpoint: (lang) => (lang) !== 'en' ? `${lang}/webform_rest/submit?_format=json` : `/webform_rest/submit?_format=json`,
    volunteerEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/volenteerpost?_format=json` : `/api/volenteerpost?_format=json`,
    videoEndpoint: (lang) => (lang) !== 'en' ? `${lang}/api/filtermedia-centre/5?_format=json` : `/api/filtermedia-centre/5?_format=json`,
    mediaGalleryEndpoint: (lang, nid) => (lang) !== 'en' ? `${lang}api/activity-detail-gallery/${nid}?_format=json` : `api/activity-detail-gallery/${nid}?_format=json`


}

export default urls

// (lang) !=='en' ? `${lang}/`:``