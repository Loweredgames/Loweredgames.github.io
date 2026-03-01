(function(){
    const NS = 'lightbox';

    function createLightbox(){
        const overlay = document.createElement('div');
        overlay.className = 'lb-overlay';
        overlay.innerHTML = `
            <div class="lb-wrap">
                <div class="lb-close-area" data-lb-close></div>
                <img class="lb-img" alt="" src="">
                <div class="lb-controls">
                    <button class="lb-btn" data-lb-zoom="in">＋</button>
                    <button class="lb-btn" data-lb-zoom="out">－</button>
                    <button class="lb-btn" data-lb-close>✕</button>
                </div>
                <div class="lb-caption" data-lb-caption></div>
            </div>
        `;

        document.body.appendChild(overlay);
        return overlay;
    }

    function clamp(v, a, b){ return Math.min(b, Math.max(a, v)); }

    let overlay = null;
    let imgEl = null;
    let captionEl = null;
    let scale = 1;

    function open(src, alt){
        if (!overlay) overlay = createLightbox();
        overlay.classList.add('open');
        if (!imgEl) imgEl = overlay.querySelector('.lb-img');
        if (!captionEl) captionEl = overlay.querySelector('[data-lb-caption]');
        scale = 1;
        imgEl.style.transform = 'scale(1)';
        imgEl.src = src;
        imgEl.alt = alt || '';
        // Mostra solo la descrizione (`alt`). Se non c'è, nascondi completamente la caption.
        if (alt && String(alt).trim()){
            captionEl.textContent = String(alt).trim();
            captionEl.style.display = '';
        } else {
            captionEl.textContent = '';
            captionEl.style.display = 'none';
        }
        document.body.style.overflow = 'hidden';
    }

    function close(){
        if (!overlay) return;
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        // small delay to free image src to release memory
        setTimeout(()=>{ if(imgEl) imgEl.src = ''; if(captionEl) captionEl.style.display = 'none'; }, 200);
    }

    function changeScale(delta){
        scale = clamp(scale + delta, 0.2, 8);
        if (imgEl) imgEl.style.transform = `scale(${scale})`;
    }

    function onDocClick(e){
        const t = e.target;
        if (t && t.tagName && t.tagName.toLowerCase() === 'img'){
            // prevent opening small UI icons (social icons) by checking size
            try{
                const rect = t.getBoundingClientRect();
                if (rect.width < 48 || rect.height < 48) return; // skip small images
            }catch(_){ }
            e.preventDefault();
            open(t.currentSrc || t.src, t.alt || '');
        }
    }

    function onOverlayClick(e){
        if (e.target && (e.target.matches('[data-lb-close]') || e.target.classList.contains('lb-close-area'))){
            close();
        }
    }

    function onWheel(e){
        if (!overlay || !overlay.classList.contains('open')) return;
        // ctrl+wheel should zoom browser; respect ctrl
        if (e.ctrlKey) return;
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.12 : 0.12;
        changeScale(delta);
    }

    function onKey(e){
        if (!overlay || !overlay.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === '+' || e.key === '=') changeScale(0.2);
        if (e.key === '-' || e.key === '_') changeScale(-0.2);
        if (e.key === '0') { scale = 1; if (imgEl) imgEl.style.transform = 'scale(1)'; }
    }

    function onDblClick(){
        if (!imgEl) return;
        // toggle between 1 and 2
        scale = scale > 1 ? 1 : 2;
        imgEl.style.transform = `scale(${scale})`;
    }

    document.addEventListener('click', onDocClick);
    document.addEventListener('click', function(e){ if (overlay) onOverlayClick(e); });
    document.addEventListener('wheel', onWheel, { passive:false });
    document.addEventListener('keydown', onKey);
    document.addEventListener('dblclick', function(e){ if (overlay && overlay.classList.contains('open') && e.target.classList.contains('lb-img')) onDblClick(); });

    // delegate events on overlay controls
    document.addEventListener('click', function(e){
        if (!overlay) return;
        const z = e.target.closest('[data-lb-zoom]');
        if (z){
            const dir = z.getAttribute('data-lb-zoom');
            changeScale(dir === 'in' ? 0.2 : -0.2);
        }
    });

    // ensure overlay exists late if not yet used (to allow CSS to pre-load fonts if needed)
    if (document.readyState === 'complete' || document.readyState === 'interactive'){
        // no-op
    }

})();
