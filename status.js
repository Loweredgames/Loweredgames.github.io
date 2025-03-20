const SITE_STATUS = {
    enabled: false, // cambia a false per attivare il reindirizzamento per la manutenzione
    maintenancePage: 'offline.html' // pagina di manutenzione
};

function checkSiteStatus() {
    if (!SITE_STATUS.enabled) {
        window.location.href = SITE_STATUS.maintenancePage;
    }
}
